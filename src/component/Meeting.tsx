import { useEffect, useRef, useState } from "react";

const CALENDLY_URL = "https://calendly.com/amanshaw12002/new-meeting";
const WIDGET_SCRIPT = "https://assets.calendly.com/assets/external/widget.js";

/**
 * Onboarding scheduler.
 *
 * THE WIDGET IS NO LONGER LOADED ON MOUNT, and this was the single most
 * expensive thing on the site. Measured on the production build: Calendly
 * pulled 1,272 kB of CSS, 1,258 kB of JS and a further 133 kB of chunks, and
 * dragged in Stripe's 246 kB on top — 2.9 MB of the home page's 3.36 MB total,
 * for a booking form sitting near the bottom of the page that most visitors
 * never scroll to.
 *
 * The cost was not bandwidth, it was the main thread. The hero image finished
 * downloading in 40 ms; LCP still measured 18.4 s, and 15,143 ms of that —
 * 82% — was render delay while the browser parsed and compiled that payload.
 * Deferring it does nothing to the picture and everything to when the picture
 * appears.
 *
 * It now loads when the section comes within 600px of the viewport, so by the
 * time anyone scrolls to it the widget is already there. Nothing about the
 * booking experience changes; it simply stops being part of the first paint.
 */
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
    <section className="max-w-7xl mx-auto px-4">
      {/* `sm:` with nothing after it was in this class list — not a class, just
          a stray token. Harmless, but it is the sort of thing that makes the
          next person doubt the rest of the line. */}
      <div className="bg-white rounded-2xl flex flex-col sm:flex-row w-full mx-auto pt-8 sm:pt-0">
        {/* Heading */}
        <div className="min-w-0 sm:pl-8 pt-8 sm:ml-8">

        <h2 className="text-xl sm:text-4xl sm:border-l-2 pl-2 sm:mt-12  font-inter text-gray-900 text-center sm:text-left mb-5">
          Schedule an Onboarding Meeting
        </h2>
        <p className="text-left text-xs sm:text-sm text-gray-800 ">
          Pick a time that works best for you.
          <span className="font-bold block">Our one-to-one call or video conference</span>  will help you get started smoothly.
        </p>
        <p className="sm:py-8 py-4 text-md font-medium">You can also contact us manually through our email.</p>

        {/* A react-router <Link to="mailto:…"> — which does NOT open a mail
            client. Link renders an <a> whose click is intercepted by the
            router, so this navigated to the in-app path
            "/mailto:blackboxprepcenter.com" and landed on a blank page. It has
            to be a plain <a> to leave the app. The address was wrong too: it
            was the bare domain, which is not an email address at all. */}
        {/* The address was TRUNCATING to "contact@blackboxprepcenter…." — the
            one string on this control that has to be readable in full, since
            it is what someone copies down. It is 30 characters, so it fits at
            390px once the type is sized for the phone rather than the desktop;
            `truncate` is gone entirely, because an ellipsis here is worse than
            a wrap. `break-all` is the last resort at 320px: an address broken
            over two lines is still an address, an abbreviated one is not. */}
        <a
          href="mailto:contact@blackboxprepcenter.com"
          className="inline-flex w-full max-w-full items-center justify-between gap-2 overflow-hidden rounded-sm border-2 py-1 pl-2.5 text-xs font-semibold text-slate-800 transition duration-300 hover:text-black sm:w-auto sm:gap-3 sm:pl-3 sm:text-sm"
        >
          <span className="min-w-0 break-all text-left">contact@blackboxprepcenter.com</span>
          <span className="shrink-0 bg-black px-3 py-3 text-white sm:px-4">Send</span>
        </a>
        </div>

        {/* Calendly widget. The container is always in the DOM so the observer
            has something to watch and the layout never shifts when the widget
            arrives — only the `calendly-inline-widget` class, which is what the
            script looks for, waits until we are ready.

            `inset-x-12` and `-ml-12` are BOTH gone, and they were the reason
            the home page scrolled sideways at tablet width. The widget script
            sets `position: relative` on this element, at which point
            `inset-x-12` stops being inert and becomes `left: 3rem` — shifting a
            `w-full` box 48px right, past the edge. `-ml-12` then dragged it back
            the other way on mobile, so the two were fighting each other and
            neither was doing anything useful. `min-w-0` lets it shrink inside
            the flex row; the inline `minWidth: 320px` is Calendly's own floor
            and stays. */}
        <div
          ref={holder}
          className={`${load ? "calendly-inline-widget" : ""} sm:scale-80 overflow-hidden min-w-0 mt-8 sm:-mt-14 sm:-mb-12 rounded-xl w-full`}
          data-url={CALENDLY_URL}
          style={{
            minWidth: "320px",
            height: "900px",
          }}
        >
          {!load && (
            <noscript>
              <a href={CALENDLY_URL}>Book an onboarding call</a>
            </noscript>
          )}
        </div>
      </div>
    </section>
  );
}
