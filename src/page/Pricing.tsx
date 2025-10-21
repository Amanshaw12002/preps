import Head from "@/component/Head";
import { useLenis } from "@/component/lenis";
import Section2 from "@/component/section2";
import { motion, type Variants } from "framer-motion";
import { Package, ShoppingBag, DollarSign, Truck, Warehouse, Crown, Check } from "lucide-react";
import { Settings } from "lucide-react";

export default function Pricing() {
  const containerVariants:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants:Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const cardVariants:Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const checkIconVariants:Variants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };


  useLenis();
  return (
    <>
  <Head title="BlackBoxPreps | Transparent Pricing" />
  
        <section className="relative pb-24 z-10 overflow-hidden">
        {/* Background Gradient */}
        <motion.div 
          className="absolute top-0 h-106 bg-gradient-to-b from-red-900 via-red-800 to-red-700 w-full -z-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <motion.div 
          className="mx-auto max-w-6xl pt-42 z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section Heading */}
          <motion.div 
            className="max-w-5xl mx-auto text-center mb-16"
            variants={itemVariants}
          >
            <motion.h1 
              className="text-5xl font-mon mb-4 text-white"
              initial={{ y: 50, opacity: 0,scale:0.6 }}
              animate={{ y: 0, opacity: 1 ,scale:1}}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            >
              Our Pricing
            </motion.h1>
            <motion.h2 
              className="text-md text-white max-w-lg mx-auto mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Transparent and competitive pricing
               — only pay
               for what you use.
            </motion.h2>
            
            <motion.div 
              className="mx-auto w-1/3 flex items-center relative"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="h-2 w-4 bg-black"></div>
              <div className="h-px w-72 bg-black"></div>
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 150 }}
              >
                <Crown className="h-6 w-6 mx-2 text-black"/>
              </motion.div>
              <div className="h-px w-72 bg-black"></div>
              <div className="h-2 w-4 bg-black"></div>
            </motion.div>
            
            <motion.div 
              className="flex-between flex-col w-fit mx-auto"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <h2 className="text-center font-semibold pb-2 text-6xl">Choose Your Plan</h2>
            </motion.div>
          </motion.div>

          {/* Pricing Cards */}
          <motion.div 
            className="grid md:grid-cols-3 gap-6 max-w-5xl xl:max-w-6xl mx-auto mt-4"
            variants={containerVariants}
          >
            {/* Online Arbitrage */}
            <motion.div 
              className="bg-gray-200 rounded-xl shadow-md shadow-black border-gray-400 border p-6 flex flex-col transition"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div 
                className="flex items-center gap-2 mb-6"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <ShoppingBag className="w-8 h-8 p-1 text-black border-2 rounded-lg" />
                <h2 className="text-lg font-semibold text-gray-900">Online Arbitrage</h2>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-sm border-b border-gray-400 pb-4 mb-4 font-medium text-gray-700">
                  Ideal for sellers sourcing products online and shipping directly to prep centers. Fast turnaround, sticker removal, labeling, and FBA shipment creation included.
                </h2>
              </motion.div>
              
              <motion.ul 
                className="space-y-2 flex gap-4 h-42 text-gray-700 text-sm mb-6"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <motion.li 
                  className="p-4 w-1/2 h-full flex-between flex-col border border-gray-400 text-center text-white rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="font-bold border-b border-gray-400 p-2 mb-2 text-3xl text-black">
                    $1.20 <span className="text-sm font-medium">/ unit</span>
                  </span>
                  <span className="font-medium text-black">0–999 units/month</span>
                </motion.li>
                <motion.li 
                  className="p-4 w-1/2 flex-between flex-col border border-gray-400 text-center text-black rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="font-bold text-3xl border-b border-gray-400 p-2 mb-2 text-black">
                    $1.00 <span className="text-sm font-medium">/ unit</span>
                  </span>
                  <span className="font-medium text-black">1,000+ units/month</span>
                </motion.li>
              </motion.ul>

              <motion.div 
                className="flex flex-col pt-4 mt-2 border-t border-gray-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <ul className="flex flex-col space-y-3 text-sm font-normal">
                  {[
                    "Great for new & part-time sellers",
                    "Low minimum quantity",
                    "Handles multi-store deliveries",
                    "Fast turnaround & Amazon compliance"
                  ].map((feature, index) => (
                    <motion.li 
                      key={index}
                      className="flex h-8 gap-2 text-gray-700"
                      initial={{ x: -30, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                    >
                      <motion.div
                        variants={checkIconVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        <Check className="h-5 w-5 shrink-0 bg-white shadow-[0_6px_25px_rgba(0,0,0,0.25)] rounded-full p-0.5 text-black" />
                      </motion.div>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.p 
                className="text-xs text-gray-900 mt-12 italic"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
              >
                *Box price not included
              </motion.p>
            </motion.div>

            {/* Wholesale & Private Label */}
            <motion.div 
              className="bg-[#292929] rounded-xl shadow-md shadow-black border-gray-400 border p-6 flex flex-col transition"
              variants={cardVariants}
              whileHover="hover"
            >
              
              <motion.div 
                className="flex items-center  gap-2  text-white"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Package className="w-8 h-8 p-1 border-2 text-white rounded-lg" />
                <h2 className="text-lg font-semibold">Wholesale & Private Label</h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="text-sm border-b border-gray-400 py-6 mb-6 font-medium text-gray-300">
                  Designed for bulk shipments and brand products. Includes labeling, bundling, custom packaging, and quality inspection for professional presentation.
                </h2>
              </motion.div>

              <motion.ul 
                className="space-y-2 flex gap-4 h-42 text-gray-700 text-sm mb-6"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <motion.li 
                  className="p-4 w-1/2 h-full flex-between flex-col border border-gray-400 text-center text-white rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="font-bold border-b border-gray-400 p-2 mb-2 text-3xl text-white">
                    $0.70 <span className="text-sm font-medium">/ unit</span>
                  </span>
                  <span className="font-medium text-white">0–999 units/month</span>
                </motion.li>
                <motion.li 
                  className="p-4 w-1/2 flex-between flex-col border border-gray-400 text-center text-white rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="font-bold text-3xl border-b border-gray-400 p-2 mb-2 text-white">
                    $0.50 <span className="text-sm font-medium">/ unit</span>
                  </span>
                  <span className="font-medium text-white">1,000+ units/month</span>
                </motion.li>
              </motion.ul>

              <motion.div 
                className="flex flex-col pt-4 mt-2 border-gray-400 border-t"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <ul className="flex flex-col space-y-3 text-sm text-white font-normal">
                  {[
                    "Supports bulk shipments & branded packaging",
                    "Amazon-compliant labeling & prep",
                    "Optional storage & inventory management",
                    "Ideal for growing brands and established sellers"
                  ].map((feature, index) => (
                    <motion.li 
                      key={index}
                      className="flex h-10 gap-2 text-gray-200 font-normal"
                      initial={{ x: -30, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.9 + index * 0.1, type: "spring" }}
                      >
                        <Check className="h-5 w-5 shrink-0 text-red-100 bg-red-600 shadow-[0_0_15px_rgba(239,68,68,0.6),0_0_30px_rgba(239,68,68,0.4)] rounded-full p-0.5" />
                      </motion.div>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.p 
                className="text-xs text-gray-50 mt-4 italic"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 }}
              >
                *Box price not included
              </motion.p>
            </motion.div>

            {/* Custom Plan */}
            <motion.div 
              className="bg-white rounded-xl shadow-md shadow-black border-gray-400 p-6 border-1 flex flex-col transition"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div 
                className="flex items-center gap-2 mb-6"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <Settings className="w-8 h-8 p-1 text-black border-2 rounded-lg" />
                <h2 className="text-lg font-semibold text-gray-800">Custom Plan</h2>
              </motion.div>

              <motion.p 
                className="text-gray-700 text-sm mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                Tailored for businesses with unique requirements. Combine prep, fulfillment,
                and storage options to fit your specific needs.
              </motion.p>

              <motion.ul 
                className="space-y-2 text-gray-700 text-sm mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <motion.li initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.8 }}>Flexible unit rates</motion.li>
                <motion.li initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.9 }}>Bulk discounts available</motion.li>
                <motion.li initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 1.0 }}>Custom service combinations</motion.li>
              </motion.ul>

              <motion.h3 
                className="text-md font-semibold text-gray-800 mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1 }}
              >
                Includes:
              </motion.h3>
              
              <motion.ul 
                className="space-y-2 text-gray-700 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 }}
              >
                <motion.li initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 1.3 }}>
                  <DollarSign className="inline w-4 h-4 mr-1" /> Additional Fees
                </motion.li>
                <motion.li initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 1.4 }}>
                  <Truck className="inline w-4 h-4 mr-1" /> Additional Services
                </motion.li>
                <motion.li initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 1.5 }}>
                  <Warehouse className="inline w-4 h-4 mr-1" /> Storage Options
                </motion.li>
              </motion.ul>
              
              <div className="mt-auto">
                <motion.button 
                  className="font-semibold text-lg w-full border-2 border-gray-400 bg-gray-200 text-black cursor-pointer rounded-sm py-2"
                  whileHover={{ scale: 1.05, backgroundColor: "#e5e7eb" }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.6 }}
                >
                  Contact Us
                </motion.button>

                <motion.p 
                  className="text-xs text-gray-500 mt-2 italic"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.7 }}
                >
                  Contact us for a personalized quote.
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Additional Sections */}
        <motion.div 
          className="m-8 flex flex-col border rounded-2xl mx-auto max-w-5xl border-gray-400 bg-white"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80 }}
        >
          <motion.h3 
            className="text-3xl font-semibold mx-auto text-black mt-6 mb-2"
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Additional Fees
          </motion.h3>
          <motion.p 
            className="text-center text-gray-600 text-sm mb-4 px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Extra charges for special packaging or oversized items that need extra care during prep.
          </motion.p>
          
          <motion.ul 
            className="space-y-2 flex-between w-10/12 mx-auto text-sm mb-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { title: "Fragile(bubble wrap)", price: "+$0.10", unit: "/ foot" },
              { title: "Oversized/Overweight (5+ lbs)", price: "+$0.50", unit: "/ unit" },
              { title: "Multi-pack / bundle", price: "+$0.15", unit: "each" }
            ].map((item, index) => (
              <motion.li 
                key={index}
                className="m-2 p-4 flex-between flex-col border border-gray-400 rounded-lg"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <span className="font-medium border-b border-gray-400 pb-2 text-gray-800">{item.title}</span>
                <span className="font-semibold bg-white text-3xl border-gray-400 p-2 rounded-r-lg text-black">{item.price}</span>
                <span className="font-semibold bg-white text-lg border-gray-400 p-2 rounded-r-lg text-black">{item.unit}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div 
          className="m-8 flex-between rounded-2xl mx-auto max-w-5xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {/* Additional Services */}
          <motion.div 
            className="m-8 p-4 flex flex-col border rounded-2xl max-w-md border-gray-400 bg-white"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80 }}
          >
            <motion.h3 
              className="text-lg font-semibold mx-auto text-black mb-2"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Additional Services
            </motion.h3>
            <motion.p 
              className="text-center text-gray-600 text-sm mb-4 px-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Enhance your prep process with our optional add-on services designed to handle special packaging and labeling needs efficiently.
            </motion.p>
            
            <motion.ul 
              className="space-y-2 flex gap-4 text-gray-700 text-sm mb-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { title: "Merchant Fulfillment", price: "+$1.00", unit: "/ unit + box price" },
                { title: "Return to supplier", price: "+$2.00", unit: "/ return" }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  className="p-4 h-42 w-1/2 flex-between flex-col border border-gray-400 rounded-lg"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="font-medium flex border-b border-gray-400 p-2 text-gray-800">{item.title}</span>
                  <span className="font-semibold p-2 text-3xl text-black">{item.price}</span>
                  <span className="font-semibold text-md border-gray-400 p-2 rounded-r-lg text-black">{item.unit}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Storage */}
          <motion.div 
            className="m-8 flex flex-col border max-w-md p-4 rounded-2xl border-gray-400 bg-white"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80 }}
          >
            <motion.h3 
              className="text-lg font-semibold mx-auto text-black mb-2"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Storage
            </motion.h3>
            <motion.p 
              className="text-center text-gray-600 text-sm mb-4 px-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Secure and organized storage solutions for your inventory before it's shipped to Amazon or directly to your customers.
            </motion.p>
            
            <motion.ul 
              className="space-y-2 flex-between mx-auto gap-8 text-gray-700 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <motion.li 
                className="p-4 h-42 border flex-between flex-col border-gray-400 rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex-between border p-1 border-gray-400 rounded-lg">
                  <span className="font-medium flex p-2 text-gray-800">After 14 days</span>
                  <motion.div 
                    className="flex-between px-4 py-2 gap-1 mx-2 border-gray-400 bg-red-600 rounded-lg"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="font-medium text-xs flex border-gray-400 text-white">First 14 days-</span>
                    <span className="font-semibold text-xs text-white">Free</span>
                  </motion.div>
                </div>
                <span className="font-semibold text-3xl border-gray-400 p-2 rounded-r-lg text-black">$0.01</span>
                <span className="font-semibold text-md border-gray-400 p-2 rounded-r-lg text-black"> / day per unit</span>
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>
      </section>
      <Section2/>
    </>
  );
}