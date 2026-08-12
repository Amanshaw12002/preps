import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import inside from "../asset/inside.webp";
import insideAvif from "../asset/inside.avif";
import inside1024 from "../asset/inside-1024.webp";
import insideAvif1024 from "../asset/inside-1024.avif";
import {
  MapPin,
  PackageCheck,
  Truck,
  ChevronRight,
  MoveRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import CaptureWord from "../component/CaptureWord";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* Headline slash — the red cut that sweeps from "Wo|rk" down past "Need|s." */
const SLASH_START = 0.95;
const SLASH_DURATION = 1.15;
/* how far above the headline the cut begins — enough to clear the top of the screen */
const SLASH_RISE = 460;
/* the blade runs a quarter longer than that, all of it added below the headline */
const SLASH_TAIL = Math.round((SLASH_RISE + 280) * 0.25);
/* when the tip reaches each cut letter, as a fraction of the sweep (eased, so not linear in distance) */
const HIT_ROW1 = 0.51;
const HIT_ROW3 = 0.62;
/* extra red streaks fanned around the main cut — px offset from the blade, own tilt, own timing */
const slashShards = [
  { offset: -26, width: 5, tilt: -4, delay: 0.06, opacity: 0.5, blur: 1 },
  { offset: -14, width: 2, tilt: -2, delay: 0.02, opacity: 0.85, blur: 0 },
  { offset: -6, width: 1, tilt: 1, delay: 0.12, opacity: 0.6, blur: 0 },
  { offset: 7, width: 2, tilt: 2, delay: 0.0, opacity: 0.9, blur: 0 },
  { offset: 15, width: 1, tilt: 3, delay: 0.09, opacity: 0.55, blur: 1 },
  { offset: 30, width: 1, tilt: 6, delay: 0.16, opacity: 0.4, blur: 2 },
];

/* red ramp for the middle headline row, applied per word */
const GRADIENT_WORD =
  "bg-gradient-to-r from-red-400  to-red-500 bg-clip-text text-transparent";

/* Falling light streaks — left position, streak height, fall duration, start delay, red vs white */
const beams = [
  { left: "6%", height: 140, duration: 5.5, delay: 0.0, red: true },
  { left: "16%", height: 90, duration: 7.0, delay: 2.1, red: false },
  { left: "27%", height: 170, duration: 4.6, delay: 1.2, red: true },
  { left: "41%", height: 110, duration: 6.4, delay: 3.4, red: false },
  { left: "58%", height: 150, duration: 5.0, delay: 0.8, red: true },
  { left: "71%", height: 100, duration: 6.8, delay: 2.7, red: false },
  { left: "84%", height: 160, duration: 4.9, delay: 1.7, red: true },
  { left: "94%", height: 120, duration: 6.1, delay: 3.9, red: false },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  // 0 → hero pinned at top, 1 → hero scrolled out of view
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  // scrolling pushes the beams further down and fades them — light "pours" with the scroll
  const beamShift = useTransform(scrollYProgress, [0, 1], [0, 320]);
  const beamOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const glowShift = useTransform(scrollYProgress, [0, 1], [0, 140]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#0a0a0a]">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        {/* red glow — drifts down slightly with scroll */}
        <motion.div
          style={{ y: glowShift }}
          className="absolute -top-20 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-red-700/25 blur-[140px]"
        />
        <div className="absolute bottom-0 right-0 h-[300px] w-[500px] rounded-full bg-red-900/20 blur-[120px]" />
        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.35) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          }}
        />

        {/* falling light streaks, parallaxed by scroll */}
        <motion.div
          style={{ y: beamShift, opacity: beamOpacity, willChange: "transform, opacity" }}
          className="absolute inset-0"
        >
          {beams.map((beam, i) => (
            <motion.span
              key={i}
              className="absolute w-px"
              style={{
                left: beam.left,
                top: -beam.height,
                height: beam.height,
                background: beam.red
                  ? "linear-gradient(to bottom, transparent, rgba(239,68,68,0.9), rgba(239,68,68,0.15))"
                  : "linear-gradient(to bottom, transparent, rgba(255,255,255,0.6), rgba(255,255,255,0.1))",
                boxShadow: beam.red
                  ? "0 0 12px rgba(239,68,68,0.5)"
                  : "0 0 8px rgba(255,255,255,0.25)",
                willChange: "transform",
              }}
              animate={{ y: ["0vh", "120vh"] }}
              transition={{
                duration: beam.duration,
                delay: beam.delay,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </motion.div>
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 pt-12 pb-16 text-center sm:pt-42 sm:pb-24">

        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="relative z-10 mb-6 flex flex-wrap items-center justify-center gap-2"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium tracking-wide text-red-400 backdrop-blur-sm sm:text-xs">
            <MapPin className="h-3.5 w-3.5 text-red-400" />
            Delaware — Tax-Free Zone
          </span>

        </motion.div>

        {/* The wireframe beam cube that used to sit here is REMOVED. It was
            absolutely positioned at a fixed `top-[190px]` with a fixed 300px
            size, so it did not move or shrink with the headline — on a narrow
            screen the headline grows taller and the cube landed on top of it,
            drawn over the words at z-[11]. Its position could have been made
            responsive, but a decorative object overlapping the one sentence
            that says what the business does is not worth tuning. */}

        {/* Heading */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-inter relative z-10 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          {/* the slash — a red beam that cuts down through "Wo|rk" ... "Need|s." */}
          <span className="pointer-events-none absolute inset-0 z-20 overflow-visible">
            {/* everything below lives on the tilted axis of the cut */}
            {/* pivots at the old headline-top point, so the letter cuts stay put while the
                blade extends up past the top of the screen */}
            <span
              className="absolute left-[82%] block w-[220px]"
              style={{
                top: `calc(-10% - ${SLASH_RISE}px)`,
                height: `calc(120% + ${SLASH_RISE + SLASH_TAIL}px)`,
                transform: "translateX(-50%) rotate(13deg)",
                transformOrigin: `center ${SLASH_RISE}px`,
                // the tail dissolves once it is past the last cut letter
                maskImage:
                  "linear-gradient(to bottom, #000 0%, #000 80%, rgba(0,0,0,0.35) 90%, transparent 97%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, #000 0%, #000 80%, rgba(0,0,0,0.35) 90%, transparent 97%)",
              }}
            >
              {/* wide haze — the radiance bleeding off the cut */}
              <motion.span
                className="absolute top-0 h-full w-[54px] rounded-full bg-red-600/30 blur-[26px]"
                style={{ left: "50%", x: "-50%", originY: 0 }}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: [0, 0.9, 0.5] }}
                transition={{ delay: SLASH_START, duration: SLASH_DURATION, ease: [0.65, 0, 0.35, 1] }}
              />
              {/* tighter bloom hugging the blade */}
              <motion.span
                className="absolute top-0 h-full w-[22px] rounded-full bg-red-500/60 blur-[14px]"
                style={{ left: "50%", x: "-50%", originY: 0 }}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: [0, 1, 0.7] }}
                transition={{ delay: SLASH_START, duration: SLASH_DURATION, ease: [0.65, 0, 0.35, 1] }}
              />
              {/* fanned streaks flanking the cut */}
              {slashShards.map((shard, i) => (
                <motion.span
                  key={i}
                  className="absolute top-0 h-full rounded-full"
                  style={{
                    left: "50%",
                    width: shard.width,
                    x: `calc(-50% + ${shard.offset}px)`,
                    rotate: shard.tilt,
                    originY: 0,
                    filter: shard.blur ? `blur(${shard.blur}px)` : undefined,
                    background:
                      "linear-gradient(to bottom, rgba(239,68,68,0), rgba(239,68,68,1) 15%, rgba(255,160,160,1) 50%, rgba(239,68,68,1) 85%, rgba(239,68,68,0))",
                    boxShadow: "0 0 6px rgba(239,68,68,0.9)",
                  }}
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={{
                    scaleY: 1,
                    opacity: [0, shard.opacity, shard.opacity * 0.55, shard.opacity],
                  }}
                  transition={{
                    scaleY: {
                      delay: SLASH_START + shard.delay,
                      duration: SLASH_DURATION,
                      ease: [0.65, 0, 0.35, 1],
                    },
                    opacity: {
                      delay: SLASH_START + shard.delay,
                      duration: 2.6 + i * 0.3,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                    },
                  }}
                />
              ))}
              {/* the cut itself — white-hot core */}
              <motion.span
                className="absolute top-0 h-full w-[3px] rounded-full"
                style={{
                  left: "50%",
                  x: "-50%",
                  originY: 0,
                  background:
                    "linear-gradient(to bottom, rgba(239,68,68,0), rgba(255,120,120,1) 8%, rgba(255,255,255,1) 45%, rgba(255,120,120,1) 92%, rgba(239,68,68,0))",
                  boxShadow:
                    "0 0 4px rgba(255,255,255,1), 0 0 12px rgba(255,120,120,1), 0 0 30px rgba(239,68,68,0.85)",
                }}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: [0, 1, 1, 0.95] }}
                transition={{ delay: SLASH_START, duration: SLASH_DURATION, ease: [0.65, 0, 0.35, 1] }}
              />
              {/* spark head riding the tip of the cut as it travels down */}
              <motion.span
                className="absolute left-1/2 h-[46px] w-[46px] rounded-full blur-[6px]"
                style={{
                  x: "-50%",
                  y: "-50%",
                  background:
                    "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,180,180,0.9) 25%, rgba(239,68,68,0.55) 50%, rgba(239,68,68,0) 72%)",
                }}
                initial={{ top: "0%", opacity: 0, scale: 0.4 }}
                animate={{ top: "100%", opacity: [0, 1, 1, 0], scale: [0.4, 1.25, 1, 0.6] }}
                transition={{ delay: SLASH_START, duration: SLASH_DURATION, ease: [0.65, 0, 0.35, 1] }}
              />
              {/* residual flicker — the cut keeps breathing once it has landed */}
              <motion.span
                className="absolute top-0 h-full w-[10px] rounded-full bg-red-400/70 blur-[9px]"
                style={{ left: "50%", x: "-50%" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.25, 0.85, 0.4, 0.75, 0.25], scaleX: [1, 1.8, 1.1, 1.5, 1] }}
                transition={{
                  delay: SLASH_START + SLASH_DURATION,
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </span>
          </span>

          <span className="relative">
            <CaptureWord>Optimized</CaptureWord> <CaptureWord>Prep</CaptureWord>{" "}
            <CaptureWord>
              Wo
              <motion.span
                initial={{ color: "#ffffff" }}
                animate={{ color: "#ef4444" }}
                transition={{ delay: SLASH_START + SLASH_DURATION * HIT_ROW1, duration: 0.35 }}
              >
                rk
              </motion.span>
            </CaptureWord>
          </span>
          {/* gradient sits on each word, not the row — an inline-block child breaks the
              parent's bg-clip-text and the whole line renders invisible */}
          <span className="inline-block">
            <CaptureWord>
              <span className={GRADIENT_WORD}>For</span>
            </CaptureWord>{" "}
            <CaptureWord>
              <span className={GRADIENT_WORD}>All</span>
            </CaptureWord>{" "}
            <CaptureWord>
              <span className={GRADIENT_WORD}>Fulfillment</span>
            </CaptureWord>{" "}
            {/* "Needs." IS ONE WORD and has to be kept as one. It is split into
                two elements so the slash can cut between the "d" and the "s",
                and those two used to sit in different parents with a space
                between them — so on a phone the line broke there and the
                headline read "Need" / "s." on separate lines. The wrapping span
                is `whitespace-nowrap` AND the two children are adjacent with no
                whitespace between them; either alone is enough, both together
                mean a future reformat cannot quietly reintroduce it. */}
            <span className="relative whitespace-nowrap">
              {/* ONE CaptureWord around the whole of "Needs.", not one each.
                  The letters were already flush — measured, the gap between the
                  two boxes is 0px — but the hover targeting box is per
                  CaptureWord, so hovering drew a bracket around "Need" and left
                  "s." outside it, which reads as the word being split in two.
                  The two spans stay separate inside it because they are
                  coloured differently: "Need" carries the gradient and "s."
                  turns red as the slash passes through it. */}
              <CaptureWord>
                <span className={GRADIENT_WORD}>Need</span>
                <motion.span
                  initial={{ color: "#ffffff" }}
                  animate={{ color: "#ef4444" }}
                  transition={{ delay: SLASH_START + SLASH_DURATION * HIT_ROW3, duration: 0.35 }}
                >
                  s.
                </motion.span>
              </CaptureWord>
            </span>
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-6 max-w-xl text-sm leading-relaxed text-gray-100 sm:text-gray-200"
        >
          Safe storage, professional packing
          &amp; fast shipping — your products are always ready to reach customers
          quickly and securely.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Link
            to="https://dashboard.blackboxpreps.com/login"
            className="btn-left-flash inline-flex items-center gap-2 rounded-xl border border-white/20 bg-transparent px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40"
          >
            Dashboard
          </Link>
             <Link to="/quote" className={`group text-red-600 bg-white overflow-hidden flex-between rounded-xl w-fit py-2 text-sm font-semibold  transition-all duration-300  `}>
                         <ChevronRight className=" -translate-x-6  group-hover:translate-x-4 transition duration-700"/>

              <span className=" py-1.5 px-4 rounded-lg -translate-x-4 group-hover:translate-x-4 transition duration-700">Send Inventory</span>
              <MoveRight className="p-0.5 -translate-x-4 group-hover:translate-x-8 transition duration-700"/>
            </Link>
        </motion.div>

     

        {/* Facility photo — inside the BlackBoxPreps prep center */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          /* `whileHover={{ scale: 1.05 }}` REMOVED. This block is `w-full` up to
             max-w-5xl, so below about 1024px it is the full width of the page —
             scaling it 5% pushed 2.5% off each edge and the photo bled past the
             screen on hover. It could not be clipped either: the red glow behind
             it is deliberately outside the box (`-inset-x-8`), so an
             overflow-hidden wrapper would have cut the glow instead. A 5% jump
             on a picture that is not a link or a button is not worth a layout
             this fragile. */
          transition={{ delay: 0.7, duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative mt-14 w-full max-w-5xl"
        >
          <div className="absolute -inset-x-8 top-8 -z-10 h-full rounded-[40px] bg-red-600/20 blur-3xl" />
          {/* animated border: two light beams orbit the frame in opposite directions */}
          <div className="relative overflow-hidden rounded-2xl bg-white/10 p-[1.5px] shadow-2xl shadow-black/60">
            {/* clockwise beam */}
            <motion.div
              className="pointer-events-none absolute -inset-[150%]"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0deg, transparent 290deg, rgba(239,68,68,0.5) 320deg, rgba(239,68,68,1) 342deg, rgba(255,220,220,1) 350deg, transparent 360deg)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
            {/* anti-clockwise beam — starts on the opposite side of the frame */}
            <motion.div
              className="pointer-events-none absolute -inset-[150%]"
              style={{
                background:
                  "conic-gradient(from 180deg, transparent 0deg, transparent 290deg, rgba(59,130,246,0.5) 320deg, rgba(59,130,246,1) 342deg, rgba(220,235,255,1) 350deg, transparent 360deg)",
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
          <div className="relative overflow-hidden rounded-[15px] bg-[#0a0a0a]">
            {/* THE LCP ELEMENT. Four things here are load-bearing: AVIF first
                (the browser takes the first source it understands), eager
                loading and fetchPriority so it is not queued behind everything
                else, and explicit width/height so the box is reserved before
                the bytes arrive. It measured 28.9 s, 4.1 s of which was pure
                discovery delay. */}
            {/* Two widths, not one. The frame is capped at max-w-5xl, so a
                phone was downloading a 2048px source for a ~380px box — 173 KiB
                of it wasted. `sizes` tells the browser the slot BEFORE layout,
                which is why it can pick correctly during preload. */}
            <picture>
              <source
                type="image/avif"
                srcSet={`${insideAvif1024} 1024w, ${insideAvif} 2048w`}
                sizes="(min-width: 1024px) 1024px, 100vw"
              />
              <source
                type="image/webp"
                srcSet={`${inside1024} 1024w, ${inside} 2048w`}
                sizes="(min-width: 1024px) 1024px, 100vw"
              />
              <img
                src={inside}
                alt="Inside the BlackBoxPreps prep center — inventory prepped and ready to ship"
                width={2048}
                height={2731}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="h-[340px] w-full object-cover object-center sm:h-[420px]"
              />
            </picture>
            {/* cinematic fade so the photo melts into the section */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-transparent to-black/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-black/45" />

            {/* caption chip */}
            <motion.div
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.15, duration: 0.6 }}
              className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-4 py-2 backdrop-blur-md sm:left-6 sm:top-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
              </span>
              <span className="text-xs font-semibold text-white">
                Inside our Delaware prep center
              </span>
            </motion.div>

            {/* Floating status chips.
                They were BOTH pinned to the same row — one bottom-left, one
                bottom-right. Each is about 180px wide, so on a 390px screen
                they met in the middle and the second printed over the first:
                "Shipment prep|Out for delivery". They stack on mobile
                (full-width, one above the other) and return to opposite corners
                from sm up, where there is room for both. */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.35, duration: 0.7 }}
              className="absolute bottom-32 left-4 right-4 flex items-center gap-2.5 rounded-xl border border-white/10 bg-black/70 px-4 py-2.5 shadow-xl shadow-black/50 backdrop-blur-md sm:bottom-20 sm:left-6 sm:right-auto"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-600/20 text-red-500">
                <PackageCheck className="h-4 w-4" />
              </span>
              <span className="text-left">
                <span className="block text-xs font-semibold text-white">
                  Shipment prepped
                </span>
                <span className="block text-xs text-gray-400">
                  FNSKU labeled — FBA compliant
                </span>
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.55, duration: 0.7 }}
              className="absolute bottom-16 left-4 right-4 flex items-center gap-2.5 rounded-xl border border-white/10 bg-black/70 px-4 py-2.5 shadow-xl shadow-black/50 backdrop-blur-md sm:bottom-20 sm:left-auto sm:right-6"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-600/20 text-red-500">
                <Truck className="h-4 w-4" />
              </span>
              <span className="text-left">
                <span className="block text-xs font-semibold text-white">
                  Out for delivery
                </span>
                <span className="block text-xs text-gray-400">
                  Delaware → Amazon FC
                </span>
              </span>
            </motion.div>

            {/* The "Live operations" bar that sat along the bottom of the photo
                is REMOVED. It presented 16,843 / 1,204 / 386 as a live feed, and
                they were three hardcoded strings that never changed — a dashboard
                that is only a picture of a dashboard. */}
          </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
