import React from "react";
import {
  FaCheckCircle,
  FaLock,
  FaCogs,
  FaClock,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

const features = [
  {
    icon: <FaCogs className="text-orange-500 text-2xl mt-1" />,
    title: "Powerful Modules",
    description:
      "Complete coverage from accounts, invoices, payroll to reports – all in one system.",
  },
  {
    icon: <FaLock className="text-orange-500 text-2xl mt-1" />,
    title: "Secure & Reliable",
    description:
      "Your data is safe with enterprise-level encryption and regular backups.",
  },
  {
    icon: <FaClock className="text-orange-500 text-2xl mt-1" />,
    title: "Real-Time Operations",
    description: "All transactions and reports update instantly — no delay.",
  },
  {
    icon: <FaUsers className="text-orange-500 text-2xl mt-1" />,
    title: "Multi-User Support",
    description:
      "Invite your team with role-based access control and smooth collaboration.",
  },
  {
    icon: <FaChartLine className="text-orange-500 text-2xl mt-1" />,
    title: "Insightful Reports",
    description:
      "Get dynamic charts, dashboards, and financial insights at your fingertips.",
  },
  {
    icon: <FaCheckCircle className="text-orange-500 text-2xl mt-1" />,
    title: "Easy to Use",
    description:
      "No complex training needed. Clean and user-friendly interface.",
  },
];

export function WhyChooseSection() {
  return (
    <React.Fragment>
      <div className=" px-10 py-24 bg-white mb-0">
        <h2
          data-aos="fade-down"
          data-aos-delay="100"
          className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900"
        >
          Why Choose <span className="bg-gradient-to-r from-[#f14f3e] to-[#fab768] bg-clip-text text-transparent italic">
            Supergit
          </span>
          ?
        </h2>
        <p
          data-aos="zoom-in"
          data-aos-delay="500"
          className="text-center text-lg mb-12 text-gray-600"
        >
          We simplify your financial operations,grow Up and empower your business with
          intuitive, and reliable tools.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="flex items-start space-x-4 transition-transform "
            >
              {feature.icon}
              <div>
                <h4 className="text-xl font-semibold mb-1">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
