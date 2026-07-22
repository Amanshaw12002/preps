import { motion } from "framer-motion";

/* The red cut that sweeps down across a section — same material as the one over the
   hero headline. The parent must be positioned; everything here is absolute. */

/* extra red streaks fanned around the main blade — px offset, own tilt, own timing */
const shards = [
  { offset: -26, width: 5, tilt: -4, delay: 0.06, opacity: 0.5, blur: 1 },
  { offset: -14, width: 2, tilt: -2, delay: 0.02, opacity: 0.85, blur: 0 },
  { offset: -6, width: 1, tilt: 1, delay: 0.12, opacity: 0.6, blur: 0 },
  { offset: 7, width: 2, tilt: 2, delay: 0.0, opacity: 0.9, blur: 0 },
  { offset: 15, width: 1, tilt: 3, delay: 0.09, opacity: 0.55, blur: 1 },
  { offset: 30, width: 1, tilt: 6, delay: 0.16, opacity: 0.4, blur: 2 },
];

const EASE = [0.65, 0, 0.35, 1] as const;
/* the tail dissolves before the blade reaches its end */
const FADE = "linear-gradient(to bottom, #000 0%, #000 78%, rgba(0,0,0,0.35) 90%, transparent 97%)";

export default function SlashBeam({
  left = "50%",
  top = "0px",
  height = "100%",
  rotate = 13,
  start = 0.95,
  duration = 1.15,
  className = "",
}: {
  /** horizontal anchor of the blade's top end */
  left?: string;
  top?: string;
  height?: string;
  /** positive leans the bottom left, negative leans it right */
  rotate?: number;
  start?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <span
      className={`pointer-events-none absolute block w-[220px] ${className}`}
      style={{
        left,
        top,
        height,
        transform: `translateX(-50%) rotate(${rotate}deg)`,
        transformOrigin: "top center",
        maskImage: FADE,
        WebkitMaskImage: FADE,
      }}
    >
      {/* wide haze — the radiance bleeding off the cut */}
      <motion.span
        className="absolute top-0 h-full w-[54px] rounded-full bg-red-600/30 blur-[26px]"
        style={{ left: "50%", x: "-50%", originY: 0 }}
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: [0, 0.9, 0.5] }}
        transition={{ delay: start, duration, ease: EASE }}
      />
      {/* tighter bloom hugging the blade */}
      <motion.span
        className="absolute top-0 h-full w-[22px] rounded-full bg-red-500/60 blur-[14px]"
        style={{ left: "50%", x: "-50%", originY: 0 }}
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: [0, 1, 0.7] }}
        transition={{ delay: start, duration, ease: EASE }}
      />
      {/* fanned streaks flanking the cut */}
      {shards.map((shard, i) => (
        <motion.span
          key={i}
          className="absolute top-0 h-full rounded-full"
          style={{
            left: "50%",
            width: shard.width,
            x: `calc(-50% + ${shard.offset}px)`,
            rotate: shard.tilt,
            originY: 0,
            filter: shard.blur ? `blur(${shard.blur}px)` : undefined,
            background:
              "linear-gradient(to bottom, rgba(239,68,68,0), rgba(239,68,68,1) 15%, rgba(255,160,160,1) 50%, rgba(239,68,68,1) 85%, rgba(239,68,68,0))",
            boxShadow: "0 0 6px rgba(239,68,68,0.9)",
          }}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{
            scaleY: 1,
            opacity: [0, shard.opacity, shard.opacity * 0.55, shard.opacity],
          }}
          transition={{
            scaleY: { delay: start + shard.delay, duration, ease: EASE },
            opacity: {
              delay: start + shard.delay,
              duration: 2.6 + i * 0.3,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            },
          }}
        />
      ))}
      {/* the cut itself — white-hot core */}
      <motion.span
        className="absolute top-0 h-full w-[3px] rounded-full"
        style={{
          left: "50%",
          x: "-50%",
          originY: 0,
          background:
            "linear-gradient(to bottom, rgba(239,68,68,0), rgba(255,120,120,1) 8%, rgba(255,255,255,1) 45%, rgba(255,120,120,1) 92%, rgba(239,68,68,0))",
          boxShadow:
            "0 0 4px rgba(255,255,255,1), 0 0 12px rgba(255,120,120,1), 0 0 30px rgba(239,68,68,0.85)",
        }}
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: [0, 1, 1, 0.95] }}
        transition={{ delay: start, duration, ease: EASE }}
      />
      {/* spark head riding the tip as it travels down */}
      <motion.span
        className="absolute left-1/2 h-[46px] w-[46px] rounded-full blur-[6px]"
        style={{
          x: "-50%",
          y: "-50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,180,180,0.9) 25%, rgba(239,68,68,0.55) 50%, rgba(239,68,68,0) 72%)",
        }}
        initial={{ top: "0%", opacity: 0, scale: 0.4 }}
        animate={{ top: "100%", opacity: [0, 1, 1, 0], scale: [0.4, 1.25, 1, 0.6] }}
        transition={{ delay: start, duration, ease: EASE }}
      />
      {/* residual flicker — the cut keeps breathing once it has landed */}
      <motion.span
        className="absolute top-0 h-full w-[10px] rounded-full bg-red-400/70 blur-[9px]"
        style={{ left: "50%", x: "-50%" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.25, 0.85, 0.4, 0.75, 0.25], scaleX: [1, 1.8, 1.1, 1.5, 1] }}
        transition={{
          delay: start + duration,
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </span>
  );
}
