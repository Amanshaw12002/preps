
import truck from "../asset/truck.png"
import rec from "../asset/rec.png"
import CustomCalendar from '@/component/Meeting';
import MotionCrousel from '@/component/slider';
import PrepServicesSection from '@/component/PrepServicesSection';
import WhatSetsUsApart from '@/component/Apart';
import FAQ from './FAQ';
import OptimizedSection from '@/sections/HeroSection';
import { easeOut, motion } from 'framer-motion';
import blackbox from '../asset/blackbox.png';
import Section2 from '@/component/section2';
import { useLenis } from '@/component/lenis';
import Head from '@/component/Head';
import SectionLayout from '@/layout/sectionLayout';
import Software_Display from "@/sections/Software_Display";
import { Link } from "react-router-dom";
import { ChevronRight, MoveRight } from "lucide-react";
import SecondSection from "@/sections/SecondSection";
import { FaEnvelope } from "react-icons/fa";


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
      
<div className="flex-center flex-col  max-w-5xl mx-auto text-black relative">
  <div className="bg-black h-0.5 absolute top-5 left-1/4 w-1/2 z-0">
   <div className="flex-between -mt-1.5">

   <div className="bg-white border-black border-2 rounded-sm h-3.5 w-3 "></div>
   <div className="bg-white border-black border-2 rounded-sm h-3.5 w-3"></div>
   </div>
  </div>
      <img src={blackbox} className="w-10 h-10 border-2  rounded-2xl mb-2 z-10" />
      <motion.h2 
        className="font-sans text-xs font-semibold sm:text-sm mb-2"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Let's grow your business together.
      </motion.h2>

      <motion.h2 
        className=" text-md sm:text-5xl  flex-center flex-col font-medium "
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}      >
        <motion.span 
          className="bg-gradient-to-r pb-4 from-black to-red-700 bg-clip-text text-transparent font-semibold block"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          New to Amazon or Already Selling!
        </motion.span> 

        <motion.span 
          className="text-gray-900 text-xl sm:text-5xl font-semibold text-center sm:my-4"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.6 }}
          >
          <span className=" pb-2 bg-gradient-to-r  from-black to-red-700 bg-clip-text text-transparent font-semibold block sm:mb-2">We Handle Prep and Shipping </span>
           <span className=" text-xl sm:text-5xl L text-black">You Focus on Growth.</span>
        </motion.span>
      </motion.h2>
          <p className="text-xs mx-8 sm:mx-0 text-center sm:text-sm mb-2 text-gray-700 font-medium">BlackBoxPreps handles preps,while you build.</p>

 <motion.div 
        className=''
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
       <div 
                className="flex  items-center flex-col sm:flex-row w-fit   mt-2 mb-6  mx-auto  gap-4 justify-center"
              >
                              <Link to="/quote" className=" border-2 group  border-black overflow-hidden flex-between mx-auto  py-1 rounded-xl  w-fit text-md font-semibold  transition">
                         <ChevronRight className="text-black -translate-x-6  group-hover:translate-x-4 transition duration-700"/>

              <span className=" text-black py-1 px-4 rounded-lg -translate-x-4 group-hover:translate-x-4 transition duration-700">Get Started</span>
              <MoveRight className="p-0.5 text-black -translate-x-4 group-hover:translate-x-8 transition duration-700"/>
            </Link>
                <Link 
                to="/pricing"  
                
                className="w-fit hover:border-red-700 bg-gradient-to-r from-black to-red-600   border-2 border-black bg-clip-text text-transparent text-md rounded-lg text-center font-semibold px-6 py-3 transition hover:opacity-90 "
                >
               Check Pricing
              </Link>
               
              </div>
        <motion.h2 
          className='font-sans text-sm  mx-auto max-w-xl text-center py-4  rounded-2xl  px-8   font-normal leading-relaxed'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          Launching your first shipment or scaling to daily pallets, we help you move faster and stay compliant. Our team handles receiving, inspection, labeling, and shipment prep directly from Delaware's tax-free zone, cutting costs and turnaround time.
         
        </motion.h2>
      </motion.div>
<div className="flex-between flex-col  gap-2 border-t border-gray-400 p-2 ">
  <p className="text-xs text-gray-600">We are available 24/7. </p>
  <a href="mailto:blackboxprepcenter.com" 
     className="bg-black/80 group text-white flex-between gap-2 rounded-lg text-sm font-semibold p-3 transition-all duration-500 overflow-hidden">
              <FaEnvelope className="w-4 h-4 group-hover:-translate-x-8 transition duration-700"/>
              <span className="duration-700 group-hover:-translate-x-3 transition">Contact Us</span>
            </a>
            
  </div>         
      
     
  </div>
</SectionLayout>
    <SecondSection/>

<PrepServicesSection/>

<WhatSetsUsApart/>


<SectionLayout >
  

  {/* Animated Grid Lines */}
  <div className=' relative max-w-5xl  mx-auto mb-12 '>

<h2 className="mx-auto relative z-10  w-fit text-black bg-white font-medium  border px-2 py-1 rounded-lg mb-8">
          WORKFLOW</h2>

       <div className="bg-black h-px absolute top-4 left-1/4 w-1/2 z-0">
   <div className="flex-between -mt-1.5">

   <div className="bg-white border-black border-2 rounded-sm h-3.5 w-3 "></div>
   <div className="bg-white border-black border-2 rounded-sm h-3.5 w-3"></div>
   </div>
  </div>


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
      className=' text-xl  sm:text-4xl font-semibold leading-12 text-center text-gray-900 my-4 sm:mb-8'
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
      className=' text-[12px] sm:text-xs text-center z-10 font-bold w-1/2 mx-auto    text-gray-900'
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.8, duration: 0.9 }}
    >
      <motion.span 
        className=' z-10 mt-6 text-red-600 border overflow-hidden rounded-2xl p-2 '
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.0, duration: 0.9 }}
      >HOW IT WORKS</motion.span>
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
