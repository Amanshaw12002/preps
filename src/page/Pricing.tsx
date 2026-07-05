import Head from "@/component/Head";
import { motion, type Variants } from "framer-motion";
import {
  Package,
  ShoppingBag,
  Truck,
  Warehouse,
  Check,
  ArrowRight,
  Settings,
  Sparkles,
  Undo2,
  Layers,
  Scissors,
  Scaling,
  ShieldAlert,
} from "lucide-react";
import { useState } from "react";
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

const additionalFees = [
  {
    icon: <ShieldAlert className="h-5 w-5" />,
    title: "Fragile (bubble wrap)",
    price: "+$0.10",
    unit: "/ foot",
  },
  {
    icon: <Scaling className="h-5 w-5" />,
    title: "Oversized / Overweight",
    note: "Every 5lb & 5 inches",
    price: "+$0.50",
    unit: "/ unit",
  },
  {
    icon: <Layers className="h-5 w-5" />,
    title: "Multi-pack / Bundle",
    price: "+$0.25",
    unit: "each",
  },
  {
    icon: <Scissors className="h-5 w-5" />,
    title: "Sticker Removal",
    price: "+$0.25",
    unit: "/ unit",
  },
  {
    icon: <Package className="h-5 w-5" />,
    title: "Debundling",
    price: "+$0.50",
    unit: "/ unit",
  },
];

