import { useEffect, useRef, useState } from "react";
import { CalendarClock, Video, ListChecks, Mail } from "lucide-react";
import { SectionEyebrow } from "@/page/Home";

const CALENDLY_URL = "https://calendly.com/amanshaw12002/new-meeting";
const WIDGET_SCRIPT = "https://assets.calendly.com/assets/external/widget.js";
const CONTACT_EMAIL = "contact@blackboxprepcenter.com";

/* The one method we call on the global the script installs. Typed narrowly and
   optionally: the script is third-party and loaded at runtime, so treating it
   as guaranteed is how a missing script becomes a thrown error inside an effect
   rather than a widget that quietly does not appear. */
declare global {
  interface Window {
    Calendly?: {
      initInlineWidget?: (opts: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

/**
 * Onboarding scheduler.
 *
 * THE WIDGET IS NOT LOADED ON MOUNT, and this was the single most expensive
 * thing on the site. Measured on the production build: Calendly pulled 1,272 kB
 * of CSS, 1,258 kB of JS and a further 133 kB of chunks, and dragged in
 * Stripe's 246 kB on top — 2.9 MB of the home page's 3.36 MB total, for a
 * booking form sitting near the bottom of the page that most visitors never
 * scroll to.
 *
 * The cost was not bandwidth, it was the main thread. The hero image finished
 * downloading in 40 ms; LCP still measured 18.4 s, and 15,143 ms of that — 82%
 * — was render delay while the browser parsed and compiled that payload.
 * Deferring it does nothing to the picture and everything to when the picture
 * appears.
 *
 * It loads when the section comes within 600px of the viewport, so by the time
 * anyone scrolls to it the widget is already there. Nothing about the booking
 * experience changes; it simply stops being part of the first paint.
 *
 * THE LAYOUT WAS REDESIGNED AND THIS MACHINERY WAS NOT TOUCHED. The observer,
 * the class toggle, the script guard and the `minWidth` floor below are the
 * parts with measurements behind them; the markup around them is presentation.
 */

/* What the call actually is. Three lines rather than a paragraph because this
   answers the question that stops people booking — "how long is this and what
   happens on it" — and a paragraph makes that something to read rather than
   something to scan. */
const EXPECTATIONS = [
  { icon: CalendarClock, title: "Pick your slot", body: "Live availability. Reschedule any time." },
  { icon: Video, title: "Call or video", body: "One-to-one, whichever suits you." },
  { icon: ListChecks, title: "Leave with a plan", body: "How your inventory gets prepped, start to finish." },
];

/**
 * Placeholder for the scheduler, shown until Calendly's iframe has loaded.
 *
 * WHAT IT REPLACES IS 760px OF WHITE. The holder reserves that height so the
 * page never shifts when the widget arrives — but for the ~3s the third-party
 * script takes, the reserved space read as an empty card, which is
 * indistinguishable from a booking form that has failed to appear. This is the
 * same box saying "something is coming" instead of nothing.
 *
 * It traces Calendly's own inline layout — event details on the left, month
 * grid on the right — so the shapes are replaced rather than swapped out for a
 * different arrangement.
 *
 * The pulse is on the ROOT, not per block: one compositor-driven opacity
 * animation for the whole thing rather than forty. `motion-reduce` turns it off
 * — Tailwind's `animate-pulse` does not honour the media query on its own, and
 * a permanently breathing block is exactly what that preference is set to stop.
 */
function SchedulerSkeleton({ animate }: { animate: boolean }) {
  return (
    <div
      role="status"
      aria-label="Loading the booking calendar"
      className={`pointer-events-none absolute inset-0 overflow-hidden bg-white p-6 sm:p-8 ${
        animate ? "animate-pulse motion-reduce:animate-none" : ""
      }`}
    >
      {/* A CENTRED COLUMN, because that is what arrives. The first version of
          this put the event details in a left rail with the calendar beside
          it — a reasonable guess, and wrong: Calendly renders a ~680px card
          centred in the column, with the organiser, event name and duration
          stacked at the top, a rule, then the month grid. A skeleton whose
          shapes move when the real thing lands is a worse transition than no
          skeleton, so this traces the screenshot. */}
      <div aria-hidden="true" className="mx-auto flex h-full max-w-2xl flex-col px-2 pt-10 sm:pt-14">
        {/* Organiser, event name, then duration and call type side by side. */}
        <div className="flex flex-col items-center">
          <div className="h-3 w-28 rounded bg-gray-200" />
          <div className="mt-4 h-6 w-44 rounded bg-gray-200" />
          <div className="mt-5 flex gap-6">
            <div className="h-3 w-14 rounded bg-gray-200" />
            <div className="h-3 w-20 rounded bg-gray-200" />
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100" />

        {/* "Select a Date & Time" */}
        {/* `flex flex-col flex-1` so the timezone block's `mt-auto` has a
            column to push against — on a plain block it is inert. */}
        <div className="mx-auto mt-8 flex w-full max-w-sm flex-1 flex-col">
          <div className="h-4 w-40 rounded bg-gray-200" />

          {/* Month header: back arrow, month and year, forward arrow. */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <div className="h-5 w-5 rounded-full bg-gray-200" />
            <div className="h-4 w-28 rounded bg-gray-200" />
            <div className="h-5 w-5 rounded-full bg-gray-200" />
          </div>

          {/* CAPPED AT 24rem rather than filling the column. `aspect-square`
              cells across the full 800px of a desktop card come out ~100px
              wide — four times the size of a real date button, which reads as
              a different component rather than as the one arriving. At this
              width they measure 45px against Calendly's ~44px. */}
          <div className="mt-6 grid grid-cols-7 gap-2 sm:gap-3">
            {Array.from({ length: 7 }, (_, i) => (
              <div key={`d${i}`} className="mx-auto h-2.5 w-6 rounded bg-gray-200" />
            ))}
            {/* 35 cells: five weeks, which is what a month grid shows. */}
            {Array.from({ length: 35 }, (_, i) => (
              <div key={`c${i}`} className="aspect-square rounded-full bg-gray-100" />
            ))}
          </div>

          {/* Timezone block, pinned to the bottom by `mt-auto` on the wrapper.
              It anchors the panel at both ends, so the leftover space lands in
              the middle where Calendly's own is, instead of as a white band
              under everything. */}
          <div className="mt-auto pt-10 pb-8">
            <div className="h-3 w-20 rounded bg-gray-200" />
            <div className="mt-2.5 h-3 w-44 rounded bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CustomCalendar() {
  const holder = useRef<HTMLDivElement>(null);
  const [load, setLoad] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const node = holder.current;
    if (!node) return;

    // No observer (or a very old browser): load it immediately rather than
    // leaving someone with no way to book.
    if (!("IntersectionObserver" in window)) {
      setLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        observer.disconnect();
        setLoad(true);
      },
      { rootMargin: "600px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!load) return;

    /**
     * THE WIDGET VANISHED AFTER LEAVING THE PAGE AND COMING BACK, and this is
     * the whole reason there is an `init` here rather than just a script tag.
     *
     * Calendly's script scans the document for `.calendly-inline-widget` ONCE,
     * when it loads. Appending it twice is wrong, so the guard below refuses —
     * but on a remount that left nothing to initialise the NEW holder element.
     * Measured on a round trip to /pricing and back: the holder had the class,
     * the script tag was present, `window.Calendly` was a live object, and the
     * box contained 0 iframes and 0 children. A fresh load and a hard reload
     * both worked, which is what makes this easy to miss — it only fails on
     * client-side navigation, which is every visit after the first.
     *
     * So: if the script is already there, initialise the widget ourselves
     * instead of waiting for a scan that has already happened.
     */
    const init = (): boolean => {
      const node = holder.current;
      if (!node) return false;
      /* Already populated — the script's own scan got there first, which is
         what happens on a fresh load. Initialising again would append a second
         iframe into the same box. */
      if (node.querySelector("iframe")) return true;
      const api = window.Calendly;
      if (!api?.initInlineWidget) return false;
      api.initInlineWidget({ url: CALENDLY_URL, parentElement: node });
      return true;
    };

    if (init()) return;

    const existing = document.querySelector<HTMLScriptElement>(`script[src="${WIDGET_SCRIPT}"]`);
    if (existing) {
      /* Script is in the DOM but has not finished executing — the previous
         mount added it moments ago. Wait for it rather than adding a second. */
      existing.addEventListener("load", init, { once: true });
      return () => existing.removeEventListener("load", init);
    }

    const script = document.createElement("script");
    script.src = WIDGET_SCRIPT;
    script.async = true;
    /* Belt and braces: on a fresh load the scan populates the box and `init`
       returns early, so this only does work when the scan missed us. */
    script.addEventListener("load", init, { once: true });
    document.body.appendChild(script);

    // Deliberately NOT removed on unmount. The old cleanup pulled the script
    // out of the DOM, which does not unload the code it already ran, and left
    // the widget unable to re-initialise on the next visit to this section.
  }, [load]);

  /**
   * Takes the skeleton down when the booking page is ACTUALLY ON SCREEN.
   *
   * The obvious signals are both wrong, and measurably so. `init()` returning
   * true means only that Calendly was asked to build an iframe. The iframe's
   * own `load` event is closer and still early: measured on this page, `load`
   * fired at 4354ms and Calendly's booking page did not appear until 7504ms —
   * so hiding the skeleton there hands back three seconds of blank white, which
   * is the exact thing it exists to prevent. The iframe is cross-origin, so
   * there is nothing inside it we can read to tell the difference.
   *
   * Calendly posts a message to the parent when the event type is displayed,
   * and that is the moment the box stops being empty. `calendly.page_height`
   * arrives before it, repeatedly, while the page is still assembling — so the
   * event name is matched exactly rather than by prefix.
   */
  useEffect(() => {
    if (!load || ready) return;

    const onMessage = (e: MessageEvent) => {
      // Any page can postMessage to us; only Calendly's own frame is listened to.
      if (!/^https:\/\/([a-z0-9-]+\.)*calendly\.com$/.test(e.origin)) return;
      const name = (e.data as { event?: unknown } | null)?.event;
      if (name === "calendly.event_type_viewed") setReady(true);
    };
    window.addEventListener("message", onMessage);

    /* Backstop, for the day that message is renamed or never arrives. Without
       it the skeleton would pulse forever, claiming work is in progress when
       none is; after this long nothing is loading, and showing whatever the
       widget managed is the more honest answer. Set well clear of the ~7.5s
       the widget actually takes on a cold load. */
    const timer = window.setTimeout(() => setReady(true), 20000);

    return () => {
      window.removeEventListener("message", onMessage);
      window.clearTimeout(timer);
    };
  }, [load, ready]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
      {/* Centred header, matching every other section on this page. The old one
          was a left-aligned h2 with a bare `border-l-2` rule beside it and no
          eyebrow — the only section on the site that introduced itself that
          way, which read as an unfinished block rather than a deliberate
          break. */}
      <div className="mx-auto max-w-2xl text-center">
        <SectionEyebrow label="GET STARTED" />
        <h2 className="font-inter text-2xl font-medium text-gray-900 sm:text-4xl">
          Schedule an{" "}
          <span className="bg-gradient-to-r from-red-800 to-red-700 bg-clip-text font-semibold text-transparent">
            onboarding meeting
          </span>
        </h2>
        <p className="mt-4 text-sm text-gray-600 sm:text-base">
          Pick a time that works best for you — we will walk through your
          products, your volumes and how we prep them.
        </p>
      </div>

      {/* One card holding both halves, so the scheduler reads as part of the
          page rather than as an iframe dropped onto it. */}
      <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm sm:mt-12">
        <div className="flex flex-col lg:flex-row">
          {/* Left rail. Fixed width on desktop so the calendar gets every
              remaining pixel — Calendly reflows to a cramped single column
              below roughly 700px and the month grid is the thing worth the
              space. */}
          <div className="border-b border-gray-200 bg-gray-50/60 p-6 sm:p-8 lg:w-[21rem] lg:shrink-0 lg:border-r lg:border-b-0">
            <ul className="space-y-6">
              {EXPECTATIONS.map(({ icon: Icon, title, body }) => (
                <li key={title} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-700">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-gray-900">{title}</span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-gray-600 sm:text-sm">
                      {body}
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-gray-200 pt-6">
              <p className="text-xs font-semibold tracking-[0.14em] text-gray-500">
                PREFER EMAIL?
              </p>
              {/* A plain <a>, never a react-router <Link>. Link renders an <a>
                  whose click the router intercepts, so a `mailto:` became an
                  in-app navigation to "/mailto:…" and landed on a blank page.

                  The address is shown IN FULL and never truncated: it is the
                  one string here someone copies down, and an ellipsis makes it
                  useless. `break-all` is the last resort at 320px — an address
                  wrapped over two lines is still an address, an abbreviated one
                  is not. */}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="group mt-3 flex items-center gap-3 rounded-xl border border-gray-300 bg-white px-4 py-3 text-left transition-all duration-300 hover:border-red-600 hover:shadow-sm"
              >
                <Mail className="h-4 w-4 shrink-0 text-gray-400 transition-colors duration-300 group-hover:text-red-700" />
                <span className="min-w-0 break-all text-xs font-semibold text-gray-900 transition-colors duration-300 group-hover:text-red-700 sm:text-sm">
                  {CONTACT_EMAIL}
                </span>
              </a>
            </div>
          </div>

          {/* Calendly widget. The container is always in the DOM so the observer
              has something to watch and the layout never shifts when the widget
              arrives — only the `calendly-inline-widget` class, which is what
              the script looks for, waits until we are ready.

              `inset-x-12`, `-ml-12`, `scale-80` and the negative margins that
              compensated for it are all gone. The first two were why the home
              page scrolled sideways at tablet width: the widget script sets
              `position: relative` on this element, at which point `inset-x-12`
              stops being inert and becomes `left: 3rem`, shifting a `w-full`
              box 48px past the edge. The scale was worse in a quieter way — a
              transform on an iframe resamples its text, so the widget was the
              only soft type on the page, and it still occupied its unscaled
              900px, which is what the negative margins were clawing back.
              Sizing the column and letting it lay out normally needs none of
              them.

              `min-w-0` lets it shrink inside the flex row; the inline
              `minWidth` is Calendly's own floor and stays. */}
          {/* The wrapper is what positions the skeleton, and it exists rather
              than `relative` on the holder itself because the widget script
              sets `position: relative` on the holder — anything of ours there
              is competing with a third-party write. It also carries the flex
              sizing so the holder keeps only what Calendly cares about. */}
          <div className="relative w-full min-w-0 flex-1">
            <div
              ref={holder}
              className={`${load ? "calendly-inline-widget" : ""} h-full w-full overflow-hidden`}
              data-url={CALENDLY_URL}
              style={{
                minWidth: "320px",
                height: "760px",
              }}
            >
              {!load && (
                <noscript>
                  <a href={CALENDLY_URL}>Book an onboarding call</a>
                </noscript>
              )}
            </div>
            {/* Shown from first paint, not from `load`: the empty box is
                visible for the whole time the script is being fetched, which is
                most of the wait. The pulse waits for `load`, so nothing
                animates while the section is still 600px off screen. */}
            {!ready && <SchedulerSkeleton animate={load} />}
          </div>
        </div>
      </div>
    </section>
  );
}
