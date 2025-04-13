"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa"; // Install react-icons if needed

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "We offer software development, web and mobile apps, cloud solutions, cybersecurity, and IT consulting to help businesses grow.",
  },
  {
    question: "How can I get a project estimate?",
    answer:
      "Share your project details with us, and we’ll review your requirements and provide a customized cost estimate.",
  },
  {
    question: "Do you provide support after project delivery?",
    answer:
      "Yes! We offer ongoing maintenance and support to ensure your system runs smoothly and stays updated.",
  },
  {
    question: "How long will my project take?",
    answer:
      "The timeline depends on the project’s complexity. After understanding your requirements, we’ll provide an estimated delivery time.",
  },
  {
    question: "Why should I work with Biafotech?",
    answer:
      "We deliver high-quality, secure, and scalable solutions with expert guidance, timely execution, and dedicated support.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center p-6 items-center font-poppins bg-white lg:mx-14">
        <div className="flex flex-col justify-start self-start space-y-4 items-start lg:mt-4 lg:ml-6">
          <p className="text-4xl font-bold leading-normal">
            Frequently Asked{" "}
            <font className="text-themebluehero">Questions</font>
          </p>
          <p className="text-base font-light leading-normal lg:w-[85%]">
            Curious about Biafotech? Discover how it works, what makes it
            unique, and how it can simplify your tech needs. Get quick, clear
            answers to all your questions! 🚀
          </p>
        </div>
        <div className="max-w-2xl mx-auto p-6">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-[#2f7af7] rounded-b-[6px] shadow-lg"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-4 bg-[#2f7af7] hover:bg-[#255fc1] transition rounded-md"
                >
                  <span className="text-lg text-white font-medium">
                    {faq.question}
                  </span>
                  <FaChevronDown
                    className={`text-white transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index
                      ? "max-h-40 p-4 text-[#002049]"
                      : "max-h-0"
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