export default function Pricing() {
  const [afterFourteen, setAfterFourteen] = useState<boolean>(true);

  return (
    <>
      <Head title="BlackBoxPreps | Transparent Pricing" />

      {/* ——— Hero band ——— */}
      <section className="relative overflow-hidden bg-[#0a0a0a] pb-40 pt-32 sm:pb-74 sm:pt-40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/2 h-[420px] w-[800px] -translate-x-1/2 rounded-full bg-red-700/25 blur-[130px]" />
          <div
            className="absolute inset-0 opacity-[0.1]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.35) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              maskImage:
                "radial-gradient(ellipse 80% 70% at 50% 0%, black 40%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 70% at 50% 0%, black 40%, transparent 100%)",
            }}
          />
        </div>

        <motion.div
          className="relative mx-auto max-w-3xl px-4 text-center"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-semibold tracking-[0.2em] text-red-400 backdrop-blur-sm"
          >
            <Sparkles className="h-3.5 w-3.5" />
            OUR PRICING
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-inter text-4xl font-semibold tracking-tight text-white sm:text-6xl"
          >
            Simple, Transparent
            <span className="block bg-gradient-to-r py-4 from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
              Competitive Pricing
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-gray-400 sm:text-base"
          >
            Simple, transparent and competitive within market standard — only
            pay for what you use.
          </motion.p>
        </motion.div>
      </section>

      {/* ——— Plans (overlapping the hero band) ——— */}
      <section className="relative z-10 -mt-28 pb-6 sm:-mt-52">
        <motion.div
          className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 md:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Online Arbitrage */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-xl shadow-black/10 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl sm:mt-8 sm:p-7"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-700">
                <ShoppingBag className="h-5 w-5" />
              </span>
              <h2 className="text-lg font-semibold text-gray-900">
                Online Arbitrage
              </h2>
            </div>

            <p className="mb-6 border-b border-gray-100 pb-6 text-sm leading-relaxed text-gray-600">
              Ideal for sellers sourcing products online and shipping directly
              to prep centers. Fast turnaround, sticker removal, labeling, and
              FBA shipment creation included.
            </p>

            <div className="mb-6 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-center">
                <p className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  $1.20
                </p>
                <p className="text-xs font-medium text-gray-500">/ unit</p>
                <p className="mt-2 border-t border-gray-200 pt-2 text-xs font-medium text-gray-600">
                  0–999 units/month
                </p>
              </div>
              <div className="rounded-xl border border-red-200 bg-red-50/60 p-4 text-center">
                <p className="text-2xl font-bold text-red-700 sm:text-3xl">
                  $1.00
                </p>
                <p className="text-xs font-medium text-red-600/70">/ unit</p>
                <p className="mt-2 border-t border-red-200 pt-2 text-xs font-medium text-red-700">
                  1,000+ units/month
                </p>
              </div>
            </div>

            <ul className="mb-6 flex flex-col gap-3 border-t border-gray-100 pt-5">
              {[
                "Great for new & part-time sellers",
                "Low minimum quantity",
                "Handles multi-store deliveries",
                "Fast turnaround & Amazon compliance",
              ].map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 text-sm text-gray-700"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-red-600 p-0.5 text-white" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <Link
                to="/quote"
                className="block w-full rounded-xl border border-gray-300 py-3 text-center text-sm font-semibold text-gray-900 transition-all duration-300 hover:border-red-600 hover:text-red-700"
              >
                Get Started
              </Link>
              <p className="mt-3 text-center text-[11px] italic text-gray-400">
                *Box price not included
              </p>
            </div>
          </motion.div>

          {/* Wholesale & Private Label — featured */}
          <motion.div
            variants={fadeUp}
            className="relative flex flex-col rounded-2xl border border-red-900/50 bg-[#111111] p-6 shadow-[0_20px_60px_-10px_rgba(220,38,38,0.45),0_8px_24px_-8px_rgba(220,38,38,0.35)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_80px_-10px_rgba(220,38,38,0.55),0_10px_30px_-8px_rgba(220,38,38,0.45)] sm:p-7"
          >
            {/* dark red wash across the top, behind the POPULAR badge */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-28 rounded-t-2xl bg-gradient-to-b from-red-950/80 via-red-950/35 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-16 rounded-t-2xl bg-[radial-gradient(ellipse_60%_100%_at_50%_0%,rgba(220,38,38,0.35),transparent)]" />
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-red-600 px-4 py-1 text-[11px] font-bold tracking-wide text-white shadow-lg shadow-red-900/50">
              MOST POPULAR
            </span>

            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-600/15 text-red-600">
                <Package className="h-5 w-5" />
              </span>
              <h2 className="text-lg font-semibold text-red-500">
                Wholesale &amp; Private Label
              </h2>
            </div>

            <p className="mb-6 border-b border-white/10 pb-6 text-sm leading-relaxed text-gray-400">
              Designed for bulk shipments and brand products. Includes labeling,
              bundling, custom packaging, and quality inspection for
              professional presentation.
            </p>

            <div className="mb-6 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                <p className="text-2xl font-bold text-white sm:text-3xl">
                  $0.70
                </p>
                <p className="text-xs font-medium text-gray-500">/ unit</p>
                <p className="mt-2 border-t border-white/10 pt-2 text-xs font-medium text-gray-400">
                  0–999 units/month
                </p>
              </div>
              <div className="rounded-xl border border-red-600/40 bg-red-600/10 p-4 text-center">
                <p className="text-2xl font-bold text-red-500 sm:text-3xl">
                  $0.50
                </p>
                <p className="text-xs font-medium text-red-400/70">/ unit</p>
                <p className="mt-2 border-t border-red-600/30 pt-2 text-xs font-medium text-red-400">
                  1,000+ units/month
                </p>
              </div>
            </div>

            <ul className="mb-6 flex flex-col gap-3 border-t border-white/10 pt-5">
              {[
                "Supports bulk shipments & branded packaging",
                "Amazon-compliant labeling & prep",
                "Optional storage & inventory management",
                "Ideal for growing brands and established sellers",
              ].map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 text-sm text-gray-300"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-red-600 p-0.5 text-white shadow-[0_0_12px_rgba(239,68,68,0.5)]" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <Link
                to="/quote"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-red-900/40 transition-all duration-300 hover:bg-red-500"
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <p className="mt-3 text-center text-[11px] italic text-gray-500">
                *Box price not included
              </p>
            </div>
          </motion.div>

          {/* Custom Plan */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-xl shadow-black/10 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl sm:p-7"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-gray-900">
                <Settings className="h-5 w-5" />
              </span>
              <h2 className="text-lg font-semibold text-gray-900">
                Custom Plan
              </h2>
            </div>

            <p className="mb-6 border-b border-gray-100 pb-6 text-sm leading-relaxed text-gray-600">
              Tailored for businesses with unique requirements. Combine prep,
              fulfillment, and storage options to fit your specific needs.
            </p>

            <div className="mb-6 rounded-xl border border-dashed border-gray-300 bg-gray-50 p-5 text-center">
              <p className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Let's Talk
              </p>
              <p className="mt-1 text-xs font-medium text-gray-500">
                Flexible rates built around your volume
              </p>
            </div>

            <ul className="mb-6 flex flex-col gap-3 border-t border-gray-100 pt-5">
              {[
                "Flexible unit rates",
                "Bulk discounts available",
                "Custom service combinations",
              ].map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 text-sm text-gray-700"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 rounded-full bg-gray-900 p-0.5 text-white" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mb-6">
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Includes
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: <ShieldAlert className="h-3.5 w-3.5" />, label: "Additional Fees" },
                  { icon: <Truck className="h-3.5 w-3.5" />, label: "Additional Services" },
                  { icon: <Warehouse className="h-3.5 w-3.5" />, label: "Storage Options" },
                ].map((item) => (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-700"
                  >
                    {item.icon}
                    {item.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-auto">
              <Link
                to="/quote"
                className="block w-full rounded-xl bg-gray-900 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:bg-black"
              >
                Get a Custom Quote
              </Link>
              <p className="mt-3 text-center text-[11px] italic text-gray-400">
                Contact us for a personalized quote.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ——— Additional Fees ——— */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.h2
              variants={fadeUp}
              className="font-inter text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl"
            >
              Additional Fees
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-3 text-sm text-gray-500">
              Extra charges for special packaging or oversized items that need
              extra care during prep.
            </motion.p>
          </motion.div>

          <motion.div
            className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {additionalFees.map((fee) => (
              <motion.div
                key={fee.title}
                variants={fadeUp}
                className="group flex flex-col rounded-2xl border border-gray-200 bg-gray-50/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:bg-white hover:shadow-lg hover:shadow-red-100/50"
              >
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-red-700 shadow-sm transition-colors duration-300 group-hover:bg-red-600 group-hover:text-white">
                  {fee.icon}
                </span>
                <h3 className="text-sm font-semibold text-gray-900">
                  {fee.title}
                </h3>
                {fee.note && (
                  <p className="mt-0.5 text-[11px] text-gray-500">{fee.note}</p>
                )}
                <p className="mt-auto pt-4">
                  <span className="text-2xl font-bold text-gray-900">
                    {fee.price}
                  </span>
                  <span className="ml-1 text-xs font-medium text-gray-500">
                    {fee.unit}
                  </span>
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ——— Additional Services + Storage ——— */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 lg:grid-cols-5">
          {/* Additional Services */}
          <motion.div
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 lg:col-span-3"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <h3 className="font-inter text-xl font-semibold text-gray-900 sm:text-2xl">
              Additional Services
            </h3>
            <p className="mt-2 max-w-lg text-sm text-gray-500">
              Enhance your prep process with our optional add-on services
              designed to handle special packaging and labeling needs
              efficiently.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col rounded-xl border border-gray-200 bg-gray-50/60 p-5">
                <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-red-700 shadow-sm">
                  <Truck className="h-5 w-5" />
                </span>
                <h4 className="text-sm font-semibold text-gray-900">
                  Merchant Fulfillment
                </h4>
                <p className="mt-auto pt-4">
                  <span className="text-2xl font-bold text-gray-900">
                    +$1.00
                  </span>
                  <span className="ml-1 block text-xs font-medium text-gray-500">
                    / unit + fees + box price
                  </span>
                </p>
              </div>
              <div className="flex flex-col rounded-xl border border-gray-200 bg-gray-50/60 p-5">
                <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-red-700 shadow-sm">
                  <Undo2 className="h-5 w-5" />
                </span>
                <h4 className="text-sm font-semibold text-gray-900">
                  Return to Supplier
                </h4>
                <p className="mt-auto pt-4">
                  <span className="text-2xl font-bold text-gray-900">
                    +$2.00
                  </span>
                  <span className="ml-1 block text-xs font-medium text-gray-500">
                    / return
                  </span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Storage */}
          <motion.div
            className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 lg:col-span-2"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <h3 className="font-inter text-xl font-semibold text-gray-900 sm:text-2xl">
              Storage
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Secure and organized storage solutions for your inventory before
              it's shipped to Amazon or directly to your customers.
            </p>

            <div className="mt-6 flex flex-1 flex-col items-center justify-center rounded-xl border border-gray-200 bg-gray-50/60 p-6">
              {/* Toggle */}
              <div className="mb-6 flex rounded-xl border border-gray-200 bg-white p-1 shadow-sm">
                <button
                  onClick={() => setAfterFourteen(false)}
                  className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                    !afterFourteen
                      ? "bg-red-600 text-white shadow"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  First 14 days
                </button>
                <button
                  onClick={() => setAfterFourteen(true)}
                  className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                    afterFourteen
                      ? "bg-red-600 text-white shadow"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  After 14 days
                </button>
              </div>

              {afterFourteen ? (
                <div className="text-center">
                  <p className="text-4xl font-bold text-gray-900">$0.01</p>
                  <p className="mt-1 text-sm font-medium text-gray-500">
                    / day per unit
                  </p>
                </div>
              ) : (
                <div className="text-center">
                  <p className="text-4xl font-bold text-red-600">Free</p>
                  <p className="mt-1 text-sm font-medium text-gray-500">
                    storage for your first 14 days
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

    </>
  );
}
