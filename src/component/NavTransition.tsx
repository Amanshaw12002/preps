import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

/**
 * The navigation transition: while a route is swapping, the page behind goes to
 * frosted glass and the bar squeezes down to just the mark and the wordmark.
 *
 * DESKTOP ONLY, and the gate is here rather than in the navbar so there is one
 * place that decides. On a phone the bar is already the mark plus a hamburger —
 * there is nothing to squeeze away — and a full-viewport backdrop-filter is the
 * most expensive thing you can ask a mobile compositor for.
 *
 * WHY IT ENDS ON A SIGNAL AND NOT A TIMER. Routes here are lazy, so "navigation
 * is done" is not the moment the URL changes — it is the moment the chunk has
 * arrived and the page has rendered. `RouteFallback` in App.tsx already marks
 * that: it carries `aria-busy="true"` and unmounts when the route does. So the
 * overlay watches for that element to leave, bounded at both ends — a floor so a
 * warm 20ms swap still reads as a deliberate move rather than a blink, and a
 * ceiling so a chunk that never arrives cannot leave the page frosted forever.
 *
 * REDUCED MOTION DROPS THE SQUEEZE, NOT THE WHOLE THING. Bailing out entirely
 * was the first version and it was too blunt: the preference asks for nothing to
 * travel a long way across the screen, and a cross-fade does not travel at all.
 * So the glass still crosses over — shortened — and the bar simply stays put.
 * Getting this wrong is invisible to whoever wrote it and total for whoever has
 * the setting on: Windows turns it on with "Animation effects" in Accessibility,
 * so a machine can report `reduce` without anyone having sought it out, and the
 * feature is then silently absent with nothing to debug.
 */

const DESKTOP = "(min-width: 1024px)";

/**
 * WHICH NAVIGATIONS GET THE TRANSITION, and why it runs ONE WAY ONLY.
 *
 * The pages fall into two looks: Home and Pricing open on a DARK hero, About
 * and the two Service pages open LIGHT. This fires on dark -> light and on
 * nothing else.
 *
 * The direction is deliberate, not an oversight to be tidied up later. Leaving
 * a dark page for a light one is the jolt worth covering; arriving back on a
 * dark hero is not, and putting the same full second of chrome on the return
 * trip makes moving around the site feel slower than it is. Staying inside a
 * group is dark-to-dark or light-to-light and has nothing to cover at all.
 *
 * A route in neither list (/quote, /faq, the legal pages) never triggers it:
 * the rule names both ends, so both have to be known.
 */
const DARK_TOP = ["/", "/pricing"];
const LIGHT_TOP = ["/aboutus", "/service/fba", "/service/fbm"];

function groupOf(pathname: string): "dark" | "light" | null {
  const p = pathname.toLowerCase().replace(/\/+$/, "") || "/";
  if (DARK_TOP.includes(p)) return "dark";
  if (LIGHT_TOP.includes(p)) return "light";
  return null;
}

/** dark -> light only. The reverse is deliberately not covered; see above. */
function entersLight(from: string, to: string): boolean {
  return groupOf(from) === "dark" && groupOf(to) === "light";
}
/* The floor is what sets the FELT length of the move — a warm route swap is
   tens of milliseconds, so on any normal navigation this number is the whole
   duration. The ceiling only ever applies to a chunk that is genuinely slow. */
const MIN_MS = 1200;
const MAX_MS = 2600;

type Phase = {
  /** a desktop route change is in flight — frost the page */
  active: boolean;
  /** ...and the bar may collapse. False under reduced motion. */
  squeeze: boolean;
};

const IDLE: Phase = { active: false, squeeze: false };
const NavTransitionContext = createContext<Phase>(IDLE);

export const useNavTransition = () => useContext(NavTransitionContext);

/* one place decides what a run looks like, so the click handler and the
   pathname effect cannot arm two different transitions */
const startPhase = (): Phase => ({
  active: true,
  squeeze: !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
});

/** the path this click would navigate to in-app, or null if it would not */
function destinationOf(e: MouseEvent): string | null {
  /* a modified click opens a tab; this one stays put */
  if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return null;
  const el = e.target as Element | null;
  const a = el?.closest?.("a[href]") as HTMLAnchorElement | null;
  if (!a || a.target === "_blank" || a.hasAttribute("download")) return null;

  let url: URL;
  try {
    url = new URL(a.href, location.href);
  } catch {
    return null;
  }
  /* an external host is a full page load — the browser paints its own
     transition and ours would be frozen on the way out */
  if (url.origin !== location.origin) return null;
  /* same page (or a bare hash) never changes `pathname`, so the effect below
     would never run and the glass would have nothing to end it */
  if (url.pathname === location.pathname) return null;
  return url.pathname;
}

