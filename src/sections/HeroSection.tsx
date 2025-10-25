import { motion } from 'framer-motion';

import box from '../asset/box2.png'
import SectionLayout from '@/layout/sectionLayout';
import { ChevronRight, MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {




  return (
    <SectionLayout sectionTopPadding='pt-10' >
  
             

        {/* Content Section with Animated Grid Lines */}
        <div className="relative py-14 lg:pl-8   mx-auto  max-w-3xl  shrink-0 text-black">

 



          {/* Animated Grid Lines */}
          {[
            { class: 'h-10/12 w-px top-0 left-20 bg-gradient-to-b from-red-800 to-red-700 ', delay: 0 },
            { class: 'h-px w-full top-0 left-20 bg-gradient-to-r from-red-800 via-red-200 to-white', delay: 0.1 },
            { class: 'h-px w-full top-20 left-20 bg-gradient-to-r from-red-800 via-red-200 to-white', delay: 0.1 },
            { class: 'h-px w-full bottom-23 left-20 bg-gradient-to-r from-red-800 via-red-200 to-white', delay: 0.1 },
            { class: 'h-px w-full top-40 left-20 bg-gradient-to-r from-red-800 via-red-200 to-white', delay: 0.2 },
            { class: 'h-px w-full top-60 left-20 bg-gradient-to-r from-red-800 via-slate-200 to-white', delay: 0.3 },
            { class: 'h-px w-full top-80 left-20 bg-gradient-to-r from-red-200 via-slate-200 to-white', delay: 0.4 },
            { class: 'h-px w-full top-100 left-20 bg-gradient-to-r from-red-500  via-white to-red-800', delay: 0.5 },
            { class: 'h-10/12 w-px top-0 left-40 bg-gradient-to-b from-red-800 via-white to-red-800', delay: 0.6 },
            { class: 'h-10/12 w-px top-0 left-60 bg-gradient-to-b from-red-800 via-slate-300 to-red-800', delay: 0.7 },
            { class: 'h-10/12 w-px top-0 left-80 bg-gradient-to-b from-red-800 via-slate-400 to-red-800', delay: 0.8 },
            { class: 'h-10/12 w-px top-0 left-100 bg-gradient-to-b from-white via-red-200 to-white', delay: 1.2 },
            { class: 'h-10/12 w-px top-0 right-0 bg-gradient-to-b from-white via-red-200 to-red-700', delay: 1.4 },
            { class: 'h-10/12 w-px top-0 right-20 bg-gradient-to-b from-white via-red-200 to-white', delay: 1.5 },
            { class: 'h-10/12 w-px top-0 right-40 bg-gradient-to-b from-white via-red-200 to-white', delay: 1.6 },
            { class: 'h-10/12 w-px top-0 right-60 bg-gradient-to-b from-white via-red-200 to-red-500', delay: 1.7 },
            { class: 'h-10/12 w-px top-0 right-80 bg-gradient-to-b from-white via-red-200 to-red-400', delay: 1.8 },
            { class: 'h-10/12 w-px top-0 right-100 bg-gradient-to-b from-white via-red-200 to-white', delay: 1.9 },
            { class: 'h-10/12 w-px top-0 -right-20 bg-gradient-to-b from-white via-red-200 to-red-500', delay: 1.9 },
          ].map((line, index) => (
            <motion.div
              key={index}
              className={`absolute hidden lg:block -z-1 ${line.class}`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.5 }}
              transition={{ delay: line.delay, duration: 0.8 }}
            />
          ))}
          
          {/* Animated Text Content */}
          <div className="flex lg:flex-col lg:w-2xl  relative z-20 ">

            <h2 className="text-2xl sm:text-4xl lg:text-5xl pt-8 font-semibold font-inter text-red-700 text-shadow-2xs">
              <motion.span 
                className="block pb-1"
                initial={{ opacity: 0, y: 30,scale:0.7 }}
                animate={{ opacity: 1, y: 0 ,scale:1}}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Optimized {" "} 
              </motion.span>
              <motion.span 
                className="bg-gradient-to-r pb-1 block from-red-500 via-black to-black bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30 ,scale:0.7}}
                animate={{ opacity: 1, y: 0 ,scale:1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Prep Services {" "} 
              </motion.span>
              <motion.span 
                className="bg-gradient-to-l pb-1 block from-black via-black to-red-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30 ,scale:0.7}}
                animate={{ opacity: 1, y: 0 ,scale:1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
              for All Your
              </motion.span>
              <motion.span 
                className='bg-gradient-to-l pb-1 block from-black via-black to-red-500 bg-clip-text text-transparent'
                initial={{ opacity: 0, y: 30 ,scale:0.7}}
                animate={{ opacity: 1, y: 0 ,scale:1}}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                {" "} Fulfillment Needs. {" "}
              </motion.span>
            </h2>
            <div className="flex-between w-fit gap-4  mt-4">

              <Link to="/quote" className=" border-2 group overflow-hidden flex-between   py-2 rounded-xl  w-fit text-sm font-semibold  transition">
                         <ChevronRight className=" -translate-x-6  group-hover:translate-x-4 transition duration-700"/>

              <span className=" text-black py-1 px-4 rounded-lg -translate-x-4 group-hover:translate-x-4 transition duration-700">Get Started</span>
              <MoveRight className="p-0.5 -translate-x-4 group-hover:translate-x-8 transition duration-700"/>
            </Link>
            <Link to="https://dashboard.blackboxpreps.com/login" className="bg-[#292929] group text-white flex-between gap-1     rounded-lg text-sm font-semibold px-4 py-3   transition-all duration-500">
              <span className="duration-700 group-hover:translate-x-2 transition">Dashboard</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-8 transition duration-700"/>
            </Link>
            </div>
          </div>

          <motion.h2 
            className= 'text-xs sm:text-md md:text-lg font-sans font-normal text-black mt-4 mb-2'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            You sell, we handle the rest.
          </motion.h2>
          <motion.p 
            className='font-sans text-[10px] sm:text-xs pr-12 text-black'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Safe storage to professional packing & fast shipping. With our fast and reliable FBA service, your products are always ready to reach customers quickly and securely.
          </motion.p>
          

          <div className='lg:max-w-none  absolute -right-30 -top-20 sm:-right-10 sm:-top-30 lg:left-1/3  lg:-top-50 overflow-hidden z-10 lg:flex-none flex max-w-3xl lg:ml-0'>
          <div className='max-w-2xl flex-none lg:max-w-none relative'>
              <motion.img 
                src={box} 
                alt="" 
                className=" w-[22rem] sm:w-[32rem] lg:w-[52rem] object-cover z-1 rounded-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.8 }}
              />
          </div>  
        </div>
      
        </div>
        
        {/* Animated Image */}
        
      
        {/* Animated Value Cards */}
        
    </SectionLayout>
  );
}