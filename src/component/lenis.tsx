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
/**
 * The live instance, so anything that needs to MOVE the page goes through it.
 *
 * Not a convenience. Lenis drives scrolling itself and animates towards its own
 * target every frame, so a plain `window.scrollTo` or `el.scrollIntoView()` is
 * either overridden on the next frame or fights it into a stutter. There is one
 * scroller on this page and this is the handle to it.
 */
let active: Lenis | null = null;

/**
 * Smooth-scroll an element into view. Returns false when the target is not in
 * the document YET, which is the normal case while a lazy route chunk is still
 * arriving — the caller decides whether to retry rather than this silently
 * doing nothing.
 */
export function scrollToId(id: string, immediate = false): boolean {
  const el = document.getElementById(id);
  if (!el) return false;
  /* Negative offset = stop short of the target, clearing the fixed navbar.
     Matches the `scroll-mt-24` on the anchor, which is what the native
     fallback below obeys. */
  if (active) {
    /* `resize()` FIRST, and this is the whole bug that made anchor links land
       short. Lenis caches the document's scroll limit and recomputes it only on
       a resize event. Every section of the home page is lazily loaded, so the
       document grows tall AFTER first paint without the window ever resizing —
       and Lenis then clamps any target beyond its stale limit, silently.

       Traced from the retry loop's own log: the final re-target asked for 6784
       and the page stayed at 5930, which is exactly `6830 - 900` — the maximum
       scroll of the document as it was on the very first frame. It presents as
       the scroll simply being ignored, and every plausible explanation (the
       target still moving, the tween restarting, the loop bailing out early)
       is wrong. */
    active.resize();
    active.scrollTo(el, { duration: 1.2, offset: -96, immediate });
  }
  /* No Lenis — its effect has not run, or it was destroyed. The native path is
     correct here rather than a degraded fallback, because nothing is competing
     for the scroll position. */
  else el.scrollIntoView({ behavior: immediate ? "auto" : "smooth", block: "start" });
  return true;
}

/* Events that mean the visitor has taken over. `settleScrollTo` keeps
   correcting for several seconds, and continuing to drag the page around after
   someone has started scrolling it themselves is the worst thing it could do. */
const YIELD_EVENTS = ["wheel", "touchstart", "keydown", "pointerdown"] as const;

/* ~6s at 60fps. It has to outlast a third-party iframe deciding its own height,
   which is the slowest thing on this page by a wide margin. */
const MAX_FRAMES = 360;

/**
 * Scroll to an anchor and KEEP CORRECTING until the page stops moving under it.
 *
 * A single scroll is not enough here and the numbers say why. Every section of
 * the home page is lazily loaded and the calendar is a third-party iframe that
 * sizes itself late, so the anchor's absolute offset changes repeatedly after
 * the scroll has been issued. Measured with a one-shot scroll: arriving from
 * `/pricing` settled 4335px short of the FAQ, and clicking from the footer on
 * the home page overshot it by 137px. A link that moves the page confidently to
 * the wrong place is worse than one that does nothing.
 *
 * Two things that look like details and are not:
 *
 * - It re-issues ONLY when the offset changes. Calling `scrollTo` every frame
 *   restarts Lenis's easing each time, so the animation resets forever and
 *   never arrives.
 * - It runs the whole budget rather than stopping once the anchor holds still.
 *   That was the first version and it failed identically to having no loop:
 *   sections load with gaps between them, so the anchor is motionless for far
 *   longer than any sane "settled" threshold while more content is still queued
 *   above it. Stillness means "between chunks", not "finished".
 *
 * `immediate` JUMPS rather than eases, and the cross-route caller must use it.
 * Two reasons, and the first is the one that makes this work at all: each
 * re-target restarts Lenis's 1.2s ease from wherever the page currently is, so
 * while content keeps arriving the tween is perpetually restarted and never
 * finishes — measured settling 500-950px short with a six-second budget and a
 * 7.5s wait. A jump has nothing to restart, so every correction lands. The
 * second is that easing 6000px on a cold load is not what an anchor link does
 * anyway; it is disorienting, and nobody watches a page scroll past six
 * screens of content they have not seen.
 *
 * The same-page caller keeps the ease: the content is already laid out, so
 * there is exactly one scroll and it is the nice one.
 *
 * Returns a cancel function.
 */
export function settleScrollTo(id: string, immediate = false): () => void {
  let frames = 0;
  let raf = 0;
  let lastTop = -1;
  let stopped = false;

  const stop = () => {
    stopped = true;
    cancelAnimationFrame(raf);
    YIELD_EVENTS.forEach((e) => window.removeEventListener(e, stop));
  };

  const tick = () => {
    if (stopped) return;
    const el = document.getElementById(id);
    if (el) {
      const top = Math.round(el.getBoundingClientRect().top + window.scrollY);
      if (top !== lastTop) {
        lastTop = top;
        scrollToId(id, immediate);
      }
    }
    if (frames++ < MAX_FRAMES) raf = requestAnimationFrame(tick);
    else stop();
  };
  raf = requestAnimationFrame(tick);

  /* `passive` so this never delays the scroll it is listening for. */
  YIELD_EVENTS.forEach((e) => window.addEventListener(e, stop, { passive: true }));
  return stop;
}

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

    active = lenis;

    let id = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      id = requestAnimationFrame(raf);
    };
    id = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
      /* Only clear the pointer if this instance still owns it. Under
         StrictMode the second mount runs BEFORE the first cleanup, so an
         unconditional `active = null` would null out the live instance and
         leave every scroll on the native fallback for the rest of the
         session — working, but not smooth, and impossible to spot by reading
         this file alone. */
      if (active === lenis) active = null;
    };
  }, []);
}
