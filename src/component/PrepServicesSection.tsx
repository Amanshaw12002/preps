import React from "react";
import { Warehouse, Truck, Package } from "lucide-react";
import { motion } from "framer-motion";
import { TrendingUp, Workflow, Trophy } from "lucide-react";



export default function PrepServicesSection() {

 const icons = [<TrendingUp />, <Workflow />, <Trophy />];
  const words = ["Scale", "Streamline", "Succeed"];
  const [index, setIndex] = React.useState(0);

  // Rotate words every 2.5 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 6000);
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
    <section className="py-12  bg-gray-50">
      <div className="max-w-6xl   mx-auto px-6 text-center">
        {/* Section Header */}  <div className=" flex-center overflow-hidden">
      <motion.h2
        key={index}
        initial={{ x: 10,  }}
        animate={{ x: 0,  }}
        exit={{ x: -10,  }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="text-3xl flex items-center font-semibold text-gray-800 mb-6 text-center"
      >
        How <span className="mx-2 text-transparent bg-clip-text bg-gradient-to-r from-black via-red-800 to-red-500">BlackBoxPreps </span> Help You{" "}
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex items-center w-fit px-4 mx-2 text-black bg-white  border border-gray-400 rounded-xl py-2"
        > <span className="text-xl p-1 text-white bg-red-800  mr-2 rounded-md">{icons[index]}</span>
         <span> {words[index]}</span>
        </motion.span>{" "}
        Your Business
      </motion.h2>
    </div>
        <p className="text-sm text-gray-800 max-w-3xl mx-auto mb-16">
          Whether you sell through <span className="font-medium">FBA & WFS</span>, manage
          orders via <span className="font-medium">FBM</span>, or supply to{" "}
          <span className="font-medium">Wholesale</span> partners — our end-to-end prep
          solutions ensure every unit leaves your inventory compliant, protected, and
          ready to sell.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white border-1 border-gray-400 hover:border-red-700 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2  p-8 text-left"
            >
              <div className="flex items-center  mb-4">
                <div className=" bg-white p-2 border-red-800 rounded-lg border ">{service.icon}</div>
                <h3 className="ml-3 text-md font-semibold text-gray-800">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              <ul className="space-y-2 text-gray-700 mb-4 text-sm ">
                {service.points.map((point, index) => (
                  <li className="border-t border-gray-600 pt-2" key={index}>{point}</li>
                ))}
              </ul>
              <p className="text-sm group-hover:text-black text-gray-800 border-t pt-3 italic">
                → {service.result}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16">
          <h3 className="text-3xl font-inter font-semibold w-fit mx-auto text-transparent bg-gradient-to-r from-black via-red-600  to-red-700 bg-clip-text mb-3">
            Streamline. Scale. Succeed.
          </h3>
          <p className="text-gray-600 mb-6">
            Let’s take the prep work off your plate — so you can focus on growth.
          </p>
          <button className="bg-white border border-gray-400   text-gray-800 px-8 py-3 rounded-xl font-semibold shadow-md transition-all">
            Get a Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
}
