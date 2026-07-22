/* A wireframe cube built from 12 glowing edge beams — no faces, edges only.
   Static, held at the orientation where one corner points straight at the viewer.
   Pure CSS 3D (preserve-3d), so it costs nothing next to the WebGL scenes. */

type Axis = "x" | "y" | "z";

/* the 12 edges of a cube: which axis the beam runs along, and the two offsets
   that place it on one of the four parallel corners (in half-size units) */
const EDGES: { axis: Axis; a: number; b: number }[] = [
  { axis: "x", a: -1, b: -1 },
  { axis: "x", a: -1, b: 1 },
  { axis: "x", a: 1, b: -1 },
  { axis: "x", a: 1, b: 1 },
  { axis: "y", a: -1, b: -1 },
  { axis: "y", a: -1, b: 1 },
  { axis: "y", a: 1, b: -1 },
  { axis: "y", a: 1, b: 1 },
  { axis: "z", a: -1, b: -1 },
  { axis: "z", a: -1, b: 1 },
  { axis: "z", a: 1, b: -1 },
  { axis: "z", a: 1, b: 1 },
];

/* turning the cube 45° then tipping it by atan(1/√2) puts a body diagonal
   along the view axis — i.e. one corner aimed straight out of the screen */
const CORNER_ON = "rotateX(35.264deg) rotateY(45deg)";

/* x-edges run left→right, y-edges are stood upright, z-edges are turned into the screen */
function edgeTransform(axis: Axis, a: number, b: number, h: number) {
  const t =
    axis === "x"
      ? `translate3d(0px, ${a * h}px, ${b * h}px)`
      : axis === "y"
      ? `translate3d(${a * h}px, 0px, ${b * h}px) rotateZ(90deg)`
      : `translate3d(${a * h}px, ${b * h}px, 0px) rotateY(90deg)`;
  return `translate(-50%, -50%) ${t}`;
}

export default function BeamCube({
  size = 230,
  thickness = 2,
  className = "",
}: {
  size?: number;
  thickness?: number;
  className?: string;
}) {
  const h = size / 2;

  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      style={{ perspective: size * 3, width: size, height: size }}
    >
      <div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d", transform: CORNER_ON }}
      >
        {EDGES.map((edge, i) => (
          <span
            key={i}
            className="absolute left-160 top-30 block rounded-full"
            style={{
              width: size,
              height: thickness,
              transform: edgeTransform(edge.axis, edge.a, edge.b, h),
              transformStyle: "preserve-3d",
              background:
                "linear-gradient(to right, rgba(239,68,68,0.15), rgba(255,90,90,1) 18%, rgba(255,230,230,1) 50%, rgba(255,90,90,1) 82%, rgba(239,68,68,0.15))",
              boxShadow:
                "0 0 1px rgba(255,255,255,0.9), 0 0 1px rgba(239,68,68,1), 0 0 2px rgba(239,68,68,0.6)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
