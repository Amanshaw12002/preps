import { motion } from 'framer-motion';
import { useState, useEffect, type ReactElement } from 'react';
import PrepWordCycle from './PrepWordCycle';
import IsometricCube from './IsometricCube';

/* Falling light streaks — left position, streak height, fall duration, start delay, red vs white */
const beams = [
  { left: '6%', height: 140, duration: 5.5, delay: 0.0, red: true },
  { left: '16%', height: 90, duration: 7.0, delay: 2.1, red: false },
  { left: '27%', height: 170, duration: 4.6, delay: 1.2, red: true },
  { left: '41%', height: 110, duration: 6.4, delay: 3.4, red: false },
  { left: '58%', height: 150, duration: 5.0, delay: 0.8, red: true },
  { left: '71%', height: 100, duration: 6.8, delay: 2.7, red: false },
  { left: '84%', height: 160, duration: 4.9, delay: 1.7, red: true },
  { left: '94%', height: 120, duration: 6.1, delay: 3.9, red: false },
];

const TAGLINE = 'Build for prep work';

/* The rotating word line moved to `PrepWordCycle.tsx` when the intro splash
   needed the same thing. The word list, the 4s cadence, the dot clock and the
   per-character variants all went with it — see that file for why each is
   what it is. */

type HeroProps = {
  /** fill the viewport — used when this runs as the intro splash rather than
      as the sign-off band at the foot of a page */
  fullHeight?: boolean;
};

export default function IsometricHero({ fullHeight = false }: HeroProps): ReactElement {
  /* a constant now, not state — nothing rewrites the wordmark any more */
  const text = { b1: 'BLACKBOX', b2: 'PREPS' };
  const [typed, setTyped] = useState<string>('');
  /* false = the tagline is still being typed; the rotation has not started */
  const [rotating, setRotating] = useState(false);

  /* Typewriter for the tagline, ONCE, then it hands off to the rotating word
     below. It used to retype itself every 6 seconds; with a word cycling
     underneath, a line that also keeps rewriting itself is two things moving
     for no reason, and the eye cannot settle on either. */
  useEffect(() => {
    let i = 0;
    let typingId: ReturnType<typeof setInterval>;

    const kickoff = setTimeout(() => {
      typingId = setInterval(() => {
        i += 1;
        setTyped(TAGLINE.slice(0, i));
        if (i >= TAGLINE.length) {
          clearInterval(typingId);
          setRotating(true);
        }
      }, 90);
    }, 900);

    return () => {
      clearTimeout(kickoff);
      clearInterval(typingId);
    };
  }, []);

  /* The digit scramble on BLACKBOXPREPS is gone. It rewrote the wordmark into
     random digits every 8 seconds, so the company's name spent part of every
     cycle reading as "31745820 62479" — and the shine sweep, the cursor and now
     the rotating word already give this block its motion. A logo is the one
     thing on a page that should never be illegible. */

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
        @keyframes cursorBlink { 0%, 55% { opacity: 1; } 56%, 100% { opacity: 0; } }
        @keyframes shineSweep {
          0% { transform: translateX(-120%) skewX(-18deg); }
          18%, 100% { transform: translateX(320%) skewX(-18deg); }
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
          background: 'radial-gradient(ellipse 90% 70% at 50% 42%, #180305 0%, #0a0203 45%, #030102 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
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

            glow={false} because the hero positions its own red glow above, at
            42% rather than centred on the cube; letting the component draw one
            too stacks two and reads as a single over-bright one. */}
        <IsometricCube size={560} maxWidth="78vw" glow={false} />
        {/* </ElectricBorder> */}

        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', textAlign: 'center', animation: 'fadeUp 1s ease-out 0.8s both' }}>
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            
            <div style={{ position: 'relative', overflow: 'hidden' }}>
              {/* A <p>, not an <h1>. This block sits OUTSIDE <Routes> in
                  App.tsx, so it renders on every page — which gave every page
                  on the site two h1s, one of them the same brand wordmark
                  everywhere. Two h1s split the page's stated subject in half,
                  and the duplicate one said nothing about the page it was on.
                  Styling is unchanged; only the tag is, hence the explicit
                  margin/font reset a <p> needs and an <h1> did not. */}
              <p style={{
                margin: 0,
                fontSize: 'clamp(34px, 6.5vw, 78px)',
                fontWeight: 700,
                letterSpacing: '-0.01em',
                color: '#f6eaea',
                lineHeight: 1
              }}>
                {text.b1}<span style={{ color: '#ff3b45' }}>{text.b2}</span>
              </p>
              <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                <div style={{ position: 'absolute', top: '-20%', left: 0, width: '32%', height: '140%', background: 'linear-gradient(100deg, transparent, rgba(255,255,255,0.55), transparent)', mixBlendMode: 'screen', animation: 'shineSweep 5s ease-in-out infinite 2s' }}></div>
              </div>
            </div>
          </div>
          
          <p style={{ position: 'relative', zIndex: 1, margin: 0, fontFamily: '"JetBrains Mono", monospace', fontSize: 'clamp(12px, 1.6vw, 15px)', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#b98a8d' }}>
            {typed}<span style={{ display: 'inline-block', width: '0.55em', height: '1em', marginLeft: '6px', verticalAlign: 'text-bottom', background: '#ff3b45', animation: 'cursorBlink 1.1s steps(1) infinite' }}></span>
          </p>

          {/* The rotating word — see `PrepWordCycle.tsx`. It waits for the
              tagline above to finish typing rather than starting with it: two
              lines animating at once gives the eye nowhere to settle. */}
          <PrepWordCycle active={rotating} />
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