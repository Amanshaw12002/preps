import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaSearch, FaBoxOpen, FaBarcode, FaTags } from "react-icons/fa";
import one from "../asset/1.png";
import two from "../asset/2.png";
import three from "../asset/3.png";
import four from "../asset/4.png";

const processSteps = [
  {
    id: 1,
    title: "Inspection",
    icon: FaSearch,
    image: one,
    description:
      "Every item is carefully inspected for damage, accuracy, and quality before processing.",
  },
  {
    id: 2,
    title: "Packaging",
    icon: FaBoxOpen,
    image: four,
    description:
      "Items are securely packed using the right materials to prevent damage during transit.",
  },
  {
    id: 3,
    title: "Barcodes",
    icon: FaBarcode,
    image: two,
    description:
      "Each product is labeled with the correct FNSKU or UPC barcode for easy tracking.",
  },
  {
    id: 4,
    title: "Label",
    icon: FaTags,
    image: three,
    description:
      "Proper labels are applied to meet carrier and Amazon shipping guidelines.",
  },
];

export default function MotionCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % processSteps.length),
      6000
    );
    return () => clearInterval(interval);
  }, []);

  const step = processSteps[index];
  const Icon = step.icon;

  return (
    <section className="w-full  text-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={step.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-200 relative rounded-t-2xl "
        >
          <div className="flex items-center absolute top-0 left-0 justify-center bg-gray-50 border border-gray-400 rounded-xl w-fit  mb-2 overflow-hidden ">
            <div className="bg-red-700 px-1 h-full">
              <Icon className="text-white bg-red-700 rounded-sm w-6 h-6 p-1  m-2 " />
            </div>
            <h2 className="text-red-700 px-4 font-medium text-md">
              {step.title}
            </h2>
          </div>

          <img
            src={step.image}
            alt={step.title}
            className=" w-full h-48 border border-gray-400 rounded-2xl object-cover "
          />


        </motion.div>
      </AnimatePresence>
    </section>
  );
}
