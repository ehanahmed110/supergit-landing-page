import React from "react";

export function Testominal() {
  const testimonials = [
    {
      name: "Dr. Ali Ahmad",
      company: "Al Shifa Hospital",
      feedback:
        "SuperGIT’s HIS transformed our operations — from clinical documentation to claims. Everything is now digital, fast, and compliant.",
    },
    {
      name: "Dr. Fawzia Kareem",
      company: "Al Noor Medical Complex",
      feedback:
        "The HIS platform is intuitive and complete. It streamlined our outpatient flow, lab reporting, and even pharmacy stock management.",
    },
    {
      name: "Muhammad Saeed",
      company: "Healing Touch Clinics",
      feedback:
        "Patient data is now centralized and accessible. Doctors love the e-prescriptions and our claim approval rate improved drastically.",
    },
  ];

  return (
    <React.Fragment>
      <div className="bg-white py-10 px-4 md:px-20 ">
        <div className="text-center mb-10 " data-aos="fade-down">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our HIS <span className="bg-gradient-to-r from-[#f14f3e] to-[#fab768] bg-clip-text text-transparent italic">Clients Say</span> 
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Leading healthcare providers trust Super GITSA for digital health transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3  gap-4 ">
          {testimonials.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 200}`}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition border border-gray-100"
            >
              <p className="text-gray-700 text-sm mb-4 leading-relaxed italic">
                “{item.feedback}”
              </p>
              <h4 className="text-base font-semibold text-[#f14f3e]">
                {item.name}
              </h4>
              <span className="text-sm text-gray-500">{item.company}</span>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
