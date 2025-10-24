import React from "react";
import { Warehouse, Truck, Package, MoveRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { TrendingUp, Workflow, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import SectionLayout from "@/layout/sectionLayout";

export default function PrepServicesSection() {
  const icons = [<TrendingUp className="h-4 w-4 sm:h-6 sm:w-6"/>, <Workflow className="h-4 w-4 sm:h-6 sm:w-6"/>, <Trophy className="h-4 w-4 sm:h-6 sm:w-6"/>];
  const words = ["Scale", "Streamline", "Succeed"];
  const [index, setIndex] = React.useState(0);
``
  // Rotate words every 2.5 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [words.length]);

  const services = [
    {
      id: 2,
      title: "FBM & DTC Prep",
      icon: <Truck className="w-12 h-12 z-20  text-black border rounded-xl p-2 mx-auto" />,
      description:
      "From same-day order prep to custom packaging, we help you deliver on time and exceed buyer expectations.",
    },
    {
      id: 1,
      title: "FBA & WFS Prep",
      icon: <Warehouse className="w-12 h-12 z-20  text-black border rounded-2xl p-2 mx-auto " />,
      description:
        "At BlackBox, our experienced warehouse team handles everything, picking, packing, prepping, labeling, repacking, and shipping, all in full compliance with Amazon’s FBA standards. We help you save time, cut costs, and focus on scaling your business.",

    },
    {
      id: 3,
      title: "Wholesale Prep",
      icon: <Package className="w-12 h-12 z-20  text-black border rounded-xl p-2 mx-auto" />,
      description:
        "Built for wholesale sellers, our Delaware tax-free warehouse handles your storage, prep, and shipments, helping you scale efficiently and reach new markets faster.",
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
<span className="mx-2  text-transparent bg-clip-text bg-gradient-to-r  from-slate-800 via-red-700 to-red-600">BlackBoxPreps</span>Help You{" "}

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
          className="text-[10px] sm:text-xs text-black max-w-3xl mx-auto mb-16"
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
              className="group  bg-white border border-black  rounded-lg shadow-md shadow-black hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-4 text-left"
              initial={{ opacity: 0.6, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + serviceIndex * 0.3, duration: 1.5 }}
            >
              {/* Header */}
              <motion.div 
                className="flex border-b pb-4 items-center  flex-col mb-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + serviceIndex * 0.1, duration: 0.5 }}
              >
                <div className=" relative  h-14 w-full my-4   p-0.5 sm:p-2">
                                  
                  {service.icon}

                </div>
                <h3 className="ml-3 text-xs sm:text-lg  font-semibold text-gray-800">
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
            className="text-xl sm:text-3xl font-inter font-semibold w-fit mx-auto  mb-3"
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
           <Link to="/quote" className=" border-2 group overflow-hidden flex-between mx-auto  p-1 rounded-xl  w-fit font-semibold  transition">
                         <ChevronRight className=" -translate-x-6  group-hover:translate-x-4 transition duration-700"/>

              <span className=" text-black py-2 px-4 rounded-lg -translate-x-6 group-hover:translate-x-6 transition duration-700">Get Started</span>
              <MoveRight className=" -translate-x-4 group-hover:translate-x-8 transition duration-700"/>
            </Link>
        </motion.div>
      </div>
    </SectionLayout>
  );
}