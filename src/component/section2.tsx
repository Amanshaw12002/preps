import { motion, type Variants } from "framer-motion";
import darklogo from "../asset/logo.png"
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import SectionLayout from "@/layout/sectionLayout";



interface TopPaddingProps {
  topPadding?: 'pt-10';
}



const Section2: React.FC<TopPaddingProps> = ({  topPadding }) =>  {
  // Animation variants
  const containerVariants:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };


  const logoVariants:Variants = {
    hidden: { scale: 0.8, opacity: 0, y: -50 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    },
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  
  const gridVariants:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5
      }
    }
  };

  const gridItemVariants:Variants = {
    hidden: {y:200, },
    visible: {
      
      y:0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <SectionLayout sectionTopPadding={topPadding}>
        
        <motion.div 
          className="relative mx-auto max-w-5xl border-red-500 mt-8 sm:py-12 rounded-4xl  bg-black/20  text-white "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="w-full relative">
         
            
            
            <motion.img 
              src={darklogo} 
              alt="logo" 
              className="z-10   bg-white rounded-3xl   top-10 sm:-top-10 absolute w-52 sm:w-72 left-1/6 sm:left-3/8  "
              variants={logoVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              animate="float"
            /> 
          </div>

          <motion.div 
            className="flex-center md:block hidden  rounded-2xl flex-wrap absolute top-10 left-1 p-8  flex-center  z-0"
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[...Array(24)].map((_, index) => (
             <>
             <motion.div 
                key={index} 
                className={`w-[1px] ml-4 h-42  rounded-sm    bg-gradient-to-b from-transparent   to-red-800`}      
                variants={gridItemVariants}
                whileHover={{ 
                  scale: 1.2, 
                  backgroundColor: "rgba(255,255,255,0.2)",
                  transition: { duration: 0.3 }
                }}
                />
                <motion.div 
                  key={index} 
                  className={`w-[0.5px] mx-6  h-24    bg-black  `}      
                  variants={gridItemVariants}
                  whileHover={{ 
                    scale: 1.2, 
                    backgroundColor: "rgba(255,255,255,0.2)",
                    transition: { duration: 0.3 }
                  }}
                />
              <motion.div 
                key={index} 
                className={`w-[0.5px]  h-54  rounded-sm  mx-2 bg-gradient-to-b from-red-800   to-transparent`}      
                variants={gridItemVariants}
                whileHover={{ 
                  scale: 1.2, 
                  backgroundColor: "rgba(255,255,255,0.2)",
                  transition: { duration: 0.3 }
                }}
              />
                  </>
            ))}
          </motion.div>

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, white 2%, transparent 3%), 
              radial-gradient(circle at 75px 75px, white 2%, transparent 0%)`,
              backgroundSize: '100px 100px'
            }}></div>
          </div>
          
          <div className="relative max-w-6xl mx-auto  z-10 pt-64 pb-8">
            <motion.div 
              className="text-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex flex-col  mt-12 mx-auto w-full">

              <p 
                className="text-2xl sm:text-4xl font-bold mb-2 text-black "
                >
                Let's Grow Your Business Together,
              </p>

              <p 
                className="text-2xl sm:text-4xl font-bold mb-4 text-black "
                >
                Get Started Today.
              </p>
              <p 
                className=" text-sm sm:text-lg font-medium  text-gray-800 mb-12 "
                >
                  Get in touch to streamline your workflow.
                </p>
                  </div>
              
              <div 
                className="flex flex-col mb-2 sm:mb-8 mx-12 sm:mx-0 sm:flex-row gap-4 justify-center"
              >
                <Link 
                to="/quote" 
                
                className="bg-gradient-to-r from-black to-red-600   border-2 border-red-500 bg-clip-text text-transparent text-md rounded-lg text-center font-semibold px-6 py-3 transition hover:opacity-90 "
                >
                Get a Quote
              </Link>
                
                <Link 
                to="/pricing" 
                  className="border-white  group flex-between gap-1 overflow-hidden bg-white border hover:border-gray-400 text-black px-4 py-3 rounded-lg font-semibold transition-colors"

                >
                  <span className="group-hover:translate-x-3 duration-400">View Pricing</span>
                  <ChevronRight className="group-hover:translate-x-10 duration-700 text-gray-700"/>
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </SectionLayout>
    </>
  )
}


export default Section2