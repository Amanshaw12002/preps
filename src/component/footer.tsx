import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../asset/blackbox.png";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const quickLinks = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/aboutUs" },
  { name: "Get a Quote", to: "/quote" },
];

const serviceLinks = [
  { name: "Amazon FBA Prep", to: "/service/fba" },
  { name: "FBM Prep", to: "/service/fbm" },
  { name: "Pricing", to: "/pricing" },
];

const socials = [
  { icon: FaFacebook, label: "Facebook", to: "" },
  { icon: FaTwitter, label: "Twitter", to: "https://x.com/BlackboxPreps" },
  {
    icon: FaInstagram,
    label: "Instagram",
    to: "https://www.instagram.com/blackboxprepco/",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0a0a0a]">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-175 -translate-x-1/2 rounded-full bg-red-700/15 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        {/* CTA band */}
        <motion.div
          className="flex flex-col items-center justify-between  border-b border-white/10  text-center sm:flex-row sm:text-left"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          </motion.div>

        {/* Link columns */}
        <motion.div
          className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Brand */}
          <motion.div variants={fadeUp}>
            <Link to="/" className="flex items-center gap-2">
              <img
                src={logo}
                alt="BlackBoxPreps logo"
                className="h-10 w-10 rounded-lg object-cover"
              />
              <span className="font-inter text-xl font-semibold text-white">
                BlackBox<span className="text-red-500">Preps</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">
              Your Amazon prep center in Delaware's tax-free zone — receiving,
              inspection, labeling, and shipment prep handled for you.
            </p>
            <div className="mt-5 flex gap-2.5">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  to={social.to}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:border-red-600/50 hover:bg-red-600 hover:text-white"
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div variants={fadeUp}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              Links
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    className="group inline-flex items-center gap-1.5 text-sm text-gray-400 transition-colors duration-300 hover:text-white"
                  >
                    <span className="h-px w-0 bg-red-500 transition-all duration-300 group-hover:w-3" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeUp}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    className="group inline-flex items-center gap-1.5 text-sm text-gray-400 transition-colors duration-300 hover:text-white"
                  >
                    <span className="h-px w-0 bg-red-500 transition-all duration-300 group-hover:w-3" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeUp}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              Get in Touch
            </h3>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-600/15 text-red-500">
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="text-sm leading-relaxed text-gray-400">
                  9 Brookside Drive, Unit B,
                  <br />
                  Wilmington DE 19804
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-600/15 text-red-500">
                  <Phone className="h-4 w-4" />
                </span>
                <a
                  href="tel:+12016286391"
                  className="text-sm text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  201-628-6391
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-600/15 text-red-500">
                  <Mail className="h-4 w-4" />
                </span>
                <a
                  href="mailto:contact@blackboxprepcenter.com"
                  className="text-sm text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  blackboxprepcenter.com
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 md:flex-row">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} BlackBoxPreps. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-xs text-gray-500 transition-colors duration-300 hover:text-white"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
