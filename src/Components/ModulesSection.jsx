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
      icon: <FileBarChart2 className="w-6 h-6 " />,
      description:
        "Streamline your operations with an integrated ERP system for finance, HR, procurement, and more..",
    },
    {
      title: "Hospital Information System",
      icon: <Hospital className="w-6 h-6 " />,
      description:
        "A comprehensive solution for managing all aspects of your hospital, including patient records, appointments, billing, and more..",
    },
    {
      title: "Laboratory Module",
      icon: <FlaskConical className="w-6 h-6 " />,
      description:
        "Manage lab tests, test appointments, results, and reporting with complete traceability.",
    },
    {
      title: "NPHIES Connect",
      icon: <ShieldCheck className="w-6 h-6 " />,
      description:
        "Seamlessly integrate with NPHIES for efficient claims processing and compliance with CCHI standards.",
    },
    {
      title: "Pharmacy Management",
      icon: <FaCapsules className="w-6 h-6 " />,
      description:
        "Streamlined pharmacy operations: inventory, prescriptions, medicine sales, and vendor handling.",
    },
    {
      title: "Musharaq",
      icon: <FaCut className="w-6 h-6 transform rotate-270" />,
      description:
        "Comprehensive saloon management: appointments, services, stylists, and customer records.",
    },
  ];
  return (
    <React.Fragment>
      <div className="px-4 md:px-20  pt-10 ">
        <h2 className="text-4xl md:text-5xl font-bold mb-2 text-center">
          Core{" "}
          <span className="bg-gradient-to-r from-[#f14f3e] to-[#fab768] bg-clip-text text-transparent italic">
            Modules
          </span>
        </h2>
        <p
          className="text-center text-lg text-gray-600 mb-8 mt-6 max-w-4xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Discover the powerful modules at the heart of our system — each
          designed to streamline operations, enhance care delivery, and ensure
          full compliance across your healthcare organization.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 text-white">
          {modules.map((module, index) => (
            <li
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-gradient-to-r from-[#f14f3e] to-[#fab768] rounded-2xl py-6 px-4 shadow-lg transform transition-transform duration-700 ease-in-out hover:scale-105 hover:shadow-2xl hover:-translate-y-1 text-center"
            >
              <div className="flex justify-center mb-2">{module.icon}</div>
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
