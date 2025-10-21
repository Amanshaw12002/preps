import { ShieldCheck, Eye, Layers } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatSetsUsApart() {
  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-red-800" />,
      title: "Retail-Grade Accuracy",
      desc: "Every order goes through a multi-step QC process with barcode verification and photo documentation to ensure 100% compliance with Amazon, Walmart, and wholesale standards.",
    },
    {
      icon: <Eye className="w-6 h-6 text-red-800" />,
      title: "Transparent Operations",
      desc: "Full visibility through order tracking, prep reports, and proof-of-prep images — no hidden steps, no surprises.",
    },
    {
      icon: <Layers className="w-6 h-6 text-red-800" />,
      title: "Scalable Infrastructure",
      desc: "Our systems and workforce scale effortlessly with your seasonal demand — ensuring consistent turnaround even during peak season.",
    },
  ];

  return (
    <section className="py-12 relative border-y border-red-800 bg-radial from-red-100 to-white">
      {/* Animated Corner Dots */}
      <motion.div 
        className="absolute -top-1 left-6.5 w-3 h-3 bg-red-800"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.5 }}
      ></motion.div>
      <motion.div 
        className="absolute -top-1 right-6.5 w-3 h-3 bg-red-800"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      ></motion.div>
      <motion.div 
        className="absolute -bottom-1 right-6.5 w-3 h-3 bg-red-800"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      ></motion.div>
      <motion.div 
        className="absolute -bottom-1 left-6.5 w-3 h-3 bg-red-800"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
      ></motion.div>
      
      {/* Animated Border Lines */}
      <motion.div 
        className="absolute top-0 left-8 w-px h-full bg-red-800"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      ></motion.div>
      <motion.div 
        className="absolute top-0 right-8 w-px h-full bg-red-800"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      ></motion.div>

      <div className="max-w-6xl mx-auto px-6 text-center rounded-2xl">
        {/* Header Section */}
        <motion.div 
          className="w-full flex items-center px-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
  className="text-5xl font-semibold font-inter w-fit text-gray-800 text-left m-4"
>
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-red-800">
    <motion.span
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 1 }}
      className="inline-block mr-2"
    >
      What
    </motion.span>
    <motion.span
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 1 }}
      className="inline-block mr-2"
    >
      Sets
    </motion.span>
    <motion.span
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6, duration: 1 }}
      className="inline-block mr-2"
    >
      Us
    </motion.span>
    <motion.span
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, duration: 1 }}
      className="inline-block"
    >
      Apart
    </motion.span>
  </span>
</motion.h2>
          <motion.p 
            className="text-xl text-right font-inter text-red-800 max-w-lg ml-auto border-r-2 border-red-800 pr-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.9 }}
          >
            We go beyond basic prep — offering precision, reliability, and a true partnership
            built for<span className="font-semibold block"> scalable e-commerce growth.</span>
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 p-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="border border-red-800 group hover:border-red-800 shadow-sm hover:shadow-md p-6 text-left transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="mb-3 flex items-center justify-start"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
              >
                <motion.div 
                  className="p-3 rounded-xl border-red-800 border"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.icon}
                </motion.div>
              </motion.div>
              
              <motion.h3 
                className="text-md font-semibold text-red-800 mb-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
              >
                {feature.title}
              </motion.h3>
              
              <motion.p 
                className="group-hover:text-sm text-gray-800 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.0 + index * 0.1, duration: 0.5 }}
              >
                {feature.desc}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}