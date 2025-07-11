import React from "react";
import {
  Stethoscope,
  Lightbulb,
  DollarSign,
  Target,
  Activity,
  ServerCog,
  ShieldCheck,
  BrainCircuit,
} from "lucide-react";

export function CardsAbout() {
  const cards = [
    {
      title: "Healthcare Technology Expertise",
      desc: "From appointment scheduling to patient discharge, our Hospital Information System (HIS) handles complete clinical workflows, enabling better care coordination across departments.",
      icon: <Stethoscope className="w-10 h-10 text-[#f14f3e] mb-4" />,
    },
    {
      title: "Insurance-Ready & NPHIES Compliant",
      desc: "With deep integration into Saudi’s NPHIES platform, we simplify eligibility checks and automate claims, minimizing denials and ensuring NHIC compliance.",
      icon: <ShieldCheck className="w-10 h-10 text-[#f14f3e] mb-4" />,
    },
    {
      title: "ERP for Financial & Resource Control",
      desc: "Our ERP module brings your HR, inventory, and finance under one dashboard—offering real-time visibility and enabling informed financial decisions.",
      icon: <ServerCog className="w-10 h-10 text-[#f14f3e] mb-4" />,
    },
    {
      title: "Clinical Intelligence with CDSS",
      desc: "Make smarter clinical decisions with our CDSS — offering AI-based alerts, treatment suggestions, and guideline adherence at the point of care.",
      icon: <BrainCircuit className="w-10 h-10 text-[#f14f3e] mb-4" />,
    },
    {
      title: "Unique & Innovative Products",
      desc: "Modules like CDSS and NPHIES integration offer a competitive edge, helping hospitals reduce claim rejections and improve operational outcomes.",
      icon: <Lightbulb className="w-10 h-10 text-[#f14f3e] mb-4" />,
    },
    {
      title: "Cost-Effective Operations",
      desc: "Our modular approach reduces cost by allowing you to deploy only what’s needed — with options to scale ERP or HIS features as you grow.",
      icon: <DollarSign className="w-10 h-10 text-[#f14f3e] mb-4" />,
    },
    {
      title: "Vision 2030 Aligned",
      desc: "We support the Kingdom’s digital healthcare transformation goals through scalable, interoperable, and AI-driven hospital systems.",
      icon: <Target className="w-10 h-10 text-[#f14f3e] mb-4" />,
    },
    {
      title: "Scalable Architecture",
      desc: "From clinics to multisite hospitals, our architecture lets you scale HIS, ERP, and more without disrupting current operations.",
      icon: <Activity className="w-10 h-10 text-[#f14f3e] mb-4" />,
    },
  ];
  return (
    <React.Fragment>
      <div className="bg-white py-16 px-4 md:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-black text-4xl md:text-5xl font-bold mb-10">
            About{" "}
            <span className="bg-gradient-to-r from-[#f14f3e] to-[#fab768] bg-clip-text text-transparent">
              Us
            </span>
          </h1>
          {/* <h2 className="text-xl font-semibold text-gray-700 mb-4">
            At Super GIT, we are transforming the healthcare landscape in Saudi
            Arabia by delivering cutting-edge technology solutions.
          </h2> */}
          <p data-aos="fade-down" class="text-gray-600 max-w-5xl mx-auto text-center space-y-3 mb-10">
            <span>
              SuperGit is a modern, AI-enabled healthcare platform designed for
              the digital transformation of hospitals and clinics in Saudi
              Arabia.
            </span>
            <span>
              Each module — <strong>HIS</strong>, <strong>ERP</strong>,{" "}
              <strong>NPHIES</strong>, and <strong>CDSS</strong> — is built to
              be interoperable, scalable, and compliant with local regulations.
            </span>
            <span>
              From patient onboarding to claims automation, it simplifies every
              step of the clinical and operational workflow.
            </span>
            <span>
              Whether you're a small clinic or a multi-site hospital, SuperGit
              adapts to your needs — helping you deliver safer, smarter, and
              more efficient care.
            </span>
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
              className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-tr from-[#f14f3e] to-[#fab768] p-[2px] rounded-full">
                  <div className="bg-white p-3 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed text-center">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
