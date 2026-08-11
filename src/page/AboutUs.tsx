import man2 from "../asset/man2.webp";
import maninblack from "../asset/maninblack.webp";
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
      <section className="relative h-132 flex-center overflow-hidden pt-20">
        {/* THE WHITE FLASH WHEN ARRIVING FROM HOME OR PRICING WAS HERE.
            This hero faded in from `opacity: 0` over 1.5 seconds, and its image
            was `loading="lazy"` even though it is the first thing on the page.
            So for the first frames after the route changed there was nothing to
            paint: captured on a screencast, 123ms after the click the entire
            viewport was white. Coming from a page that opens dark, that reads
            as a flash — which is why it happened on this page and About but not
            between Home and Pricing, both of which open dark and paint
            immediately.

            The scale-in is kept, because that is the effect. The opacity fade is
            not: it is what made the first frames blank. `eager` +
            `fetchPriority="high"` because this is the LCP element of the page,
            and lazy-loading the LCP element delays the very paint being waited
            for. */}
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="absolute max-w-6xl mx-auto inset-0 z-0"
        >
          {/* `h-full` is what makes `object-cover` mean anything. Without a
              height the image was its own intrinsic ratio at `w-full` and
              `object-cover` had no box to cover, so it stopped short of the
              section's 33rem and left the background showing. */}
          <img loading="eager" fetchPriority="high" decoding="async"
            src={maninblack}
            className="h-full w-full object-cover"
            alt="Our warehouse team"
          />
          <div className="absolute  inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </motion.div>

        <AnimatedSection className="absolute bottom-12 z-10 max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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