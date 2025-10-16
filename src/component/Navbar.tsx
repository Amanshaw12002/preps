import { Link } from "react-router-dom";
import logo from "../asset/logo.png";

import { Package, Truck, Menu, X } from "lucide-react";
import {  useState } from "react";
import { motion, type Variants } from "framer-motion";

const text = "BlackBoxPreps";
const textVariants:Variants = {
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
    <nav className={`bg-transparent w-screen   h-14   flex-center fixed px-4 top-4 z-50 transition-all duration-500`}>
      <div className="  mx-4 shadow-2xl shadow-black  bg-white  w-4xl rounded-lg  px-4 h-full flex-between transition-all duration-500">        {/* Logo */}
        <Link to="/" className="flex group items-center text-gray-900 overflow-hidden  ">
          <motion.img 
          initial={{x:-45}} 
          animate={{ x: 0 }}
          transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
          
          src={logo} alt="Logo" className="h-10 w-10  object-cover  " />
    
<motion.h2 
  className="relative font-inter font-semibold bg-gradient-to-r from-black to-red-700 pl-1 hidden sm:block text-2xl text-transparent bg-clip-text"
>
  <motion.div 
    className="absolute bottom-0 w-8 h-[2px] bg-red-800"
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

        {/* Desktop Menu */}
        <ul className="hidden md:flex font-inter text-xs  text-gray-800 gap-2 pl-6  items-center">
          <li className=" transition duration-300 ">
            <Link to="/" className=" border-1 border-transparent hover:bg-white hover:border-red-400 px-3 py-2 rounded-md hover:text-red-700   ">Home</Link>
          </li>

          <li className=" transition">
            <Link to="/Pricing" className="hover:bg-white border-1 border-transparent hover:border-red-400 px-3 py-2 rounded-md hover:text-red-700 ">Pricing</Link>
          </li>

         <li className="group relative ml-1">
  <span className="cursor-pointer inline-block px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-red-800 transition-all duration-300 font-medium">
    Services
  </span>
  
  <ul
    className="absolute top-full left-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg p-2 opacity-0 scale-95 pointer-events-none
      group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-300 origin-top"
  >
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
          <li className="  transition">
            <Link to="/aboutUs" className="hover:bg-white px-2 py-2 mx-1 rounded-md border-1 border-transparent hover:border-red-400 hover:text-red-700">AboutUs</Link>
          </li>
        <div className="flex-between gap-4">

            <Link to="/contact"  className=" bg-white text-black border border-black       hover:scale-95   rounded-lg text-xs  font-semibold    px-2 py-2 transition">
            Dashboard</Link>
            <Link to="/quote"  className="hover:text-red-700     border border-red-700 rounded-lg  hover:scale-95 bg-gradient-to-r text-xs from-black  to-red-600 bg-clip-text text-transparent font-semibold    p-2 transition">
            Get a Quote</Link>
        </div>
        </ul>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          
          <button
            className="text-red-900 focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <ul className="flex flex-col gap-4 p-4 font-inter text-gray-800">
            <li>
              <Link to="/" onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>
            <li className="flex flex-col gap-1">
              <span className="font-semibold">Services</span>
              <Link
                to="/service/fba"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 px-2 py-1 rounded hover:bg-red-800 hover:text-white transition"
              >
                <Package size={16} /> FBA & WFS
              </Link>
              <Link
                to="/service/fbm"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 px-2 py-1 rounded hover:bg-red-800 hover:text-white transition"
              >
                <Truck size={16} /> FBM & Wholesale
              </Link>
            </li>
            <li>
              <Link to="/Pricing" onClick={() => setOpen(false)}>
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setOpen(false)}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/aboutUs" onClick={() => setOpen(false)}>
                About Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
