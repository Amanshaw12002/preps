import { motion, type Variants } from "framer-motion";
import darklogo from "../asset/blackbox.png";
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
          className="relative mx-auto max-w-5xl my-4    rounded-4xl  text-white "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="w-full bg-transparent relative">
         
            <div className="bg-red-700 h-[1px] w-1/2 -mb-6 mx-auto flex-between">
            <div className="h-4 w-4 bg-white border-red-700 rounded-sm border"></div>
            <div className="h-4 w-4 bg-white border-red-700 rounded-sm border"></div>
            </div>
            <div className="flex-between z-10 gap-1 bg-white p-2   border rounded-xl  border-red-700  mx-auto w-fit">

            <motion.img 
              src={darklogo} 
              alt="logo" 
              className=" w-8   "
              variants={logoVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              animate="float"
              /> 
            <h2 className="text-black text-lg font-bold">BlackBoxPreps</h2>
              </div>
          </div>

          
          
          <div className="relative max-w-5xl mx-auto  z-30 ">
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
                className="flex items-center flex-col sm:flex-row w-fit    mx-auto  gap-4 justify-center"
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
            </motion.div>
          </div>
        </motion.div>
      </SectionLayout>
    </>
  )
}


export default Section2