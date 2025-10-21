import { Link } from "react-router-dom";
import logo from "../asset/logo.png";
import { Package, Truck, Menu, X,  ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion, type Variants } from "framer-motion";

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

export default function Navbar() {
  const [open, setOpen] = useState(false);
  
  return (
    <nav className={`bg-transparent w-full h-16 flex-center fixed px-2 top-2 z-50 transition-all duration-500`}>
      <div className=" w-full mx-10 sm:mx-12   shadow-2xl shadow-black bg-white rounded-lg px-3 h-12 lg:h-14 flex-between transition-all duration-500">
        
        {/* Logo */}
        <Link to="/" className="flex  group items-center text-gray-900 overflow-hidden" onClick={() => setOpen(false)}>
          <motion.img 
            initial={{x:-45}} 
            animate={{ x: 0 }}
            transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
            src={logo} 
            alt="Logo" 
            className="h-10 w-10 object-cover" 
          />
          
          <motion.h2 
            className="relative font-inter  font-semibold bg-gradient-to-r from-black to-red-700 pl-1 hidden sm:block text-2xl text-transparent bg-clip-text"
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

        {/* Desktop Menu - Unchanged */}
        <ul className="hidden  md:flex font-inter text-xs text-gray-800 gap-2 pl-6 items-center">
          <li className="transition duration-300">
            <Link to="/" className="border-1 border-transparent hover:bg-white hover:border-red-400 px-3 py-2 rounded-md hover:text-red-700">Home</Link>
          </li>
          <li className="transition">
            <Link to="/Pricing" className="hover:bg-white border-1 border-transparent hover:border-red-400 px-3 py-2 rounded-md hover:text-red-700">Pricing</Link>
          </li>
          <li className="group relative ml-1">
            <span className="cursor-pointer inline-block px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-red-800 transition-all duration-300 font-medium">
              Services
            </span>
            <ul className="absolute top-full left-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg p-2 opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-300 origin-top">
              <li className="flex items-center gap-2 p-2 rounded-lg hover:bg-red-50 hover:text-red-800 mb-2 transition-all duration-300 group/item">
                <div className="flex items-center justify-center w-8 h-8 bg-red-100 rounded-lg">
                  <Package className="text-red-700 w-4 h-4" />
                </div>
                <Link to="/service/fba" className="flex-1">
                  <span className="text-sm font-semibold">FBA & WFS</span>
                  <span className="text-xs text-gray-500 opacity-0 group-hover/item:opacity-100 block transition-opacity duration-300">
                    Amazon fulfillment
                  </span>
                </Link>
              </li>
              <li className="flex items-center gap-2 p-2 rounded-lg hover:bg-red-50 hover:text-red-800 transition-all duration-300 group/item">
                <div className="flex items-center justify-center w-8 h-8 bg-red-100 rounded-lg">
                  <Truck className="text-red-700 w-4 h-4" />
                </div>
                <Link to="/service/fbm" className="flex-1">
                  <span className="text-sm font-semibold">FBM</span>
                  <span className="text-xs text-gray-500 opacity-0 group-hover/item:opacity-100 block transition-opacity duration-300">
                    Merchant fulfillment
                  </span>
                </Link>
              </li>
            </ul>
          </li>
          <li className="transition">
            <Link to="/aboutUs" className="hover:bg-white px-2 py-2 mx-1 rounded-md border-1 border-transparent hover:border-red-400 hover:text-red-700">AboutUs</Link>
          </li>
          <div className="flex-between gap-4">
            <Link to="/quote" className=" border-2 border-red-700 rounded-lg  bg-gradient-to-r text-xs from-black to-red-600 bg-clip-text text-transparent font-semibold px-3 py-2 transition">
              Get a Quote
            </Link>

            <Link to="https://dashboard.blackboxpreps.com/login" className="bg-[#292929] group text-white flex-between gap-1    rounded-lg text-xs font-semibold p-2.5 transition-all duration-500">
              <span className="duration-700 group-hover:translate-x-2 transition">Dashboard</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-6 transition duration-700"/>
            </Link>
          </div>
        </ul>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            className="text-red-900 focus:outline-none p-1"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg mx-4 rounded-b-lg overflow-hidden"
        >
          <ul className="flex flex-col gap-0 p-3 font-inter text-gray-800">
            <li>
              <Link 
                to="/" 
                onClick={() => setOpen(false)}
                className="flex w-full px-4 py-3 rounded-lg hover:bg-red-50 hover:text-red-700 transition-all duration-200 font-medium"
              >
                Home
              </Link>
            </li>
            
            <li className="flex flex-col gap-1 py-2">
              <span className="font-semibold px-4 py-2 text-gray-600">Services</span>
              <Link
                to="/service/fba"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-6 py-3 rounded-lg hover:bg-red-800 hover:text-white transition-all duration-200"
              >
                <Package size={18} /> 
                <div>
                  <div className="font-medium">FBA & WFS</div>
                  <div className="text-xs opacity-80">Amazon fulfillment</div>
                </div>
              </Link>
              <Link
                to="/service/fbm"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-6 py-3 rounded-lg hover:bg-red-800 hover:text-white transition-all duration-200"
              >
                <Truck size={18} />
                <div>
                  <div className="font-medium">FBM & Wholesale</div>
                  <div className="text-xs opacity-80">Merchant fulfillment</div>
                </div>
              </Link>
            </li>
            
            <li>
              <Link 
                to="/Pricing" 
                onClick={() => setOpen(false)}
                className="flex w-full px-4 py-3 rounded-lg hover:bg-red-50 hover:text-red-700 transition-all duration-200 font-medium"
              >
                Pricing
              </Link>
            </li>
            
            <li>
              <Link 
                to="/aboutUs" 
                onClick={() => setOpen(false)}
                className="flex w-full px-4 py-3 rounded-lg hover:bg-red-50 hover:text-red-700 transition-all duration-200 font-medium"
              >
                About Us
              </Link>
            </li>
            
            {/* Mobile CTA Buttons */}
            <div className="flex-between gap-3 mx-auto mt-2 px-3 pt-2 border-t border-gray-100">
              
            <Link to="https://dashboard.blackboxpreps.com/login" className="bg-[#292929] group text-white flex-between gap-1    rounded-lg text-md font-semibold p-3 transition-all duration-500">
              <span className="duration-700 group-hover:translate-x-2 transition">Dashboard</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-6 transition duration-700"/>
            </Link>
              <Link 
                to="/quote" 
                onClick={() => setOpen(false)}
                className="bg-gradient-to-r from-black to-red-700   text-transparent bg-clip-text border-2 border-red-800 rounded-lg text-center font-semibold px-4 py-3 transition hover:opacity-90 text-sm"
              >
                Get a Quote
              </Link>
            </div>
          </ul>
        </motion.div>
      )}
    </nav>
  );
}