import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,              // Scroll duration in seconds
      lerp: 0.1,                  // Lower = smoother (default: 0.1)
      orientation: "vertical",    // Scroll direction
      gestureOrientation: "vertical",
      syncTouch: false,           // Whether to sync touch scroll
      touchMultiplier: 1.5,       // Speed multiplier for touch devices
      smoothWheel: true,          // Smooth wheel scrolling
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);
}
