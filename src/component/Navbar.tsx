import { Link, useLocation } from "react-router-dom";
import logo from "../asset/blackbox.png";
import { Package, Truck, ChevronRight, MoveRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import useSurfaceTone from "../hooks/useSurfaceTone";

/* hamburger bars: closed sits as three rules, open folds the outer two into an X
   while the middle one shrinks away */
const BARS = [
  { key: "top", top: 0, closed: { y: 0, rotate: 0, opacity: 1, scaleX: 1 }, open: { y: 6, rotate: 45, opacity: 1, scaleX: 1 } },
  { key: "mid", top: 6, closed: { y: 0, rotate: 0, opacity: 1, scaleX: 1 }, open: { y: 0, rotate: 0, opacity: 0, scaleX: 0.4 } },
  { key: "bot", top: 12, closed: { y: 0, rotate: 0, opacity: 1, scaleX: 1 }, open: { y: -6, rotate: -45, opacity: 1, scaleX: 1 } },
];

const text = "BlackBoxPreps";
/* "BlackBox" follows the surface tone, "Preps" keeps the red gradient */
const BRAND_SPLIT = "BlackBox".length;
const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const MOBILE_LINKS = [
  { to: "/", label: "Home" },
  { to: "/pricing", label: "Pricing" },
  { to: "/aboutUs", label: "About Us" },
];

const MOBILE_SERVICES = [
  { to: "/service/fba", label: "FBA & WFS", hint: "Amazon fulfillment", icon: Package },
  { to: "/service/fbm", label: "FBM & Wholesale", hint: "Merchant fulfillment", icon: Truck },
];

/* the sheet unrolls from the bar's edge, then the rows fall in behind it */
const sheetVariants: Variants = {
  hidden: { opacity: 0, y: -12, scaleY: 0.9, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    scaleY: 1,
    filter: "blur(0px)",
    transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
  },
};

const listVariants: Variants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.1, staggerChildren: 0.055 } },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, x: -14 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] } },
};

