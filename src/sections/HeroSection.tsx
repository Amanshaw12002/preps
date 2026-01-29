import { motion, type Variants } from "framer-motion";

import SectionLayout from '@/layout/sectionLayout';
import { ChevronRight, MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from "../asset/blackbox.png";


export default function HeroSection() {

const text = "BlackBoxPreps";

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

  return (
    <SectionLayout sectionTopPadding='pt-10' >
  
             

        <div className="relative flex flex-col items-center text-center py-6 sm:py-12   mx-auto  max-w-3xl  shrink-0 text-black">

 


          
          <div className="flex lg:flex-col lg:w-3xl items-center pt-2 text-center flex-col  relative z-20 ">
<Link to="/" className="flex lg:mr-8 group items-center text-gray-900 overflow-hidden" >
          <motion.img 
            initial={{x:-45}} 
            animate={{ x: 0 }}
            transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
            src={logo} 
            alt="Logo" 
            className="h-10 w-10 object-cover" 
          />
          
          <motion.h2 
            className="relative font-inter  font-semibold bg-gradient-to-r from-black to-red-700 pl-1 hidden md:block text-2xl text-transparent bg-clip-text"
          >
            <motion.div 
              className="absolute bottom-0 w-8 h-[2px] bg-black"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
              style={{ originX: 0 }}
            />
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                {char}
              </motion.span>
            ))}
          </motion.h2>
        </Link>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl pt-2 font-semibold font-inter text-black text-shadow-2xs">
              <motion.span 
                className="w-fit  sm:pb-3 block text-black"
                initial={{ opacity: 0, x:-100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Optimized Prep Flow
                {" "} 
              </motion.span>
              
              <motion.span 
                className="text-black sm:pb-3 block"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0  }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
              for All Your
              </motion.span>
              <motion.span 
                className='block sm:pb-3 text-black'
                initial={{ opacity:0, x: -100 }}
                animate={{ opacity:1, x: 0  }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
              Fulfillment Needs.
              </motion.span>
          <motion.span
            className= 'text-xs sm:text-md md:text-lg font-sans   text-black mt-2 '
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            You sell, we handle the rest.
          </motion.span>
            </h2>
            <motion.div
            initial={{x:-100, opacity: 0 }}
          animate={{ opacity: 1,x:0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            
            className="flex-between flex-col  sm:flex-row w-fit gap-4  my-4">

              <Link to="/quote" className=" border-2 group overflow-hidden flex-between   py-2 rounded-xl  w-fit text-sm font-semibold  transition">
                         <ChevronRight className=" -translate-x-6  group-hover:translate-x-4 transition duration-700"/>

              <span className=" text-black py-1 px-4 rounded-lg -translate-x-4 group-hover:translate-x-4 transition duration-700">Get Started</span>
              <MoveRight className="p-0.5 -translate-x-4 group-hover:translate-x-8 transition duration-700"/>
            </Link>
            <Link to="https://dashboard.blackboxpreps.com/login" className="bg-[#292929] self-start sm:self-center group text-white flex-between gap-1     rounded-lg text-sm font-semibold px-4 py-3   transition-all duration-500">
              <span className="duration-700 group-hover:translate-x-2 transition">Dashboard</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-8 transition duration-700"/>
            </Link>
            </motion.div>
          </div>

          <motion.p 
            className='font-sans text-[10px] sm:text-xs w-3/4 text-black'
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