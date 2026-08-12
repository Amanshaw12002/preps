import { useEffect, useRef, useState } from "react";
import { CalendarClock, Video, ListChecks, Mail } from "lucide-react";
import { SectionEyebrow } from "@/page/Home";

const CALENDLY_URL = "https://calendly.com/amanshaw12002/new-meeting";
const WIDGET_SCRIPT = "https://assets.calendly.com/assets/external/widget.js";
const CONTACT_EMAIL = "contact@blackboxprepcenter.com";

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

export default function CustomCalendar() {
  const holder = useRef<HTMLDivElement>(null);
  const [load, setLoad] = useState(false);

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

    // The widget script is global and initialises every matching container on
    // the page. Guard against a second copy if this section ever mounts twice
    // — under StrictMode in development it does.
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${WIDGET_SCRIPT}"]`);
    if (existing) return;

    const script = document.createElement("script");
    script.src = WIDGET_SCRIPT;
    script.async = true;
    document.body.appendChild(script);

    // Deliberately NOT removed on unmount. The old cleanup pulled the script
    // out of the DOM, which does not unload the code it already ran, and left
    // the widget unable to re-initialise on the next visit to this section.
  }, [load]);

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
          <div
            ref={holder}
            className={`${load ? "calendly-inline-widget" : ""} w-full min-w-0 flex-1 overflow-hidden`}
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
        </div>
      </div>
    </section>
  );
}
