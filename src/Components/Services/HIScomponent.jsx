import React from "react";
import {
  FaNotesMedical, 
  FaFileInvoiceDollar, 
  FaCogs, 
  FaMobileAlt, 
} from "react-icons/fa";

export function HIScomponent() {
  const features = [
    {
      title: "Patient Management",
      desc: "Inpatient and outpatient care, appointment scheduling, and medical records.",
      icon: <FaNotesMedical className="text-3xl text-[#f14f3e]" />,
    },
    {
      title: "Financial Management",
      desc: "Billing, revenue cycle management, and financial reporting.",
      icon: <FaFileInvoiceDollar className="text-3xl text-[#f14f3e]" />,
    },
    {
      title: "Operational Efficiency",
      desc: "Supply chain and inventory management, and human resource management.",
      icon: <FaCogs className="text-3xl text-[#f14f3e]" />,
    },
    {
      title: "Enhanced Patient Experience",
      desc: "Mobile applications, teleconsultations, and home healthcare services.",
      icon: <FaMobileAlt className="text-3xl text-[#f14f3e]" />,
    },
  ];

  return (
    <React.Fragment>
      <div className="w-full">
        {/* ---------------------- Banner Section ------------------*/}
        <div
          className="relative h-[300px] md:h-[400px] w-full bg-[length:100%_100%] bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://supergitsa.com/images/his.webp')",
          }}
          data-aos="zooom-in"
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-2">
              Hospital Information{" "}
              <span className="bg-gradient-to-r from-[#f14f3e] to-[#fab768] bg-clip-text text-transparent italic">
                System
              </span>
            </h2>
            <p className="text-base md:text-lg max-w-2xl">
              Digital transformation for hospitals with streamlined, smart
              tools.
            </p>
          </div>
        </div>

        {/* -----------Heading + Features Section ------------------*/}
        <div className="px-4 md:px-10 py-12">
          <div
            className="text-center max-w-3xl mx-auto mb-10"
            data-aos="fade-down"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
              Core HIS <span className="bg-gradient-to-r from-[#f14f3e] to-[#fab768] bg-clip-text text-transparent italic"> Capabilities</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              A fully integrated platform to manage every aspect of your healthcare facility, enabling efficient and streamlined operations.
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
      </div>
    </React.Fragment>
  );
}
