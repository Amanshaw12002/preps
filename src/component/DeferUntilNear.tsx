import { useEffect, useRef, useState, type ReactElement, type ReactNode } from "react";

/**
 * Renders nothing until the slot is near the viewport.
 *
 * WHY THIS EXISTS, with the measurement. The brand band at the foot of the home
 * page draws 147 animated SVG tiles, a set of framer-motion beams and a
 * rotating word cycle — all of it mounted eagerly, roughly 6000px below the
 * fold, while the browser is still trying to paint the first screen. Measured
 * on the production build, mobile, three runs each, back to back:
 *
 *                       with band      without band
 *   Performance         71             84
 *   Total Blocking      457 ms         286 ms
 *   Script evaluation   2023 ms        1535 ms
 *
 * Thirteen points, and the band was better in every run on every metric. This
 * component is how the band keeps existing without being paid for at load.
 *
 * It is the same pattern `Meeting.tsx` uses for the Calendly widget, pulled out
 * because a second caller wanted it. Kept deliberately small: no fallback
 * rendering, no fade — a placeholder that animates in is a second thing to load.
 */

type Props = {
  children: ReactNode;
  /**
   * Height held open before the children mount. This is not optional polish —
   * without it everything below jumps when the content arrives, and the site's
   * CLS is currently 0.003, which is worth keeping.
   */
  minHeight: string;
  /** How far outside the viewport to start. Far enough that scrolling never
      reaches an empty box before it fills. */
  rootMargin?: string;
};

export default function DeferUntilNear({
  children,
  minHeight,
  rootMargin = "500px 0px",
}: Props): ReactElement {
  const holder = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) return;
    const node = holder.current;
    if (!node) return;

    /* No observer: render immediately rather than leaving a permanent gap.
       Failing closed here would hide content, which is worse than the cost
       this component exists to avoid. */
    if (!("IntersectionObserver" in window)) {
      setShow(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        io.disconnect();
        setShow(true);
      },
      { rootMargin },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [rootMargin, show]);

  /* The reservation is dropped once the real content is in, so the slot takes
     its natural height instead of being floored by a guess. */
  return (
    <div ref={holder} style={show ? undefined : { minHeight }}>
      {show ? children : null}
    </div>
  );
}