/* pages whose hero is meant to run under a bare bar until the user scrolls */
const BARE_AT_TOP = ["/", "/pricing"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  /* what is scrolling past underneath — drives whether the bar reads black or white */
  const tone = useSurfaceTone(navRef);
  const onLight = tone === "light";

  const { pathname } = useLocation();
  const canGoBare = BARE_AT_TOP.includes(pathname.toLowerCase());
  const [scrolled, setScrolled] = useState(() => window.scrollY > 8);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* a tap that navigates should leave the sheet behind */
  useEffect(() => setOpen(false), [pathname]);

  /* Escape closes it, and the page underneath stays put while it is open */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  /* resting at the top of home/pricing: the bar drops its glass entirely and lets the
     hero run through it — the moment the page moves, the normal panel fades back in */
  const bare = canGoBare && !scrolled;

  /* frosted panel: same glass on both, only the tint flips with the surface.
     shared by the bar and the services dropdown so they read as one material */
  const glass = "backdrop-blur-xl backdrop-saturate-150";
  const panel = onLight
    ? "bg-white/45 border-black/10 shadow-black/10"
    : "bg-black/35 border-white/15 shadow-black/50";
  /* links / buttons: fully transparent, outline only — no fill, no backdrop blur */
  const pill = bare
    ? /* nothing but the label at rest — the outline comes back with the panel */
      "bg-transparent border-transparent hover:border-red-400/70"
    : onLight
    ? "bg-transparent border-black/15 hover:border-red-500/60"
    : "bg-transparent border-white/20 hover:border-red-400/70";
  const inkStrong = onLight ? "text-gray-900" : "text-white";
  const ink = onLight ? "text-gray-800" : "text-gray-100";

  return (
    <nav
      ref={navRef}
      className={`bg-transparent w-full h-16 flex-center fixed px-2 top-2 z-50 transition-all duration-500`}
    >
      <div className="relative w-md sm:min-w-xl mx-4 md:max-w-5xl md:min-w-3xl lg:min-w-5xl lg:mx-auto rounded-lg px-3 h-12 lg:h-14 flex-between">
        {/* the bar's glass lives on its own layer, not on the element that wraps the
            dropdown — a backdrop-filtered ancestor becomes the backdrop root, which
            leaves any nested backdrop-filter (the dropdown) with nothing to sample */}
        <span
          aria-hidden
          className={`pointer-events-none absolute inset-0 -z-10 rounded-lg border shadow-lg transition-all duration-500 ${glass} ${panel} ${
            /* faded out rather than unmounted so the glass eases in on the first scroll */
            bare ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Logo */}
       

<Link to="/" className="flex lg:ml-2 group items-center text-gray-900 overflow-hidden" onClick={() => setOpen(false)}>
          <motion.img 
            initial={{x:-45}} 
            animate={{ x: 0 }}
            transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
            src={logo} 
            alt="Logo" 
            className="h-10 w-10 object-cover  rounded-md" 
          />
          
          <motion.h2 
            className="relative font-inter  font-semibold bg-gradient-to-r from-red-600 to-red-700 pl-1 hidden md:block text-2xl text-transparent bg-clip-text"
          >
            <motion.div 
              className="absolute bottom-0 w-8 h-[2px] bg-black"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
              style={{ originX: 0 }}
            />
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                /* "BlackBox" is painted solid so it stays legible; only "Preps" is left
                   transparent for the parent's red gradient to show through */
                className={index < BRAND_SPLIT ? "transition-colors duration-500" : undefined}
                style={
                  index < BRAND_SPLIT
                    ? { color: onLight ? "#111827" : "#ffffff" }
                    : undefined
                }
              >
                {char}
              </motion.span>
            ))}
          </motion.h2>
        </Link>



        <ul
          className={`hidden lg:flex font-inter text-xs gap-2 pl-6 items-center transition-colors duration-500 ${ink}`}
        >
          <li className="transition duration-300">
            <Link
              to="/"
              className={`inline-block rounded-md border px-3 py-2 transition-all duration-300 ${pill}`}
            >
              Home
            </Link>
          </li>
          <li className="transition">
            <Link
              to="/Pricing"
              className={`inline-block rounded-md border px-3 py-2 transition-all duration-300 ${pill}`}
            >
              Pricing
            </Link>
          </li>
          <li className="group relative ml-1">
            <span
              className={`cursor-pointer inline-block rounded-md border px-3 py-2 font-medium transition-all duration-300 ${pill}`}
            >
              Services
            </span>
            <ul
              className={`absolute top-full left-5  w-48 border rounded-lg shadow-lg p-2 opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-300 origin-top  ${glass} ${panel}`}
            >
              <li className="flex items-center gap-2 p-2 rounded-lg hover:text-red-500 mb-2 transition-all duration-300 group/item">
                <div className="flex items-center justify-center w-8 h-8 bg-red-500/20 border border-red-500/40 rounded-lg">
                  <Package className="text-red-500 w-4 h-4" />
                </div>
                <Link to="/service/fba" className="flex-1">
                  <span className="block text-sm font-semibold">FBA & WFS</span>
                  {/* collapsed to zero height until hover, so the title sits centred
                      against the icon and then slides up as the subtitle opens */}
                  <span className="grid grid-rows-[0fr] transition-all duration-300 group-hover/item:grid-rows-[1fr]">
                    <span className="overflow-hidden">
                      <span
                        className={`block text-xs opacity-0 transition-opacity duration-300 group-hover/item:opacity-100 ${ink}`}
                      >
                        Amazon fulfillment
                      </span>
                    </span>
                  </span>
                </Link>
              </li>
              <li className="flex items-center gap-2 p-2 rounded-lg hover:text-red-500 transition-all duration-300 group/item">
                <div className="flex items-center justify-center w-8 h-8 bg-red-500/20 border border-red-500/40 rounded-lg">
                  <Truck className="text-red-500 w-4 h-4" />
                </div>
                <Link to="/service/fbm" className="flex-1">
                  <span className="block text-sm font-semibold">FBM</span>
                  <span className="grid grid-rows-[0fr] transition-all duration-300 group-hover/item:grid-rows-[1fr]">
                    <span className="overflow-hidden">
                      <span
                        className={`block text-xs opacity-0 transition-opacity duration-300 group-hover/item:opacity-100 ${ink}`}
                      >
                        Merchant fulfillment
                      </span>
                    </span>
                  </span>
                </Link>
              </li>
            </ul>
          </li>
          <li className="transition">
            <Link
              to="/aboutUs"
              className={`mx-1 inline-block rounded-md border px-2 py-2 transition-all duration-300 ${pill}`}
            >
              About Us
            </Link>
          </li>
          <div className="flex-between gap-4  ">


              <Link to="/quote" className={`group overflow-hidden flex-between ml-42 rounded-xl w-fit  bg-transparent py-1 text-sm font-semibold  transition-all duration-300  ${inkStrong}`}>
                         <ChevronRight className=" -translate-x-6  group-hover:translate-x-4 transition duration-700"/>

              <span className=" py-1.5 px-4 rounded-lg -translate-x-4 group-hover:translate-x-4 transition duration-700">Send Inventory</span>
              <MoveRight className="p-0.5 -translate-x-4 group-hover:translate-x-8 transition duration-700"/>
            </Link>
          </div>
        </ul>
         
{/* bg-[#292929] */}
        {/* Mobile Hamburger */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={`group relative grid h-10 w-10 place-items-center rounded-lg border transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 ${pill}`}
            onClick={() => setOpen(!open)}
          >
            {/* three bars that fold into an X — the middle one collapses outward */}
            <span className="relative block h-[14px] w-[20px]">
              {BARS.map((bar) => (
                <motion.span
                  key={bar.key}
                  className={`absolute left-0 block h-[2px] w-full rounded-full ${
                    onLight ? "bg-gray-900" : "bg-white"
                  }`}
                  style={{ top: bar.top, originX: 0.5 }}
                  animate={open ? bar.open : bar.closed}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                />
              ))}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu — lg:hidden, matching the hamburger's own breakpoint */}
      <AnimatePresence>
        {open && (
          <>
            {/* scrim: dims the page and catches the tap that closes the sheet */}
            <motion.button
              type="button"
              aria-label="Close menu"
              className="lg:hidden fixed inset-0 -z-10 cursor-default bg-black/40 backdrop-blur-[2px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              variants={sheetVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              /* same glass as the bar so the sheet reads as the bar unfolding */
              className={`lg:hidden absolute top-full left-0 right-0 mx-4 mt-2 origin-top overflow-hidden rounded-2xl border shadow-2xl ${glass} ${panel}`}
            >
              <motion.ul
                variants={listVariants}
                initial="hidden"
                animate="visible"
                className={`flex flex-col gap-1 p-3 font-inter ${ink}`}
              >
                {MOBILE_LINKS.map((item) => {
                  const active = pathname.toLowerCase() === item.to.toLowerCase();
                  return (
                    <motion.li key={item.to} variants={rowVariants}>
                      <Link
                        to={item.to}
                        onClick={() => setOpen(false)}
                        className={`group relative flex items-center justify-between overflow-hidden rounded-xl border px-4 py-3 font-medium transition-all duration-300 ${
                          active
                            ? "border-red-500/40 bg-red-500/10 text-red-500"
                            : `border-transparent hover:border-red-500/30 hover:bg-red-500/5 ${inkStrong}`
                        }`}
                      >
                        {/* accent rail: pinned open on the current route, wipes in on hover */}
                        <span
                          aria-hidden
                          className={`absolute left-0 top-1/2 h-6 w-[3px] -translate-y-1/2 rounded-r-full bg-red-500 transition-transform duration-300 ${
                            active ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"
                          }`}
                        />
                        <span>{item.label}</span>
                        <ChevronRight className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-70" />
                      </Link>
                    </motion.li>
                  );
                })}

                <motion.li variants={rowVariants} className="flex flex-col gap-1 pt-2">
                  <span className={`px-4 pb-1 text-[11px] font-semibold uppercase tracking-[0.18em] opacity-60 ${ink}`}>
                    Services
                  </span>
                  {MOBILE_SERVICES.map((svc) => (
                    <Link
                      key={svc.to}
                      to={svc.to}
                      onClick={() => setOpen(false)}
                      className={`group flex items-center gap-3 rounded-xl border border-transparent px-4 py-3 transition-all duration-300 hover:border-red-500/30 hover:bg-red-500/5 ${inkStrong}`}
                    >
                      <span className="grid h-9 w-9 place-items-center rounded-lg border border-red-500/40 bg-red-500/15 transition-transform duration-300 group-hover:scale-105">
                        <svc.icon className="h-4 w-4 text-red-500" />
                      </span>
                      <span className="flex-1">
                        <span className="block text-sm font-semibold">{svc.label}</span>
                        <span className={`block text-xs opacity-70 ${ink}`}>{svc.hint}</span>
                      </span>
                      <ChevronRight className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-70" />
                    </Link>
                  ))}
                </motion.li>

                {/* CTAs */}
                <motion.li
                  variants={rowVariants}
                  className={`mt-2 flex items-center gap-2 border-t pt-3 ${
                    onLight ? "border-black/10" : "border-white/10"
                  }`}
                >
                  <Link
                    to="https://dashboard.blackboxpreps.com/login"
                    className={`group flex flex-1 items-center justify-center gap-1 rounded-xl border px-3 py-3 text-sm font-semibold transition-all duration-300 ${
                      onLight
                        ? "border-black/15 text-gray-900 hover:border-black/40"
                        : "border-white/20 text-white hover:border-white/50"
                    }`}
                  >
                    Dashboard
                    <ChevronRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                  </Link>
                  <Link
                    to="/quote"
                    onClick={() => setOpen(false)}
                    className="group flex flex-1 items-center justify-center gap-1 rounded-xl bg-gradient-to-r from-red-600 to-red-800 px-3 py-3 text-sm font-semibold text-white shadow-lg shadow-red-900/30 transition-all duration-300 hover:from-red-500 hover:to-red-700"
                  >
                    Get a Quote
                    <MoveRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                  </Link>
                </motion.li>
              </motion.ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}