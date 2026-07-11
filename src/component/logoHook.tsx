import { motion, type Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import React, { useState, useEffect, useMemo, type ReactElement } from 'react';
import { Link } from 'react-router-dom';
import ElectricBorder from './ElectricBorder';

interface Point {
  x: number;
  y: number;
}

interface TextState {
  b1: string;
  b2: string;
}

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

export default function IsometricHero(): ReactElement {
  const [text, setText] = useState<TextState>({ b1: 'BLACKBOX', b2: 'PREPS' });
  const [typed, setTyped] = useState<string>('');

  // Typewriter effect for the tagline — types out, then loops
  useEffect(() => {
    let i = 0;
    let typingId: ReturnType<typeof setInterval>;
    let loopId: ReturnType<typeof setTimeout>;

    const startTyping = () => {
      i = 0;
      setTyped('');
      typingId = setInterval(() => {
        i += 1;
        setTyped(TAGLINE.slice(0, i));
        if (i >= TAGLINE.length) {
          clearInterval(typingId);
          // hold, then retype
          loopId = setTimeout(startTyping, 6000);
        }
      }, 90);
    };

    const kickoff = setTimeout(startTyping, 900);

    return () => {
      clearTimeout(kickoff);
      clearTimeout(loopId);
      clearInterval(typingId);
    };
  }, []);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  // Text scramble animation logic
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    let scrambleIntervalId: ReturnType<typeof setInterval>;
    let loopIntervalId: ReturnType<typeof setInterval>;

    const scramble = () => {
      const T1 = 'BLACKBOX';
      const T2 = 'PREPS';
      const CH = '1234567890';
      const total = 1400;
      const step = 45;
      let el = 0;

      clearInterval(scrambleIntervalId);

      scrambleIntervalId = setInterval(() => {
        el += step;
        const p = Math.min(1, el / total);
        const mk = (t: string) =>
          t.split('').map((c, i) => (i < p * t.length ? c : CH[Math.floor(Math.random() * CH.length)])).join('');

        if (p >= 1) {
          clearInterval(scrambleIntervalId);
          setText({ b1: T1, b2: T2 });
        } else {
          setText({ b1: mk(T1), b2: mk(T2) });
        }
      }, step);
    };

    timeoutId = setTimeout(() => {
      scramble();
      loopIntervalId = setInterval(() => scramble(), 8000);
    }, 5600);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(scrambleIntervalId);
      clearInterval(loopIntervalId);
    };
  }, []);

  // Geometry calculations mapped to useMemo so they only compute once
  const geometry = useMemo(() => {
    const sub = (a: Point, b: Point): Point => ({ x: a.x - b.x, y: a.y - b.y });
    const add = (a: Point, b: Point): Point => ({ x: a.x + b.x, y: a.y + b.y });
    const mul = (a: Point, s: number): Point => ({ x: a.x * s, y: a.y * s });
    const len = (a: Point): number => Math.hypot(a.x, a.y);
    const norm = (a: Point): Point => {
      const l = len(a) || 1;
      return { x: a.x / l, y: a.y / l };
    };

    const centroid = (pts: Point[]): Point => {
      const c = pts.reduce((s, p) => ({ x: s.x + p.x, y: s.y + p.y }), { x: 0, y: 0 });
      return { x: c.x / pts.length, y: c.y / pts.length };
    };

    const inset = (pts: Point[], amt: number): Point[] => {
      const c = centroid(pts);
      return pts.map((p) => add(p, mul(norm(sub(c, p)), amt)));
    };

    const poly = (pts: Point[]) =>
      pts.map((p, i) => (i === 0 ? 'M ' : 'L ') + p.x.toFixed(1) + ' ' + p.y.toFixed(1)).join(' ') + ' Z';

    const face = (pts: Point[]) => poly(inset(pts, 11));
    const lerp = (a: Point, b: Point, t: number): Point => ({ x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t });
    const bil = (pts: Point[], u: number, w: number): Point =>
      lerp(lerp(pts[0], pts[1], u), lerp(pts[3], pts[2], u), w);

    const createTiles = (pts: Point[], fill: string, keyPrefix: string): ReactElement => {
      const base = inset(pts, 11);
      const n = 7;
      const els: ReactElement[] = [];

      for (let j = 0; j < n; j++) {
        for (let i = 0; i < n; i++) {
          const q: Point[] = [
            bil(base, i / n, j / n),
            bil(base, (i + 1) / n, j / n),
            bil(base, (i + 1) / n, (j + 1) / n),
            bil(base, i / n, (j + 1) / n),
          ];
          const cy = centroid(q).y;

          els.push(
            <path
              key={`${keyPrefix}-${i}-${j}`}
              className="cube-tile"
              d={poly(q)}
              fill={fill}
              stroke="rgba(255,60,70,0.55)"
              strokeWidth={0.8}
              style={{ animationDelay: `${(Math.max(0, (cy - 70) / 390) * 1.25).toFixed(2)}s` }}
            />
          );
        }
      }
      return <g>{els}</g>;
    };

    const topPts: Point[] = [
      { x: 250, y: 60 },
      { x: 430, y: 165 },
      { x: 250, y: 270 },
      { x: 70, y: 165 },
    ];
    const leftPts: Point[] = [
      { x: 70, y: 165 },
      { x: 250, y: 270 },
      { x: 250, y: 470 },
      { x: 70, y: 365 },
    ];
    const rightPts: Point[] = [
      { x: 430, y: 165 },
      { x: 250, y: 270 },
      { x: 250, y: 470 },
      { x: 430, y: 365 },
    ];

    return {
      topPath: face(topPts),
      leftPath: face(leftPts),
      rightPath: face(rightPts),
      topTiles: createTiles(topPts, 'url(#gTop)', 't'),
      leftTiles: createTiles(leftPts, 'url(#gLeft)', 'l'),
      rightTiles: createTiles(rightPts, 'url(#gRight)', 'r'),
    };
  }, []);

  return (
    <>
      <style>{`
        .hero-wrapper { box-sizing: border-box; margin: 0; }
        .hero-wrapper a { color: #ff3b45; text-decoration: none; }
        .hero-wrapper a:hover { color: #ff6b73; }
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(-0.6deg); }
        }
        @keyframes heroGlow {
          0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.5; transform: translate(-50%, -50%) scale(1.06); }
        }
        @keyframes edgePulse {
          0%, 100% { stroke-opacity: 0.85; filter: drop-shadow(0 0 2px rgba(255,60,70,0.5)); }
          50% { stroke-opacity: 1; filter: drop-shadow(0 0 5px rgba(255,70,80,0.8)); }
        }
        @keyframes tilePop {
          0%, 61% { opacity: 1; transform: translateY(0) scale(1); stroke-opacity: 0; }
          62% { stroke-opacity: 0.9; }
          64%, 69% { opacity: 0; transform: translateY(-16px) scale(0.3); stroke-opacity: 0.9; }
          71.5% { opacity: 1; transform: translateY(3px) scale(1.08); stroke-opacity: 1; }
          73.5% { opacity: 1; transform: translateY(0) scale(1); stroke-opacity: 0.9; }
          82% { stroke-opacity: 0.8; }
          93%, 100% { opacity: 1; transform: translateY(0) scale(1); stroke-opacity: 0; }
        }
        @keyframes tileSeam {
          0%, 62% { stroke-opacity: 0; }
          65%, 86% { stroke-opacity: 1; }
          94%, 100% { stroke-opacity: 0; }
        }
        .cube-tile { transform-box: fill-box; transform-origin: center; animation: tilePop 8s linear infinite, tileSeam 8s linear infinite; }
        @keyframes edgeTrace {
          0%, 68.9% { stroke-dashoffset: 1200; opacity: 0; }
          69% { stroke-dashoffset: 1200; opacity: 0.9; }
          90% { stroke-dashoffset: 0; opacity: 0.9; }
          96%, 100% { stroke-dashoffset: 0; opacity: 0; }
        }
        @keyframes scanSweep {
          0%, 69% { top: -22%; opacity: 0; }
          71% { opacity: 1; }
          87% { top: 100%; opacity: 1; }
          89%, 100% { top: 100%; opacity: 0; }
        }
        @keyframes cursorBlink { 0%, 55% { opacity: 1; } 56%, 100% { opacity: 0; } }
        .cube-trace { stroke-dasharray: 1200; animation: edgeTrace 8s linear infinite; }
        @keyframes assembleTop {
          from { transform: translateY(-90px) scale(0.85); opacity: 0; }
          to { transform: translateY(0) scale(1); opacity: 1; }
        }
        @keyframes assembleLeft {
          from { transform: translate(-70px, 40px) scale(0.9); opacity: 0; }
          to { transform: translate(0,0) scale(1); opacity: 1; }
        }
        @keyframes assembleRight {
          from { transform: translate(70px, 40px) scale(0.9); opacity: 0; }
          to { transform: translate(0,0) scale(1); opacity: 1; }
        }
        @keyframes shineSweep {
          0% { transform: translateX(-120%) skewX(-18deg); }
          18%, 100% { transform: translateX(320%) skewX(-18deg); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .cube-face { transform-origin: center; }
        .cube-edge { animation: edgePulse 4s ease-in-out infinite; }
      `}</style>

      <div
        className="hero-wrapper"
        style={{
          position: 'relative',
          minHeight: '50vh',
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
        <div
          style={{
            position: 'relative',
            width: '560px',
            maxWidth: '78vw',
            aspectRatio: '1 / 1',
            animation: 'heroFloat 6s ease-in-out infinite',
            willChange: 'transform',
          }}
        >
          <svg viewBox="0 0 500 500" width="100%" height="100%" style={{ overflow: 'visible' }}>
            <defs>
              <linearGradient id="gTop" gradientUnits="userSpaceOnUse" x1="130" y1="80" x2="370" y2="260">
                <stop offset="0" stopColor="#8f1a22"></stop>
                <stop offset="0.55" stopColor="#5c0f16"></stop>
                <stop offset="1" stopColor="#3f0a10"></stop>
              </linearGradient>
              <linearGradient id="gLeft" gradientUnits="userSpaceOnUse" x1="80" y1="175" x2="220" y2="460">
                <stop offset="0" stopColor="#5a1017"></stop>
                <stop offset="1" stopColor="#2c070c"></stop>
              </linearGradient>
              <linearGradient id="gRight" gradientUnits="userSpaceOnUse" x1="270" y1="175" x2="425" y2="450">
                <stop offset="0" stopColor="#e11f29"></stop>
                <stop offset="0.5" stopColor="#c0121b"></stop>
                <stop offset="1" stopColor="#7d0c13"></stop>
              </linearGradient>
              <filter id="softGlow" x="-60%" y="-60%" width="220%" height="220%">
                <feGaussianBlur stdDeviation="2.2" result="b"></feGaussianBlur>
                <feMerge>
                  <feMergeNode in="b"></feMergeNode>
                  <feMergeNode in="SourceGraphic"></feMergeNode>
                </feMerge>
              </filter>
            </defs>

            <g filter="url(#softGlow)">
              <g className="cube-face" style={{ animation: 'assembleTop 1.1s cubic-bezier(0.22,1,0.36,1) both' }}>
                {geometry.topTiles}
                <path className="cube-edge" d={geometry.topPath} fill="none" stroke="#ff3b45" strokeWidth="3" strokeLinejoin="miter" style={{ animationDelay: '0.1s' }}></path>
                <path className="cube-trace" d={geometry.topPath} pathLength="1200" fill="none" stroke="#ffd7da" strokeWidth="1.5" strokeLinejoin="miter"></path>
              </g>

              <g className="cube-face" style={{ animation: 'assembleLeft 1.1s cubic-bezier(0.22,1,0.36,1) 0.12s both' }}>
                {geometry.leftTiles}
                <path className="cube-edge" d={geometry.leftPath} fill="none" stroke="#ff3b45" strokeWidth="3" strokeLinejoin="miter" style={{ animationDelay: '0.3s' }}></path>
                <path className="cube-trace" d={geometry.leftPath} pathLength="1200" fill="none" stroke="#ffd7da" strokeWidth="1.5" strokeLinejoin="miter" style={{ animationDelay: '0.08s' }}></path>
              </g>

              <g className="cube-face" style={{ animation: 'assembleRight 1.1s cubic-bezier(0.22,1,0.36,1) 0.24s both' }}>
                {geometry.rightTiles}
                <path className="cube-edge" d={geometry.rightPath} fill="none" stroke="#ff4a53" strokeWidth="3" strokeLinejoin="miter" style={{ animationDelay: '0.5s' }}></path>
                <path className="cube-trace" d={geometry.rightPath} pathLength="1200" fill="none" stroke="#ffd7da" strokeWidth="1.5" strokeLinejoin="miter" style={{ animationDelay: '0.16s' }}></path>
              </g>
            </g>
          </svg>

          <div style={{ position: 'absolute', inset: '-4%', clipPath: 'polygon(50% 13%, 85% 34%, 85% 72%, 50% 93%, 15% 72%, 15% 34%)', pointerEvents: 'none' }}>
            <div style={{ position: 'absolute', left: 0, right: 0, top: '-22%', height: '90px', animation: 'scanSweep 8s linear infinite' }}>
              <div style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: '3px', background: 'linear-gradient(180deg, transparent, rgba(255,60,70,0.06) 40%, rgba(255,80,90,0.28) 100%)' }}></div>
              <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: '3px', background: 'linear-gradient(90deg, transparent, rgba(255,120,130,0.95) 20%, rgba(255,235,238,1) 50%, rgba(255,120,130,0.95) 80%, transparent)', boxShadow: '0 0 14px rgba(255,70,80,0.9), 0 0 34px rgba(255,40,55,0.5)' }}></div>
              <div style={{ position: 'absolute', left: '30%', right: '30%', bottom: '-6px', height: '12px', background: 'radial-gradient(ellipse at 50% 0%, rgba(255,150,160,0.5), transparent 70%)', filter: 'blur(2px)' }}></div>
            </div>
          </div>

          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', maskImage: 'radial-gradient(circle at 62% 62%, #000 0%, transparent 60%)', WebkitMaskImage: 'radial-gradient(circle at 62% 62%, #000 0%, transparent 60%)' }}>
            <div style={{ position: 'absolute', top: '-20%', left: 0, width: '40%', height: '140%', background: 'linear-gradient(90deg, transparent, rgba(255,180,185,0.35), transparent)', animation: 'shineSweep 6.5s ease-in-out infinite 1.4s' }}></div>
          </div>
        </div>
        {/* </ElectricBorder> */}

        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', textAlign: 'center', animation: 'fadeUp 1s ease-out 0.8s both' }}>
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            
            <div style={{ position: 'relative', overflow: 'hidden' }}>
              <h1 style={{ 
                margin: 0, 
                fontSize: 'clamp(34px, 6.5vw, 78px)', 
                fontWeight: 700, 
                letterSpacing: '-0.01em', 
                color: '#f6eaea', 
                lineHeight: 1
              }}>
                {text.b1}<span style={{ color: '#ff3b45' }}>{text.b2}</span>
              </h1>
              <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                <div style={{ position: 'absolute', top: '-20%', left: 0, width: '32%', height: '140%', background: 'linear-gradient(100deg, transparent, rgba(255,255,255,0.55), transparent)', mixBlendMode: 'screen', animation: 'shineSweep 5s ease-in-out infinite 2s' }}></div>
              </div>
            </div>
          </div>
          
          <p style={{ position: 'relative', zIndex: 1, margin: 0, fontFamily: '"JetBrains Mono", monospace', fontSize: 'clamp(12px, 1.6vw, 15px)', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#b98a8d' }}>
            {typed}<span style={{ display: 'inline-block', width: '0.55em', height: '1em', marginLeft: '6px', verticalAlign: 'text-bottom', background: '#ff3b45', animation: 'cursorBlink 1.1s steps(1) infinite' }}></span>
          </p>
        </div>

        <motion.div
            variants={fadeUp}
            className="flex flex-col items-center gap-3 sm:flex-row my-12 relative z-10"
          >
            <Link
              to="/quote"
              className="group inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_15px_rgba(155,17,30,0.5)] transition-all duration-300 hover:bg-red-500 hover:shadow-[0_0_25px_rgba(155,17,30,0.8)]"
            >
             <span className='text-white bg-transparent'> Start Sending Inventory</span>
              <ArrowRight className="h-4 w-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-transparent px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:text-red-500 hover:border-red-500 hover:shadow-[0_0_15px_rgba(155,17,30,0.3)]"
            >
             <span className='text-white bg-transparent'> Check Pricing</span>
            </Link>
          </motion.div>
          
          <motion.div variants={fadeUp} className='flex flex-col items-center relative z-10'>
            <h2 className="font-inter text-sm font-semibold tracking-tight text-gray-300 sm:text-md">
               Hand's off your prep work.
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Start professional fulfillment solutions tailored to scale your
              e-commerce business.
            </p>
          </motion.div>
      </div>
    </>
  );
}