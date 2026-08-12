import { motion, type Variants } from "framer-motion";
import { ArrowRight, BadgeDollarSign, Boxes, Clock, Mail, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionEyebrow } from "@/page/Home";

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
  visible: { transition: { staggerChildren: 0.12 } },
};

/**
 * These figures are the client's own and are treated as correct until the
 * client says otherwise. They were briefly replaced with structural facts
 * during a credibility pass; that was the wrong trade — swapping a number for a
 * different kind of statement is its own way to mislead, and an unverified
 * number is the client's call, not the site's.
 *
 * Two things to settle with the client rather than in code:
 *
 *  1. "24-72h Average Turnaround" and the FAQ's "2–5 business days" are two
 *     answers to the same question on the same site. One of them should move.
 *  2. The 5-star card. If the reviews are real, they belong ON the site as
 *     reviews — and once they are, `aggregateRating` can go into the
 *     LocalBusiness JSON-LD in index.html, which deliberately omits it today.
 *     A rating in the copy that the structured data does not carry is the
 *     mismatch worth closing, and it closes in the generous direction.
 */
const stats = [
  {
    number: "100%",
    title: "Tax Advantage",
    desc: "Operating from Delaware's tax-free zone",
    icon: <BadgeDollarSign className="h-5 w-5" />,
  },
  {
    number: "100K+",
    title: "Orders Processed",
    desc: "Successfully prepped and shipped units.",
    icon: <Boxes className="h-5 w-5" />,
  },
  {
    number: "5.0",
    title: "5 Star Client Rating",
    desc: "From verified seller reviews.",
    icon: <Star className="h-5 w-5" />,
    stars: true,
  },
  {
    number: "24-72h",
    title: "Average Turnaround",
    desc: "Fast processing from receiving to shipment",
    icon: <Clock className="h-5 w-5" />,
  },
];

export default function SecondSection() {
  return (
    <section className="relative overflow-hidden bg-gray-50">
      <div className="relative mx-auto max-w-6xl px-4 py-12">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div variants={fadeUp}>
            <SectionEyebrow label="STATS" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-inter text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
          >
            Prep, Packed, &amp; Shipped
            <span className="block py-4 bg-gradient-to-r from-red-700 to-red-500 bg-clip-text text-transparent">
              Without Delays.
            </span>
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-4 text-sm text-gray-500">
            Leave the steps to BlackBoxPreps that you can get your time back.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link
              to="/quote"
              className="group inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-900/30 transition-all duration-300 hover:bg-red-500"
            >
              Start Sending Inventory
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3.5 text-sm font-semibold text-gray-900 transition-all duration-300 hover:border-red-600 hover:text-red-700"
            >
              Check Pricing
            </Link>
          </motion.div>

        
        </motion.div>

        <motion.div
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Hover is neutral, not red. Red is the brand's accent and it was
              being spent on a state that means nothing — pointing at a card. A
              tinted border plus a coloured shadow on every card the cursor
              crosses reads as an alert; a lift and a plain shadow reads as
              "this is a card". The red stays where it carries meaning: the
              icons, the stars, the CTA.

              The lift is framer's now, not `hover:-translate-y-1.5`. That class
              could never have worked here: framer-motion writes an inline
              `transform` on this element, and an inline style beats a class, so
              the CSS lift was silently dead the whole time. */}
          {stats.map((stat) => (
            <motion.div
              key={stat.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-[border-color,box-shadow,background-color,color] duration-500 hover:border-gray-300 hover:shadow-xl hover:shadow-gray-900/10"
            >
              <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-700 transition-colors duration-300 group-hover:bg-red-100 group-hover:text-red-800">
                {stat.icon}
              </span>
              {stat.stars ? (
                <p className="font-inter text-2xl font-semibold tracking-widest text-red-600">
                  ★ ★ ★ ★ ★
                </p>
              ) : (
                <p className="font-inter text-3xl font-semibold text-gray-900">
                  {stat.number}
                </p>
              )}
              <p className="mt-1.5 text-sm font-semibold text-gray-900">
                {stat.title}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-gray-500">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Same block as the one at the foot of the hero on the home page. It
            is repeated rather than shared because the two sit in different
            sections with different backgrounds, and the identical markup is
            six lines — a shared component here would be indirection for its
            own sake. If a third copy appears, extract it then. */}
        <motion.div
          className="mx-auto mt-14 flex w-fit flex-col items-center gap-3 border-t border-gray-200 pt-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <p className="text-xs text-gray-500">We are available 24/7.</p>
          <a
            href="mailto:contact@blackboxprepcenter.com"
            className="group inline-flex items-center gap-2 rounded-xl border-2 border-gray-900  px-5 py-3 text-sm font-semibold text-gray-900 transition-all duration-300 hover:bg-gray-200"
          >
            <Mail className="h-4 w-4" />
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
