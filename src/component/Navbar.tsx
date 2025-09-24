import { Link } from "react-router-dom";
import main from "../asset/main.png";
import { Package, Truck, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);


  return (
    <nav className="bg-white shadow-md h-16 w-full fixed top-0 z-50 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center ">
          <img src={main} alt="Logo" className="h-10 w-10 object-cover" />
          <h2 className="font-open-sans font-semibold hidden sm:block sm:text-2xl  text-red-900">
            <span className="text-3xl ">B</span>lackBoxPreps
          </h2>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex font-inter text-xs md:text-sm text-gray-800 gap-4 lg:gap-6 items-center">
          <li className="hover:text-blue-700 transition">
            <Link to="/">Home</Link>
          </li>

          <li className="group relative">
            <span className="cursor-pointer inline-block">Services</span>
            <ul
              className="absolute top-5 left-0 w-48 flex-col bg-white border border-gray-300 rounded-md shadow-lg p-2 opacity-0 scale-95 pointer-events-none
                group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-200 origin-top"
            >
              <li className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-200 transition">
                <Package size={16} />
                <Link to="/service/fba">FBA & WFS</Link>
              </li>
              <li className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-200 transition">
                <Truck size={16} />
                <Link to="/service/fbm">FBM & Wholesale</Link>
              </li>
            </ul>
          </li>

          <li className="hover:text-blue-700 transition">
            <Link to="/Pricing">Pricing</Link>
          </li>
          <li className="hover:text-blue-700 transition">
            <Link to="/aboutUs">About Us</Link>
          </li>
          <li className=" border-2 hover:bg-gray-100 hover:scale-95 rounded-lg p-2 transition">
            <Link to="/contact">Contact Us</Link>
          </li>
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
