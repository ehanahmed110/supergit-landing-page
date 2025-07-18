import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export function ChooseDemo() {
  return (
    <React.Fragment>
      <section className="py-10 px-4 md:px-20  text-center">
        <h2 className="text-3xl  md:text-4xl font-bold text-gray-800 mb-6">
          What You’ll Learn in{" "}
          <span className="bg-gradient-to-r from-[#f14f3e] to-[#fab768] bg-clip-text text-transparent italic">
            the Demo
          </span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6  text-left">
          {[
            "How to manage patient journeys in SuperGit HIS.",
            "Live claim automation using NPHIES API.",
            "AI alerts in clinical workflows via CDSS.",
            "Centralized finance & HR via ERP integration.",
            "User-friendly UI across all modules.",
            "Saudi Vision 2030 aligned compliance features.",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 shadow hover:shadow-md transition flex"
            > <FaCheckCircle className="text-[#f14f3e] text-lg inline mr-2 mt-1" />
              <span className="text-[#f14f3e] font-semibold">
               
              </span>{" "}
              {item}
            </div>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
}
