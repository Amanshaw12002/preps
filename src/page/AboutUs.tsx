import man2 from "../asset/man2.webp";
import man3 from "../asset/man3.webp";
import { Briefcase, Users, Globe, ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Head from "@/component/Head";


// Animation variants
const containerVariants:Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8
    }
  }
};

const itemVariants:Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

/* WAS `scale: 1.1`. A full-width image starting 10% oversized hangs 5% off each
   side of its column and widens the whole document — the same class of bug as an
   `x: 50` entrance, arriving through scale instead of translation.
   `overflow-hidden` on the wrapper does NOT fix it: the wrapper is the element
   being scaled, so it overflows its own parent, and clipping there would only
   have cut the image's drop shadow off.
   Starting slightly UNDER size and growing to 1 is the same gesture — a push
   into place — and can never be wider than the box it lives in. */
const imageVariants:Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeOut"
    }
  }
};

const cardVariants:Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  hover: {
    y: -8,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

// Reusable Animated Section Component
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

export default function AboutUs() {
  const [missionRef, missionInView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });
  
  /* The client's own figures — kept as given, pending their confirmation.
     Two to raise with them, both cheap to settle and both currently visible:
     "99.8%" carries a decimal place with no stated denominator, which invites
     the question "of what?"; and "24/7 Support" should agree with the FAQ,
     which now names an email address and a phone number. */
  const stats = [
    { number: "500+", label: "Sellers Helped" },
    { number: "99.8%", label: "Success Rate" },
    { number: "24/7", label: "Support" },
    { number: "2M+", label: "Units Processed" }
  ];



  return (
    <>
  <Head
    title="About BlackBoxPreps | Delaware Amazon Prep Center"
    description="Who we are: a Delaware-based Amazon prep center handling receiving, inspection, labeling and shipment prep for growing sellers."
    canonical="/aboutUs"
  />
      {/* NO `mt-12`. That margin was the white strip above the photo: the hero
          began 48px down the page, and the only thing above it was the white
          body — which the fixed bar then sat on. A hero starts at the top of
          the page and runs UNDER the bar, the way Home and Pricing already do. */}
      {/* THE PHOTOGRAPH IS GONE, AND IT WAS CAUSING A BUG BEYOND THIS PAGE.
          It was an `<img>` inside `absolute max-w-6xl mx-auto inset-0` — capped
          at 72rem and centred — so on a viewport wider than that, the hero's
          own margins were the white page behind it. The navbar decides its ink
          by hit-testing the surface under itself at nine points spread across
          its full width, and past ~2000px CSS the outer six of those landed in
          that white margin: six votes for "light", near-black nav text over a
          dark photograph, on the one page in the site built this way. It needs
          a very wide viewport, which is an ordinary laptop at 50% browser zoom
          — and never reproduces at 100%, which is why it read as unreproducible
          for so long.

          A flat surface has no margins to fall off, so the probe cannot miss it
          at any width. It also deletes the page's largest download, and the
          white-flash-on-arrival problem this block used to document, since
          there is no longer an image whose decode the first paint waits on. */}
      <section className="relative overflow-hidden bg-[#0a0a0a] pt-28 pb-14 sm:pt-32 sm:pb-16 lg:min-h-132 lg:pt-40">
        {/* Same ambient wash the footer uses, so the two dark surfaces on the
            site are the same material rather than two different blacks. It is
            `bg-red-700/15`, well under the 0.6 alpha the tone probe treats as
            opaque, so it cannot affect what the bar reads. */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/2 h-96 w-[48rem] max-w-[140%] -translate-x-1/2 rounded-full bg-red-700/15 blur-[120px]" />
        </div>

        {/* IN NORMAL FLOW, not `absolute bottom-12`. Anchoring the content to
            the bottom of a fixed 33rem box meant that as soon as the stack was
            taller than the box — which it is on every phone, once the grid
            drops to one column — it grew UPWARDS and off the top of the page.
            Measured before this change: the `<h1>` sat at y -129 at 320px, -79
            at 375, -59 at 390 and 414. "About Us" was not clipped, it was
            entirely above the viewport, on every phone.

            So the height is now a `min-height` that only applies from `lg`,
            where the two-column grid genuinely fits it, and padding does the
            work everywhere else. `pt-28` clears the fixed bar, which is the
            other thing `h-132 pt-20` was silently relying on the absolute
            positioning to do. */}
        <AnimatedSection className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <motion.div variants={itemVariants}>
              <motion.h1 
                className="text-5xl lg:text-7xl  font-inter text-white mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                About Us
              </motion.h1>
              <motion.p 
                className="text-lg text-gray-200 leading-relaxed max-w-lg"
                variants={itemVariants}
              >
                We help Amazon sellers grow by{" "}
                <span className="font-semibold text-white">simplifying FBA & FBM prep services.</span>
                From packaging and labeling to storage and fulfillment, we ensure your
                products reach customers with speed and reliability.
              </motion.p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <motion.div 
                    className="text-3xl  text-white mb-2 font-inter"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>
      </section>

      {/* ======================= Section 2: Our Mission ======================= */}
      <section ref={missionRef} className="relative py-32 bg-white">
        {/* Background that moves with scroll */}
        <div className="absolute inset-0 bg-white z-0" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-20">
            <motion.h2 
              variants={itemVariants}
              className="text-5xl lg:text-6xl font-light text-gray-900 mb-8"
            >
              Our Mission
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-2xl lg:text-3xl text-gray-600 leading-relaxed max-w-5xl mx-auto"
            >
              To deliver <span className="text-gray-900 font-medium">exceptional logistics services</span>{" "}
              that help our clients succeed in competitive marketplaces. We started
              with a <span className="text-gray-900 font-medium">simple goal: to make Amazon
              fulfillment easier</span> for sellers.
            </motion.p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              animate={missionInView ? "visible" : "hidden"}
              variants={containerVariants}
            >
              <motion.p 
                variants={itemVariants}
                className="text-lg text-gray-700 leading-relaxed mb-8"
              >
                Many businesses struggle with packaging compliance, warehouse management, 
                and timely shipping. That's where we step in — acting as{" "}
                <span className="text-gray-900 font-semibold">your trusted partner</span>{" "}
                to handle the heavy lifting so you can{" "}
                <span className="text-gray-900 font-semibold">focus on scaling your brand.</span>
              </motion.p>
              
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                {['FBA Prep', 'FBM Support', 'Warehouse Storage', 'Quality Control'].map((service) => (
                  <motion.span
                    key={service}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 text-sm font-medium"
                  >
                    {service}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate={missionInView ? "visible" : "hidden"}
              className="relative"
            >
              <img loading="lazy" decoding="async"
                src={man2}
                className="w-full rounded-2xl shadow-2xl"
                alt="Our fulfillment process"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Since 2018</div>
                    <div className="text-sm text-gray-600">Trusted by sellers</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================= Section 3: Team & Values ======================= */}
      <section className="py-32 bg-gray-50">
        <AnimatedSection className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div variants={itemVariants}>
              <h2 className="text-5xl lg:text-6xl font-light text-gray-900 mb-8">
                Work becomes play with our experienced team
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our dedicated professionals bring years of expertise in e-commerce 
                logistics, ensuring your business operates smoothly while you focus 
                on growth and innovation.
              </p>
            </motion.div>

            <motion.div variants={imageVariants}>
              <img loading="lazy" decoding="async"
                src={man3}
                className="w-full rounded-2xl shadow-xl"
                alt="Our experienced team"
              />
            </motion.div>
          </div>

          {/* Values Cards */}
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Experience */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mb-6">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Our Experience
              </h3>
              <p className="text-gray-600 leading-relaxed">
                With years of experience in FBA, FBM, and wholesale services, we
                provide tailored solutions for every seller's needs.
              </p>
            </motion.div>

            {/* Team */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Our Team
              </h3>
              <p className="text-gray-600 leading-relaxed">
                A passionate and skilled team committed to guiding clients through
                every step of their business journey.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl shadow-lg p-8 text-white"
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Our Vision
              </h3>
              <p className="text-gray-200 leading-relaxed">
                To be a global leader in logistics solutions, setting new
                standards of trust and efficiency for e-commerce sellers.
              </p>
            </motion.div>
          </motion.div>
        </AnimatedSection>
      </section>
    </>
  );
}