import React from "react";
import CustomCalendar from "@/component/Meeting";
import PrepServicesSection from "@/component/PrepServicesSection";
import WhatSetsUsApart from "@/component/Apart";
import FAQ from "./FAQ";
import HeroSection from "@/sections/HeroSection";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Head from "@/component/Head";
import Software_Display from "@/sections/Software_Display";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  HandHeart,
  SearchCheck,
  PackageOpen,
  Boxes,
  PackageCheck,
  Truck,
  Warehouse,
  Mail,
} from "lucide-react";
import SecondSection from "@/sections/SecondSection";

export interface ProcessStep {
  id: number;
  title: string;
  icon: "FaSearch" | "FaBoxOpen" | "FaBarcode" | "FaTags";
  image: "one" | "two" | "three" | "four";
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Inspection",
    icon: "FaSearch",
    image: "one",
    description:
      "Every item is carefully inspected for damage, accuracy, and quality before processing.",
  },
  {
    id: 2,
    title: "Packaging",
    icon: "FaBoxOpen",
    image: "four",
    description:
      "Items are securely packed using the right materials to prevent damage during transit.",
  },
  {
    id: 3,
    title: "Barcodes",
    icon: "FaBarcode",
    image: "two",
    description:
      "Each product is labeled with the correct FNSKU or UPC barcode for easy tracking.",
  },
  {
    id: 4,
    title: "Label",
    icon: "FaTags",
    image: "three",
    description:
      "Proper labels are applied to meet carrier and Amazon shipping guidelines.",
  },
];

/* Shared section header: eyebrow chip + heading, used to keep every section consistent */
export function SectionEyebrow({ label, dark = false }: { label: string; dark?: boolean }) {
  return (
    <div className="mb-6 flex items-center justify-center gap-3">
      <span className={`h-px w-10 sm:w-16 ${dark ? "bg-white/20" : "bg-gray-300"}`} />
      <span
        className={`rounded-full border px-3.5 py-1 text-[11px] font-semibold tracking-[0.2em] ${
          dark
            ? "border-white/20 bg-white/5 text-red-400"
            : "border-gray-200 bg-white text-red-700"
        }`}
      >
        {label}
      </span>
      <span className={`h-px w-10 sm:w-16 ${dark ? "bg-white/20" : "bg-gray-300"}`} />
    </div>
  );
}

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

const rotatingWords = [
  { word: "Receiving", icon: <PackageOpen className="h-4 w-4 sm:h-5 sm:w-5" /> },
  { word: "Inspection", icon: <SearchCheck className="h-4 w-4 sm:h-5 sm:w-5" /> },
  { word: "Shelving", icon: <Warehouse className="h-4 w-4 sm:h-5 sm:w-5" /> },
  { word: "Picking", icon: <HandHeart className="h-4 w-4 sm:h-5 sm:w-5" /> },
  { word: "Prepping", icon: <Boxes className="h-4 w-4 sm:h-5 sm:w-5" /> },
  { word: "Packaging", icon: <PackageCheck className="h-4 w-4 sm:h-5 sm:w-5" /> },
  { word: "Shipping", icon: <Truck className="h-4 w-4 sm:h-5 sm:w-5" /> },
];

/* Custom illustrated headers for the workflow cards — no stock photos */
function ReceivingVisual() {
  return (
    <div className="relative flex h-full flex-col items-center justify-center overflow-hidden bg-[#0d0d0d]">
      <div className="absolute -top-10 left-1/2 h-32 w-64 -translate-x-1/2 rounded-full bg-red-600/20 blur-[60px]" />
      {/* incoming boxes on a dock line */}
      <div className="relative z-10 flex items-end gap-2">
        {[10, 16, 12].map((h, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
            className="rounded-md border border-red-500/30 bg-red-600/10"
            style={{ width: 26 + i * 4, height: h * 2.4 }}
          />
        ))}
        <span className="mb-1 ml-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600 text-white shadow-lg shadow-red-900/50">
          <PackageOpen className="h-7 w-7" />
        </span>
      </div>
      <div className="z-10 mt-4 h-px w-2/3 bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
      <span className="z-10 mt-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium text-gray-300">
        <SearchCheck className="h-3 w-3 text-red-500" /> Inspected on arrival
      </span>
    </div>
  );
}

function PrepPackVisual() {
  const tasks = ["FNSKU label applied", "Bubble wrap & poly bag", "Quality check passed"];
  return (
    <div className="relative flex h-full flex-col items-center justify-center gap-2 overflow-hidden bg-[#0d0d0d] px-8">
      <div className="absolute -top-10 left-1/2 h-32 w-64 -translate-x-1/2 rounded-full bg-red-600/20 blur-[60px]" />
      {tasks.map((task, i) => (
        <motion.div
          key={task}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
          className="z-10 flex w-full max-w-60 items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5"
        >
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-600 text-white">
            <PackageCheck className="h-3 w-3" />
          </span>
          <span className="text-[11px] font-medium text-gray-200">{task}</span>
        </motion.div>
      ))}
    </div>
  );
}

