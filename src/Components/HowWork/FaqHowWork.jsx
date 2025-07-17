import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function FaqHowWork() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the primary function of the HIS module?",
      answer:
        "The Hospital Information System (HIS) handles all clinical and administrative processes like patient registration, OPD/IPD management, lab reports, appointments, and discharge summaries.",
    },
    {
      question: "Does the HIS module connect with ERP or CDSS?",
      answer:
        "No. The HIS module is standalone and operates independently. It has its own API structure and workflow specific to clinical and hospital operations.",
    },
    {
      question: "What does the ERP module cover?",
      answer:
        "The ERP module focuses on finance, human resources, and inventory management for healthcare organizations. It operates independently from HIS or CDSS.",
    },
    {
      question: "Can the ERP system be integrated with other hospital tools?",
      answer:
        "While the ERP system has its own flow, custom integration is possible depending on hospital requirements using secure APIs. By default, it is a separate module.",
    },
    {
      question: "What is NPHIES integration used for?",
      answer:
        "NPHIES handles insurance-related processes such as eligibility checks, claim submissions, and approvals — aligned with Saudi Arabia's national insurance platform.",
    },
    {
      question: "Is NPHIES dependent on HIS or ERP?",
      answer:
        "No. NPHIES integration is completely separate. It has its own claim lifecycle, endpoints, and flow, independent of hospital or billing systems.",
    },
    {
      question: "What does the CDSS module do?",
      answer:
        "CDSS (Clinical Decision Support System) provides AI-powered clinical alerts, diagnostic support, and treatment recommendations based on patient symptoms and guidelines.",
    },
    {
      question: "Is CDSS connected with HIS or used alone?",
      answer:
        "CDSS is a standalone AI module. It can be used independently for diagnostics, and has a separate API architecture and frontend logic.",
    },
    {
      question: "Are all modules installed together?",
      answer:
        "No. SuperGit offers each module independently. Hospitals can select only the modules they require — such as HIS alone or ERP + CDSS — without needing the full suite.",
    },
  ];

  return (
    <React.Fragment>
      <section className="mt-16 px-4 md:px-12 mb-24">
        <div className="max-w-5xl mx-auto">
          <h2
            data-aos="fade-up"
            className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-10"
          >
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-[#f14f3e] to-[#fab768] bg-clip-text text-transparent italic">
              Questions
            </span>
          </h2>
          <div className="divide-y divide-gray-200 rounded-xl overflow-hidden  bg-white">
            {faqs.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none cursor-pointer"
                >
                  <h4 className="text-md font-semibold text-gray-800">
                    {faq.question}
                  </h4>
                  {activeIndex === i ? (
                    <ChevronUp className="text-[#f14f3e]" />
                  ) : (
                    <ChevronDown className="text-[#f14f3e]" />
                  )}
                </button>

                {activeIndex === i && (
                  <div className="px-6 pb-5 text-gray-600 text-sm transition-all duration-300">
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
