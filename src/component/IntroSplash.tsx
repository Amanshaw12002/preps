import { useEffect, useRef, useState, type ReactElement } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IsometricCube from "./IsometricCube";
import PrepWordCycle from "./PrepWordCycle";

const LINE1 = "BlackBoxPreps";
const LINE2 = "Build for prep work.";

/* THE LINES ARE NOT TYPED, they wash in — but the two lines do it by different
   means, and the difference is forced rather than decorative.

   LINE 1 IS NOT SPLIT INTO CHARACTERS. It was, and the wordmark came out
   patchy: `background-clip: text` clips to the element it sits on, so thirteen
   letter-elements are thirteen independent copies of the ramp, each showing a
   different slice of it. Staggering their animation-delays makes those slices
   move, but they are still thirteen separate gradients — the word reads as
   per-letter colouring rather than as one sheen travelling across it. ONE
   continuous ramp needs ONE element carrying it. So line 1 stays a single span
   and takes its entrance from a soft-edged mask sweeping across that span,
   which paints the whole word left to right without touching how the gradient
   inside it is drawn.

   LINE 2 has no gradient, so it is free to be split, and it is — each
   character resolves out of a blur with its neighbour starting long before it
   has finished. The stagger is far shorter than the fade (0.055 against 0.9)
   precisely so they overlap; at a stagger longer than the fade you get the
   typewriter back, one settled letter at a time.

   All in seconds, because these feed framer-motion transitions and CSS
   `animation` shorthands directly; only `DISMISS` below is in ms. */
const L1_DELAY = 0.55;
const L1_REVEAL = 1.7;
const L2_STAGGER = 0.055;
const L2_FADE = 0.9;
/* How long line 2 starts BEFORE line 1 has finished. An overlap, not a beat —
   the tagline surfaces while the name is still resolving, so the two read as
   one continuous flow rather than as two separate events. */
const L2_OVERLAP = 0.4;

const L2_DELAY = L1_DELAY + L1_REVEAL - L2_OVERLAP;
/* ~3.8s — when the last character of the tagline has fully resolved, and so
   the moment the prep-word list is allowed to start. Derived, not typed in:
   change a number above and the handoff follows it. */
const L2_END = L2_DELAY + (LINE2.length - 1) * L2_STAGGER + L2_FADE;

/* The original figure, kept. The reveal finishes at ~3.8s, so the last ~4s is
   the finished frame held on screen. That hold is the whole Speed Index cost
   of the splash and it is the one number to change: nothing else in here
   depends on it. */
const DISMISS = 8000;

/* THE INTRO CYCLES THE WORDS FASTER THAN THE HERO DOES, and it has to.
   The reveal ends at ~3.8s, so the splash has ~4.2s of its 8s left — at the
   hero's 4s cadence that is exactly ONE word, which is a label, not a list.
   At 2s it is two turning into a third, which is the fewest that reads as work
   being worked through. The hero keeps 4s because it is locked to its cube's
   8s loop and has forever to fill; this has a countdown.

   The floor is ~1.6s, not a matter of taste: "Prepping shipments" is 18
   characters, so its entrance is 17 x 0.045 + 0.5 = 1.27s and its exit another
   0.3s. Below that a word starts leaving before it has finished arriving. */
const INTRO_CYCLE_MS = 2000;

type FlowLineProps = {
  text: string;
  /** seconds before the first character starts arriving */
  delay: number;
  /** seconds between one character starting and the next */
  stagger: number;
  /** seconds one character takes to go from blurred-out to solid */
  duration: number;
};

/**
 * A line of the splash revealed character by character.
 *
 * FOR THE TAGLINE ONLY. The wordmark above it cannot use this — splitting an
 * element that carries a `background-clip: text` gradient into one element per
 * letter breaks the gradient into one copy per letter. See the note on the
 * timing constants at the top of this file.
 *
 * GROUPED BY WORD, and that is a wrapping fix rather than a stylistic one. A
 * character has to be `inline-block` for `y` to move it at all, and a run of
 * bare inline-blocks gives the line-breaker an opportunity between every pair
 * of them — so "Build for prep work." at 0.28em tracking on a 320px screen
 * could break as "Buil / d for". Each word is therefore one inline-block of
 * its own: it is placed whole or moved to the next line whole, exactly as a
 * word normally is. The spaces are their own tokens, which is where the breaks
 * are allowed to happen.
 *
 * Because the words nest, the timing CANNOT come from `staggerChildren` — that
 * staggers a variant parent's direct children, which here are words, so a
 * word would arrive all at once. Every character carries its own delay off its
 * index across the whole line instead, which is also what keeps the two lines'
 * timings derivable as constants at the top of this file.
 *
 * The animated characters are `aria-hidden` with the whole string carried once
 * in an `sr-only` sibling — a screen reader should hear the sentence, not
 * twenty separate letters.
 */
