import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionLayout from "@/layout/sectionLayout";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What services do you provide?",
    answer:
      "We provide end-to-end solutions including product prep, labeling, packaging, shipping, and fulfillment support tailored to your business needs.",
  },
  {
    question: "How long does the process take?",
    answer:
      "Processing time depends on the size of your order, but typically it takes 2–5 business days to complete and dispatch.",
  },
  {
    question: "Do you handle both small and large businesses?",
    answer:
      "Yes! Our services are scalable, whether you're a solo seller or a large brand managing bulk shipments.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Absolutely! You'll receive real-time updates and tracking information as soon as your order ships.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can reach us via our Contact page, email, or live chat. Our support team is available 24/7.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SectionLayout >

      <div className="max-w-5xl mx-auto flex flex-col px-8">
  
  
  <div className="flex-between relative border-l-2 overflow-hidden">
  <motion.h2 
    className="text-4xl p-4 h-fit font-medium text-left mb-10 text-black"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "0px 0px -200px 0px" }}
    variants={{
      visible: {
        transition: {
          staggerChildren: 0.03
        }
      }
    }}
    >
    {"Frequently Asked Questions".split("").map((char, index) => (
      <motion.span
      key={index}
      variants={{
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 }
      }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="inline-block"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </motion.h2>
</div>
        <motion.div 
          className="space-y-4 mx-24 mt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border p-5 shadow-sm bg-white"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left font-medium text-lg text-gray-800"
                whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                >
                  {faq.question}
                </motion.span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ChevronDown className="h-5 w-5 text-black" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <motion.p 
                      className="mt-3 text-gray-600"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                    >
                      {faq.answer}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionLayout>
  );
}