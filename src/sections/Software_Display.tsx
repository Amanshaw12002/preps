import dashboard from "../asset/dashboard.png"

import { Truck,  Settings,House,Warehouse} from 'lucide-react';
import inventory from "../asset/inventory.png"
import { motion } from 'framer-motion';
import { useState } from 'react';
import SectionLayout from "@/layout/sectionLayout";


export default function Software_Display() {

    
   const [itemSelected,setItemSelected] =useState(0);

const Items = [
  {
    index:0,
    label: "Dashboard",
    icon: House,
  },
  {
index:1,
    label: "Shipments",
    icon: Truck,
  },
  {
index:2,
    label: "FBA & FBM",
    icon: Settings,
  },
  {
index:3,
    label: "Inventory",
    icon: Warehouse,
  },
];

const itemsImage = [
  {
    index:0,
    image:dashboard,
  },
  {
index:1,
    image:inventory,
  },
  {
    index:2,
    image:dashboard,
  },
  {
    index:3,
    image:dashboard,
  }
]

  return (
    <>
        
<SectionLayout>
  <div className="max-w-5xl flex flex-col items-center justify-center bg-gray-50 p-2 rounded-xl">
    {/* Header */}
    <motion.div 
      className='flex flex-col items-center text-2xl sm:text-4xl font-inter font-medium text-gray-900'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2 
        className='my-8'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {"Manage Everything from".split(" ").map((word, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
            className="inline-block mr-2"
          >
            {word}
          </motion.span>
        ))}
        <motion.span 
          className="bg-clip-text bg-gradient-to-r from-red-800 to-red-700 text-transparent font-semibold"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          One place.
        </motion.span>
      </motion.h2>
    </motion.div>

    <div className='flex flex-col sm:flex-row  sm:mt-8'>
      {/* Tabs */}
      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:h-1/2 sm:mt-4 mt-4 sm:w-full"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {Items.map(({ index, label, icon: Icon }) => {
          const active = index === itemSelected;
          return (
            <motion.div
              key={index}
              onClick={() => setItemSelected(index)}
              className={`
                flex items-center gap-2 px-1 sm:px-4 py-2 w-24 sm:w-36 h-8 sm:h-12 rounded-sm sm:rounded-l-xl border sm:border-2 
                ${active ? " border-red-700 bg-red-700 text-white shadow-none" : "bg-white border-gray-300 shadow-xl hover:shadow-none hover:scale-95"}
                cursor-pointer transition-transform duration-300 flex-shrink-0
              `}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: active ? 1 : 0.95 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                className={`
                  sm:size-8 size-6 rounded-sm sm:rounded-md
                  ${active ? "bg-white text-red-700" : "bg-gray-200 text-gray-800"}
                `}
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Icon className='w-full h-full p-1 sm:p-2'/>
              </motion.div>
              <motion.span 
                className="whitespace-nowrap font-medium text-[10px] sm:text-xs"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
              >
                {label}
              </motion.span>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Selected Image */}
      <motion.div 
        className="w-full flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        {itemsImage.map(({ index, image }) => (
          <motion.div
            key={index}
            className={`${itemSelected === index ? "block" : "hidden"} w-full sm:w-[46rem] rounded-sm sm:rounded-xl overflow-hidden border border-gray-400`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={itemSelected === index ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.img 
              src={image} 
              className="object-cover rounded-xl"
              initial={{ scale: 1.1 }}
              animate={itemSelected === index ? { scale: 1 } : { scale: 1.1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </div>
</SectionLayout>    
    </>
  )
}