function ShipmentVisual() {
  return (
    <div className="relative flex h-full flex-col items-center justify-center overflow-hidden bg-[#0d0d0d]">
      <div className="absolute -top-10 left-1/2 h-32 w-64 -translate-x-1/2 rounded-full bg-red-600/20 blur-[60px]" />
      <span className="z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600 text-white shadow-lg shadow-red-900/50">
        <Truck className="h-7 w-7" />
      </span>
      {/* route */}
      <div className="z-10 mt-5 flex w-3/4 items-center">
        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium text-gray-300">
          Delaware
        </span>
        <span className="relative mx-2 h-px flex-1 overflow-visible border-t border-dashed border-red-500/50">
          <motion.span
            initial={{ left: "0%" }}
            whileInView={{ left: "88%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1.6, ease: "easeInOut" }}
            className="absolute -top-1 h-2 w-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]"
          />
        </span>
        <span className="rounded-full border border-red-600/40 bg-red-600/15 px-2.5 py-1 text-[10px] font-semibold text-red-400">
          Amazon FC
        </span>
      </div>
      <span className="z-10 mt-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium text-gray-300">
        Live tracking & instant notifications
      </span>
    </div>
  );
}

const workflowSteps = [
  {
    step: "01",
    title: "Receiving Packages",
    description:
      "You send your inventory to our prep center. We conduct thorough inspection, ensuring everything matches your specifications and requirements.",
    visual: <ReceivingVisual />,
  },
  {
    step: "02",
    title: "Prep & Pack",
    description:
      "Your packages go through our optimized workflow with quality checks at every stage, ensuring perfect preparation and packaging.",
    visual: <PrepPackVisual />,
  },
  {
    step: "03",
    title: "Final Shipment",
    description:
      "We ship your packages to the requested destination and provide comprehensive tracking with instant notifications at every milestone.",
    visual: <ShipmentVisual />,
  },
];

export default function Home() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head title="BlackBoxPreps | Amazon Prep Center" />

      <HeroSection />

      {/* ——— Intro: what we handle ——— */}
      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-72 w-[700px] -translate-x-1/2 rounded-full bg-red-100/60 blur-[100px]" />
        </div>

        <motion.div
          className="relative mx-auto max-w-4xl px-4 py-12 text-center "
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeUp}>
            <SectionEyebrow label="WHY BLACKBOXPREPS" />
          </motion.div>

          <motion.p variants={fadeUp} className="mb-3 text-sm font-medium text-red-700">
            Let's grow your business together.
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-inter text-3xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-5xl"
          >
            New to Amazon or Already Selling!
            <span className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
              We Handle
              <span className="relative inline-flex h-12 min-w-44 items-center justify-center overflow-hidden sm:h-22 sm:min-w-64">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={rotatingWords[index].word}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                    className="inline-flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-1.5 text-red-700 sm:gap-3 sm:px-6 sm:py-2.5"
                  >
                    {rotatingWords[index].icon}
                    {rotatingWords[index].word}
                  </motion.span>
                </AnimatePresence>
              </span>
            </span>
            <span className="mt-3 block">You Focus on Growth.</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-md text-sm text-gray-500">
            <span className="font-semibold text-red-700">BlackBoxPreps</span>{" "}
            handles preps, while you build.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link
              to="/quote"
              className="group inline-flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-gray-900/20 transition-all duration-300 hover:bg-black"
            >
              Start Sending Inventory
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3.5 text-sm font-semibold text-gray-900 transition-all duration-300 hover:border-red-600 hover:text-red-700"
            >
              Check Pricing
            </Link>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-10 max-w-xl text-sm leading-relaxed text-gray-600"
          >
            Launching your first shipment or scaling to daily pallets, we help
            you move faster and stay compliant. Our team handles receiving,
            inspection, labeling, and shipment prep directly from Delaware's
            tax-free zone, cutting costs and turnaround time.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mx-auto mt-10 flex w-fit flex-col items-center gap-3 border-t border-gray-200 pt-6"
          >
            <p className="text-xs text-gray-500">We are available 24/7.</p>
            <a
              href="mailto:contact@blackboxprepcenter.com"
              className="group inline-flex items-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-700"
            >
              <Mail className="h-4 w-4" />
              Contact Us
            </a>
          </motion.div>
        </motion.div>
      </section>

      <SecondSection />

      <PrepServicesSection />

      <WhatSetsUsApart />

      {/* ——— Workflow ——— */}
      <section className="relative overflow-hidden bg-gray-50">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.4]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 100%)",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeUp}>
              <SectionEyebrow label="WORKFLOW" />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-inter text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
            >
              From Receiving to Shipment,
              <span className="block bg-gradient-to-r from-red-700 to-red-500 bg-clip-text text-transparent">
                All in One Flow
              </span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-sm text-gray-500">
              How it works — three simple steps from your supplier to Amazon's
              warehouse.
            </motion.p>
          </motion.div>

          {/* Steps */}
          <motion.div
            className="mt-14 grid gap-6 md:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {workflowSteps.map((step) => (
              <motion.div
                key={step.step}
                variants={fadeUp}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-red-200 hover:shadow-xl hover:shadow-red-100/60"
              >
                <div className="relative h-52 overflow-hidden">
                  {step.visual}
                  <span className="absolute left-4 top-4 z-20 rounded-lg bg-white/90 px-2.5 py-1 font-mono text-xs font-bold text-red-700 shadow backdrop-blur-sm">
                    {step.step}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="mb-2 text-base font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {step.description}
                  </p>
                </div>

                <div className="h-1 w-0 bg-gradient-to-r from-red-600 to-red-400 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Software_Display />

      <CustomCalendar />

      <FAQ />
    </>
  );
}
