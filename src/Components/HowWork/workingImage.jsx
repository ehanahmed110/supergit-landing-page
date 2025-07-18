import React from "react";
import { CheckCircle } from "lucide-react";

export function WorkingImage() {
  const modules = [
    {
      title: "HIS – Hospital Information System",
      description:
        "Our HIS module streamlines patient records, appointments, billing, and administration across departments.",
      image: "https://supergitsa.com/images/his.webp",
      benefits: [
        "Centralized patient data",
        "Improved department communication",
        "Fast and secure access to records",
      ],
    },
    {
      title: "ERP – Enterprise Resource Planning",
      description:
        "Manage hospital finances, HR, and inventory efficiently with our custom-built healthcare ERP.",
      image: "https://supergitsa.com/images/erp.webp",
      benefits: [
        "Real-time resource tracking",
        "Integrated finance and HR modules",
        "Boosted operational efficiency",
      ],
    },
    {
      title: "NPHIES Integration",
      description:
        "Seamlessly integrate with Saudi Arabia’s national platform NPHIES for secure insurance and e-claim processing.",
      image: "https://supergitsa.com/images/connect.webp",
      benefits: [
        "Fast eligibility checks",
        "Secure communication with payers",
        "Automated claim submissions",
      ],
    },
    {
      title: "CDSS – Clinical Decision Support System",
      description:
        "Enable doctors to make evidence-based decisions with AI-driven alerts, diagnosis support, and treatment plans.",
      image: "https://supergitsa.com/images/cdss.jpeg",
      benefits: [
        "Improved clinical outcomes",
        "Reduced diagnostic errors",
        "Support for medical guidelines",
      ],
    },
  ];

  return (
    <React.Fragment>
      <div className="bg-white py-10 px-4 md:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 text-gray-800">
            How{" "}
            <span className="bg-gradient-to-r from-[#f14f3e] to-[#fab768] bg-clip-text text-transparent italic">
              SuperGit
            </span>{" "}
            Works
          </h2>
          <p className="text-center text-gray-600 mb-18 max-w-3xl mx-auto">
            Discover how SuperGit’s healthcare modules bring intelligence,
            automation, and ease across every department in your hospital.
          </p>

          <div className="space-y-20">
            {modules.map((mod, i) => (
              <div
                key={i}
                className={`flex flex-col md:flex-row ${
                  i % 2 !== 0 ? "md:flex-row-reverse" : ""
                } items-center gap-10`}
              >
                <div className="w-full md:w-1/2">
                  <img
                    src={mod.image}
                    alt={mod.title}
                    className="w-full h-[250px] md:h-[300px] object-cover rounded-xl shadow-md"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-[#f14f3e] to-[#fab768] text-transparent bg-clip-text">
                    {mod.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{mod.description}</p>
                  <ul className="space-y-2">
                    {mod.benefits.map((benefit, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-gray-600"
                      >
                        <CheckCircle
                          size={18}
                          className="text-[#f14f3e] mt-1"
                        />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