function FlowLine({ text, delay, stagger, duration }: FlowLineProps): ReactElement {
  /* Split into words and the runs of whitespace between them, keeping both —
     the capture group in the pattern is what preserves the separators. Each
     token remembers where it starts in the line so its characters can be given
     absolute delays; the spaces are counted too, so the rhythm does not
     jump forward at every gap. */
  const tokens: Array<{ text: string; start: number }> = [];
  let cursor = 0;
  for (const token of text.split(/(\s+)/)) {
    if (!token) continue;
    tokens.push({ text: token, start: cursor });
    /* `Array.from`, not `.length` — the latter counts a surrogate pair twice
       and the delays would drift past it. */
    cursor += Array.from(token).length;
  }

  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden>
        {tokens.map((token) => (
          <span
            key={token.start}
            style={{ display: "inline-block", whiteSpace: "pre" }}
          >
            {Array.from(token.text).map((ch, i) => {
              const n = token.start + i;
              return (
                <motion.span
                  key={n}
                  initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    delay: delay + n * stagger,
                    duration,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  /* inline-block so y actually moves it, `pre` so a space
                     token keeps its width */
                  style={{ display: "inline-block", whiteSpace: "pre" }}
                >
                  {ch}
                </motion.span>
              );
            })}
          </span>
        ))}
      </span>
    </>
  );
}

/**
 * IntroSplash — a one-time entrance overlay. On first visit of a session the
 * user sees the glowing BlackBoxPreps cube, then the wordmark and its tagline
 * wash in out of a blur, then it fades away to reveal the site.
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
 * screenshot showed it working. It bought nothing either way: framer-motion
 * only reduces when it is explicitly asked to (`MotionConfig reducedMotion` /
 * `useReducedMotion`) and the shimmer is a bare CSS keyframe, so neither the
 * reveal nor the sheen honours the flag on its own. If this needs to respect
 * it, the honest version is a shorter `DISMISS`, not a component that decides
 * not to exist.
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
  /* The reveal itself is declarative — framer-motion owns every character's
     timing — so the only thing left for JS to keep track of is when it has
     finished, and that is one boolean rather than the old three-phase machine
     the typewriter needed to know which line it was on. */
  const [wordsActive, setWordsActive] = useState(false);
  const timers = useRef<Array<ReturnType<typeof setTimeout>>>([]);

  useEffect(() => {
    if (!show) return;
    document.body.style.overflow = "hidden";

    // hand off to the prep-word list once the tagline has fully resolved
    timers.current.push(setTimeout(() => setWordsActive(true), L2_END * 1000));

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
      timers.current.forEach(clearTimeout);
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
            /* ONE ELEMENT CARRIES THE WHOLE WORD, and it has to. background-
               clip:text clips to the element it is set on, so a word split
               into one element per letter gets one INDEPENDENT copy of this
               ramp per letter, and the sheen stops crossing the word — it
               becomes thirteen letters each coloured from its own gradient.
               Whatever animates the wordmark's entrance therefore has to work
               on top of this span (see .bbp-reveal) rather than by cutting it
               into pieces.
               (No backticks in here: this whole block is a JS template
               literal, and one would close it.) */
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

            /* THE WORDMARK'S ENTRANCE. A soft-edged mask three times the width
               of the box, slid from its right third to its left third: the
               window starts over the transparent end and finishes over the
               opaque one, so the word paints in from the left behind a ~30%-
               wide feather. The mask lives on the WRAPPER, not on .bbp-grad —
               mask-image and background-clip:text on one element is the
               combination engines disagree about, and here they never meet.
               The wrapper also takes the blur and the rise, so the word
               surfaces as it is painted rather than after it.
               Timings come from the constants at the top of the file, inline
               on the element; only the shape is here. */
            @keyframes bbpWipe {
              from { -webkit-mask-position: 100% 0; mask-position: 100% 0; }
              to   { -webkit-mask-position: 0% 0;   mask-position: 0% 0; }
            }
            .bbp-reveal {
              display: inline-block;
              -webkit-mask-image: linear-gradient(90deg, #000 0%, #000 35%, rgba(0,0,0,0) 65%);
              mask-image: linear-gradient(90deg, #000 0%, #000 35%, rgba(0,0,0,0) 65%);
              -webkit-mask-size: 300% 100%;
              mask-size: 300% 100%;
              -webkit-mask-repeat: no-repeat;
              mask-repeat: no-repeat;
              will-change: mask-position;
            }
          `}</style>

          {/* animated isometric cube logo */}
          <IsometricCube size={300} maxWidth="70vw" />

          {/* welcome line — ONE span, so the red gradient runs as a single
              sheen across the whole word; the entrance is a mask sweeping over
              it, plus the blur and rise on the same wrapper */}
          <h1 className="mt-8 min-h-[1.4em] text-center font-inter text-2xl font-semibold tracking-tight sm:text-4xl">
            <motion.span
              className="bbp-reveal"
              initial={{ opacity: 0, y: 12, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: L1_DELAY, duration: L1_REVEAL, ease: [0.22, 1, 0.36, 1] }}
              /* `both`, so the mask holds the word hidden through the delay and
                 leaves it fully painted afterwards */
              style={{
                animation: `bbpWipe ${L1_REVEAL}s cubic-bezier(0.22, 1, 0.36, 1) ${L1_DELAY}s both`,
              }}
            >
              <span className="bbp-grad">{LINE1}</span>
            </motion.span>
          </h1>

          {/* tagline — no gradient to keep intact, so this one CAN resolve
              letter by letter; already under way while the name above is still
              being painted in */}
          <p className="mt-4 min-h-[1.4em] text-center font-mono text-sm uppercase tracking-[0.28em] text-gray-400 sm:text-base">
            <FlowLine
              text={LINE2}
              delay={L2_DELAY}
              stagger={L2_STAGGER}
              duration={L2_FADE}
            />
          </p>

          {/* The prep-work list, the same component the page hero runs. It
              waits for the tagline to finish resolving — two lines surfacing
              at once is one wash too many, and the eye has nowhere to settle. */}
          <PrepWordCycle
            active={wordsActive}
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
