import React from "react";
import { Warehouse, Truck, Package, ArrowRight } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { TrendingUp, Workflow, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

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
  visible: { transition: { staggerChildren: 0.12 } },
};

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

const rotating = [
  { word: "Scale", icon: <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5" /> },
  { word: "Streamline", icon: <Workflow className="h-4 w-4 sm:h-5 sm:w-5" /> },
  { word: "Succeed", icon: <Trophy className="h-4 w-4 sm:h-5 sm:w-5" /> },
];

const services = [
  {
    id: 1,
    title: "FBA & WFS Prep",
    icon: <Warehouse className="h-5 w-5" />,
    featured: true,
    description:
      "At BlackBox, our experienced warehouse team handles everything packing, prepping, labeling, repacking, and shipping, all in full compliance with Amazon's FBA standards. We help you save time, cut costs, and focus on scaling your business.",
    link: "/service/fba",
  },
  {
    id: 2,
    title: "FBM & DTC Prep",
    icon: <Truck className="h-5 w-5" />,
    description:
      "From same-day order prep to custom packaging, we help you deliver on time and exceed buyer expectations.",
    link: "/service/fbm",
  },
  {
    id: 3,
    title: "Wholesale Prep",
    icon: <Package className="h-5 w-5" />,
    description:
      "Built for wholesale sellers, our Delaware tax-free warehouse handles your storage, prep, and shipments, helping you scale efficiently and reach new markets faster.",
    link: "/service/fba",
  },
];

export default function PrepServicesSection() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotating.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#0a0a0a]">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-red-700/20 blur-[130px]" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.35) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 100%)",
          }}
        />

        {/* light pouring — falling light streaks */}
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
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-20 text-center sm:py-28">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeUp} className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-white/20 sm:w-16" />
            <span className="rounded-full border border-white/20 bg-white/5 px-3.5 py-1 text-[11px] font-semibold tracking-[0.2em] text-red-400">
              SERVICES
            </span>
            <span className="h-px w-10 bg-white/20 sm:w-16" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-inter mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-3 gap-y-2 text-3xl font-semibold tracking-tight text-white sm:text-5xl"
          >
            BlackBoxPreps Help You
            <span className="relative inline-flex h-11 min-w-40 items-center justify-center overflow-hidden sm:h-22 sm:min-w-56">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotating[index].word}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="inline-flex items-center gap-2 rounded-xl border border-red-600/40 bg-red-600/15 px-4 py-1.5 text-red-400 sm:px-5 sm:py-2"
                >
                  {/* matching badge tile for the dark surface — a lit red plate
                      instead of a bare glyph leaning on the word */}
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg border border-red-500/40 bg-red-500/15 text-red-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] sm:h-10 sm:w-10 sm:rounded-xl">
                    {rotating[index].icon}
                  </span>
                  {rotating[index].word}
                </motion.span>
              </AnimatePresence>
            </span>
            Your Business.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-gray-400"
          >
            Whether you sell through{" "}
            <span className="font-medium text-white">FBA &amp; WFS</span>,
            manage orders via{" "}
            <span className="font-medium text-white">FBM</span>, or ship to{" "}
            <span className="font-medium text-white">Wholesale partners</span>,
            our end-to-end prep solutions ensure every unit leaves your
            inventory compliant, protected, and ready to sell.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="mt-14 grid gap-5 md:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={fadeUp}
              className={`group relative flex flex-col rounded-2xl border p-6 text-left transition-all duration-500 hover:-translate-y-1.5 sm:p-7 ${
                service.featured
                  ? "border-red-900/60 bg-gradient-to-b from-red-950/40 to-white/[0.03] shadow-xl shadow-red-950/30"
                  : "border-white/10 bg-white/[0.03] hover:border-white/20"
              }`}
            >
              <span
                className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl transition-colors duration-300 ${
                  service.featured
                    ? "bg-red-600 text-white shadow-lg shadow-red-900/50"
                    : "bg-red-600/15 text-red-500 group-hover:bg-red-600 group-hover:text-white"
                }`}
              >
                {service.icon}
              </span>

              <h3 className="mb-3 text-lg font-semibold text-white">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-400">
                {service.description}
              </p>

              <Link
                to={service.link}
                className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-red-500 transition-colors duration-300 hover:text-red-400"
              >
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mx-auto mt-16 max-w-md border-t border-white/10 pt-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          <motion.h3
            variants={fadeUp}
            className="font-inter text-xl font-semibold text-white sm:text-2xl"
          >
            Streamline, Scale, Succeed.
          </motion.h3>
          <motion.p variants={fadeUp} className="mt-2 text-xs text-gray-500">
            Let's take the prep work off your plate.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
