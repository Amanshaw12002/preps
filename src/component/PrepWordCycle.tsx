import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { useEffect, useState, type ReactElement } from 'react';

/**
 * The rotating "receiving… inspecting… labeling…" line, with its loading dots.
 *
 * ONE DEFINITION, TWO CALLERS — the page hero (`logoHook.tsx`) and the intro
 * splash (`IntroSplash.tsx`). It lived inline in the hero, and the cheap way to
 * put it in the splash too was to copy it. That copy is the whole reason this
 * file exists: the list below is the site's own service vocabulary, and a
 * second copy drifts into naming something the company does not do, in a place
 * nobody thinks to check because the first copy is correct.
 */

/* Every one is lifted from the site's own copy — `grep` over src for the
   service vocabulary — rather than invented, because a wordmark listing a
   service the company does not offer is the same credibility problem as an
   unverifiable statistic, just in motion.

   ALL CONTINUOUS VERBS, no nouns. The line reads as work happening right now,
   and "inspection" next to "polybagging" reads as a price list instead. Where
   the site's word is a noun the verb form is used: inspection -> inspecting,
   storage -> storing, removals -> removing, shipment prep -> prepping.

   CASE IS WRITTEN INTO THE STRINGS, and `text-transform` is off. `capitalize`
   would have been the one-line way to get sentence case and it lowercases the
   rest of every word — "FNSKU labeling" comes out as "Fnsku Labeling", which
   is a real Amazon term rendered as a typo. The list is the only place the
   casing is decided. */
export const PREP_WORDS = [
  'Receiving',
  'Inspecting',
  'Labeling',
  'FNSKU labeling',
  'Polybagging',
  'Bundling',
  'Quality checking',
  'Prepping shipments',
  'Storing',
  'Removing',
];

/* The hero's cube, its tiles, the edge trace and the scan sweep all run on one
   8s loop. The word is HALF of that rather than a number picked by feel, so it
   lands on the same beat as the hero above it instead of drifting against it.
   It was a third, and against the eight-second cube that still read as hurried. */
export const HERO_CYCLE_MS = 4000;

/* THE DOTS ARE A LOADING INDICATOR, not punctuation, so they cycle . / .. / ...
   on their own clock instead of arriving with the word and sitting still. They
   are deliberately NOT part of the staggered string: a character in that list
   animates once on entry and is then finished, which is the opposite of what a
   loading indicator is for. */
const DOT_MS = 420;

/* The word has to have finished arriving before it can look like it is working
   on something. At the hero's 4s that lead-in is 900ms, so it is expressed as
   the RATIO rather than as a constant — a caller running a faster cycle would
   otherwise spend most of each word's life waiting for the first dot, and the
   line would stop reading as loading exactly where it is most needed. */
const DOT_LEAD_RATIO = 900 / HERO_CYCLE_MS;

/* Same shape as the navbar wordmark (`textVariants` in Navbar.tsx): each
   character rises from y:20 with `easeOut` over 0.5s, one after another. That
   one is a mount-only animation so it needs no exit; this one rotates, so it
   gains one — and the exit goes UP, continuing the direction the letters were
   already travelling. Leaving downward is what made the previous version read
   as falling.

   The stagger is 0.045s rather than the navbar's 0.1s because these strings run
   to 18 characters against "BlackBoxPreps"'s 13, and at 0.1s the last letter of
   "Prepping shipments" would not have arrived before the word was due to
   leave. */
const wordVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.045 } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.3, ease: 'easeIn' } },
};

const charVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

type Props = {
  /** Start cycling. `IntroSplash` washes a tagline in first and hands off to
      this, so the row exists (holding its height) before the first word
      arrives; the page hero (`logoHook.tsx`) has no tagline of its own any
      more and just passes `true` straight away. */
  active: boolean;
  /** Frames the whole rhythm — the dot lead-in is derived from it. */
  cycleMs?: number;
  fontSize?: string;
  color?: string;
  /** Fixed, so nothing below moves as the words swap. */
  height?: string;
  marginTop?: string;
};

export default function PrepWordCycle({
  active,
  cycleMs = HERO_CYCLE_MS,
  fontSize = 'clamp(11px, 1.4vw, 13px)',
  color = '#ff6b73',
  height = '1.4em',
  marginTop = '10px',
}: Props): ReactElement {
  /* Driven off an index rather than off the word, so the AnimatePresence key
     advances even if the list ever repeats an entry — keying on the string
     would make two identical neighbours one element that never re-enters, and
     the animation would silently stop for that beat. */
  const [word, setWord] = useState(0);
  const [dots, setDots] = useState(0);

  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => setWord((n) => n + 1), cycleMs);
    return () => clearInterval(id);
  }, [active, cycleMs]);

  /* Keyed on `word`, so every new term starts from none and counts up again — a
     cycle left running across the swap would hand the incoming word a
     half-finished ".." and the two would never line up. */
  useEffect(() => {
    if (!active) return;
    setDots(0);
    let cycle: ReturnType<typeof setInterval>;
    const begin = setTimeout(() => {
      setDots(1);
      cycle = setInterval(() => setDots((d) => (d % 3) + 1), DOT_MS);
    }, cycleMs * DOT_LEAD_RATIO);
    return () => {
      clearTimeout(begin);
      clearInterval(cycle);
    };
  }, [word, active, cycleMs]);

  /* On its OWN line, not appended to the tagline: the tagline is centred, so a
     word growing from "Storing" to "Quality checking" beside it would shove the
     whole line sideways on every change. Alone it only re-centres itself, which
     is what the effect looks like everywhere it is done well.

     `mode="wait"` means one word is fully gone before the next arrives —
     overlapping them cross-fades two strings on top of each other and reads as
     a smear rather than a change. */
  return (
    <div
      aria-hidden
      style={{
        position: 'relative',
        zIndex: 1,
        height,
        marginTop,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <AnimatePresence mode="wait">
        {active && (
          <motion.span
            key={word}
            variants={wordVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              display: 'inline-flex',
              fontFamily: '"JetBrains Mono", monospace',
              fontSize,
              /* 0.22em was set for all-caps; at sentence case that wide a track
                 pulls the letters apart into separate marks */
              letterSpacing: '0.12em',
              color,
            }}
          >
            {/* `Array.from`, not `split('')` — the latter breaks a surrogate
                pair into two lone halves that then animate apart. Nothing here
                needs it today; the next word added might. */}
            {Array.from(PREP_WORDS[word % PREP_WORDS.length]).map((ch, i) => (
              <motion.span
                key={i}
                variants={charVariants}
                /* inline-block so y actually moves it, `pre` so the space in
                   "Quality checking" survives as its own unit */
                style={{ display: 'inline-block', whiteSpace: 'pre' }}
              >
                {ch}
              </motion.span>
            ))}
            {/* A PLAIN span, not a motion one: any motion child inside a variant
                parent inherits `hidden`/`visible` and would be swept into the
                entrance stagger, which is exactly what the dots must not do —
                they have to keep moving after the word has settled.

                Fixed width, left-aligned. Letting it size to its content would
                nudge the whole centred line sideways three times a second,
                which is far more distracting than the dots. */}
            <span
              style={{
                display: 'inline-block',
                width: '1.5em',
                textAlign: 'left',
                whiteSpace: 'pre',
              }}
            >
              {'.'.repeat(dots)}
            </span>
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}
