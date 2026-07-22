import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* Hover a word and a targeting box snaps over it. Every word shares one
   layoutId, so moving between words glides the same box across instead of
   fading one out and another in. */

const CORNERS = [
  "left-0 top-0 border-l-2 border-t-2",
  "right-0 top-0 border-r-2 border-t-2",
  "left-0 bottom-0 border-l-2 border-b-2",
  "right-0 bottom-0 border-r-2 border-b-2",
];

export default function CaptureWord({ children }: { children: ReactNode }) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      /* cursor-none: the capture box replaces the pointer while a word is held */
      className="relative inline-block cursor-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
      <AnimatePresence>
        {hovered && (
          <motion.span
            layoutId="hero-capture-box"
            aria-hidden
            className="pointer-events-none absolute -inset-x-1.5 -inset-y-0.5 z-30 block rounded-[3px] border border-white/60 bg-white/[0.06]"
            initial={{ opacity: 0, scale: 1.12 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{
              layout: { type: "spring", stiffness: 420, damping: 34 },
              duration: 0.18,
              ease: "easeOut",
            }}
            style={{
              boxShadow:
                "0 0 0 1px rgba(255,255,255,0.25), 0 0 16px rgba(255,255,255,0.55), 0 0 38px rgba(255,255,255,0.25)",
            }}
          >
            {/* corner brackets — the "capture" read */}
            {CORNERS.map((pos, i) => (
              <span
                key={i}
                className={`absolute h-2.5 w-2.5 border-white ${pos}`}
                style={{ boxShadow: "0 0 10px rgba(255,255,255,0.95)" }}
              />
            ))}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}
