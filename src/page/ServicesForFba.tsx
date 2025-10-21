import { ShieldCheck, TrendingUp, Clock } from "lucide-react";
import product from "../asset/product.png";
import check from "../asset/check.jpg";
import { motion,type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Head from "@/component/Head";
import Section2 from "@/component/section2";


// Animation variants
const containerVariants:Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6
    }
  }
};

const itemVariants:Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut"
    }
  }
};

const cardVariants:Variants = {
  hidden: { opacity: 0.7, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut"
    }
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const imageVariants:Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.4,
      ease: "easeInOut"
    }
  }
};

const staggerContainer:Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeInUp:Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
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



export default function FbaService() {

  const features = [
    {
      icon: ShieldCheck,
      title: "Amazon Compliance",
      description: "Our prep services strictly follow Amazon's packaging & labeling requirements so your products never face rejection."
    },
    {
      icon: TrendingUp,
      title: "Scalability",
      description: "Whether you're a new seller or a high-volume brand, our services scale to meet your business needs."
    },
    {
      icon: Clock,
      title: "Fast & Reliable",
      description: "With quick turnaround and reliable logistics, your products get to Amazon warehouses faster, ready to sell."
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Product Receiving & Inspection",
      description: "We receive your products, verify quantities, and carefully inspect them for any visible damage or discrepancies before storage or prep begins."
    },
    {
      step: "2",
      title: "Amazon Shipment Setup & Notification",
      description: "Our team sets up your shipment plan and notifies Amazon of the incoming inventory, ensuring that all shipment details are fully aligned with Amazon's requirements."
    },
    {
      step: "3",
      title: "FBA Prep: Repackaging, Bagging & Labeling",
      description: "We repackage, polybag, and label your products according to Amazon's FBA standards — including FNSKU, suffocation, expiration, and other required labels."
    },
    {
      step: "4",
      title: "Multi-Center Shipment & Distribution",
      description: "We prepare and distribute your shipments to multiple Amazon fulfillment centers using small parcel or LTL services, ensuring cost-effective and timely delivery."
    }
  ];

  const services = [
    {
      title: "Private Label",
      description: "From labeling to polybagging, we ensure your custom-branded items meet all Amazon FBA packaging standards."
    },
    {
      title: "Wholesale",
      description: "We break down bulk shipments, inspect inventory, and prepare items for multi-center Amazon deliveries."
    },
    {
      title: "Online Arbitrage / Retail",
      description: "From inspection to relabeling, we prep each product to meet Amazon's strict compliance and packaging rules."
    }
  ];

  const storageOptions = [
    {
      title: "Short-Term Storage",
      description: "Secure, climate-controlled storage available for your inventory before dispatch."
    },
    {
      title: "Small Parcel & LTL Shipments",
      description: "We prepare and ship inventory to multiple Amazon centers via your preferred carrier or our partnered logistics."
    },
    {
      title: "Real-Time Updates",
      description: "Stay informed with shipment tracking, photos, and preparation reports directly from our dashboard."
    }
  ];

  const trustPoints = [
    {
      title: "Transparent Pricing",
      description: "No hidden costs — our pricing is clear, with detailed invoices for every service."
    },
    {
      title: "Trained Staff",
      description: "Every item is handled by trained professionals who know Amazon's compliance inside out."
    },
    {
      title: "Fast Turnaround",
      description: "We process and ship inventory quickly to ensure your products stay live on Amazon with minimal downtime."
    }
  ];

  return (
    <>
  <Head title=" BlackBoxPreps | FBA service"  />
  
        <section className="py-16 px-6">
        <AnimatedSection className="max-w-4xl mx-auto flex items-center">
          <motion.div variants={itemVariants} className="flex text-5xl font-inter font-medium items-start flex-col mt-12">
            <h2 className="text-gray-900">Simplified Workflow</h2>
            <h2 className="text-gray-900">for Your Amazon</h2>
            <h2 className="text-gray-900">FBA Journey</h2>
            <motion.p 
              variants={itemVariants}
              className="mt-4 text-gray-700 text-sm font-open-sans max-w-xl"
            >
              We handle every step — from inspection to shipment — ensuring your products reach Amazon fully compliant and ready to sell
            </motion.p>
          </motion.div>
          <motion.img 
            variants={imageVariants}
            whileHover="hover"
            src={product} 
            alt="FBA box service" 
            className="w-[24rem] object-cover ml-8 rounded-lg shadow-lg hidden md:block"
          />
        </AnimatedSection>

        {/* Service Details */}
        <AnimatedSection className="bg-white flex flex-col lg:flex-row items-center justify-between rounded-2xl shadow-md p-8 max-w-5xl mx-auto gap-8 mt-12">
          <div className="max-w-5xl text-black mx-auto">
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto px-6 py-12 bg-white rounded-2xl shadow-sm"
            >
              <motion.div variants={fadeInUp} className="flex-shrink-0">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src={check}
                  alt="FBA Prep Illustration"
                  className="w-72 h-auto rounded-xl object-cover"
                />
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-col text-gray-800 max-w-xl">
                <h2 className="text-4xl font-semibold mb-4 flex items-center gap-2 text-gray-800">
                  What is FBA?
                </h2>

                <p className="mb-6 text-base leading-relaxed">
                  With FBA, Amazon requires all products to be properly prepared for shipping —
                  including labeling, packaging, and ensuring they meet safety and compliance standards.
                  Failure to follow these requirements can lead to delays, rejections, or extra fees.
                  Since Amazon and other warehouses often charge premium rates for these services,
                  using a dedicated FBA prep service can help you save costs, ensure compliance, and
                  streamline your fulfillment process.
                </p>

                <p className="text-sm leading-relaxed">
                  Before sending your inventory directly to Amazon, choose{" "}
                  <span className="font-semibold text-red-800">BlackBoxPreps</span> as your trusted
                  prep partner. We handle everything — from packaging your items to Amazon's exact
                  specifications, to printing and applying labels and barcodes, and shipping them
                  directly to the appropriate fulfillment center.{" "}
                  <span className="font-medium text-gray-900">
                    With us, your products are always Amazon-ready.
                  </span>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </AnimatedSection>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-white">
        <AnimatedSection className="max-w-5xl mx-auto text-center">
          <motion.h2 variants={itemVariants} className="text-4xl font-semibold text-gray-800 mb-6">
            Why You Need an FBA Prep Service
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-700 text-sm leading-relaxed max-w-3xl mx-auto mb-10">
            Managing FBA shipments can be time-consuming and confusing — from Amazon's changing guidelines to packaging and labeling rules. One small mistake can lead to delays, rejections, or costly fees. Our FBA prep service removes this burden so you can focus on selling and growing your business.
          </motion.p>
          
          <motion.div 
            variants={staggerContainer}
            className="max-w-5xl mx-auto mt-16 grid md:grid-cols-3 gap-8 text-center"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white p-6 flex flex-col items-start rounded-xl border-2 border-black shadow-md"
              >
                <feature.icon className="w-10 h-10 p-2 text-white bg-black rounded-xl" />
                <h3 className="text-xl font-sans mt-2 font-medium text-gray-800">{feature.title}</h3>
                <p className="mt-2 font-open-sans text-sm text-start text-gray-800">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>
      </section>

   {/* How We Do FBA Prep */}
<section className="py-16 px-6 bg-gray-100">
  <AnimatedSection className="max-w-6xl mx-auto">
    <div className="mx-auto w-fit mb-10">
      <motion.h2 variants={itemVariants} className="text-4xl font-semibold text-gray-800 text-center">
        How We Do FBA Prep
      </motion.h2>
      <motion.p variants={itemVariants} className="text-md mt-2 text-center">
        Here's what happens after your products arrive at our facility.
      </motion.p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {processSteps.map((step, index) => {
        const [ref, inView] = useInView({
          triggerOnce: true,
          threshold: 0.1,
          rootMargin: "-50px"
        });

        return (
          <motion.div
            key={index}
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={cardVariants}
            whileHover="hover"
            className="flex bg-white p-8 border rounded-2xl shadow-sm"
          >
            <motion.h2 
              whileHover={{ scale: 1.1 }}
              className="border-2 border-r-0 border-black rounded-2xl mr-4 p-6 text-center text-3xl font-normal w-20 h-20 flex items-center justify-center"
            >
              {step.step}
            </motion.h2>
            <div className="flex flex-col justify-center">
              <h3 className="text-lg font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  </AnimatedSection>
</section>

      {/* What We Handle */}
      <section className="py-16 px-6 bg-white">
  <AnimatedSection className="max-w-6xl mx-auto text-center">
    <motion.h2 variants={itemVariants} className="text-4xl font-semibold text-gray-800 mb-6">
      What We Handle
    </motion.h2>
    <motion.p variants={itemVariants} className="text-gray-700 text-sm leading-relaxed max-w-3xl mx-auto mb-10">
      Whether you sell private label, wholesale, or online arbitrage products, 
      <span className="font-medium text-red-700"> BlackBoxPreps </span> is equipped to manage them all. 
      Our flexible prep solutions are tailored to your product type and Amazon's exact standards.
    </motion.p>

    <div className="grid md:grid-cols-3 gap-8 text-left">
      {services.map((service, index) => {
        const [ref, inView] = useInView({
          triggerOnce: true,
          threshold: 0.1,
          rootMargin: "-50px"
        });

        return (
          <motion.div
            key={index}
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={cardVariants}
            whileHover="hover"
            className="bg-gray-50 p-6 rounded-xl shadow-sm border"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
            <p className="text-gray-700 text-sm">{service.description}</p>
          </motion.div>
        );
      })}
    </div>
  </AnimatedSection>
</section>

      {/* Flexible Storage & Shipping Options */}
      <section className="py-16 px-6 bg-gray-100">
        <AnimatedSection className="max-w-6xl mx-auto text-center">
          <motion.h2 variants={itemVariants} className="text-4xl font-semibold text-gray-800 mb-6">
            Flexible Storage & Shipping Options
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-700 text-sm max-w-3xl mx-auto mb-10">
            Whether you're sending 20 units or 2,000, we provide short-term storage, 
            organize shipments, and send them to Amazon's fulfillment centers according to your schedule.
          </motion.p>

          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 text-left"
          >
            {storageOptions.map((option, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white p-6 rounded-xl shadow-sm border"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{option.title}</h3>
                <p className="text-gray-700 text-sm">{option.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>
      </section>

      {/* Why Sellers Trust BlackBoxPreps */}
      <section className="py-16 px-6 bg-white">
        <AnimatedSection className="max-w-6xl mx-auto text-center">
          <motion.h2 variants={itemVariants} className="text-4xl font-semibold text-gray-800 mb-6">
            Why Sellers Trust BlackBoxPreps
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-700 text-sm max-w-3xl mx-auto mb-10">
            We're more than just a prep center — we're your fulfillment partner. 
            Our mission is to make FBA preparation stress-free, transparent, and affordable.
          </motion.p>

          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 text-left"
          >
            {trustPoints.map((point, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-gray-50 p-6 rounded-xl shadow-sm border"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{point.title}</h3>
                <p className="text-gray-700 text-sm">{point.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>
      </section>

      {/* CTA Section */}
   
            <Section2/>
      
    </>
  );
}