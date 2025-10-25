import { motion, type Variants } from "framer-motion";
import darklogo from "../asset/logo.png";
import { Link } from "react-router-dom";
import { ChevronRight, MoveRight } from "lucide-react";
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

  return (
    <>
      <SectionLayout sectionTopPadding={topPadding}>
        
        <motion.div 
          className="relative mx-auto max-w-5x border-2 border-black  mt-8 sm:py-12 rounded-4xl  text-white "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="w-full bg-transparent relative">
         
            
            
            <motion.img 
              src={darklogo} 
              alt="logo" 
              className="z-10    rounded-3xl  top-10 sm:-top-10 absolute w-52 sm:w-72 left-1/6 sm:left-3/8   "
              variants={logoVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              animate="float"
            /> 
          </div>

          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, white 2%, transparent 3%), 
              radial-gradient(circle at 75px 75px, white 2%, transparent 0%)`,
              backgroundSize: '100px 100px'
            }}></div>
          </div>
          
          <div className="relative max-w-6xl mx-auto  z-30 pt-64 pb-8">
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
                className="flex  flex-col sm:flex-row w-fit  mb-2   sm:mx-auto  gap-4 justify-center"
              >
                              <Link to="/quote" className=" border-2 group  border-black overflow-hidden flex-between mx-auto  py-1 rounded-xl  w-fit text-md font-semibold  transition">
                         <ChevronRight className="text-black -translate-x-6  group-hover:translate-x-4 transition duration-700"/>

              <span className=" text-black py-1 px-4 rounded-lg -translate-x-4 group-hover:translate-x-4 transition duration-700">Get Started</span>
              <MoveRight className="p-0.5 text-black -translate-x-4 group-hover:translate-x-8 transition duration-700"/>
            </Link>
                <Link 
                to="/pricing"  
                
                className="w-fit bg-gradient-to-r from-black to-red-600   border-2 border-black bg-clip-text text-transparent text-md rounded-lg text-center font-semibold px-6 py-3 transition hover:opacity-90 "
                >
               View Pricing
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