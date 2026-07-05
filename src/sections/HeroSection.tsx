import { motion, type Variants } from "framer-motion";
import inside from "../asset/inside.jpg";
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  MapPin,
  PackageCheck,
  Truck,
  Warehouse,
} from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

const liveStats = [
  { label: "Units received", value: "16,843" },
  { label: "Prepped today", value: "1,204" },
  { label: "On the way to FC", value: "386" },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a]">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        {/* red glow */}
        <div className="absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-red-700/25 blur-[140px]" />
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
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 pt-28 pb-16 text-center sm:pt-36 sm:pb-24">
        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-6 flex flex-wrap items-center justify-center gap-2"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11px] font-medium tracking-wide text-gray-300 backdrop-blur-sm sm:text-xs">
            <MapPin className="h-3.5 w-3.5 text-red-500" />
            Delaware — Tax-Free Zone
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11px] font-medium tracking-wide text-gray-300 backdrop-blur-sm sm:text-xs">
            <Clock className="h-3.5 w-3.5 text-red-500" />
            24–72h Turnaround
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-inter max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          Optimized Prep Work
          <span className="block bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
            For All Your
          </span>
          Fulfillment Needs.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-6 max-w-xl text-sm leading-relaxed text-gray-400 sm:text-base"
        >
          While you sell, we handle the rest. Safe storage, professional packing
          &amp; fast shipping — your products are always ready to reach customers
          quickly and securely with{" "}
          <span className="font-semibold text-white">BlackBoxPreps</span>.
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
            to="/quote"
            className="group inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-900/40 transition-all duration-300 hover:bg-red-500 hover:shadow-red-800/50"
          >
            Start Sending Inventory
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            to="https://dashboard.blackboxpreps.com/login"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10"
          >
            Dashboard
          </Link>
        </motion.div>

        {/* Trust line */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-8 flex items-center gap-2 text-xs text-gray-500"
        >
          <ShieldCheck className="h-4 w-4 text-red-500" />
          Trusted by 500+ Amazon sellers — fully FBA compliant
        </motion.div>

        {/* Facility photo — inside the BlackBoxPreps prep center */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative mt-14 w-full max-w-5xl"
        >
          <div className="absolute -inset-x-8 top-8 -z-10 h-full rounded-[40px] bg-red-600/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/60">
            <img
              src={inside}
              alt="Inside the BlackBoxPreps prep center — inventory prepped and ready to ship"
              className="h-[340px] w-full object-cover object-center sm:h-[480px]"
            />
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
              <span className="text-[11px] font-semibold text-white">
                Inside our Delaware prep center
              </span>
            </motion.div>

            {/* floating status chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.35, duration: 0.7 }}
              className="absolute bottom-16 left-4 flex items-center gap-2.5 rounded-xl border border-white/10 bg-black/70 px-4 py-2.5 shadow-xl shadow-black/50 backdrop-blur-md sm:bottom-20 sm:left-6"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-600/20 text-red-500">
                <PackageCheck className="h-4 w-4" />
              </span>
              <span className="text-left">
                <span className="block text-[11px] font-semibold text-white">
                  Shipment prepped
                </span>
                <span className="block text-[10px] text-gray-400">
                  FNSKU labeled — FBA compliant
                </span>
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.55, duration: 0.7 }}
              className="absolute bottom-16 right-4 flex items-center gap-2.5 rounded-xl border border-white/10 bg-black/70 px-4 py-2.5 shadow-xl shadow-black/50 backdrop-blur-md sm:bottom-20 sm:right-6"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-600/20 text-red-500">
                <Truck className="h-4 w-4" />
              </span>
              <span className="text-left">
                <span className="block text-[11px] font-semibold text-white">
                  Out for delivery
                </span>
                <span className="block text-[10px] text-gray-400">
                  Delaware → Amazon FC
                </span>
              </span>
            </motion.div>

            {/* live stats bar along the bottom of the photo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.75, duration: 0.7 }}
              className="absolute inset-x-0 bottom-0 flex items-center justify-around border-t border-white/10 bg-black/60 px-4 py-3 backdrop-blur-md"
            >
              <span className="hidden items-center gap-2 text-[11px] font-semibold text-white sm:flex">
                <Warehouse className="h-4 w-4 text-red-500" />
                Live operations
              </span>
              {liveStats.map((stat) => (
                <span key={stat.label} className="text-center">
                  <span className="block text-sm font-bold text-white sm:text-base">
                    {stat.value}
                  </span>
                  <span className="block text-[9px] uppercase tracking-wider text-gray-400 sm:text-[10px]">
                    {stat.label}
                  </span>
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
