import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaSquareXTwitter } from "react-icons/fa6";
import logo1 from "../asset/logo1.png";

export default function Footer() {
  return (
    <footer className=" text-gray-700    border-t border-gray-200 mt-24">
      <div className="max-w-5xl mx-auto relative pt-10 mb-12 rounded-2xl bg-gradient-to-br from-red-900 via-red-800 to-red-900 px-6 lg:px-10">
        {/* Top section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full mx-12  gap-10 mb-10 ">
          {/* Company Links */}
          <div className="flex-center flex-col">
            <h3 className="text-sm font-semibold mb-4 text-gray-100">Company</h3>
            <ul className="space-y-4 text-sm text-white font-medium">
              <li className="bg-gray-100 border-1 border-gray-400  text-red-800 rounded-md w-24 px-3 py-2 text-center">
                <a href="#" className=" transition">
                  Home
                </a>
              </li>
              <li className="bg-gray-100 border-1 border-gray-400  text-red-800 rounded-md w-24 px-3 py-2 text-center">
                <a href="#" className=" transition">
                  About Us
                </a>
              </li>
              <li className="bg-gray-100 border-1 border-gray-400  text-red-800 rounded-md w-24 px-3 py-2 text-center">
                <a href="#" className="transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="flex-center flex-col">
            <h3 className="text-sm font-semibold mb-4 text-gray-100">
              Services
            </h3>
            <ul className="space-y-4 text-white text-sm font-medium">
              <li className="bg-gray-100 border-1 border-gray-400  text-red-800 rounded-lg w-36 px-3 py-2 text-center">
                <a href="#" className=" transition">
                  Order Fulfillment
                </a>
              </li>
              <li className="bg-gray-100 border-1 border-gray-400  text-red-800 rounded-lg w-36 px-1 py-2 text-center">
                <a href="#" className=" transition">
                  Amazon FBA Prep
                </a>
              </li>
              <li className="bg-gray-100 border-1 border-gray-400  text-red-800 rounded-lg w-36 px-3 py-2 text-center">
                <a href="#" className=" transition">
                  Kitting & Bundling
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold mb-4 mt-2 text-white">
              Contact Us
            </h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>Darwin First, Chicago</li>
              <li>
                <a
                  href="mailto:contact@blackboxpreps.com"
                  className="text-white transition"
                >
                  contact@blackboxpreps.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+15017772993"
                  className="text-white transition"
                >
                  (501) 777-2993
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center">

          <img src={logo1} alt="Logo" className="rounded-3xl  h-32"/>
          
          {/* Social Icons */}
          <div className="flex-between">
            <a
              href="#"
              className="p-2 rounded-full hover:bg-blue-100 transition"
              aria-label="Facebook"
            >
              <FaFacebook className="h-5 w-5 text-blue-100" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full hover:bg-gray-100 transition"
              aria-label="Twitter"
            >
              <FaSquareXTwitter className="h-5 w-5 text-gray-100" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full hover:bg-pink-100 transition"
              aria-label="Instagram"
            >
              <FaInstagram className="h-5 w-5 text-pink-100" />
            </a>
          </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 pt-6 flex-center">
          <p className="text-sm text-gray-100 text-center pb-4">
            © {new Date().getFullYear()} BlackBoxPreps. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}
