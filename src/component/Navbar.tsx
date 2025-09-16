import { Link } from "react-router-dom";
import main from "../asset/main.png";
import { Package, Truck, Menu, X } from "lucide-react";
import { useGlobalContext } from "@/GlobalContext";
import { useState } from "react";

export default function Navbar() {
  const [open,setOpen] = useState(false);
  const {demoRef} = useGlobalContext();
    const handleClickDemo = () => {
 demoRef.current?.scrollIntoView({ behavior: "smooth" });
}


  return (
    <nav className="fixed top-0 bg-white w-screen z-50 transition-all duration-500 shadow h-16">
      <div className="flex-between h-full w-11/12 mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={main} alt="img" className="h-10 w-10 object-cover" />
          <h2 className="font-mon text-2xl text-red-900">BBP</h2>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex font-inter text-sm text-gray-800 gap-8">
          <li className="hover:text-blue-700 cursor-pointer">
            <Link to="/">Home</Link>
          </li>

          <li className="group relative">
            <span className="cursor-pointer inline-block">Services</span>

            <ul
              className={
                "absolute top-5 left-0 w-48 h-fit flex-col items-start bg-white border border-gray-300 text-gray-800 p-2 rounded-md shadow-lg " +
                "opacity-0 translate-y-2 pointer-events-none scale-95 " +
                "group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto hover:cursor-pointer group-hover:scale-100 " +
                "transition-all duration-200 ease-out origin-top"
              }
            >
              <li className="px-2 py-2 hover:text-black hover:bg-gray-800/20 mb-2 rounded transition-colors flex items-center gap-2">
                <Package size={16} />
                <Link to="/service/fba">FBA & WFS</Link>
              </li>
              <li className="px-2 py-2  hover:bg-gray-700/20  hover:text-black rounded transition-colors flex items-center gap-2">
                <Truck size={16} />
                <Link to="/service/fbm">FBM & Wholesale</Link>
              </li>
            </ul>
          </li>

          <li className="cursor-pointer hover:text-blue-700">
            <Link to="/Pricing">Pricing</Link>
          </li>
          <li className="cursor-pointer hover:text-blue-700">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="cursor-pointer hover:text-blue-700">
            <Link to="/aboutUs">About Us</Link>
          </li>
        </ul>

        {/* Desktop Button */}
        <button 
          onClick={handleClickDemo}
          className="hidden md:inline-block text-sm text-red-900 font-mon hover:scale-95 duration-300 transition border-2 px-3 py-1 rounded-xl border-red-900"
          
        >
          Book a demo
        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-red-900"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
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
            <li className="flex flex-col">
              <span className="mb-2 font-semibold">Services</span>
              <Link
                to="/service/fba"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 px-2 py-1 hover:bg-red-800 hover:text-white rounded"
              >
                <Package size={16} /> FBA & WFS
              </Link>
              <Link
                to="/service/fbm"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 px-2 py-1 hover:bg-red-800 hover:text-white rounded"
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
            <li>
              <Link
                to="/auth"
                onClick={() => setOpen(false)}
                className="text-sm text-red-900 font-mon border-2 px-3 py-1 rounded-xl border-red-900"
              >
                Book a demo
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
