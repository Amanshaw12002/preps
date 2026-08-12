import { useEffect, useRef, useState, type ReactElement } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IsometricCube from "./IsometricCube";
import PrepWordCycle from "./PrepWordCycle";

const LINE1 = "BlackBoxPreps";
const LINE2 = "Build for prep work.";

/* The original figure, kept. Its own animation finishes at ~3.9s — 700ms before
   the first character, 13 at 85ms, a 500ms beat, then 20 at 80ms — so the last
   ~4s is the finished frame held on screen. That hold is the whole Speed Index
   cost of the splash and it is the one number to change: nothing else in here
   depends on it. */
const DISMISS = 8000;

/* THE INTRO CYCLES THE WORDS FASTER THAN THE HERO DOES, and it has to.
   The typing ends at ~3.9s, so the splash has ~4.1s of its 8s left — at the
   hero's 4s cadence that is exactly ONE word, which is a label, not a list.
   At 2s it is three, which is the fewest that reads as work being worked
   through. The hero keeps 4s because it is locked to its cube's 8s loop and
   has forever to fill; this has a countdown.

   The floor is ~1.6s, not a matter of taste: "Prepping shipments" is 18
   characters, so its entrance is 17 x 0.045 + 0.5 = 1.27s and its exit another
   0.3s. Below that a word starts leaving before it has finished arriving. */
const INTRO_CYCLE_MS = 2000;

/**
 * IntroSplash — a one-time entrance overlay. On first visit of a session the
 * user sees the glowing BlackBoxPreps cube, a gradient-flowing typed welcome
 * line and a typed tagline, then it fades away to reveal the site.
 *
 * THIS IS THE ORIGINAL COMPOSITION, restored from 088b13c. It was briefly
 * replaced by `<IsometricHero fullHeight />` — the page's own sign-off band
 * stretched to fill the viewport — which is a different thing wearing the same
 * slot: the hero carries the rotating "receiving… labeling…" list and its own
 * tagline, so the splash stopped being a purpose-built entrance and became the
 * footer block at 100vh.
 *
 * NO `prefers-reduced-motion` GATE, deliberately. One was added here and it
 * removed the splash outright on any machine with Windows' Accessibility →
 * "Animation effects" switched off — which is a default on plenty of them, so
 * the intro was invisible to the person who asked for it while every headless
 * screenshot showed it working. It bought nothing either way: the typewriter is
 * a `setInterval` and the shimmer is a CSS keyframe, so neither honours the
 * flag. If this needs to respect it, the honest version is a shorter `DISMISS`,
 * not a component that decides not to exist.
 */
/**
 * Whether the splash is going to run. Exported so `App` can hold the page's
 * mount animations back for exactly as long, WITHOUT a second copy of this
 * decision — two places reading the same flag is how the page ends up held for
 * an intro that is not playing.
 *
 * Safari private mode throws on ACCESS, not just on write, and this is called
 * from a `useState` initialiser — an uncaught throw there fails the render and
 * takes the whole site white. Fail closed: no splash.
 */
export function introPending(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return !sessionStorage.getItem("bbp_intro_seen");
  } catch {
    return false;
  }
}

type Props = {
  /** Fired when the overlay begins its fade — see `App.tsx` for why it is the
      start of the fade and not the end of it. */
  onDone?: () => void;
};

