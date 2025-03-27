'use client'
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa"; // Install react-icons if needed

const faqs = [
  {
    question: "What services does your website offer?",
    answer: "Our website provides a range of services, including [list of services].",
  },
  {
    question: "How can I contact customer support?",
    answer: "You can reach our support team via email at support@example.com or our contact form.",
  },
  {
    question: "Is my personal data safe on your website?",
    answer: "Yes! We use advanced encryption methods to protect your data. Check our Privacy Policy.",
  },
  {
    question: "Do you offer refunds or cancellations?",
    answer: "Our refund and cancellation policy depends on the type of service purchased. See our Refund Policy.",
  },
  {
    question: "How do I get started?",
    answer: "Simply sign up and follow the guided steps to access our services.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center p-8 items-center font-poppins bg-white">
        <div className="flex flex-col justify-start self-start space-y-4 items-start lg:mt-4 lg:ml-12">
            <p className="text-4xl font-bold leading-normal">Frequently Asked <font className='text-themebluehero'>Questions</font></p>
            <p className="text-base font-light leading-normal lg:w-[85%]">Curious about Biafotech? Discover how it works, what makes it unique, and how it can simplify your tech needs. Get quick, clear answers to all your questions! 🚀</p>
        </div>
    <div className="max-w-2xl mx-auto p-6">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-[#2f7af7] rounded-b-[6px] shadow-lg">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 bg-[#2f7af7] hover:bg-[#255fc1] transition rounded-md"
            >
              <span className="text-lg text-white font-medium">{faq.question}</span>
              <FaChevronDown
                className={`text-white transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-40 p-4 text-[#002049]" : "max-h-0"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </section>
  );
}
