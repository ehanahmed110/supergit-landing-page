import React from "react";
import {
  FaShieldAlt,
  FaFileMedical,
  FaStethoscope,
  FaUserMd,
  FaExclamationTriangle,
  FaBookMedical,
  FaRobot,
  FaMicroscope,
} from "react-icons/fa";

export function FeaturedCdss() {
  const features = [
    {
      title: "Reduced Rejection Rates",
      desc: "Minimize claim denials and improve reimbursement rates.",
      icon: <FaShieldAlt className="text-3xl text-[#f14f3e]" />,
    },
    {
      title: "High-Quality Claims",
      desc: "Ensure accurate and complete claims through automated recommendations.",
      icon: <FaFileMedical className="text-3xl text-[#f14f3e]" />,
    },
    {
      title: "Improved Patient Care",
      desc: "Gain valuable insights and support evidence-based decision-making.",
      icon: <FaStethoscope className="text-3xl text-[#f14f3e]" />,
    },
    {
      title: "Increased Physician Satisfaction",
      desc: "Streamline workflows, reduce administrative burden, and improve physician efficiency.",
      icon: <FaUserMd className="text-3xl text-[#f14f3e]" />,
    },
    {
      title: "Real-Time Clinical Alerts",
      desc: "Automatic alerts for drug interactions, contraindications, allergies, and more — at the point of care.",
      icon: <FaExclamationTriangle className="text-3xl text-[#f14f3e]" />,
    },
    {
      title: "Guideline-Based Recommendations",
      desc: "Standardize care with built-in clinical pathways and treatment suggestions aligned with international protocols.",
      icon: <FaBookMedical className="text-3xl text-[#f14f3e]" />,
    },
    {
      title: "AI-Powered Decision Support",
      desc: "Leverage machine learning models for diagnosis suggestions and predictive insights.",
      icon: <FaRobot className="text-3xl text-[#f14f3e]" />,
    },
    {
      title: "Integrated Lab & Radiology Insights",
      desc: "Get smart interpretations from lab results and radiology reports integrated directly into clinical notes.",
      icon: <FaMicroscope className="text-3xl text-[#f14f3e]" />,
    },
  ];

  return (
    <React.Fragment>
      <div className="px-4 md:px-10">
        <div
          className="text-center max-w-3xl mx-auto mb-4 py-14 pb-8"
          data-aos="fade-down"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
            Core CDSS{" "}
            <span className="bg-gradient-to-r from-[#f14f3e] to-[#fab768] bg-clip-text text-transparent italic">
              Capabilities
            </span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Enhance patient care and improve outcomes with our AI-powered
            decision support system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
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
