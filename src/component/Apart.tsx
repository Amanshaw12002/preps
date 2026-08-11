import { MessageCircleQuestion, Eye, Layers } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatSetsUsApart() {
  const features = [
    {
      icon: MessageCircleQuestion,
      title: "Communication",
      desc: "Automated updates and direct communication with the prep team to ensure every order is handled correctly.",
    },
    {
      icon: Eye,
      title: "Transparent Operations",
      desc: "Full visibility on inventory from check in to shipment, with clear and detailed billing breakdowns.",
    },
    {
      icon: Layers,
      title: "Scalable Infrastructure",
      desc: "Our systems and workforce scale effortlessly with your seasonal demand — ensuring consistent turnaround even during peak season.",
    },
  ];

  const words = ["What", "Sets", "Us", "Apart"];

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
      {/* soft ambient accents */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-red-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl text-center">
        {/* Eyebrow badge */}
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-red-700"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
          Competitive Edge
        </motion.span>

        {/* Heading */}
        <h2 className="mx-auto mt-6 max-w-2xl font-inter text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          {words.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`inline-block ${i === words.length - 1 ? "" : "mr-2 sm:mr-3"} ${
                word === "Apart"
                  ? "bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent"
                  : ""
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-500 sm:text-base"
        >
          The operational advantages that keep your inventory moving — precisely,
          transparently, and at any scale.
        </motion.p>

        {/* Features Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 text-left shadow-sm transition-[border-color,box-shadow,background-color,color] duration-300 hover:border-red-300 hover:shadow-xl hover:shadow-red-900/5"
              >
                {/* accent wash on hover */}
                <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-red-50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Icon chip */}
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 to-red-800 text-white shadow-lg shadow-red-900/20 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  {feature.desc}
                </p>

                {/* number watermark */}
                <span className="absolute right-5 top-5 text-4xl font-bold text-gray-100 transition-colors duration-300 group-hover:text-red-100">
                  0{index + 1}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
