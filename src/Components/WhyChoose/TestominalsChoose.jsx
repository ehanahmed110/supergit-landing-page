import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import ctoimg from "/src/assets/WhatsApp Image 2025-07-11 at 09.41.46_d2aee101.jpg";
import uzairimg from "/src/assets/WhatsApp Image 2025-07-11 at 09.41.45_23d82ac7.jpg";
import rehmanimg from "/src/assets/WhatsApp Image 2025-07-11 at 09.41.46_4c21ecda.jpg";

export function TestominalsChoose() {
  const testimonials = [
    {
      name: "Dr. Ameen Al-Mutairi",
      title: "CEO, Al Noor Hospital",
      feedback:
        "SuperGit helped us streamline our operations, reduce claim delays, and improved decision-making across all departments. Their HIS module is a game changer for clinical workflows.",
    },
    {
      name: "Sara Khalid",
      title: "IT Director, Riyadh Care",
      feedback:
        "The modular system is exactly what we needed. And their 24/7 support is genuinely responsive and helpful. We started with HIS and added ERP and CDSS as we scaled.",
    },
    {
      name: "Mohammed Al-Qahtani",
      title: "Finance Head, Shifa Medical Complex",
      feedback:
        "With SuperGit's ERP module, we got real-time visibility into HR, inventory, and finance. It brought clarity and control to our daily operations.",
    },
    {
      name: "Dr. Laila Al-Fahad",
      title: "Chief Medical Officer, Medina Healthcare",
      feedback:
        "The CDSS module provides smart recommendations at the point of care. It's helped reduce diagnostic errors and supports evidence-based treatment decisions.",
    },
    {
      name: "Fatima Al-Dossari",
      title: "Insurance Manager, Al Qassim Clinic",
      feedback:
        "NPHIES integration with SuperGit is seamless. Eligibility checks and claim submissions now take seconds, not hours — fully compliant and automated.",
    },
    {
      name: "Eng. Rashid Al-Harbi",
      title: "IT Consultant, Royal City Hospital",
      feedback:
        "We implemented HIS and NPHIES with zero disruption. SuperGit's implementation team was top-notch, and the system scaled as promised.",
    },
  ];



  return (
    <React.Fragment>
      <div className="mb-10">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          What Our Clients{" "}
          <span className="bg-gradient-to-r from-[#f14f3e] to-[#fab768] bg-clip-text text-transparent italic">
            Say
          </span>
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              className="bg-gray-50 border border-transparent rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 relative overflow-hidden"
            >
              <FaQuoteLeft className="absolute top-4 left-4 text-[#f14f3e] text-xl opacity-70" />
              <p className=" mt-3 text-gray-700 italic mb-4 text-sm leading-relaxed">
                "{item.feedback}"
              </p>
              <h4 className="font-semibold text-gray-800">{item.name}</h4>
              <p className="text-sm text-gray-500">{item.title}</p>
            </div>
          ))}
        </div>
      </div>


    </React.Fragment>
  );
}
