import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Head from "@/component/Head";

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
    // WAS: "You can reach us via our Contact page, email, or live chat."
    // There is no /contact route and no chat widget anywhere in this app, so
    // two of the three channels sent people nowhere — and they find that out by
    // clicking, which is the worst way to learn it. The channels named here are
    // the ones that exist. The 24/7 line is the client's and is kept, matching
    // the About Us stat and the home page.
    question: "How can I contact support?",
    answer:
      "Email us at contact@blackboxprepcenter.com, call 201-628-6391, or send your shipment details through the quote form. Our support team is available 24/7.",
  },
];

interface FAQProps {
  /**
   * True only on the /faq ROUTE. This component is also embedded in the home
   * page, and the two cases genuinely differ:
   *
   *  - Metadata. Setting <Head> unconditionally meant the home page rendered
   *    the FAQ section and then retitled itself "FAQ | BlackBoxPreps" — caught
   *    by the crawl, not by the typechecker, because it is perfectly valid code.
   *  - Heading level. As its own page the title is the page's h1; embedded in
   *    the home page it is one section among several and must be an h2, or the
   *    home page has two h1s.
   */
  standalone?: boolean;
}

export default function FAQ({ standalone = false }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const Heading = standalone ? motion.h1 : motion.h2;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    {/* The /faq route carried the home page's title, because nothing set its
        own. Only on the route — see the note on FAQProps. */}
    {standalone && (
      <Head
        title="FAQ | BlackBoxPreps Amazon Prep Center"
        description="Answers about our Amazon FBA and FBM prep services — what we handle, how long it takes, and how to reach us."
        canonical="/faq"
      />
    )}
    <section className="max-w-7xl mx-auto">
      {/* pb-16 / sm:pb-20 added. There was NO bottom padding on mobile — only
          `pt-8` — so the last question card sat flush against the dark block
          that follows it and the two sections read as one, with a white card
          apparently floating on a black background. */}
      <div className="max-w-5xl mx-auto flex flex-col pt-8 pb-16 sm:py-12 sm:pt-0 sm:pb-20 px-4 sm:px-8 md:px-12 lg:px-16">
        {/* Title Section */}
        <div className="flex-between flex-col relative  overflow-hidden mb-6">
          {/* h1 on the route, h2 when embedded in the home page. As a page this
              had no h1 at all, so search engines had no stated subject for it
              and a screen reader's heading list started at level 2. */}
          <Heading
            className="text-2xl sm:text-3xl md:text-4xl font-semibold p-2 text-center w-fit mx-auto text-black"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -200px 0px" }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.03 },
              },
            }}
          >
            {"Frequently Asked Questions".split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </Heading>
          {/* Was an <h2> with "Anwsers" in it — a subtitle is not a heading,
              and a spelling mistake in 32px type under the page title is the
              kind of thing a visitor reads as carelessness about everything
              else. */}
          <p className="text-gray-600">Quick answers to the questions we get most.</p>
        </div>

        {/* FAQ List */}
        <motion.div
          className="space-y-4 mt-2 sm:mt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              onHoverStart={() => toggleFAQ(index)}
              onHoverEnd={() => toggleFAQ(index)}
              onClick={() => toggleFAQ(index)}
              className="border p-4 sm:p-5 rounded-xl shadow-sm bg-white hover:shadow-md transition-[border-color,box-shadow,background-color,color] duration-300"
              whileHover={{scale:1.02, backgroundColor: "white" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <motion.button
                
                className="w-full flex justify-between items-center text-left font-medium text-base sm:text-lg text-gray-800"
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
                      className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed"
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
    </section>
    </>
  );
}