export default function NavTransition({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const [phase, setPhase] = useState<Phase>(IDLE);
  /* where we came FROM, which is the half of `entersLight` React Router does
     not hand you: by the time this effect runs, `location` is already the
     destination. Null means the first render — a page LOAD, not a navigation,
     with nothing to transition from and an LCP not to delay. */
  const prev = useRef<string | null>(null);
  const bail = useRef<number | undefined>(undefined);

  /* ARMED ON THE CLICK, not on the committed pathname. React Router swaps the
     route synchronously, so an effect keyed on `pathname` cannot run until the
     new page has already rendered — measured at ~175ms of unfrosted new page
     before the overlay arrived, which is exactly the flash this is meant to
     cover. A capture-phase listener fires first, so the glass is up before the
     swap.
     Capture phase specifically: a link's own onClick may stop propagation. */
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const to = destinationOf(e);
      if (!to) return;
      if (!entersLight(location.pathname, to)) return;
      if (!window.matchMedia(DESKTOP).matches) return;
      setPhase(startPhase());
      /* if the navigation never happens (a blocked route, a preventDefault
         further down) the effect below never runs and nothing would clear it */
      window.clearTimeout(bail.current);
      bail.current = window.setTimeout(() => setPhase(IDLE), MAX_MS);
    };
    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.clearTimeout(bail.current);
    };
  }, []);

  useEffect(() => {
    const from = prev.current;
    prev.current = pathname;
    if (from === null) return;

    /* the same test the click handler ran, repeated here because this effect
       also covers back/forward, where there was no click to test */
    if (!entersLight(from, pathname)) return;
    /* re-read the query per navigation rather than once on mount, so a resize
       or an OS motion-preference change takes effect immediately */
    if (!window.matchMedia(DESKTOP).matches) return;

    /* the click handler already armed it in the common case; this covers a
       navigation that did not come from a click (back/forward, a redirect) */
    setPhase(startPhase());
    window.clearTimeout(bail.current);

    const started = performance.now();
    let raf = 0;
    let stopped = false;

    const tick = () => {
      if (stopped) return;
      const elapsed = performance.now() - started;
      const loading = !!document.querySelector('[aria-busy="true"]');
      if (elapsed >= MAX_MS || (!loading && elapsed >= MIN_MS)) {
        setPhase(IDLE);
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    /* cancel only — do NOT clear `active` here. This cleanup also runs when a
       second navigation starts, and clearing would drop the bar back to full
       width for a frame before the new run re-collapsed it. */
    return () => {
      stopped = true;
      cancelAnimationFrame(raf);
    };
  }, [pathname]);

  return (
    <NavTransitionContext.Provider value={phase}>
      {children}

      <AnimatePresence>
        {phase.active && (
          <motion.div
            key="nav-glass"
            aria-hidden
            /* THE BLUR RADIUS IS ANIMATED, not just the opacity, and that is
               what stops the end reading as a cut. Fading a backdrop-filtered
               layer out cross-fades a fully blurred picture against a sharp
               one — the blur stays at full strength the whole way down and then
               the element unmounts, so the last of it disappears in one frame.
               Taking the radius to 0 alongside means the page comes back INTO
               FOCUS instead of a blurred copy of it being made see-through. */
            initial={{ opacity: 0, backdropFilter: "blur(0px) saturate(1)" }}
            animate={{ opacity: 1, backdropFilter: "blur(16px) saturate(1.5)" }}
            /* The exit is SLOWER than the entrance, and deliberately: it is
               paired with the bar's own 700ms expansion so the page coming back
               into focus and the bar coming back to full width finish together.
               At 400ms the glass was gone 440ms before the bar had finished,
               which read as the bar being stuck rather than as one move.
               With no squeeze to wait for, both ends are short. */
            exit={{
              opacity: 0,
              backdropFilter: "blur(0px) saturate(1)",
              /* `easeOut` on the way out, not the shared cubic: that curve is
                 fast-then-slow, which spends most of its time at almost-zero
                 blur and makes the useful part of the dissolve happen in the
                 first fifth of it. */
              transition: { duration: phase.squeeze ? 0.85 : 0.4, ease: "easeOut" },
            }}
            transition={{ duration: phase.squeeze ? 0.4 : 0.25, ease: [0.22, 1, 0.36, 1] }}
            /* z-40 keeps it UNDER the bar (z-50), so the bar stays crisp and
               reads as sitting on top of the frosted page rather than in it.
               pointer-events-none on purpose: a stuck overlay must never be
               able to swallow clicks. */
            /* no `backdrop-blur-*` / `backdrop-saturate-*` class here: the
               filter is animated inline above, and leaving the utilities on
               would put a second, static declaration of the same property in
               play — harmless while the inline one wins, and a silent revert to
               a hard 16px the day someone drops the inline animation. */
            className="pointer-events-none fixed inset-0 z-40 bg-white/10"
          />
        )}
      </AnimatePresence>
    </NavTransitionContext.Provider>
  );
}
