import React, { useState } from "react";
import { Warehouse, Truck, Package } from "lucide-react";
import { motion } from "framer-motion";
import { TrendingUp, Workflow, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import SectionLayout from "@/layout/sectionLayout";

export default function PrepServicesSection() {
  const icons = [<TrendingUp className="h-4 w-4 sm:h-6 sm:w-6"/>, <Workflow className="h-4 w-4 sm:h-6 sm:w-6"/>, <Trophy className="h-4 w-4 sm:h-6 sm:w-6"/>];
  const words = ["Scale", "Streamline", "Succeed"];
  const [index, setIndex] = React.useState(0);
  const [expanded, setExpanded] = useState(false);

  // Rotate words every 2.5 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [words.length]);

  const services = [
    {
      id: 1,
      title: "FBA & WFS Prep",
      icon: <Warehouse className="w-6 h-6 text-red-700" />,
      description:
        "Grow faster with compliant, retailer-ready shipments. We handle every requirement from labeling and poly-bagging to palletization — all following Amazon and Walmart standards.",
      points: [
        "Accurate FNSKU labeling & documentation",
        "Optimized cartonization to cut freight costs",
        "Reduced delays and inbound rejections",
        "Photo & QC reports for full visibility",
      ],
      result:
        "Faster restocks, higher Buy Box uptime, and smoother scaling on marketplace platforms.",
    },
    {
      id: 2,
      title: "FBM Prep & Fulfillment",
      icon: <Truck className="w-6 h-6 text-red-700" />,
      description:
        "Efficient merchant shipping that builds customer trust. From same-day order prep to custom packaging, we help you deliver on time and exceed buyer expectations.",
      points: [
        "Ready-to-ship order handling with protective packaging",
        "Pick, pack, and dispatch within SLA windows",
        "Kitting, bundling & branded inserts for marketing",
        "Return handling and restock solutions",
      ],
      result:
        "Lower return rates, improved seller metrics, and a premium brand experience for every order.",
    },
    {
      id: 3,
      title: "Wholesale Prep",
      icon: <Package className="w-6 h-6 text-red-700" />,
      description:
        "Make your wholesale operations seamless and scalable. We manage bulk receiving, re-packing, and compliance for every retail partner you work with.",
      points: [
        "Batch QC and defect reporting",
        "Case packing & relabeling for retail compliance",
        "Cross-docking & inventory consolidation",
        "Barcode tracking & lot control for traceability",
      ],
      result:
        "Stronger retailer relationships, fewer chargebacks, and faster reorder cycles.",
    },
  ];

  return (
    <SectionLayout >



      <div className="max-w-5xl mx-auto relative mt-12 text-center">

        
        {/* Section Header */}
        <div className="flex-center  text-2xl sm:text-3xl ">
          <motion.h2
            initial={{ y: 200}}
            whileInView={{  y: 0}}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className=" flex items-center flex-col sm:flex-row font-semibold text-slate-900 mb-6 text-center"
          >
            How 
<span className="mx-2 text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-red-700 to-red-600">BlackBoxPreps</span>Help You{" "}

<div className="border rounded-lg sm:rounded-xl px-2 mx-4 transition-transform duration-500">
            <motion.span
              key={words[index]}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="flex items-center w-fit  sm:mx-2 text-black  p-1  sm:rounded-xl sm:py-2"
              > 
              <span className="  sm:text-xl sm:p-1 p-0.5 text-white bg-red-600 mr-1 rounded-md">{icons[index]}</span>
              <span>{words[index]}</span>
            </motion.span>
              </div>{" "}
            Your Business
          </motion.h2>
        </div>

        <motion.p 
          className="text-[10px] sm:text-sm text-gray-700 max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Whether you sell through <span className="font-medium">FBA & WFS</span>, manage
          orders via <span className="font-medium">FBM</span>, or supply to{" "}
          <span className="font-medium">Wholesale</span> partners — our end-to-end prep
          solutions ensure every unit leaves your inventory compliant, protected, and
          ready to sell.
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-2 sm:gap-4">
          {services.map((service, serviceIndex) => (
            <motion.div
              key={service.id}
              className="group  bg-white border border-gray-400 hover:border-red-700 rounded-lg shadow-md shadow-black hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-6 text-left"
              initial={{ opacity: 0.6, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + serviceIndex * 0.3, duration: 1.5 }}
            >
              {/* Header */}
              <motion.div 
                className="flex items-center mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + serviceIndex * 0.1, duration: 0.5 }}
              >
                <div className="bg-white p-0.5 sm:p-2 border-red-800 rounded-sm border">
                  {service.icon}
                </div>
                <h3 className="ml-3 text-xs sm:text-md font-semibold text-gray-800">
                  {service.title}
                </h3>
              </motion.div>

              {/* Description */}
              <motion.p 
                className="text-gray-600 text-xs sm:text-sm mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + serviceIndex * 0.1, duration: 0.5 }}
              >
                {service.description}
              </motion.p>

              {/* Expandable Points */}
              <motion.div
                className={`overflow-hidden transition-all duration-500 ${
                  expanded ? "max-h-[500px]" : "max-h-[0px]"
                }`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + serviceIndex * 0.1, duration: 0.5 }}
              >
                <ul className="space-y-2 list-disc list-inside text-gray-700 mb-4 text-xs sm:text-sm">
                  {service.points.map((point, pointIndex) => (
                    <motion.li 
                      className="pt-2" 
                      key={pointIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + serviceIndex * 0.1 + pointIndex * 0.1, duration: 0.4 }}
                    >
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Result */}
              <motion.p 
                className=" text-xs sm:text-sm group-hover:text-black text-gray-700 border-t border-gray-400 pt-3 italic"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 + serviceIndex * 0.1, duration: 0.5 }}
              >
                → {service.result}
              </motion.p>

              {/* Read More / Less Button */}
              <motion.button
                onClick={() => setExpanded(!expanded)}
                className="mt-3 text-sm cursor-pointer font-medium text-red-800 hover:underline focus:outline-none"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.0 + serviceIndex * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                {expanded ? "Read Less" : "Read More"}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="pb-8 sm:p-0 mt-8 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.h3 
            className="text-xl sm:text-3xl font-inter font-semibold w-fit mx-auto text-transparent bg-gradient-to-r from-black via-red-600 to-red-700 bg-clip-text mb-3"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            Streamline. Scale. Succeed.
          </motion.h3>
          <motion.p 
            className="text-gray-600 text-[10px] sm:text-xs sm:mb-6 mb-2 "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.0, duration: 0.5 }}
          >
            Let's take the prep work off your plate — so you can focus on growth.
          </motion.p>
           <Link to="/quote" className=" border-2 border-red-700 rounded-lg  bg-gradient-to-r text-xs from-black to-red-600 bg-clip-text text-transparent font-semibold px-2 sm:px-4 py-1 sm:py-3 transition">
              Get a Custom Quote
            </Link>
        </motion.div>
      </div>
    </SectionLayout>
  );
}