import { motion } from 'framer-motion';
import { type ReactElement } from 'react';
import PrepWordCycle from './PrepWordCycle';
import IsometricCube from './IsometricCube';

/* Falling light streaks — left position, streak height, fall duration, start
   delay, red vs white. Durations are the original set ×1.8 — slower falls,
   same relative stagger between streaks so they still don't march in sync. */
const beams = [
  { left: '6%', height: 140, duration: 9.9, delay: 0.0, red: true },
  { left: '16%', height: 90, duration: 12.6, delay: 2.1, red: false },
  { left: '27%', height: 170, duration: 8.3, delay: 1.2, red: true },
  { left: '41%', height: 110, duration: 11.5, delay: 3.4, red: false },
  { left: '58%', height: 150, duration: 9.0, delay: 0.8, red: true },
  { left: '71%', height: 100, duration: 12.2, delay: 2.7, red: false },
  { left: '84%', height: 160, duration: 8.8, delay: 1.7, red: true },
  { left: '94%', height: 120, duration: 11.0, delay: 3.9, red: false },
];

/* The rotating word line moved to `PrepWordCycle.tsx` when the intro splash
   needed the same thing. The word list, the 4s cadence, the dot clock and the
   per-character variants all went with it — see that file for why each is
   what it is. */

type HeroProps = {
  /** fill the viewport — used when this runs as the intro splash rather than
      as the sign-off band at the foot of a page */
  fullHeight?: boolean;
  /** Skip this block's own background gradient and let the caller's show
      through instead. `App.tsx` sets this false to nest the sign-off inside
      `Footer`, which owns one continuous background for the whole element —
      with both painted, this wrapper's rectangular bounds printed as a
      visibly separate block the instant the gradient's ellipse faded out
      short of the corners, against the footer's flat tone around it.
      Also hands the cube its OWN glow (`glow={!ownBackground}` below): that
      glow was off because this wrapper's background was doing the job: with
      the wrapper's background gone, something still has to. */
  ownBackground?: boolean;
};

export default function IsometricHero({ fullHeight = false, ownBackground = true }: HeroProps): ReactElement {
  /* The cube's geometry left with the cube — see `IsometricCube.tsx`. This
     file kept its own copy of the point maths, the tile builder and the face
     paths purely to draw a shape another component already drew. */

  return (
    <>
      <style>{`
        .hero-wrapper { box-sizing: border-box; margin: 0; }
        .hero-wrapper a { color: #ff3b45; text-decoration: none; }
        .hero-wrapper a:hover { color: #ff6b73; }
        @keyframes heroGlow {
          0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.5; transform: translate(-50%, -50%) scale(1.06); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

      `}</style>

      <div
            

        className="hero-wrapper"
        style={{
          position: 'relative',
          /* The gradient is sized to THIS box, and the splash paints the same
             one behind it. At 50vh inside a full-screen overlay the two
             ellipses are different sizes and meet in a visible band across the
             middle, so the intro has to own the whole viewport. */
          minHeight: fullHeight ? '100vh' : '50vh',
          width: '100%',
          overflow: 'hidden',
          background: ownBackground
            ? 'radial-gradient(ellipse 90% 70% at 50% 42%, #180305 0%, #0a0203 45%, #030102 100%)'
            : undefined,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          /* Space between the cube and the wordmark block below it. Both are
             in-flow flex children (the beams and the glow circle above are
             `position: absolute`, so `gap` never touched them) — with none
             set they sat flush against each other, worse once the cube's own
             size came down and stopped filling as much of the block itself. */
          gap: '28px',
          fontFamily: '"Space Grotesk", system-ui, sans-serif',
          padding: '42px 24px',
        }}
      >
        {/* light pouring — falling light streaks */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
          {beams.map((beam, i) => (
            <motion.span
              key={i}
              style={{
                position: 'absolute',
                width: '1px',
                left: beam.left,
                top: -beam.height,
                height: beam.height,
                background: beam.red
                  ? 'linear-gradient(to bottom, transparent, rgba(239,68,68,0.9), rgba(239,68,68,0.15))'
                  : 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.6), rgba(255,255,255,0.1))',
                boxShadow: beam.red
                  ? '0 0 12px rgba(239,68,68,0.5)'
                  : '0 0 8px rgba(255,255,255,0.25)',
                willChange: 'transform',
              }}
              animate={{ y: ['0vh', '120vh'] }}
              transition={{
                duration: beam.duration,
                delay: beam.delay,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </div>

        <div
          style={{
            position: 'absolute',
            top: '42%',
            left: '50%',
            width: '520px',
            height: '520px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(220,30,40,0.55) 0%, rgba(150,15,25,0.25) 35%, transparent 68%)',
            filter: 'blur(28px)',
            animation: 'heroGlow 5s ease-in-out infinite',
            pointerEvents: 'none',
          }}
        ></div>

        {/* <ElectricBorder
          color="#ff2a38"
          thickness={1}
          radius={36}
          speed={1}
          chaos={1.1}
          padding={22}
          style={{ marginBottom: '40px' }}
        > */}
        {/* THE CUBE IS NOW ONE COMPONENT. This file used to carry a second,
            equivalent copy of it — same 500x500 viewBox, same face points,
            same inset(pts, 11) — differing only in class prefixes (cube-
            here, ic- there) and in using bare SVG ids where the component
            scopes its own with useId. Two copies of one shape is how the
            intro and the page footer end up disagreeing about the brand mark,
            with whichever was tuned last looking correct.

            glow tracks `!ownBackground`: normally the hero positions its own
            red glow above, at 42% rather than centred on the cube, and
            letting the component draw one too stacks two and reads as a
            single over-bright one — so it stays off. But `ownBackground`
            false means that positioned glow isn't being drawn either (its
            wrapper's whole background is suppressed, see the prop's comment
            above), and an unlit cube on the footer's flat background is worse
            than a centred glow being not quite where the old one sat. */}
        <IsometricCube size={320} maxWidth="60vw" glow={!ownBackground} />
        {/* </ElectricBorder> */}

        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', animation: 'fadeUp 1s ease-out 0.8s both' }}>
          {/* The wordmark ("BLACKBOXPREPS") and the typed tagline ("Build for
              prep work") that used to sit above the rotating word are gone —
              this row is now just that one line. `PrepWordCycle`'s `active`
              prop no longer waits on a typewriter finishing (there isn't one
              here any more, though `IntroSplash` still has its own — see that
              prop's comment in `PrepWordCycle.tsx`): it starts as soon as
              this block's own fade-in does. */}
          <PrepWordCycle active />
        </div>

        {/* The two CTAs and the "Hand's off your prep work." pair used to sit
            here. Removed: this block renders from App.tsx on EVERY page, so
            "Start Sending Inventory" and "Check Pricing" appeared a second time
            below the page's own CTAs, and on /quote and /pricing they pointed
            at the page you were already on. The wordmark stays; it is the
            sign-off, not a call to action. */}
      </div>
    </>
  );
}