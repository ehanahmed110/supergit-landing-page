import React from "react";

export function CardsDemo() {
  const modules = [
    {
      title: "Hospital Information System (HIS)",
      desc: "Manage patients, appointments, EMR, billing — all from one centralized system.",
      image: "https://supergitsa.com/images/his.webp",
    },
    {
      title: "Enterprise Resource Planning (ERP)",
      desc: "Integrate HR, finance, supply chain & asset management to boost effecieny.",
      image: "https://supergitsa.com/images/erp.webp",
    },
    {
      title: "NPHIES Integration Connect (NPHIES)",
      desc: "Seamlessly exchange data with NHIC, ensure eligibility & claims compliance.",
      image: "https://supergitsa.com/images/connect.webp",
    },
    {
      title: "Clinical Decision Support System (CDSS)",
      desc: "Enable evidence-based care with AI-driven alerts and treatment guidance.",
      image: "https://supergitsa.com/images/cdss.jpeg",
    },
  ];
  return (
    <React.Fragment>
      <section class="bg-white pt-2 pb-6 px-4 md:px-20">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl  font-bold mb-6">Our Core <span className="bg-gradient-to-r from-[#f14f3e] to-[#fab768] bg-clip-text text-transparent italic">Modules</span> </h2>
          <p class="text-gray-600 max-w-5xl mx-auto text-center">
            SuperGit is a powerful, modular digital health platform
            purpose-built to support Saudi Arabia’s Vision 2030. From automating
            insurance workflows through <strong>NPHIES integration</strong>, to
            enabling <strong>AI-powered clinical decision-making</strong> with
            CDSS, and streamlining hospital operations via <strong>HIS</strong>{" "}
            and <strong>ERP</strong> — SuperGit empowers healthcare providers to
            deliver smarter, faster, and more patient-centric care.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {modules.map((mod, index) => (
            <div key={index} class="text-center">
              <img
                src={mod.image}
                alt={mod.title}
                class="rounded-lg shadow mb-4"
              />
              <h3 class="text-xl font-semibold text-gray-800">{mod.title}</h3>
              <p class="text-sm text-gray-600 mt-2">{mod.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
}
