import { motion } from "framer-motion";

import SectionLayout from '@/layout/sectionLayout';
import { ChevronRight, MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';


export default function HeroSection() {

  return (
    <SectionLayout  >
  
             

        <div className="relative flex flex-col items-center text-center py-6 sm:py-24   mx-auto  max-w-3xl  shrink-0 text-black">

 


          
          <div className="flex lg:flex-col lg:w-3xl items-center pt-2 text-center flex-col  relative z-20 ">


            <h2 className="text-2xl sm:text-5xl lg:text-6xl sm:lg-8 lg:pt-12 font-semibold font-inter text-white text-shadow-2xs">
              <motion.span 
                className="w-fit  sm:pb-3 block "
                initial={{ opacity: 0, x:-100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Optimized Prep Work
                {" "} 
              </motion.span>
              
              <motion.span 
                className=" sm:pb-3 block"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0  }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
              For All Your
              </motion.span>
              <motion.span 
                className='block sm:pb-3 '
                initial={{ opacity:0, x: -100 }}
                animate={{ opacity:1, x: 0  }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
              Fulfillment Needs.
              </motion.span>
          <motion.span
            className= 'text-xs text-white font-semibold sm:text-md md:text-sm lg:text-md font-sans   mt-2 '
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >While you sell, we handle the rest. 
          <span className="text-white "> Move your prep work with <span className="text- font-bold text-sm">BlackBoxPreps.</span></span> 
          </motion.span>
            </h2>
            <motion.div
            initial={{x:-100, opacity: 0 }}
          animate={{ opacity: 1,x:0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            
            className="flex-between  flex-col bg-transparent  sm:flex-row w-fit  gap-4  my-4">

              <Link to="/quote" className=" text-white bg-black shadow-lg shadow-black  group overflow-hidden flex-between   py-2 rounded-xl  w-fit text-sm font-semibold  transition">
                         <ChevronRight className=" -translate-x-6  group-hover:translate-x-4 transition duration-700"/>

              <span className="  py-1 px-4 rounded-lg -translate-x-4 group-hover:translate-x-4 transition duration-700">Get Started</span>
              <MoveRight className="p-0.5 -translate-x-4 group-hover:translate-x-8 transition duration-700"/>
            </Link>
            <Link to="https://dashboard.blackboxpreps.com/login" className="text-red-700   overflow-hidden self-start sm:self-center group bg-white flex-between gap-1     rounded-xl text-sm font-semibold px-4 py-3   transition-all duration-500">
              <span className="duration-700 group-hover:translate-x-2 transition">Dashboard</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-8 transition duration-700"/>
            </Link>
            </motion.div>
          </div>

          <motion.p 
            className='font-sans text-[12px] sm:text-xs w-3/4 text-white'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            Safe storage to professional packing & fast shipping. With our fast and reliable FBA service, your products are always ready to reach customers quickly and securely.
          </motion.p>
          

      
        </div>
        
        {/* Animated Image */}
        
      
        {/* Animated Value Cards */}
        
    </SectionLayout>
  );
}