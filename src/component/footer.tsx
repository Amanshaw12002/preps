import { FaInstagram, FaTwitter } from "react-icons/fa";
import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import {  MapPin, Phone, Mail } from "lucide-react";

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
  // /faq was in sitemap.xml and linked from nowhere on the site. A page only
  // a crawler can find is a page nobody reads.
  { name: "FAQ", to: "/faq" },
];

// These were three <a href="#"> — a dead Privacy Policy on a site that asks
// people to ship it their inventory.
const legalLinks = [
  { name: "Privacy Policy", to: "/privacy" },
  { name: "Terms of Service", to: "/terms" },
  { name: "Cookie Policy", to: "/cookies" },
];

const serviceLinks = [
  { name: "Amazon FBA Prep", to: "/service/fba" },
  { name: "FBM Prep", to: "/service/fbm" },
  { name: "Pricing", to: "/pricing" },
];

// Facebook was here with `to: ""`, which navigates to the current page. An icon
// that looks like a profile link and goes nowhere reads as an abandoned
// business. Add it back the moment there is a URL for it.
const socials = [
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

        {/* Link columns.
            THREE, not four: the brand block — mark, wordmark and the one-line
            description — used to sit in the first cell. It was the third copy
            of the wordmark within one screen (the bar above, the giant
            BLACKBOXPREPS sign-off directly above this, then here), and the
            description repeated what that sign-off and the site's own meta
            description already say. The socials it carried moved to the bottom
            bar, beside the legal links. */}
        <motion.div
          className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Quick links */}
          <motion.div variants={fadeUp}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
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
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
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
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
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
                  {/* Was "blackboxprepcenter.com" over a mailto: — a link that
                      looks like a website and opens a mail client. Show the
                      address it actually sends to. */}
                  contact@blackboxprepcenter.com
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 md:flex-row">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} BlackBoxPreps. All rights reserved.
          </p>
          {/* Legal links and socials share the right-hand end of the bottom
              bar. They stay in SEPARATE nav landmarks with their own labels —
              one wrapper would announce "Privacy Policy, Terms of Service,
              Cookie Policy, Twitter, Instagram" as one list, which is two
              unrelated things read as one. */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
            <nav aria-label="Legal" className="flex gap-6">
              {legalLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className="text-xs text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <nav aria-label="Social" className="flex gap-2.5">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  to={social.to}
                  aria-label={social.label}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:border-red-600/50 hover:bg-red-600 hover:text-white"
                >
                  <social.icon className="h-3.5 w-3.5" />
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
