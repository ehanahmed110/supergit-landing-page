import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
export function FaqChoose() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "What makes SuperGit different from other platforms?",
      answer:
        "SuperGit is purpose-built for Saudi healthcare institutions, ensuring full compliance with NHIC, NPHIES, and CDSS standards — with a modular, AI-enabled design tailored to your needs.",
    },
    {
      question: "Can I integrate only a few modules now and expand later?",
      answer:
        "Absolutely. SuperGit is fully modular, allowing you to start with HIS or ERP, and add others like NPHIES or CDSS as your operations grow.",
    },
    {
      question: "Does SuperGit offer training and implementation support?",
      answer:
        "Yes — we provide full onboarding, user training, and technical support during and after implementation to ensure smooth transitions.",
    },
    {
      question: "Is my data secure and compliant?",
      answer:
        "100%. We use end-to-end encryption, role-based access, and adhere strictly to NHIC/NPHIES regulatory frameworks to protect all patient and operational data.",
    },
    {
      question: "How long does it take to implement SuperGit in a hospital?",
      answer:
        "Depending on the size of your institution and selected modules, implementation can range from a few weeks to a couple of months. Our team ensures a smooth, disruption-free deployment.",
    },
    {
      question: "Can SuperGit integrate with our existing systems?",
      answer:
        "Yes. SuperGit is built with interoperability in mind and can integrate with most third-party systems including legacy EMRs, insurance APIs, and government platforms.",
    },
    {
      question: "Is SuperGit available in Arabic and English?",
      answer:
        "Yes, SuperGit supports both Arabic and English interfaces for better usability across diverse hospital staff and departments.",
    },
    {
      question: "How is SuperGit priced?",
      answer:
        "SuperGit follows a flexible pricing model based on the modules selected, number of users, and type of healthcare facility. Contact our sales team for a customized quote.",
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="mb-10">
      <h3
        data-aos="fade-up"
        className="text-3xl font-bold text-center text-gray-800 mb-8"
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
              <div className="pb-4 px-2 text-sm text-gray-600 leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
