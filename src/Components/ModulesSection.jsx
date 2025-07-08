import React from "react";
import {
  FileBarChart2,
  Hospital,
  FlaskConical,
  ShieldCheck,
  // Capsule,
} from "lucide-react";
import { FaCapsules, FaCut } from "react-icons/fa";

export function ModulesSection() {
  const modules = [
    {
      title: "ERP (Accounts System)",
      icon: <FileBarChart2 className="w-8 h-8 mb-3" />,
      description:
        "Comprehensive account management including assets, liabilities, equity, and invoicing—all in one place.",
    },
    {
      title: "Hospital Information System",
      icon: <Hospital className="w-8 h-8 mb-3" />,
      description:
        "A complete hospital management suite covering patient records, OPD/IPD, staff, billing, and administration.",
    },
    {
      title: "Laboratory Module",
      icon: <FlaskConical className="w-8 h-8 mb-3" />,
      description:
        "Manage lab tests, test appointments, results, and reporting with complete traceability.",
    },
    {
      title: "Nafees Connection (Insurance)",
      icon: <ShieldCheck className="w-8 h-8 mb-3" />,
      description:
        "Centralized system for managing insurance company data, claims processing, and policy integration.",
    },
    {
      title: "Pharmacy Management",
      icon: <FaCapsules className="w-8 h-8 mb-3" />,
      description:
        "Streamlined pharmacy operations: inventory, prescriptions, medicine sales, and vendor handling.",
    },
    {
      title: "Musharaq",
      icon: <FaCut className="w-8 h-8 mb-3 transform rotate-270"/>,
      description:
        "Comprehensive saloon management: appointments, services, stylists, and customer records.",
    },
  ];
  return (
    <React.Fragment>
      <div className="px-6 md:px-6 py-10 bg-gray-50">
        <h2 className="text-4xl font-bold mb-14 text-gray-800 text-center">
          Core Modules
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 text-white">
          {modules.map((module, index) => (
            <li
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-gradient-to-r from-[#f14f3e] to-[#fab768] rounded-2xl py-8 px-4 shadow-lg transform transition-transform duration-700 ease-in-out hover:scale-105 hover:shadow-2xl hover:-translate-y-1 text-center"
            >
              <div className="flex justify-center mb-4">{module.icon}</div>
              <h1 className="text-lg font-semibold mb-2">{module.title}</h1>
              <p className="text-sm text-white opacity-90">
                {module.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}
