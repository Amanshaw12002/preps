import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

/**
 * Smooth scrolling.
 *
 * THE RAF LOOP WAS NEVER CANCELLED. `lenis.destroy()` ran on unmount but the
 * recursive `requestAnimationFrame(raf)` kept going, calling `.raf()` on a
 * destroyed instance every frame for the life of the tab. Under StrictMode —
 * which this app runs in — the effect mounts, unmounts and remounts, so it
 * started TWO permanent loops on first load and the first one outlived its
 * Lenis. That is a frame of wasted work per frame, forever, plus whatever the
 * dead instance throws.
 *
 * Holding the id and cancelling it is the whole fix.
 */
export function useLenis() {
  useEffect(() => {
    // NOTE: no prefers-reduced-motion gate. One was added here and it turned
    // smooth scrolling off entirely for anyone with that OS setting enabled,
    // which read as the feature having been deleted. Smooth scroll is wanted
    // unconditionally; if it ever needs to respect that setting, do it by
    // shortening `duration` rather than by not running at all.
    const lenis = new Lenis({
      duration: 1.2,
      lerp: 0.1,
      orientation: "vertical",
      gestureOrientation: "vertical",
      // Touch scrolling is already smooth and compositor-driven; intercepting
      // it is what makes a smoothed page feel heavy on a phone.
      syncTouch: false,
      touchMultiplier: 1.5,
      smoothWheel: true,
    });

    let id = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      id = requestAnimationFrame(raf);
    };
    id = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
    };
  }, []);
}
