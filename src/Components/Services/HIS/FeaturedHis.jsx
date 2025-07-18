import React from "react";
import {
  FaNotesMedical,
  FaStethoscope,
  FaFlask,
  FaFileInvoiceDollar,
  FaCogs,
  FaShieldAlt,
  FaMobileAlt,
  FaLock,
} from "react-icons/fa";
export function FeaturedHis() {
  const features = [
    {
      title: "Patient Management",
      desc: "Comprehensive inpatient and outpatient tracking, appointment scheduling, and unified patient medical records.",
      icon: <FaNotesMedical className="text-3xl text-[#f14f3e]" />,
    },
    {
      title: "Clinical Documentation",
      desc: "Doctors and nurses can capture SOAP notes, vitals, progress notes, and orders electronically.",
      icon: <FaStethoscope className="text-3xl text-[#f14f3e]" />,
    },
    {
      title: "Radiology & Lab Integration",
      desc: "Seamless integration with LIS/RIS/PACS for faster diagnostics, reporting, and result sharing.",
      icon: <FaFlask className="text-3xl text-[#f14f3e]" />,
    },
    {
      title: "Financial Management",
      desc: "Automated billing, revenue cycle management, co-payment tracking, and insurance reconciliation.",
      icon: <FaFileInvoiceDollar className="text-3xl text-[#f14f3e]" />,
    },
    {
      title: "Operational Efficiency",
      desc: "Modules for inventory, HR, pharmacy, OT, housekeeping, and more—all under one roof.",
      icon: <FaCogs className="text-3xl text-[#f14f3e]" />,
    },
    {
      title: "NPHIES & NHIC Compliance",
      desc: "Built-in integration to meet Saudi regulatory standards for claim eligibility and e-claims.",
      icon: <FaShieldAlt className="text-3xl text-[#f14f3e]" />,
    },
    {
      title: "Enhanced Patient Experience",
      desc: "Online portals, teleconsultation features, patient mobile apps, and e-prescriptions.",
      icon: <FaMobileAlt className="text-3xl text-[#f14f3e]" />,
    },
    {
      title: "Data Security & Audit Trails",
      desc: "Role-based access control, full traceability, and compliance with healthcare data protection policies.",
      icon: <FaLock className="text-3xl text-[#f14f3e]" />,
    },
  ];

  return (
    <React.Fragment>
      <div className="px-4 ">
        <div
          className="text-center max-w-3xl mx-auto mb-4 pt-8 pb-4 "
          data-aos="fade-down"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3  text-gray-900">
            Core HIS{" "}
            <span className="bg-gradient-to-r from-[#f14f3e] to-[#fab768] bg-clip-text text-transparent italic">
              {" "}
              Capabilities
            </span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            A fully integrated platform to manage every aspect of your
            healthcare facility, enabling efficient and streamlined operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto md:px-11">
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
