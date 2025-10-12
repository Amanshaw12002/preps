import { Link } from "react-router-dom";
import logo from "../asset/logo.png";

import { Package, Truck, Menu, X } from "lucide-react";
import {  useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className={`bg-transparent w-screen   h-14   flex-center fixed px-4 top-4 z-50 transition-all duration-500`}>
      <div className="  mx-4 shadow-2xl shadow-black  bg-white  w-5xl rounded-lg  px-4 h-full flex-between transition-all duration-500">        {/* Logo */}
        <Link to="/" className="flex items-center   ">
          <img src={logo} alt="Logo" className="h-10 w-10  object-cover  " />|
          <h2 className=" font-inter font-semibold bg-gradient-to-r from-black  to-red-700 pl-1   hidden sm:block text-2xl  text-transparent bg-clip-text ">
            BlackBoxPreps
          </h2>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex font-inter text-xs  text-gray-800 gap-2 pl-6  items-center">
          <li className=" transition duration-300 ">
            <Link to="/" className="hover:bg-white border-1 border-transparent hover:border-red-400 px-3 py-2 rounded-md hover:text-red-700   ">Home</Link>
          </li>

          <li className="group relative">
            <span className="cursor-pointer inline-block  ">Services</span>
            <ul
              className="absolute top-4 left-0 w-48 flex-col bg-gray-100 border border-gray-300 rounded-md shadow-lg p-2 opacity-0 scale-90 pointer-events-none
                group-hover:opacity-100  group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-500 origin-top"
            >
              <li className="flex items-center gap-2 pl-2 overflow-hidden  rounded  hover:text-red-800  mb-2  hover:bg-red-100 cursor-pointer transition ">
                <Link to="/service/fba" className="flex-between h-10 gap-2">
                <Package  className="text-red-800 w-8 p-1 h-full  "/>
                <span className="text-md font-semibold" >FBA & WFS</span>
                </Link>
              </li>
              <li className="flex items-center gap-2 pl-2 overflow-hidden  rounded hover:text-red-800  mb-2  hover:bg-red-100 transition">
                <Link to="/service/fbm" className="flex-between h-10 gap-2">
                <Truck className="text-red-800 w-8 p-1 h-full "/>
                <span className="text-md font-semibold" >FBM</span>
                </Link>
              </li>
            </ul>
          </li>

          <li className=" transition">
            <Link to="/Pricing" className="hover:bg-white border-1 border-transparent hover:border-red-400 px-3 py-2 rounded-md hover:text-red-700 ">Pricing</Link>
          </li>
          <li className="  transition">
            <Link to="/aboutUs" className="hover:bg-white px-3 py-2 rounded-md border-1 border-transparent hover:border-red-400 hover:text-red-700">AboutUs</Link>
          </li>
        <div className="flex-between gap-4">

            <Link to="/contact"  className=" bg-white text-black border-2 border-black       hover:scale-95   rounded-xl text-xs  font-semibold    px-2 py-2 transition">
            Dashboard</Link>
            <Link to="/contact"  className="hover:text-red-700     border-2 border-red-700 rounded-xl  hover:scale-95 bg-gradient-to-r text-xs from-black  to-red-600 bg-clip-text text-transparent font-semibold    p-2 transition">
            Get in touch</Link>
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
