import { useId, useMemo, type CSSProperties, type ReactElement } from "react";

interface Point {
  x: number;
  y: number;
}

interface IsometricCubeProps {
  /** cube width in px */
  size?: number;
  /** cap width relative to viewport, e.g. "78vw" */
  maxWidth?: string;
  /** Draw the soft red glow behind the cube. Off for callers that already
      position their own — two stacked glows read as one over-bright one. */
  glow?: boolean;
  className?: string;
  style?: CSSProperties;
}

/**
 * IsometricCube — the animated BlackBoxPreps cube: three tiled faces that
 * assemble on mount, pulsing edges, a scan sweep and a shine sweep, sitting on
 * a soft red glow. Self-contained (unique gradient ids + its own keyframes) so
 * multiple instances can coexist on the same page.
 */
export default function IsometricCube({
  size = 420,
  maxWidth = "78vw",
  glow = true,
  className,
  style,
}: IsometricCubeProps): ReactElement {
  const uid = useId().replace(/[:]/g, "");
  const gTop = `gTop-${uid}`;
  const gLeft = `gLeft-${uid}`;
  const gRight = `gRight-${uid}`;
  const softGlow = `softGlow-${uid}`;
  const beamGlow = `beamGlow-${uid}`;

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
      pts.map((p, i) => (i === 0 ? "M " : "L ") + p.x.toFixed(1) + " " + p.y.toFixed(1)).join(" ") + " Z";

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
              /* `ic-tile`, not `cube-tile`. This component styles every other
                 part of itself with an `ic-` prefix and defines `.ic-tile` in
                 its own stylesheet, but emitted the un-prefixed name here — so
                 the tile pop and seam animations only ever ran because
                 `logoHook.tsx`, a different component, happened to define a
                 global `.cube-tile` rule. It looked correct for as long as both
                 were mounted, and deleting the other file's now-dead CSS killed
                 the animation here. Found by counting elements per class after
                 the merge: `.ic-tile` matched 0 and `.cube-tile` matched 147. */
              className="ic-tile"
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

    /* THE LOGO MARK, DERIVED FROM THE CUBE RATHER THAN RETYPED.
       `Logo.tsx` is a hexagon plus three arms meeting at the near corner, and
       those arms are exactly the three edges where these faces meet — so they
       are read out of the same point arrays the faces are built from. Writing
       the six coordinates again would be a second source of truth for one
       shape, and the symptom of drift is a white line that no longer sits in
       the seam, which looks like a rendering fault rather than a stale number.

       The hexagon half of the mark is deliberately NOT drawn: the cube's outer
       silhouette already is that hexagon, in red, so a white copy would just
       double every outer edge. The arms are the part that is currently only a
       dark seam, which is why they are the part worth lighting.

       THE ARMS START AT THE EXACT CENTRE AND ARE PULLED IN ONLY AT THE TIPS.
       They began 6% out at both ends, which left the middle of the cube dark
       and empty and the three lines reading as separate strokes that happened
       to point at each other rather than as one thing radiating. The reason for
       the inset applies only to the OUTER end: the faces are `inset(pts, 11)`,
       so the true vertices sit slightly outside the drawn red edges and a
       full-length arm pokes past the silhouette at all three tips. At the
       centre the same inset works the other way — no face covers the shared
       corner, so it is a hole, and running the arms into it is what fills it. */
    const nearCorner = topPts[2];
    const arms = [topPts[3], topPts[1], leftPts[2]].map((tip) => {
      const b = lerp(nearCorner, tip, 0.94);
      return `M ${nearCorner.x.toFixed(1)} ${nearCorner.y.toFixed(1)} L ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
    });

    /* The outer silhouette — the hexagon half of the logo mark, and the track
       for the border beam. Built from the cube's own vertices in perimeter
       order and put through the SAME `inset(pts, 11)` the faces use, so the
       beam rides exactly on the drawn red edge instead of floating outside it
       where the true geometry is. */
    const border = poly(
      inset(
        [topPts[0], topPts[1], rightPts[3], leftPts[2], leftPts[3], topPts[3]],
        11,
      ),
    );

    return {
      topPath: face(topPts),
      leftPath: face(leftPts),
      rightPath: face(rightPts),
      arms,
      border,
      topTiles: createTiles(topPts, `url(#${gTop})`, "t"),
      leftTiles: createTiles(leftPts, `url(#${gLeft})`, "l"),
      rightTiles: createTiles(rightPts, `url(#${gRight})`, "r"),
    };
  }, [gTop, gLeft, gRight]);

  return (
    <div
      className={className}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
    >
      <style>{`
        @keyframes ic-heroFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(-0.6deg); }
        }
        @keyframes ic-heroGlow {
          0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.5; transform: translate(-50%, -50%) scale(1.06); }
        }
        @keyframes ic-edgePulse {
          0%, 100% { stroke-opacity: 0.85; filter: drop-shadow(0 0 2px rgba(255,60,70,0.5)); }
          50% { stroke-opacity: 1; filter: drop-shadow(0 0 5px rgba(255,70,80,0.8)); }
        }
        @keyframes ic-tilePop {
          0%, 61% { opacity: 1; transform: translateY(0) scale(1); stroke-opacity: 0; }
          62% { stroke-opacity: 0.9; }
          64%, 69% { opacity: 0; transform: translateY(-16px) scale(0.3); stroke-opacity: 0.9; }
          71.5% { opacity: 1; transform: translateY(3px) scale(1.08); stroke-opacity: 1; }
          73.5% { opacity: 1; transform: translateY(0) scale(1); stroke-opacity: 0.9; }
          82% { stroke-opacity: 0.8; }
          93%, 100% { opacity: 1; transform: translateY(0) scale(1); stroke-opacity: 0; }
        }
        @keyframes ic-tileSeam {
          0%, 62% { stroke-opacity: 0; }
          65%, 86% { stroke-opacity: 1; }
          94%, 100% { stroke-opacity: 0; }
        }
        @keyframes ic-edgeTrace {
          0%, 68.9% { stroke-dashoffset: 1200; opacity: 0; }
          69% { stroke-dashoffset: 1200; opacity: 0.9; }
          90% { stroke-dashoffset: 0; opacity: 0.9; }
          96%, 100% { stroke-dashoffset: 0; opacity: 0; }
        }
        @keyframes ic-scanSweep {
          0%, 69% { top: -22%; opacity: 0; }
          71% { opacity: 1; }
          87% { top: 100%; opacity: 1; }
          89%, 100% { top: 100%; opacity: 0; }
        }
        @keyframes ic-assembleTop {
          from { transform: translateY(-90px) scale(0.85); opacity: 0; }
          to { transform: translateY(0) scale(1); opacity: 1; }
        }
        @keyframes ic-assembleLeft {
          from { transform: translate(-70px, 40px) scale(0.9); opacity: 0; }
          to { transform: translate(0,0) scale(1); opacity: 1; }
        }
        @keyframes ic-assembleRight {
          from { transform: translate(70px, 40px) scale(0.9); opacity: 0; }
          to { transform: translate(0,0) scale(1); opacity: 1; }
        }
        @keyframes ic-shineSweep {
          0% { transform: translateX(-120%) skewX(-18deg); }
          18%, 100% { transform: translateX(320%) skewX(-18deg); }
        }
        /* The beam. pathLength=100 on each arm normalises them to the same
           length, so one keyframe set drives all three despite the vertical arm
           being longer than the two diagonals — otherwise the beam would
           visibly run at a different speed down the front edge.

           dasharray 18 100 is a single 18-unit dash with a gap longer than
           the path, so exactly one segment exists at a time. Offset 18 parks it
           just before the start and -100 puts it just past the end, so the
           animation is the whole travel with no second dash entering behind it.

           It runs in the FIRST half of the 8s cycle on purpose: the tile pop,
           the edge trace and the scan sweep all live between 61% and 96%, so
           the front half is the quiet stretch and the beam has it to itself. */
        @keyframes ic-beam {
          0%, 8%    { stroke-dashoffset: 18; opacity: 0; }
          12%       { opacity: 1; }
          34%       { stroke-dashoffset: -100; opacity: 1; }
          38%, 100% { stroke-dashoffset: -100; opacity: 0; }
        }
        @keyframes ic-armGlow {
          0%, 100% { stroke-opacity: 0.18; }
          50%      { stroke-opacity: 0.32; }
        }
        /* THE BORDER IS STATIC — it completes the logo mark rather than moving.
           It laps the silhouette on a dash cycle at one point, which put two
           things travelling at once and turned the cube into a racetrack: the
           eye followed the outline and stopped reading the pulse from the near
           corner, which is the part with meaning in it. Held still, the white
           hexagon plus the three arms IS the mark, and the one moving thing on
           it is the beam.

           It shares the ic-arm class, so the whole mark breathes on one clock.
           Two near-identical opacity animations on parts of one shape drift
           against each other and read as a flicker. */
        /* NO SOURCE DOT AT THE CENTRE. A flaring circle was tried there and cut:
           the three arms already meet at a point, so a disc on top adds a second
           shape to a mark that is made of lines, and it draws the eye to the
           middle at exactly the moment the beams are supposed to be leaving it.
           The empty centre was the real complaint and it was fixed by running
           the arms into the corner, not by covering it.

           NOTE for anyone editing this block: it lives inside a template
           literal, so a backtick in a comment here ends the string and produces
           twenty parse errors pointing at the JSX below. */
        .ic-arm { animation: ic-armGlow 4s ease-in-out infinite; }
        .ic-beam { stroke-dasharray: 18 100; animation: ic-beam 8s linear infinite; }
        .ic-tile { transform-box: fill-box; transform-origin: center; animation: ic-tilePop 8s linear infinite, ic-tileSeam 8s linear infinite; }
        .ic-trace { stroke-dasharray: 1200; animation: ic-edgeTrace 8s linear infinite; }
        .ic-face { transform-origin: center; }
        .ic-edge { animation: ic-edgePulse 4s ease-in-out infinite; }
      `}</style>

      {/* soft red glow behind the cube */}
      {glow && <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: size * 0.93,
          height: size * 0.93,
          maxWidth,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(220,30,40,0.55) 0%, rgba(150,15,25,0.25) 35%, transparent 68%)",
          filter: "blur(28px)",
          animation: "ic-heroGlow 5s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />}

      {/* floating cube box */}
      <div
        style={{
          position: "relative",
          width: size,
          maxWidth,
          aspectRatio: "1 / 1",
          animation: "ic-heroFloat 6s ease-in-out infinite",
          willChange: "transform",
        }}
      >
        <svg viewBox="0 0 500 500" width="100%" height="100%" style={{ overflow: "visible" }}>
          <defs>
            <linearGradient id={gTop} gradientUnits="userSpaceOnUse" x1="130" y1="80" x2="370" y2="260">
              <stop offset="0" stopColor="#8f1a22"></stop>
              <stop offset="0.55" stopColor="#5c0f16"></stop>
              <stop offset="1" stopColor="#3f0a10"></stop>
            </linearGradient>
            <linearGradient id={gLeft} gradientUnits="userSpaceOnUse" x1="80" y1="175" x2="220" y2="460">
              <stop offset="0" stopColor="#5a1017"></stop>
              <stop offset="1" stopColor="#2c070c"></stop>
            </linearGradient>
            <linearGradient id={gRight} gradientUnits="userSpaceOnUse" x1="270" y1="175" x2="425" y2="450">
              <stop offset="0" stopColor="#e11f29"></stop>
              <stop offset="0.5" stopColor="#c0121b"></stop>
              <stop offset="1" stopColor="#7d0c13"></stop>
            </linearGradient>
            {/* A wider, softer blur than `softGlow`. The beam is white on a
                near-black field, so it needs a real halo to read as light
                rather than as a drawn line. */}
            <filter id={beamGlow} x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="5" result="wide"></feGaussianBlur>
              <feGaussianBlur stdDeviation="1.6" result="tight"></feGaussianBlur>
              <feMerge>
                <feMergeNode in="wide"></feMergeNode>
                <feMergeNode in="tight"></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
              </feMerge>
            </filter>
            <filter id={softGlow} x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="2.2" result="b"></feGaussianBlur>
              <feMerge>
                <feMergeNode in="b"></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
              </feMerge>
            </filter>
          </defs>

          <g filter={`url(#${softGlow})`}>
            <g className="ic-face" style={{ animation: "ic-assembleTop 1.1s cubic-bezier(0.22,1,0.36,1) both" }}>
              {geometry.topTiles}
              <path className="ic-edge" d={geometry.topPath} fill="none" stroke="#ff3b45" strokeWidth="3" strokeLinejoin="miter" style={{ animationDelay: "0.1s" }}></path>
              <path className="ic-trace" d={geometry.topPath} pathLength="1200" fill="none" stroke="#ffd7da" strokeWidth="1.5" strokeLinejoin="miter"></path>
            </g>

            <g className="ic-face" style={{ animation: "ic-assembleLeft 1.1s cubic-bezier(0.22,1,0.36,1) 0.12s both" }}>
              {geometry.leftTiles}
              <path className="ic-edge" d={geometry.leftPath} fill="none" stroke="#ff3b45" strokeWidth="3" strokeLinejoin="miter" style={{ animationDelay: "0.3s" }}></path>
              <path className="ic-trace" d={geometry.leftPath} pathLength="1200" fill="none" stroke="#ffd7da" strokeWidth="1.5" strokeLinejoin="miter" style={{ animationDelay: "0.08s" }}></path>
            </g>

            <g className="ic-face" style={{ animation: "ic-assembleRight 1.1s cubic-bezier(0.22,1,0.36,1) 0.24s both" }}>
              {geometry.rightTiles}
              <path className="ic-edge" d={geometry.rightPath} fill="none" stroke="#ff4a53" strokeWidth="3" strokeLinejoin="miter" style={{ animationDelay: "0.5s" }}></path>
              <path className="ic-trace" d={geometry.rightPath} pathLength="1200" fill="none" stroke="#ffd7da" strokeWidth="1.5" strokeLinejoin="miter" style={{ animationDelay: "0.16s" }}></path>
            </g>
          </g>

          {/* The logo mark, over the box. Outside the face group on purpose:
              inside it, the three arms would inherit the assemble transforms
              and each would ride away with a different face, tearing the mark
              into three pieces during the first second. It appears with the
              assembled cube instead, as one shape.

              `pointerEvents: none` because it sits over everything. */}
          <g
            filter={`url(#${beamGlow})`}
            fill="none"
            strokeLinecap="round"
            style={{ pointerEvents: "none", animation: "ic-assembleTop 1.1s cubic-bezier(0.22,1,0.36,1) 0.36s both" }}
          >
            {geometry.arms.map((d, i) => (
              <g key={i}>
                {/* the resting mark — faint, so the cube still reads as red */}
                <path className="ic-arm" d={d} stroke="#ffffff" strokeWidth="2" />
                {/* the beam travelling out from the near corner */}
                <path className="ic-beam" d={d} pathLength="100" stroke="#ffffff" strokeWidth="3.4" />
              </g>
            ))}
            {/* the silhouette, held. Thinner than the arms (1.6 against 2)
                because it is far longer: at the same width the outline carries
                most of the white on screen and the mark stops reading as a
                cube with a lit corner. */}
            <path
              className="ic-arm"
              d={geometry.border}
              stroke="#ffffff"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </g>
        </svg>

        {/* scan sweep */}
        <div style={{ position: "absolute", inset: "-4%", clipPath: "polygon(50% 13%, 85% 34%, 85% 72%, 50% 93%, 15% 72%, 15% 34%)", pointerEvents: "none" }}>
          <div style={{ position: "absolute", left: 0, right: 0, top: "-22%", height: "90px", animation: "ic-scanSweep 8s linear infinite" }}>
            <div style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: "3px", background: "linear-gradient(180deg, transparent, rgba(255,60,70,0.06) 40%, rgba(255,80,90,0.28) 100%)" }}></div>
            <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: "3px", background: "linear-gradient(90deg, transparent, rgba(255,120,130,0.95) 20%, rgba(255,235,238,1) 50%, rgba(255,120,130,0.95) 80%, transparent)", boxShadow: "0 0 14px rgba(255,70,80,0.9), 0 0 34px rgba(255,40,55,0.5)" }}></div>
            <div style={{ position: "absolute", left: "30%", right: "30%", bottom: "-6px", height: "12px", background: "radial-gradient(ellipse at 50% 0%, rgba(255,150,160,0.5), transparent 70%)", filter: "blur(2px)" }}></div>
          </div>
        </div>

        {/* shine sweep */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", maskImage: "radial-gradient(circle at 62% 62%, #000 0%, transparent 60%)", WebkitMaskImage: "radial-gradient(circle at 62% 62%, #000 0%, transparent 60%)" }}>
          <div style={{ position: "absolute", top: "-20%", left: 0, width: "40%", height: "140%", background: "linear-gradient(90deg, transparent, rgba(255,180,185,0.35), transparent)", animation: "ic-shineSweep 6.5s ease-in-out infinite 1.4s" }}></div>
        </div>
      </div>
    </div>
  );
}
