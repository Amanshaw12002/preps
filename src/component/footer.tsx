/* THESE TWO ICONS USED TO COST 40% OF THE ENTRY CHUNK.
   They were `import { FaInstagram, FaTwitter } from "react-icons/fa"`, and that
   path is a barrel over the entire Font Awesome set — attributing the bundle
   through its sourcemap, react-icons was 1,337 KB of the 3,288 KB of source in
   the entry chunk, for two 14px glyphs in the footer. Nothing was wrong with
   the icons; the import specifier was the whole problem.

   lucide-react was already a dependency and already used three lines below, and
   it exports one module per icon, so it costs what it draws: 13 KB total for
   every icon on the site.

   The other react-icons import in the tree is `component/slider.tsx`, which
   nothing imports — so it never reaches a bundle. Worth knowing before anyone
   wires that file up again. */
import { motion, type Variants } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { settleScrollTo } from "./lenis";
import Logo from "./Logo";
import { MapPin, Phone, Mail, Instagram, Twitter, ExternalLink } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const quickLinks = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/aboutUs" },
  { name: "Get a Quote", to: "/quote" },
  /* Points at the SECTION on the home page, not at the `/faq` route. The
     answers are the same component either way (`Home.tsx` renders `page/FAQ`),
     and sending someone to a whole page for a block they can read in place is
     a navigation nobody asked for.
     Consequence to keep in mind: the standalone `/faq` route is now linked
     from nothing but the 404 page while still being listed in
     `public/sitemap.xml` — a URL crawlers are told to index and no visitor
     reaches. Removing that sitemap entry is the tidy end of this. */
  { name: "FAQ", to: "/#faq" },
];

// These were three <a href="#"> — a dead Privacy Policy on a site that asks
// people to ship it their inventory.
const legalLinks = [
  { name: "Privacy Policy", to: "/privacy" },
  { name: "Terms of Service", to: "/terms" },
  { name: "Cookie Policy", to: "/cookies" },
];

const serviceLinks = [
  { name: "Amazon FBA Prep", to: "/service/fba" },
  { name: "FBM Prep", to: "/service/fbm" },
  { name: "Pricing", to: "/pricing" },
];

/* The printed address is split in two for its line break; the map query is
   deliberately a DIFFERENT string, not those two lines rejoined. Geocoding
   the raw street address drops an unlabelled pin roughly on the right block.
   Searching the business name instead resolves to their actual Google
   Business listing — a labelled pin, the 5.0★ (16) rating, and a built-in
   "Directions" button in the info card — checked by loading both queries in
   a real iframe before choosing this one. Keyless: `/maps?q=...&output=embed`
   is Google's own no-API-key embed form, not a styled Maps JS/API embed that
   would need billing set up to avoid a "for development purposes only"
   watermark. */
const ADDRESS_LINE_1 = "9 Brookside Drive, Unit B,";
const ADDRESS_LINE_2 = "Wilmington DE 19804";
const MAPS_QUERY = encodeURIComponent("Black Box Prep Center, Wilmington DE");
const MAPS_EMBED_SRC = `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`;
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;

// Facebook was here with `to: ""`, which navigates to the current page. An icon
// that looks like a profile link and goes nowhere reads as an abandoned
// business. Add it back the moment there is a URL for it.
const socials = [
  { icon: Twitter, label: "Twitter", to: "https://x.com/BlackboxPreps" },
  {
    icon: Instagram,
    label: "Instagram",
    to: "https://www.instagram.com/blackboxprepco/",
  },
];

type Props = {
  /** The cube sign-off (`<IsometricHero ownBackground={false} />`, already
      wrapped in its lazy-load/`DeferUntilNear` gating by `App.tsx`). Taken as
      a slot rather than imported here so this file stays ignorant of that
      wiring — it only needs somewhere to put it, sharing this element's
      background instead of drawing its own and printing as a second, visibly
      separate block. It renders BETWEEN the link columns and the bottom bar,
      not above everything else — see the layout below. */
  children?: React.ReactNode;
};

