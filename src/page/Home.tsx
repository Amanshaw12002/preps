
import { Truck,  Settings,House,Warehouse} from 'lucide-react';
import inventory from "../asset/inventory.png"
import truck from "../asset/truck.png"
import rec from "../asset/rec.png"
import dashboard from "../asset/dashboard.png"
import CustomCalendar from '@/component/Meeting';
import MotionCrousel from '@/component/slider';
import PrepServicesSection from '@/component/PrepServicesSection';
import WhatSetsUsApart from '@/component/Apart';
import FAQ from './FAQ';
import OptimizedSection from '@/sections/HeroSection';
import { easeOut, motion } from 'framer-motion';

import { useState } from "react";
import Section2 from '@/component/section2';
import { useLenis } from '@/component/lenis';
import Head from '@/component/Head';


export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Inspection",
    icon: "FaSearch",
    image: "one", // your image import
    description:
      "Every item is carefully inspected for damage, accuracy, and quality before processing.",
  },
  {
    id: 2,
    title: "Packaging",
    icon: "FaBoxOpen",
    image: "four",
    description:
      "Items are securely packed using the right materials to prevent damage during transit.",
  },
  {
    id: 3,
    title: "Barcodes",
    icon: "FaBarcode",
    image: "two",
    description:
      "Each product is labeled with the correct FNSKU or UPC barcode for easy tracking.",
  },
  {
    id: 4,
    title: "Label",
    icon: "FaTags",
    image: "three",
    description:
      "Proper labels are applied to meet carrier and Amazon shipping guidelines.",
  },
];

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
interface ProcessStep {
  id: number;
  title: string;
  icon: "FaSearch" | "FaBoxOpen" | "FaBarcode" | "FaTags";
  image: "one" | "two" | "three" | "four";
  description: string;
}

