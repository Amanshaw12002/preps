import { motion, type Variants } from "framer-motion";
import { ArrowRight, BadgeDollarSign, Boxes, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionEyebrow } from "@/page/Home";

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

const stats = [
  {
    number: "100%",
    title: "Tax Advantage",
    desc: "Operating from Delaware's tax-free zone",
    icon: <BadgeDollarSign className="h-5 w-5" />,
  },
  {
    number: "100K+",
    title: "Orders Processed",
    desc: "Successfully prepped and shipped units.",
    icon: <Boxes className="h-5 w-5" />,
  },
  {
    number: "5.0",
    title: "5 Star Client Rating",
    desc: "From verified seller reviews.",
    icon: <Star className="h-5 w-5" />,
    stars: true,
  },
  {
    number: "24-72h",
    title: "Average Turnaround",
    desc: "Fast processing from receiving to shipment",
    icon: <Clock className="h-5 w-5" />,
  },
];

export default function SecondSection() {
  return (
    <section className="relative overflow-hidden bg-gray-50">
      <div className="relative mx-auto max-w-6xl px-4 py-12">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeUp}>
            <SectionEyebrow label="STATS" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-inter text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
          >
            Prep, Packed, &amp; Shipped
            <span className="block bg-gradient-to-r from-red-700 to-red-500 bg-clip-text text-transparent">
              Without Delays.
            </span>
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-4 text-sm text-gray-500">
            Leave the steps to BlackBoxPreps, while you focus on growth.
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

          <motion.p variants={fadeUp} className="mt-6 text-xs text-gray-500">
            Trusted by 500+ Amazon Sellers.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.title}
              variants={fadeUp}
              className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-red-200 hover:shadow-xl hover:shadow-red-100/60"
            >
              <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-700 transition-colors duration-300 group-hover:bg-red-600 group-hover:text-white">
                {stat.icon}
              </span>
              {stat.stars ? (
                <p className="font-inter text-2xl font-semibold tracking-widest text-red-600">
                  ★ ★ ★ ★ ★
                </p>
              ) : (
                <p className="font-inter text-3xl font-semibold text-gray-900">
                  {stat.number}
                </p>
              )}
              <p className="mt-1.5 text-sm font-semibold text-gray-900">
                {stat.title}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-gray-500">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
