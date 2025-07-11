import React from "react";
import {
  FaShieldAlt,
  FaCogs,
  FaHeadset,
  FaBrain,
  FaHospital,
} from "react-icons/fa";
import CountUp from "react-countup";

export function CardsChoose() {
  const features = [
    {
      icon: <FaShieldAlt className="text-3xl text-[#f14f3e]" />,
      title: "Data Security & Compliance",
      desc: "Built to meet strict NHIC and NPHIES regulations, SuperGit ensures your hospital data is always protected with advanced encryption and full compliance with Saudi health data standards.",
    },
    {
      icon: <FaCogs className="text-3xl text-[#f14f3e]" />,
      title: "Modular & Scalable",
      desc: "SuperGit is designed to grow with you. Whether you're a small clinic or a large multi-specialty hospital, add only the modules you need now and expand seamlessly as your needs evolve.",
    },
    {
      icon: <FaHeadset className="text-3xl text-[#f14f3e]" />,
      title: "24/7 Support",
      desc: "Our dedicated healthcare IT support team is available round the clock to assist you — ensuring minimal downtime and uninterrupted care delivery across all departments.",
    },
    {
      icon: <FaBrain className="text-3xl text-[#f14f3e]" />,
      title: "AI-powered Insights",
      desc: "Leverage intelligent analytics to make faster, evidence-based clinical and operational decisions — boosting patient outcomes, efficiency, and financial performance.",
    },
  ];
  const stats = [
    { label: "Hospitals Onboarded", value: 20 },
    { label: "Claim Approval Rate", value: 95, suffix: "%" },
    { label: "Billing Speed Increase", value: 50, suffix: "%" },
    { label: "24/7 Support", value: 100, suffix: "%" },
  ];

  return (
    <React.Fragment>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {features.map((item, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition"
          >
            <div>{item.icon}</div>
            <div>
              <h4 className="text-lg font-semibold mb-1 text-gray-800">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-16">
        {stats.map((stat, i) => (
          <div
            data-aos="zoom-in"
            data-aos-delay={i * 100}
            key={i}
            className="p-6 bg-[#fef2f2] rounded-lg shadow-md "
          >
            <h3 className="text-3xl font-bold bg-gradient-to-r from-[#f14f3e] to-[#fab768] bg-clip-text text-transparent">
              <CountUp
                end={stat.value}
                duration={2}
                suffix={stat.suffix || ""}
              />
            </h3>
            <p className="mt-2 text-gray-700 text-sm font-semibold">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

     
    </React.Fragment>
  );
}
