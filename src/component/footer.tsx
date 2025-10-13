import { FaFacebook, FaInstagram,FaTwitter, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-white text-black pb-8 px-4  ">
      <div className="max-w-6xl overflow-hidden mx-auto border-t pt-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <div className="flex items-center mb-6">
              
              <div>
                <h2 className="text-4xl font-light text-black">BlackBoxPreps</h2>
                <div className="w-12 h-1 bg-red-800 mt-2"></div>
              </div>
            </div>
            <p className="text-slate-800 font-light text-sm leading-relaxed mb-6 max-w-md">
              Professional fulfillment solutions tailored to scale your e-commerce business. 
              Trusted by sellers worldwide for reliable and efficient service.
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-3 bg-slate-700 rounded-xl hover:bg-royal-red transition duration-300 transform hover:-translate-y-1"
                aria-label="Facebook"
              >
                <FaFacebook className="h-5 w-5 text-white" />
              </a>
              <a
                href="#"
                className="p-3 bg-slate-700 rounded-xl hover:bg-royal-red transition duration-300 transform hover:-translate-y-1"
                aria-label="Twitter"
              >
                <FaTwitter className="h-5 w-5 text-white" />
              </a>
              <a
                href="#"
                className="p-3 bg-slate-700 rounded-xl hover:bg-royal-red transition duration-300 transform hover:-translate-y-1"
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-normal mb-6 text-black relative pb-2">
              Quick Links
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-royal-red"></div>
            </h3>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Contact', 'Blog'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-slate-800 font-light text-sm hover:text-red-800 transition duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-royal-red rounded-full mr-3 opacity-0 group-hover:opacity-100 transition duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-normal mb-6 text-black relative pb-2">
              Our Services
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-royal-red"></div>
            </h3>
            <ul className="space-y-4">
              {[
                'Amazon FBA Prep',
                'Order Fulfillment',
                'Kitting & Bundling',
                'Storage Solutions',
                'Returns Handling',
                'Custom Packaging'
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#" 
                    className="text-slate-800 text-sm font-light hover:text-red-800 transition duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-royal-red rounded-full mr-3 opacity-0 group-hover:opacity-100 transition duration-300"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-normal mb-6 text-black relative pb-2">
              Get In Touch
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-royal-red"></div>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="h-5 w-5 text-royal-red  mr-3 mt-1 flex-shrink-0" />
                <span className="text-slate-800 text-sm font-light">
                  Darwin First, Chicago<br />
                  Illinois, USA
                </span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="h-5 w-5 text-red-800 mr-3 flex-shrink-0" />
                <a 
                  href="mailto:contact@blackboxpreps.com" 
                  className="text-slate-800 font-light text-sm hover:text-royal-red transition duration-300"
                >
                  contact@blackboxpreps.com
                </a>
              </li>
              <li className="flex items-center">
                <FaPhone className="h-5 w-5 text-royal-red text-sm mr-3 flex-shrink-0" />
                <a 
                  href="tel:+15017772993" 
                  className="text-slate-800 font-light hover:text-royal-red transition duration-300"
                >
                  (501) 777-2993
                </a>
              </li>
            </ul>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 font-light text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} BlackBoxPreps. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-400 font-light hover:text-royal-red transition duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 font-light hover:text-royal-red transition duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 font-light hover:text-royal-red transition duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}