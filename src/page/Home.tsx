
import truck from "../asset/truck.png"
import rec from "../asset/rec.png"
import CustomCalendar from '@/component/Meeting';
import MotionCrousel from '@/component/slider';
import PrepServicesSection from '@/component/PrepServicesSection';
import WhatSetsUsApart from '@/component/Apart';
import FAQ from './FAQ';
import OptimizedSection from '@/sections/HeroSection';
import { easeOut, motion } from 'framer-motion';

import Section2 from '@/component/section2';
import { useLenis } from '@/component/lenis';
import Head from '@/component/Head';
import SectionLayout from '@/layout/sectionLayout';
import Software_Display from "@/sections/Software_Display";


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

interface ProcessStep {
  id: number;
  title: string;
  icon: "FaSearch" | "FaBoxOpen" | "FaBarcode" | "FaTags";
  image: "one" | "two" | "three" | "four";
  description: string;
}

export default function Home() {

 useLenis();


  return (
    <>
      <Head title="BlackBoxPreps | Amazon Prep Center"   />
    <OptimizedSection/>

    <SectionLayout>
      
<div className="flex-center flex-col mt-12 max-w-5xl mx-auto text-black ">
      <motion.h2 
        className="font-sans text-xs sm:text-lg mb-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Let's grow your business together.
      </motion.h2>

      <motion.h2 
        className=" text-3xl sm:text-4xl font-medium pb-2"
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
          className="bg-gradient-to-r text-2xl sm:text-3xl from-red-700 to-yellow-300 bg-clip-text text-transparent font-medium"
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
     

      <div className="flex-between flex-col sm:flex-row pl-4 gap-4  sm:gap-8 my-8">
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
</SectionLayout>

<PrepServicesSection/>

<WhatSetsUsApart/>


<SectionLayout >
  

  {/* Animated Grid Lines */}
  <div className=' relative max-w-5xl  mx-auto mb-12 '>
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
               
    <motion.h2 
      className=' text-xl  sm:text-4xl font-semibold text-center text-gray-900 my-4 sm:mb-8'
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
      className=' text-[12px] sm:text-xs text-center font-bold text-gray-900'
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
    className='flex flex-col lg:flex-row justify-center items-stretch gap-4 pb-8 sm:pb-0 px-8 mt-16'
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
      className='group relative flex-1 w-full  sm:max-w-md'
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
        <div className='p-2 sm:p-4'>
          <motion.div 
            className='flex items-center gap-3 mb-4'
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
           
            <h3 className= ' text-xs sm:text-sm font-semibold text-gray-900'>Receiving Packages</h3>
          </motion.div>
          <motion.p 
            className='text-gray-800 text-[12px] sm:text-sm leading-relaxed'
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
        <div className='p-2 sm:p-4'>
          <motion.div 
            className='flex items-center gap-3 mb-4'
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            
            <h3 className='text-xs sm:text-sm font-semibold text-gray-900'>Prep & Pack</h3>
          </motion.div>
          <motion.p 
            className='text-gray-800 text-[10px] sm:text-sm leading-relaxed'
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
        <div className='p-2 sm:p-4'>
          <motion.div 
            className='flex items-center gap-3 mb-4'
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            
            <h3 className='text-xs sm:text-sm font-semibold text-gray-900'>Final Shipment</h3>
          </motion.div>
          <motion.p 
            className='text-gray-800 text-[10px] sm:text-sm leading-relaxed'
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
</SectionLayout>



<Software_Display/>

  <CustomCalendar/>
  <FAQ/>
   <Section2/>






</>
  )
}