export default function Footer({ children }: Props) {
  const { pathname, hash } = useLocation();

  /**
   * Handles the one case a `<Link to="/#faq">` cannot: being clicked while the
   * URL is ALREADY `/#faq`. React Router pushes an identical location, nothing
   * in `useLocation` changes, `HashScroll`'s effect never re-runs, and the link
   * is dead on the second click — which is precisely when someone has scrolled
   * away and wants to come back.
   *
   * Returns undefined for every other link, so nothing else pays for this.
   */
  const onQuickLink = (to: string) => {
    const [path, id] = to.split("#");
    if (!id) return undefined;
    return (e: React.MouseEvent) => {
      const samePage = (path || "/") === pathname;
      if (!samePage) return; // let the router navigate; HashScroll takes it
      e.preventDefault();
      /* Deliberately not conditional on `hash` matching. Scrolling to a section
         you are already looking at is harmless; a link that does nothing is
         not. */
      void hash;
      /* Same settling loop the cross-route path uses. A one-shot scroll from
         here overshot the FAQ by 137px, because the calendar above it resizes
         after the scroll lands. */
      settleScrollTo(id);
    };
  };

  return (
    <footer
      className="relative overflow-hidden"
      /* The SAME gradient `IsometricHero` draws for itself when it owns its
         own background (`ownBackground` true) — applied here instead, across
         the whole element, now that the cube renders with `ownBackground`
         false and no background of its own. One source for the colour, so the
         columns above the cube, the cube itself and the bottom bar below it
         all read as one environment rather than the flat `#0a0a0a` this used
         to be. */
      style={{
        background:
          "radial-gradient(ellipse 90% 70% at 50% 42%, #180305 0%, #0a0203 45%, #030102 100%)",
      }}
    >
      <div className="relative mx-auto max-w-6xl px-4">
        {/* Link columns, ROW 1 — logo + Links + Services. THREE, not four:
            Get in Touch moved to its own row below, paired with a map — a
            fourth text column the same width as these three would leave the
            map either squeezed into a quarter-width sliver or badly
            mismatched with its neighbours.
            The logo cell was cut once before, as a third copy of the wordmark
            (plus a one-line description) sharing a screen with the nav bar
            above and the cube sign-off's own giant wordmark + tagline below.
            It's back with its description restored too — the cube sign-off
            lost both of those (see the cube slot lower down), so this is the
            only copy of either on screen now, not a third one.

            Each cell CENTERS its own content (`items-center`/`text-center`
            below), rather than the plain left-aligned block each used to be.
            Three roughly 380px-wide grid tracks holding maybe 150px of actual
            text left everything bunched against the left edge of its own
            column with the rest of that column's width sitting empty on the
            right of it — reading as a lopsided row with a void down its
            right side, worse than the map on row 2 makes it look by
            comparison (that row's two cells both fill their own width). */}
        <motion.div
          className="grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Logo. Same treatment `Navbar` gives its own wordmark — same
              font (`font-inter`), same red gradient clipped to "Preps" with
              "BlackBox" painted solid over it — rather than the flat
              `text-red-500` this carried before, which was Inter too but
              read as a slightly different mark next to the bar above it.
              NO WEIGHT UTILITY, same as `Navbar`'s `<h2>`: this had
              `font-semibold` (600) while the nav wordmark carries no
              font-weight class at all and renders at 400 — Tailwind's
              preflight resets headings' weight to `inherit` rather than the
              browser's default bold, and nothing else in the nav sets one.
              Checked both with `getComputedStyle` side by side: same
              `font-family` the whole time, genuinely different `font-weight`
              (600 vs 400), which is what actually read as "a different
              font". Font-SIZE still differs (text-lg here vs the nav's
              text-2xl) — deliberately: this is the smaller, secondary
              instance of the mark. `flex flex-col items-center`, same as the
              other two cells below — see the row's own comment for why. */}
          <motion.div variants={fadeUp} className="flex flex-col items-center text-center">
            <Link
              to="/"
              aria-label="BlackBoxPreps — home"
              className="inline-flex items-center gap-2"
            >
              <Logo size={38} decorative className="text-white" />
              <span className="font-inter bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-2xl text-transparent">
                <span className="text-white">BlackBox</span>Preps
              </span>
            </Link>
            {/* One-line description. Cut once before, when this sat above the
                cube's own giant sign-off and its "BUILD FOR PREP WORK"
                tagline — a third copy of what those two already said on the
                same screen. Both are gone now (see the cube slot below), so
                this is the only written description left down here. */}
            <p className="mt-6 flex text-start pl-8 max-w-64 text-sm leading-relaxed text-gray-400">
              Amazon FBA prep from Delaware's tax-free zone.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div variants={fadeUp} className="text-center">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
              Links
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    onClick={onQuickLink(item.to)}
                    className="group inline-flex items-center gap-1.5 text-sm text-gray-400 transition-colors duration-300 hover:text-white"
                  >
                    <span className="h-px w-0 bg-red-500 transition-all duration-300 group-hover:w-3" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeUp} className="text-center">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    className="group inline-flex items-center gap-1.5 text-sm text-gray-400 transition-colors duration-300 hover:text-white"
                  >
                    <span className="h-px w-0 bg-red-500 transition-all duration-300 group-hover:w-3" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

        </motion.div>

        {/* Link columns, ROW 2 — Get in Touch, now paired with a map instead
            of sharing a row with Links/Services. Two columns, not the same
            three: the map needs real width to be worth looking at, and a
            fourth text-sized slot next to Links/Services above is neither
            wide enough for that nor tall enough to hold both the contact
            list and a map that isn't a postage stamp. */}
        <motion.div
          className="mt-16 grid grid-cols-1 gap-10  pb-14 lg:px-24 lg:grid-cols-2"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Contact */}
          <motion.div variants={fadeUp}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
              Get in Touch
            </h3>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg  text-red-500">
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="text-sm leading-relaxed text-gray-400">
                  {ADDRESS_LINE_1}
                  <br />
                  {ADDRESS_LINE_2}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg  text-red-500">
                  <Phone className="h-4 w-4" />
                </span>
                <a
                  href="tel:+12016286391"
                  className="text-sm text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  201-628-6391
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-red-500">
                  <Mail className="h-4 w-4" />
                </span>
                <a
                  href="mailto:contact@blackboxprepcenter.com"
                  className="text-sm text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  {/* Was "blackboxprepcenter.com" over a mailto: — a link that
                      looks like a website and opens a mail client. Show the
                      address it actually sends to. */}
                  contact@blackboxprepcenter.com
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Map. The iframe stays interactive (Google's own pan/zoom/pin,
              including the "View larger map" link its own UI carries) rather
              than being wrapped in an `<a>` to make the whole box clickable —
              `<iframe>` is interactive content and an `<a>` must not contain
              interactive content, and a `pointer-events-none` iframe would
              show Google's zoom controls while silently ignoring clicks on
              them. The explicit "Get directions" link below is the
              unambiguous click target for actually leaving the site. */}
          <motion.div variants={fadeUp}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
              Find Us
            </h3>
            <div className="mt-5 overflow-hidden rounded-xl border border-white/10">
              <iframe
                title="BlackBoxPreps location on Google Maps"
                src={MAPS_EMBED_SRC}
                className="h-56 w-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noreferrer"
              className="group mt-3 inline-flex items-center gap-1.5 text-sm text-gray-400 transition-colors duration-300 hover:text-white"
            >
              <span className="h-px w-0 bg-red-500 transition-all duration-300 group-hover:w-3" />
              Get directions
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Cube sign-off slot — BELOW the link columns, ABOVE the bottom bar.
            Used to sit above the columns, in what was a "CTA band" here — a
            "Ready to hand off your prep work?" headline with two buttons —
            which got cut, leaving an empty `motion.div` that kept only its
            `border-b` class: a stray horizontal line drawn across the footer
            for content that no longer existed. */}
        {children}

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 md:flex-row">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} BlackBoxPreps. All rights reserved.
          </p>
          {/* Legal links and socials share the right-hand end of the bottom
              bar. They stay in SEPARATE nav landmarks with their own labels —
              one wrapper would announce "Privacy Policy, Terms of Service,
              Cookie Policy, Twitter, Instagram" as one list, which is two
              unrelated things read as one. */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
            <nav aria-label="Legal" className="flex gap-6">
              {legalLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className="text-xs text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <nav aria-label="Social" className="flex gap-2.5">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  to={social.to}
                  aria-label={social.label}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:border-red-600/50 hover:bg-red-600 hover:text-white"
                >
                  <social.icon className="h-3.5 w-3.5" />
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
