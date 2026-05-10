import { MessageCircleQuestion, Eye, Layers } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatSetsUsApart() {
  const features = [
    {
      icon: <MessageCircleQuestion  className="w-6 h-6 text-red-800" />,
      title: "Communication",
      desc: "Automated updates and direct communication with the prep team to ensure every order is handled correctly.",
    },
    {
      icon: <Eye className="w-6 h-6 text-red-800" />,
      title: "Transparent Operations",
      desc: "Full visibility on inventory from check in to shipment, with clear and detailed billing breakdowns.",
    },
    {
      icon: <Layers className="w-6 h-6 text-red-800" />,
      title: "Scalable Infrastructure",
      desc: "Our systems and workforce scale effortlessly with your seasonal demand — ensuring consistent turnaround even during peak season.",
    },
  ];

  return (
    <section className="max-w-7xl py-8 mx-auto">
      

      <div className="max-w-5xl relative mx-auto sm:px-6 text-center rounded-2xl">

<h2 className="mx-auto relative z-10  w-fit text-black bg-white font-medium  border px-2 py-1 rounded-lg mb-8">
          COMPETITIVE</h2>

       <div className="bg-black h-px absolute top-4 left-1/4 w-1/2 z-0">
   <div className="flex-between -mt-1.5">

   <div className="bg-white border-black border-2 rounded-sm h-3.5 w-3 "></div>
   <div className="bg-white border-black border-2 rounded-sm h-3.5 w-3"></div>
   </div>
  </div>
        {/* Header Section */}
        <motion.div 
          className="w-full flex items-center justify-center p-2 sm:px-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
  className="text-xl sm:text-3xl font-semibold font-inter w-fit text-gray-800 text-left sm:m-4"
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
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3  pt-2 pb-8 sm:p-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="border border-red-800 group  hover:border-red-800 shadow-sm hover:shadow-md p-6 text-left transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
             
            >
              <motion.div 
                className="mb-3 flex items-center justify-start"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
              >
                <motion.div 
                  className="p-3 rounded-xl group-hover:rotate-6 group-hover:scale-105 border-red-800 border"
                 
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
                className=" text-gray-800 text-sm leading-relaxed"
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