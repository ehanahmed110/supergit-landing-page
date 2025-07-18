import React from "react";
import {
  FaIdCard,
  FaFileAlt,
  FaClock,
  FaRobot,
  FaShieldAlt,
  FaClipboardList,
} from "react-icons/fa";

export function FeaturesdNP() {
  const features = [
    {
      title: "Fast Eligibility Checks",
      desc: "Instantly verify insurance eligibility via secure NPHIES APIs, reducing delays at point-of-care.",
      icon: <FaIdCard className="text-3xl text-[#f14f3e]" />,
    },
    {
      title: "Accurate Claims Submission",
      desc: "Minimize claim denials with structured, standards-compliant electronic claim submissions.",
      icon: <FaFileAlt className="text-3xl text-[#f14f3e]" />,
    },
    {
      title: "Real-time Status Updates",
      desc: "Track eligibility, approvals, and claim statuses in real time—fully integrated with NHIC systems.",
      icon: <FaClock className="text-3xl text-[#f14f3e]" />,
    },
    {
      title: "Automated Claims Submission",
      desc: "Trigger claim workflows directly from clinical and billing events—no manual re-entry required.",
      icon: <FaRobot className="text-3xl text-[#f14f3e]" />,
    },
    {
      title: "Compliant with NHIC & NPHIES",
      desc: "Stay aligned with Saudi Arabia’s national health standards and mandatory integrations.",
      icon: <FaShieldAlt className="text-3xl text-[#f14f3e]" />,
    },
    {
      title: "Audit & Traceability",
      desc: "Full audit logs and traceability for every transaction submitted through NPHIES.",
      icon: <FaClipboardList className="text-3xl text-[#f14f3e]" />,
    },
  ];

  return (
    <React.Fragment>
      <div className="px-4 md:px-20">
        <div
          className="text-center max-w-3xl mx-auto mb-4 pt-8 pb-4"
          data-aos="fade-down"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
            Core NPHIES{" "}
            <span className="bg-gradient-to-r from-[#f14f3e] to-[#fab768] bg-clip-text text-transparent italic">
              {" "}
              Capabilities
            </span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Seamlessly integrate with NPHIES for efficient insurance claims
            processing and ensure compliance with CCHI standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {features.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 200}`}
              className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center gap-4 mb-3">
                {item.icon}
                <h3 className="text-lg font-semibold text-[#333]">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
