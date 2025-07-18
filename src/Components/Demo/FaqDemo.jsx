import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
export function FaqDemo() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqs = [
    {
      question: "Is the demo personalized?",
      answer:
        "Yes. You can book a live session tailored to your hospital or organization’s needs.",
    },
    {
      question: "How long is the live demo?",
      answer: "Around 30–45 minutes including Q&A.",
    },
    {
      question: "Do I need technical knowledge to follow the demo?",
      answer:
        "No. The demo is designed for business users, hospital admins, and IT staff alike.",
    },
    {
      question: "Can we invite multiple stakeholders to the demo?",
      answer:
        "Absolutely. We encourage decision-makers and IT teams to join together.",
    },
    {
      question: "Will I get a recording after the demo?",
      answer:
        "Yes, we can provide a video recording upon request for internal review.",
    },
  ];
  return (
    <React.Fragment>
      <section className="bg-white  px-4 md:px-20">
        <div className="mb-10">
          <h3
            data-aos="fade-up"
            className="text-3xl font-bold text-center text-gray-800 mb-6"
          >
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-[#f14f3e] to-[#fab768] bg-clip-text text-transparent italic">
              Questions
            </span>
          </h3>

          <div className="">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-200"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none cursor-pointer"
                >
                  <span className="text-gray-800 font-semibold text-md md:text-base">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <FiChevronUp className="text-[#f14f3e] text-2xl" />
                  ) : (
                    <FiChevronDown className="text-[#f14f3e] text-2xl" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="pb-4 px-6 text-sm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
