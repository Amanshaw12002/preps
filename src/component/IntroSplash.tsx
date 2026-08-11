import { useEffect, useState, type ReactElement } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IsometricHero from "./logoHook";

/**
 * First-visit intro: the full brand hero — cube, wordmark, tagline.
 *
 * THE COST IS REAL AND IT IS THE WHOLE DESIGN QUESTION HERE. A splash is the
 * one element on a site that can only ever take time away from a visitor, and
 * it is also what Speed Index measures against: a full-screen overlay means the
 * page reads as visually incomplete for its whole duration, however fast
 * everything underneath actually painted. This file previously carried an
 * eight-second version, which was cut to a 1.2s cube for exactly that reason.
 *
 * `HOLD` is the one number that decides it, and it is set to the length of the
 * animation rather than to a round figure: the cube assembles over ~1.1s, the
 * text block fades up at 0.8s, and the tagline types 19 characters at 90ms each
 * from 0.9s — finishing at ~2.6s. Cutting before that shows a half-typed line,
 * which reads as the page having stalled rather than as an intro.
 *
 * It does NOT delay the page. The overlay and the page render in the same
 * paint, so the hero image still loads and paints underneath on schedule; the
 * overlay is what the visitor sees, not what the browser is waiting on.
 */

const HOLD = 3000;

export default function IntroSplash(): ReactElement {
  // Read synchronously on first render so there is no flash of the site first.
  const [show, setShow] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    try {
      if (sessionStorage.getItem("bbp_intro_seen")) return false;
    } catch {
      // Private mode can throw on access alone. Fail closed — no splash.
      return false;
    }
    return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    if (!show) return;
    document.body.style.overflow = "hidden";

    const id = setTimeout(() => {
      try {
        sessionStorage.setItem("bbp_intro_seen", "1");
      } catch {
        /* it simply shows again next navigation */
      }
      setShow(false);
    }, HOLD);

    return () => clearTimeout(id);
  }, [show]);

  return (
    <AnimatePresence onExitComplete={() => (document.body.style.overflow = "")}>
      {show && (
        <motion.div
          key="intro"
          /* no `px-6`: the hero paints its own full-bleed gradient, and side
             padding would leave two strips of the overlay's own background
             down the edges */
          className="fixed inset-0 z-[9999] overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse 90% 70% at 50% 42%, #180305 0%, #0a0203 45%, #030102 100%)",
            willChange: "opacity",
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.55, ease: "easeInOut" } }}
        >
          <IsometricHero fullHeight />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
