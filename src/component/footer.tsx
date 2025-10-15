import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
    <footer className="bg-gradient-to-br from-white text-black pb-8 px-4">
      <AnimatedSection className="max-w-6xl overflow-hidden mx-auto border-t pt-12">
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
                  className="w-12 h-1 bg-red-800 mt-2"
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
              Trusted by sellers worldwide for reliable and efficient service.
            </motion.p>
            
            {/* Social Icons */}
            <motion.div variants={itemVariants} className="flex space-x-4">
              {[
                { icon: FaFacebook, label: "Facebook" },
                { icon: FaTwitter, label: "Twitter" },
                { icon: FaInstagram, label: "Instagram" }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href="#"
                  variants={socialIconVariants}
                  whileHover="hover"
                  className="p-3 bg-slate-700 rounded-xl hover:bg-royal-red transition duration-300"
                  aria-label={social.label}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <social.icon className="h-5 w-5 text-white" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <motion.h3 
              variants={itemVariants}
              className="text-lg font-normal mb-6 text-black relative pb-2"
            >
              Quick Links
              <motion.div 
                className="absolute bottom-0 left-0 w-8 h-0.5 bg-royal-red"
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              />
            </motion.h3>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Contact', 'Blog'].map((item, index) => (
                <motion.li 
                  key={item}
                  variants={linkItemVariants}
                  custom={index}
                >
                  <a 
                    href="#" 
                    className="text-slate-800 font-light text-sm hover:text-red-800 transition duration-300 flex items-center group"
                  >
                    <motion.span 
                      className="w-2 h-2 bg-royal-red rounded-full mr-3 opacity-0 group-hover:opacity-100 transition duration-300"
                      whileHover={{ scale: 1.2 }}
                    />
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <motion.h3 
              variants={itemVariants}
              className="text-lg font-normal mb-6 text-black relative pb-2"
            >
              Our Services
              <motion.div 
                className="absolute bottom-0 left-0 w-8 h-0.5 bg-royal-red"
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              />
            </motion.h3>
            <ul className="space-y-4">
              {[
                'Amazon FBA Prep',
                'Order Fulfillment',
                'Kitting & Bundling',
                'Storage Solutions',
                'Returns Handling',
                'Custom Packaging'
              ].map((service, index) => (
                <motion.li 
                  key={service}
                  variants={linkItemVariants}
                  custom={index}
                >
                  <a 
                    href="#" 
                    className="text-slate-800 text-sm font-light hover:text-red-800 transition duration-300 flex items-center group"
                  >
                    <motion.span 
                      className="w-2 h-2 bg-royal-red rounded-full mr-3 opacity-0 group-hover:opacity-100 transition duration-300"
                      whileHover={{ scale: 1.2 }}
                    />
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <motion.h3 
              variants={itemVariants}
              className="text-lg font-normal mb-6 text-black relative pb-2"
            >
              Get In Touch
              <motion.div 
                className="absolute bottom-0 left-0 w-8 h-0.5 bg-royal-red"
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              />
            </motion.h3>
            <ul className="space-y-4">
              <motion.li variants={itemVariants} className="flex items-start">
                <FaMapMarkerAlt className="h-5 w-5 text-royal-red mr-3 mt-1 flex-shrink-0" />
                <span className="text-slate-800 text-sm font-light">
                  Darwin First, Chicago<br />
                  Illinois, USA
                </span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-center">
                <FaEnvelope className="h-5 w-5 text-red-800 mr-3 flex-shrink-0" />
                <a 
                  href="mailto:contact@blackboxpreps.com" 
                  className="text-slate-800 font-light text-sm hover:text-royal-red transition duration-300"
                >
                  contact@blackboxpreps.com
                </a>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-center">
                <FaPhone className="h-5 w-5 text-royal-red text-sm mr-3 flex-shrink-0" />
                <a 
                  href="tel:+15017772993" 
                  className="text-slate-800 font-light hover:text-royal-red transition duration-300"
                >
                  (501) 777-2993
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
        className="border-t border-slate-700 pt-8"
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