export default function Home() {
   const [itemSelected,setItemSelected] =useState(0);

 useLenis();


  return (
    <>
      <Head title="BlackBoxPreps | Amazon Prep Center"   />
    <OptimizedSection/>

    <section className='relative py-16 border-y '>
      
    
  {/* Animated Corner Dots */}
  <motion.div 
    className="absolute -top-1.5 left-6.5 w-3 h-3 bg-red-800 "
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 0.1, duration: 0.5 }}
  ></motion.div>
  <motion.div 
    className="absolute -top-1.5 right-6.5 w-3 h-3 bg-red-800 "
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 0.2, duration: 0.5 }}
  ></motion.div>
  <motion.div 
    className="absolute -bottom-1 right-6.5 w-3 h-3 bg-red-800 "
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 0.3, duration: 0.5 }}
  ></motion.div>
  <motion.div 
    className="absolute -bottom-1 left-6.5 w-3 h-3 bg-red-800 "
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

  {/* Animated Grid Lines */}
  <div className="absolute inset-0 opacity-15">
    <motion.div 
      className="absolute top-0 left-1/4 w-px h-full bg-red-800"
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.6 }}
    ></motion.div>
    <motion.div 
      className="absolute top-0 left-1/2 w-px h-full bg-red-800"
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 0.6 }}
    ></motion.div>
    <motion.div 
      className="absolute top-0 left-3/4 w-px h-full bg-red-800"
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, duration: 0.6 }}
    ></motion.div>
    <motion.div 
      className="absolute top-1/4 left-0 w-full h-px bg-red-800"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 0.6 }}
    ></motion.div>
    <motion.div 
      className="absolute top-1/2 left-0 w-full h-px bg-red-800"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, duration: 0.6 }}
    ></motion.div>
    <motion.div 
      className="absolute top-3/4 left-0 w-full h-px bg-red-800"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6, duration: 0.6 }}
    ></motion.div>
  </div>

  {/* Animated Gradient Circle */}

  <div className="relative max-w-6xl mx-auto">
    {/* Header Section */}
    <div className="flex-center flex-col max-w-5xl mx-auto text-black ">
      <motion.h2 
        className="font-sans text-md mb-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Let's grow your business together.
      </motion.h2>

      <motion.h2 
        className="text-4xl font-medium pb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <motion.span 
          className="bg-gradient-to-r pb-2 from-black to-red-700 bg-clip-text text-transparent font-medium block"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          New to Amazon or already selling?
        </motion.span>  
        <motion.span 
          className="bg-gradient-to-r text-3xl from-red-700 to-yellow-300 bg-clip-text text-transparent font-medium"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          We've got your prep covered...
        </motion.span>
      </motion.h2>

 <motion.div 
        className=''
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >

       
        <motion.h2 
          className='font-sans text-sm mx-auto max-w-xl text-center   px-2  text-red-800 font-normal leading-relaxed'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          Launching your first shipment or scaling to daily pallets, we help you move faster and stay compliant. Our team handles receiving, inspection, labeling, and shipment prep directly from Delaware's tax-free zone, cutting costs and turnaround time.
          Focus on growth, we'll handle the rest.
        </motion.h2>
      </motion.div>

    {/* Stats & Content Section */}
      {/* Stats Grid */}

 {/* Content Section */}
     

      <div className="flex-between  pl-4  gap-8 mt-8">
        {[
          { number: "50K+", title: "Orders Processed", desc: "Successfully prepped and shipped units.", border: "border-red-600", bg: "from-red-200", color: "text-red-800" },
{
  number: "4.8+",
  title: "Average Rating",
  desc: "From verified client reviews and testimonials.",
  border: "border-black",
  bg: "from-white",
  color: "text-black",
},
{ number: "24-48h", title: "Average Turnaround", desc: "Fast processing from receiving to shipment", border: "border-red-600", bg: "from-red-200", color: "text-red-900" },
{ number: "$0", title: "Tax Advantage", desc: "Operating from Delaware's tax-free zone", border: "border-black", bg: "from-white", color: "text-gray-900" }
        ].map((stat, index) => (
          <motion.div
          key={index}
          className={`border ${stat.border} bg-white rounded-2xl flex flex-col items-start p-4 w-52`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
            transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.h2 
              className={`text-2xl font-inter font-normal mb-2 ${stat.color}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
              >
              {stat.number}
            </motion.h2>
            <motion.p 
              className={`${stat.color} text-xs font-semibold mb-2`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1 + index * 0.1, duration: 0.5 }}
              >
              {stat.title}
            </motion.p>
            <motion.p 
              className={`${stat.color.replace('800', '700').replace('900', '700')} text-xs text-left`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
            >
              {stat.desc}
            </motion.p>
          </motion.div>
        ))}
      </div>
              
      
     
    </div>
  </div>
</section>

<PrepServicesSection/>

<WhatSetsUsApart/>


<section className='relative border-y border-red-800 bg-gradient-to-br from-red-50 to-white py-12 px-4 sm:px-6 lg:px-12 overflow-hidden'>
  
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

  {/* Animated Grid Lines */}
  <div className=' relative max-w-6xl  mx-auto mb-12 '>
    {[
      'h-full w-0.5 absolute top-20 left-20 bg-gradient-to-b from-white via-slate-200 to-white -z-1',
      'h-px w-full absolute top-20 left-20 bg-gradient-to-r from-white via-red-200 to-white -z-1',
      'h-px w-full absolute top-40 left-20 bg-gradient-to-r from-white via-red-200 to-white -z-1',
      'h-px w-full absolute top-60 left-20 bg-gradient-to-r from-white via-red-200 to-white -z-1',
      'h-px w-full absolute top-80 left-20 bg-gradient-to-r from-red-200 via-slate-200 to-white -z-1',
      'h-px w-full absolute top-100 left-20 bg-gradient-to-r from-white via-slate-200 to-white -z-1',
      'h-full w-px absolute top-0 left-40 bg-gradient-to-b from-red-200 via-red-200 to-white -z-1',
      'h-full w-px absolute top-0 right-40 bg-gradient-to-b from-red-200 via-red-200 to-white -z-1',
      'h-full w-px absolute top-0 right-20 bg-gradient-to-b from-red-200 via-slate-200 to-red-200 -z-1',
      'h-full w-px absolute top-0 right-80 bg-gradient-to-b from-red-200 via-red-200 to-white -z-1',
      'h-full w-px absolute top-0 right-100 bg-gradient-to-b from-white via-red-200 to-white -z-1',
      'h-full w-px absolute top-20 right-60 bg-gradient-to-b from-white via-red-200 to-white -z-1',
      'h-full w-px absolute top-20 left-60 bg-gradient-to-b from-white via-slate-300 to-white -z-1',
      'h-full w-px absolute top-20 left-80 bg-gradient-to-b from-white via-slate-400 to-white -z-1',
      'h-full w-px absolute top-20 left-100 bg-gradient-to-b from-white via-red-200 to-white -z-1'
    ].map((lineClass, index) => (
      <motion.div
        key={index}
        className={lineClass}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 + index * 0.05, duration: 0.6 }}
      />
    ))}
                         
    <motion.div 
      className='inline-flex border border-red-200  items-center gap-2 bg-white text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm'
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <motion.div 
        className='w-2 h-2 bg-red-600 rounded-full'
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      ></motion.div>
      PROCESS
    </motion.div>

    <motion.h2 
      className='text-5xl font-inter text-left text-gray-900 mb-8'
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
      {"From Receiving to Shipment,".split(" ").map((word, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: 300 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
      <motion.span
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2,ease:easeOut, duration: 0.9 }}
        className="block"
      >
        All in One Flow
      </motion.span>
    </motion.h2>

    <motion.h2 
      className='text-sm font-bold text-gray-900'
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.8, duration: 0.9 }}
    >
      HOW IT <motion.span 
        className='text-red-600'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.0, duration: 0.9 }}
      >WORKS</motion.span>
    </motion.h2>
  </div>

  {/* Steps Container */}
  <motion.div 
    className='flex flex-col lg:flex-row justify-center items-stretch gap-4 px-8 mt-16'
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      visible: {
        transition: {
          staggerChildren: 0.2
        }
      }
    }}
  >
    
    {/* Step 1: Receive Packages */}
    <motion.div 
      className='group relative flex-1 max-w-md'
      variants={{
        hidden: { opacity: 0, y: 200 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div 
        className='bg-white rounded-xl border border-gray-400 shadow-lg hover:shadow-2xl transition-all duration-500 h-full overflow-hidden group-hover:-translate-y-2'
        whileHover={{ scale: 1.02 }}
      >
        <motion.div 
          className='relative overflow-hidden h-48'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img 
            src={rec} 
            alt="Package receiving process" 
            className="w-full h-full object-cover"
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/10 to-transparent'></div>
        </motion.div>
        
        {/* Content */}
        <div className='p-6'>
          <motion.div 
            className='flex items-center gap-3 mb-4'
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
           
            <h3 className='text-sm font-semibold text-gray-900'>Receiving Packages</h3>
          </motion.div>
          <motion.p 
            className='text-gray-800 text-sm leading-relaxed'
            initial={{ opacity: 0 , x:-40}}
            whileInView={{ opacity: 1 ,x:0}}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            You send your inventory to our prep center. We conduct thorough inspection, 
            ensuring everything matches your specifications and requirements.
          </motion.p>
          
          {/* Features List */}
        
        </div>
      </motion.div>
    </motion.div>

    {/* Step 2: Prep & Pack */}
    <motion.div 
      className='group relative flex-1 max-w-md'
      variants={{
        hidden: { opacity: 0, y: 200 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
    >
      <motion.div 
        className='bg-white rounded-xl border border-gray-400 shadow-lg hover:shadow-2xl transition-all duration-500 h-full overflow-hidden group-hover:-translate-y-2'
        whileHover={{ scale: 1.02 }}
      >
        <motion.div 
          className='overflow-hidden h-48 bg-gradient-to-br from-gray-900 to-gray-700 relative'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <MotionCrousel />
        </motion.div>
        
        {/* Content */}
        <div className='p-6'>
          <motion.div 
            className='flex items-center gap-3 mb-4'
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            
            <h3 className='text-sm font-semibold text-gray-900'>Prep & Pack</h3>
          </motion.div>
          <motion.p 
            className='text-gray-800 text-sm leading-relaxed'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            Your packages go through our optimized workflow with quality checks at every stage, 
            ensuring perfect preparation and packaging.
          </motion.p>
          
         
        </div>
      </motion.div>
    </motion.div>

    {/* Step 3: Shipment */}
    <motion.div 
      className='group relative flex-1 max-w-md'
      variants={{
        hidden: { opacity: 0, y: 200 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
    >
      <motion.div 
        className='bg-white rounded-xl border border-gray-400 shadow-lg hover:shadow-2xl transition-all duration-500 h-full overflow-hidden group-hover:-translate-y-2'
        whileHover={{ scale: 1.02 }}
      >
        <motion.div 
          className='relative overflow-hidden h-48'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img 
            src={truck} 
            alt="Shipping and delivery process" 
            className="w-full h-full object-cover"
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/10 to-transparent'></div>
         
        </motion.div>
        
        {/* Content */}
        <div className='p-6'>
          <motion.div 
            className='flex items-center gap-3 mb-4'
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            
            <h3 className='text-sm font-semibold text-gray-900'>Final Shipment</h3>
          </motion.div>
          <motion.p 
            className='text-gray-800 text-sm leading-relaxed'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            We ship your packages to the requested destination and provide comprehensive 
            tracking with instant notifications at every milestone.
          </motion.p>
          
         
        </div>
      </motion.div>
    </motion.div>
  </motion.div>
</section>



<section className="relative flex justify-center items-center overflow-hidden bg-gray-100 py-8 px-4">
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

  <div className="max-w-5xl flex flex-col items-center justify-center bg-gray-50 p-2 rounded-xl">
    {/* Header */}
    <motion.div 
      className='flex flex-col items-center text-4xl font-inter font-medium text-gray-900'
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
          className="bg-clip-text bg-gradient-to-r from-red-800 to-blue-700 text-transparent font-semibold"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          One place.
        </motion.span>
      </motion.h2>
    </motion.div>

    <div className='flex mt-8'>
      {/* Tabs */}
      <motion.div 
        className="grid grid-cols-1 gap-2 h-1/2 mt-4 w-full"
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
                flex items-center gap-2 px-4 pr-4 py-2 w-36 h-12 rounded-l-xl border sm:border-2 
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
                  w-8 h-8  rounded-md
                  ${active ? "bg-white text-red-700" : "bg-gray-200 text-gray-800"}
                `}
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Icon className='w-full h-full p-2'/>
              </motion.div>
              <motion.span 
                className="whitespace-nowrap font-medium text-xs"
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
            className={`${itemSelected === index ? "block" : "hidden"} w-[46rem] rounded-sm sm:rounded-xl overflow-hidden border border-gray-400`}
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
</section>

{/* <section className="py-16 bg-gray-100">
  <div className="max-w-5xl mx-auto flex flex-col   rounded-2xl py-8 items-center text-center px-4">
    <h2 className="text-xl mb-2 text-gray-800">Solutions</h2>
    <h2 className="text-3xl font-inter font-medium  text-black  mb-2">
      Comprehensive Fulfillment Services
    </h2>
    <h3 className="text-md font-medium text-gray-700 mb-12">
      Efficient and reliable logistics for Amazon sellers
    </h3>

    <div className="flex flex-wrap justify-between gap-6 w-full">
      <div className="flex flex-col md:flex-row items-center bg-white border rounded-2xl shadow-md w-full md:w-[48%] overflow-hidden hover:shadow-lg transition">
        <div className="flex flex-col w-full border-gray-400 border md:w-1/2 p-6 text-left gap-3">
          <h3 className="text-xl font-semibold text-gray-800">FBA</h3>
          <p className="text-gray-900 text-2xl font-medium">
            Amazon FBA fulfillment made simple
          </p>
          <p className="text-gray-600">
            Complete control over your Amazon selling strategy.
          </p>
          <button className="mt-2 bg-black text-white px-4 py-2 rounded-xl w-fit hover:bg-gray-800 transition">
            Learn More
          </button>
        </div>
        <img
          src={def}
          alt="FBA"
          className="w-full md:w-1/2 h-full  object-cover object-[64%_center]"
        />
      </div>

      <div className="flex flex-col bg-gray-100 rounded-2xl shadow-md border w-full md:w-[23%] overflow-hidden hover:shadow-lg transition">
        <img src={def2} alt="FBM" className="w-full h-60 object-cover" />
        <div className="flex flex-col p-6 gap-3 text-left">
          <h3 className="text-xl font-semibold text-gray-800">FBM</h3>
          <p className="text-gray-900 text-2xl font-medium">
            Merchant fulfilled solutions
          </p>
          <p className="text-gray-600">
            Seamless inventory management and shipping for your products.
            
          </p>
          <button className="mt-2 bg-black text-white px-4 py-2 rounded-xl w-fit hover:bg-gray-800 transition">
            Explore
          </button>
        </div>
      </div>

      <div className="flex flex-col bg-gray-100 rounded-2xl shadow-md w-full md:w-[23%] border overflow-hidden hover:shadow-lg transition">
        <div className="flex flex-col p-6 gap-3 text-left">
          <h3 className="text-xl font-semibold text-gray-800">Prep</h3>
          <p className="text-gray-900 text-2xl font-medium">
            Product preparation services
          </p>
          <p className="text-gray-600">
            Expert handling to meet Amazon’s strict requirements.
          </p>
          <button className="mt-2 bg-black text-white px-4 py-2 rounded-xl w-fit hover:bg-gray-800 transition">
            Discover
          </button>
        </div>
        <img src={def3} alt="Prep" className="w-full h-60 object-cover" />
      </div>
    </div>
  </div>
</section> */}

  <CustomCalendar/>
  <FAQ/>
   <Section2/>






</>
  )
}
