import React from "react";
import {
  FaUserPlus,
  FaCogs,
  FaFileInvoice,
  FaTachometerAlt,
  FaChartLine,
} from "react-icons/fa";

  const steps = [
    {
      icon: <FaUserPlus className="text-2xl text-[#fab768]" />,
      title: "1. Create Your Account",
      description: "Register your business and setup your organization’s profile and users.",
    },
    {
      icon: <FaCogs className="text-2xl text-[#fab768]" />,
      title: "2. Configure Modules",
      description: "Set up accounting structure, payroll, user roles, and system preferences.",
    },
    {
      icon: <FaFileInvoice className="text-2xl text-[#fab768]" />,
      title: "3. Add Financial Data",
      description: "Start recording invoices, purchases, expenses, and journal entries easily.",
    },
    {
      icon: <FaTachometerAlt className="text-2xl text-[#fab768]" />,
      title: "4. Monitor & Manage",
      description: "Track everything in real-time from one powerful dashboard.",
    },
    {
      icon: <FaChartLine className="text-2xl text-[#fab768]" />,
      title: "5. Generate Reports",
      description: "Download detailed reports to stay compliant and informed.",
    },
  ];
  
export function HowWorksSection() {
  return (
    <React.Fragment>
     <div className="min-h-screen px-10 py-20 bg-white">
        <h2
          className="text-4xl font-bold text-center mb-6 text-gray-900"
          data-aos="fade-down"
        >
          How{" "}
          <span className="bg-gradient-to-r from-[#f14f3e] to-[#fab768] bg-clip-text text-transparent italic">
            Supergit
          </span>{" "}
          Works
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Start managing your business finances in just a few simple steps.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-500 ease-in-out text-center"
            >
              <div className="mb-4 flex justify-center">{step.icon}</div>
              <h4 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h4>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
