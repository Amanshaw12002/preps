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
  size = 560,
  maxWidth = "78vw",
  className,
  style,
}: IsometricCubeProps): ReactElement {
  const uid = useId().replace(/[:]/g, "");
  const gTop = `gTop-${uid}`;
  const gLeft = `gLeft-${uid}`;
  const gRight = `gRight-${uid}`;
  const softGlow = `softGlow-${uid}`;

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
        .ic-tile { transform-box: fill-box; transform-origin: center; animation: ic-tilePop 8s linear infinite, ic-tileSeam 8s linear infinite; }
        .ic-trace { stroke-dasharray: 1200; animation: ic-edgeTrace 8s linear infinite; }
        .ic-face { transform-origin: center; }
        .ic-edge { animation: ic-edgePulse 4s ease-in-out infinite; }
      `}</style>

      {/* soft red glow behind the cube */}
      <div
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
      />

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
