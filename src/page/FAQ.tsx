import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
      "Yes! Our services are scalable, whether you’re a solo seller or a large brand managing bulk shipments.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Absolutely! You’ll receive real-time updates and tracking information as soon as your order ships.",
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
    <section className=" pb-16 pt-32 px-6 ">
    <div className="max-w-5xl  mx-auto  flex flex-col">
   <div className="flex-between">

      <h2 className="text-4xl p-4   border-l-2 h-fit font-medium text-left mb-10 text-black">
        Frequently Asked Questions
      </h2>
   </div>

      <div className="space-y-4 mx-24 mt-4">
        {faqs.map((faq, index) => (
          <div
          key={index}
          className="border  p-5 shadow-sm bg-white"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left font-medium text-lg text-gray-800"
              >
              {faq.question}
              <ChevronDown
                className={`h-5 w-5 transform transition-transform text-black duration-300 ${
                  openIndex === index ? "-rotate-90" : ""
                  }`}
                  />
            </button>

            <div
              className={`mt-3 text-gray-600 transition-all duration-300 overflow-hidden ${
                openIndex === index ? "max-h-40" : "max-h-0"
                }`}
                >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
        </div>
    </section>
  );
}
