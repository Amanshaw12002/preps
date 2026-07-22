import { useEffect, useRef, useState, type RefObject } from "react";

/* Reads the background actually sitting behind a fixed overlay (the navbar) and
   reports whether it is light or dark, so the bar can flip its text colour as
   the page scrolls past white sections. Works by hit-testing the page at a few
   points just under the bar — no need to tag every section by hand. */

type Tone = "light" | "dark";

/* sRGB relative luminance, 0 (black) → 1 (white) */
function luminance(r: number, g: number, b: number) {
  const f = (c: number) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}

function parseRgb(color: string) {
  const m = color.match(/rgba?\(([^)]+)\)/);
  if (!m) return null;
  const parts = m[1].split(",").map((n) => parseFloat(n.trim()));
  const [r, g, b] = parts;
  const a = parts.length > 3 ? parts[3] : 1;
  return { r, g, b, a };
}

/* mean luminance of a gradient's colour stops — a gradient paints over whatever is
   below it, so it decides the tone even though backgroundColor stays transparent */
function gradientLuminance(image: string) {
  if (!image || image === "none" || !image.includes("gradient")) return null;
  const stops = image.match(/rgba?\([^)]+\)/g);
  if (!stops || !stops.length) return null;
  let sum = 0;
  let n = 0;
  for (const stop of stops) {
    const c = parseRgb(stop);
    if (!c || c.a < 0.6) continue;
    sum += luminance(c.r, c.g, c.b);
    n++;
  }
  return n ? sum / n : null;
}

/* walk the stack under one point and return the first tone we can trust */
function toneAtPoint(x: number, y: number, exclude: Element | null): Tone | null {
  const stack = document.elementsFromPoint(x, y);
  for (const el of stack) {
    // skip the overlay itself and anything inside it
    if (exclude && (el === exclude || exclude.contains(el))) continue;
    // media has no background colour to read — assume it is busy/dark artwork
    const tag = el.tagName;
    if (tag === "IMG" || tag === "VIDEO" || tag === "CANVAS") return "dark";

    const style = getComputedStyle(el);
    const bg = parseRgb(style.backgroundColor);
    // translucent tints (bg-white/5 and friends) let the layer below show through
    if (bg && bg.a >= 0.6) return luminance(bg.r, bg.g, bg.b) > 0.6 ? "light" : "dark";

    // no solid fill, but a gradient still hides everything under it
    const grad = gradientLuminance(style.backgroundImage);
    if (grad !== null) return grad > 0.6 ? "light" : "dark";
  }
  return null;
}

export default function useSurfaceTone(
  overlayRef: RefObject<HTMLElement | null>,
  probeY = 76,
): Tone {
  const [tone, setTone] = useState<Tone>("dark");
  const frame = useRef(0);

  useEffect(() => {
    const measure = () => {
      frame.current = 0;
      const overlay = overlayRef.current;
      // sample the middle of the overlay itself — sampling below it reads the next
      // section down, which is not what shows through the glass
      const rect = overlay?.getBoundingClientRect();
      const y = rect && rect.height ? Math.round(rect.top + rect.height / 2) : probeY;
      const left = rect && rect.width ? rect.left : 0;
      const width = rect && rect.width ? rect.width : window.innerWidth;
      // a grid across the whole footprint: the bar often straddles two surfaces
      // (a white strip above a dark image), so one row of probes flips at the seam
      const rows =
        rect && rect.height
          ? [0.25, 0.5, 0.75].map((f) => Math.round(rect.top + rect.height * f))
          : [y];
      const votes: Tone[] = [];
      for (const py of rows) {
        for (const f of [0.2, 0.5, 0.8]) {
          const t = toneAtPoint(Math.round(left + width * f), py, overlay);
          if (t) votes.push(t);
        }
      }
      if (!votes.length) return;
      const light = votes.filter((t) => t === "light").length;
      setTone(light > votes.length / 2 ? "light" : "dark");
    };

    const onScroll = () => {
      if (frame.current) return;
      frame.current = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [overlayRef, probeY]);

  return tone;
}
