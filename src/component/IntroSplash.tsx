import { useEffect, useRef, useState, type ReactElement } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IsometricCube from "./IsometricCube";

const LINE1 = "BlackBoxPreps";
const LINE2 = "Build for prep work.";

/**
 * IntroSplash — a one-time entrance overlay. On first visit of a session the
 * user sees the glowing BlackBoxPreps cube, a gradient-flowing typed welcome
 * line and a typed tagline, then it fades away to reveal the site.
 */
export default function IntroSplash(): ReactElement {
  // shown synchronously on first paint so there's no flash of the site first
  const [show, setShow] = useState<boolean>(
    () => typeof window !== "undefined" && !sessionStorage.getItem("bbp_intro_seen")
  );
  const [t1, setT1] = useState("");
  const [t2, setT2] = useState("");
  const [phase, setPhase] = useState<0 | 1 | 2>(0); // 0: typing line1, 1: typing line2, 2: done
  const timers = useRef<Array<ReturnType<typeof setTimeout> | ReturnType<typeof setInterval>>>([]);

  useEffect(() => {
    if (!show) return;
    document.body.style.overflow = "hidden";

    // typewriter — line 1, then line 2
    let i = 0;
    let j = 0;
    const typeL2 = () => {
      setPhase(1);
      const id2 = setInterval(() => {
        j += 1;
        setT2(LINE2.slice(0, j));
        if (j >= LINE2.length) {
          clearInterval(id2);
          setPhase(2);
        }
      }, 80);
      timers.current.push(id2);
    };
    const typeL1 = () => {
      const id1 = setInterval(() => {
        i += 1;
        setT1(LINE1.slice(0, i));
        if (i >= LINE1.length) {
          clearInterval(id1);
          timers.current.push(setTimeout(typeL2, 500));
        }
      }, 85);
      timers.current.push(id1);
    };
    timers.current.push(setTimeout(typeL1, 700));

    // dismiss after 8s
    const dismiss = setTimeout(() => {
      sessionStorage.setItem("bbp_intro_seen", "1");
      setShow(false);
    }, 8000);
    timers.current.push(dismiss);

    return () => {
      timers.current.forEach((t) => {
        clearTimeout(t as ReturnType<typeof setTimeout>);
        clearInterval(t as ReturnType<typeof setInterval>);
      });
      timers.current = [];
    };
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
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
          <style>{`
            @keyframes bbpGradFlow {
              0% { background-position: 0% 50%; }
              100% { background-position: 200% 50%; }
            }
            .bbp-grad {
              background-image: linear-gradient(90deg, #1a1a1a 0%, #7f1113 22%, #ff2a38 42%, #ff8087 50%, #ff2a38 58%, #7f1113 78%, #1a1a1a 100%);
              background-size: 200% auto;
              -webkit-background-clip: text;
              background-clip: text;
              color: transparent;
              -webkit-text-fill-color: transparent;
              animation: bbpGradFlow 3s linear infinite;
              will-change: background-position;
            }
            @keyframes bbpCaret { 0%, 55% { opacity: 1; } 56%, 100% { opacity: 0; } }
            .bbp-caret {
              display: inline-block;
              width: 0.5em;
              height: 1em;
              margin-left: 4px;
              vertical-align: text-bottom;
              background: #ff3b45;
              animation: bbpCaret 1s steps(1) infinite;
            }
          `}</style>

          {/* animated isometric cube logo */}
          <IsometricCube size={300} maxWidth="70vw" />

          {/* welcome line — typed with a flowing black→red gradient */}
          <h1 className="mt-8 min-h-[1.4em] text-center font-inter text-2xl font-semibold tracking-tight sm:text-4xl">
            <span className="bbp-grad">{t1}</span>
            {phase === 0 && <span className="bbp-caret" />}
          </h1>

          {/* tagline — typed */}
          <p className="mt-4 min-h-[1.4em] text-center font-mono text-sm uppercase tracking-[0.28em] text-gray-400 sm:text-base">
            {t2}
            {phase >= 1 && <span className="bbp-caret" style={{ height: "0.9em" }} />}
          </p>

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