export default function IntroSplash({ onDone }: Props): ReactElement {
  // shown synchronously on first paint so there's no flash of the site first
  const [show, setShow] = useState<boolean>(introPending);
  const [t1, setT1] = useState("");
  const [t2, setT2] = useState("");
  const [phase, setPhase] = useState<0 | 1 | 2>(0); // 0: typing line1, 1: typing line2, 2: done
  const timers = useRef<Array<ReturnType<typeof setTimeout> | ReturnType<typeof setInterval>>>([]);

  useEffect(() => {
    if (!show) return;
    document.body.style.overflow = "hidden";

    // typewriter — line 1, then line 2
    let i = 0;
    let j = 0;
    const typeL2 = () => {
      setPhase(1);
      const id2 = setInterval(() => {
        j += 1;
        setT2(LINE2.slice(0, j));
        if (j >= LINE2.length) {
          clearInterval(id2);
          setPhase(2);
        }
      }, 80);
      timers.current.push(id2);
    };
    const typeL1 = () => {
      const id1 = setInterval(() => {
        i += 1;
        setT1(LINE1.slice(0, i));
        if (i >= LINE1.length) {
          clearInterval(id1);
          timers.current.push(setTimeout(typeL2, 500));
        }
      }, 85);
      timers.current.push(id1);
    };
    timers.current.push(setTimeout(typeL1, 700));

    // dismiss after 8s
    const dismiss = setTimeout(() => {
      try {
        sessionStorage.setItem("bbp_intro_seen", "1");
      } catch {
        /* it simply shows again on the next navigation */
      }
      setShow(false);
      onDone?.();
    }, DISMISS);
    timers.current.push(dismiss);

    return () => {
      timers.current.forEach((t) => {
        clearTimeout(t as ReturnType<typeof setTimeout>);
        clearInterval(t as ReturnType<typeof setInterval>);
      });
      timers.current = [];
    };
    /* `onDone` is deliberately not a dependency. It is called from a timeout
       this effect owns, and re-running on a new callback identity would clear
       the dismiss timer and restart the 8s — an inline arrow at the call site
       would then leave the splash on screen forever. */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  return (
    <AnimatePresence onExitComplete={() => (document.body.style.overflow = "")}>
      {show && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center px-6"
          style={{
            background:
              "radial-gradient(ellipse 90% 70% at 50% 42%, #180305 0%, #0a0203 45%, #030102 100%)",
            willChange: "opacity",
          }}
          initial={{ opacity: 1 }}
          /* 0.35s, down from 0.8s, and the reason is the page underneath rather
             than the fade itself. `App` remounts the site at the instant this
             fade STARTS, so the remount happens while the overlay is still
             opaque and is invisible — but the page's entrance animations are
             running from that same instant, and the hero's is only ~1.3s long.
             At 0.8s the overlay was still clearing with the `<h1>` already at
             0.99 opacity, so the entrance was performed behind the fade exactly
             as it had been performed behind the splash. A shorter fade hands
             the reveal over with most of the motion still to come. */
          exit={{ opacity: 0, transition: { duration: 0.35, ease: "easeInOut" } }}
        >
          <style>{`
            @keyframes bbpGradFlow {
              0% { background-position: 0% 50%; }
              100% { background-position: 200% 50%; }
            }
            /* NO BLACK IN THE RAMP. It ran #1a1a1a -> red -> #1a1a1a, so the
               dark end swept through the letters every 3s and the company name
               went almost invisible against a near-black backdrop twice a
               cycle — a logo is the one thing on a page that should never be
               unreadable, which is the same reason the digit scramble was cut
               from the page hero. The sheen is kept and now travels between a
               deep red and a bright one, so it reads as light moving across
               the letters instead of a shadow passing over them. */
            .bbp-grad {
              background-image: linear-gradient(90deg, #8e1418 0%, #c31d26 22%, #ff2a38 42%, #ff8087 50%, #ff2a38 58%, #c31d26 78%, #8e1418 100%);
              background-size: 200% auto;
              -webkit-background-clip: text;
              background-clip: text;
              color: transparent;
              -webkit-text-fill-color: transparent;
              animation: bbpGradFlow 3s linear infinite;
              will-change: background-position;
            }
            @keyframes bbpCaret { 0%, 55% { opacity: 1; } 56%, 100% { opacity: 0; } }
            .bbp-caret {
              display: inline-block;
              width: 0.5em;
              height: 1em;
              margin-left: 4px;
              vertical-align: text-bottom;
              background: #ff3b45;
              animation: bbpCaret 1s steps(1) infinite;
            }
          `}</style>

          {/* animated isometric cube logo */}
          <IsometricCube size={300} maxWidth="70vw" />

          {/* welcome line — typed with a flowing black→red gradient */}
          <h1 className="mt-8 min-h-[1.4em] text-center font-inter text-2xl font-semibold tracking-tight sm:text-4xl">
            <span className="bbp-grad">{t1}</span>
            {phase === 0 && <span className="bbp-caret" />}
          </h1>

          {/* tagline — typed */}
          <p className="mt-4 min-h-[1.4em] text-center font-mono text-sm uppercase tracking-[0.28em] text-gray-400 sm:text-base">
            {t2}
            {phase >= 1 && <span className="bbp-caret" style={{ height: "0.9em" }} />}
          </p>

          {/* The prep-work list, the same component the page hero runs. It
              starts only at `phase 2` — with the caret still blinking on the
              line above, a second line arriving character by character is two
              typewriters going at once. */}
          <PrepWordCycle
            active={phase === 2}
            cycleMs={INTRO_CYCLE_MS}
            fontSize="clamp(12px, 1.6vw, 14px)"
            marginTop="18px"
          />

          {/* loading shimmer bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 h-[2px] w-28 overflow-hidden rounded-full bg-white/10"
          >
            <motion.div
              className="h-full w-full bg-gradient-to-r from-transparent via-red-500 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
              style={{ willChange: "transform" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
