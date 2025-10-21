import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
// Animation variants
const containerVariants:Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.6
    }
  }
};

const itemVariants:Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const socialIconVariants:Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.1,
    y: -2,
    transition: {
      duration: 0.2
    }
  }
};

const linkItemVariants:Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Animated Section Component
const AnimatedSection: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px"
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function Footer() {
  const [bottomRef, bottomInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <footer className="bg-white text-black pb-8 px-8">
      <AnimatedSection className="max-w-5xl border-gray-400 overflow-hidden mx-auto border pt-12 px-14">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <motion.div variants={itemVariants} className="flex items-center mb-6">
              <div>
                <motion.h2 
                  className="text-4xl font-light text-black"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  BlackBoxPreps
                </motion.h2>
                <motion.div 
                  className="w-12 h-0.5 bg-red-800 mt-2"
                  initial={{ width: 0 }}
                  animate={{ width: 48 }}
                  transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                />
              </div>
            </motion.div>
            
            <motion.p 
              variants={itemVariants}
              className="text-slate-800 font-light text-sm leading-relaxed mb-6 max-w-md"
            >
              Professional fulfillment solutions tailored to scale your e-commerce business. 
              
            </motion.p>
            
            {/* Social Icons */}
            <motion.div variants={itemVariants} className="flex space-x-4">
              {[
                { icon: FaFacebook, label: "Facebook",to: ""},
                { icon: FaTwitter, label: "Twitter",to:"https://x.com/BlackboxPreps" },
                { icon: FaInstagram, label: "Instagram",to:"https://www.instagram.com/blackboxprepco/" }
              ].map((social, index) => (
                <Link
                to={social.to}
                >
                <motion.div
                  key={social.label}
                  variants={socialIconVariants}
                  whileHover="hover"
                  className="p-3 bg-white border rounded-xl hover:bg-royal-red transition duration-300"
                  aria-label={social.label}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                  <social.icon className="h-5 w-5 text-black" />
                </motion.div>
                  </Link>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="lg:col-span-2 flex flex-col items-center">
            <motion.h3 
              variants={itemVariants}
              className="text-sm font-medium mb-6 text-gray-700 relative pb-2"
            >
               LINKS
              <motion.div 
                className="absolute bottom-0 left-0 w-8 h-0.5 bg-royal-red"
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              />
            </motion.h3>
            <ul className="space-y-4">
              {[{name:'Home',to:"/"},{name: 'About Us',to:"aboutUs"},{name: 'Get a Quote',to:"quote"}].map((item, index) => (
                <motion.li 
                  key={item.name}
                  variants={linkItemVariants}
                  custom={index}
                >
                  <Link 
                    to={item.to} 
                    className="text-slate-800 font-light text-sm hover:text-red-800 transition duration-300 flex items-center group"
                  >
                    <motion.span 
                      className="w-2 h-2 bg-royal-red rounded-full mr-3 opacity-0 group-hover:opacity-100 transition duration-300"
                      whileHover={{ scale: 1.2 }}
                    />
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="lg:col-span-3 flex flex-col items-center">
            <motion.h3 
              variants={itemVariants}
              className="text-sm font-medium mb-6 text-gray-700 relative pb-2"
            >
              SERVICES
              <motion.div 
                className="absolute bottom-0 left-0 w-8 h-0.5 bg-royal-red"
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              />
            </motion.h3>
            <ul className="space-y-4">
              {[{
                name:'Amazon FBA Prep',
                to:'service/fba'
               },
               {
                name:'FBM Prep',
                to:'service/fbm'
               },
               { 
               name:'Pricing',
               to:'pricing'
              }
              ].map((service, index) => (
                <motion.li 
                  key={service.name}
                  variants={linkItemVariants}
                  custom={index}
                >
                  <Link 
                    to={service.to} 
                    className="text-slate-900 text-sm font-light hover:text-red-800 transition duration-300 flex items-center group"
                  >
                    <motion.span 
                      className="w-2 h-2 bg-red-800 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition duration-300"
                      whileHover={{ scale: 1.2 }}
                    />
                    {service.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="lg:col-span-3 pr-4">
            <motion.h3 
              variants={itemVariants}
              className="text-sm font-medium text-gray-700 mb-6  relative pb-2"
            >
              GET IN TOUCH
              <motion.div 
                className="absolute bottom-0 left-0 w-8 h-0.5 bg-royal-red"
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
            </motion.h3>
            <ul className="space-y-4 ">
              <motion.li variants={itemVariants} className="flex items-start">
                <FaMapMarkerAlt className="h-5 w-5 text-royal-red mr-3 mt-1 flex-shrink-0" />
                <span className="text-slate-800 text-sm font-light">
                  9 Brookside Drive, Unit B,<br/>
                   Wilmington DE 19804

                </span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-center">
                <FaEnvelope className="h-5 w-5 text-slate-800 mr-3 flex-shrink-0" />
                <a 
                  href="mailto:blackboxprepcenter@gmail.com" 
                  className="text-slate-800 font-light text-sm hover:text-royal-red transition duration-300"
                >
                  blackboxprepcenter@gmail.com

                </a>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-center">
                <FaPhone className="h-5 w-5 text-slate-800 text-xs mr-3 flex-shrink-0" />
                <a 
                  href="tel:+15017772993" 
                  className="text-slate-800 text-sm font-light hover:text-royal-red transition duration-300"
                >
                  201-628-6391

                </a>
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Bottom Bar */}
      <motion.div 
        ref={bottomRef}
        initial="hidden"
        animate={bottomInView ? "visible" : "hidden"}
        variants={containerVariants}
        className=" pt-8"
      >
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            variants={itemVariants}
            className="text-slate-400 font-light text-sm mb-4 md:mb-0"
          >
            © {new Date().getFullYear()} BlackBoxPreps. All rights reserved.
          </motion.p>
          <motion.div 
            variants={itemVariants}
            className="flex space-x-6 text-sm"
          >
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
              <motion.a 
                key={item}
                href="#" 
                variants={linkItemVariants}
                custom={index}
                className="text-slate-400 font-light hover:text-royal-red transition duration-300"
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}