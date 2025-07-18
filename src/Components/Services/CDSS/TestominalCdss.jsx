import React from "react";

export function TestominalCdss() {
  const testimonials = [
    {
      name: "Dr. Amina Al-Faraj",
      org: "Al Hakeem Clinics",
      feedback:
        "SuperGITSA CDSS has drastically reduced our diagnostic errors. Our clinicians now have real-time alerts and evidence-based suggestions at their fingertips.",
    },
    {
      name: "Prof. Ibrahim Nasser",
      org: "King Fahad Medical City",
      feedback:
        "With CDSS integration, we improved care outcomes by 22% and shortened patient wait times thanks to early alerts and AI-powered insights.",
    },
    {
      name: "Noura Al-Qahtani",
      org: "MediPharma Rx",
      feedback:
        "The automated drug interaction warnings have made our pharmacy services safer and more efficient. Our team depends on CDSS daily.",
    },
  ];
  return (
    <React.Fragment>
      <div className="bg-white py-10 px-4 md:px-20">
        <div className="text-center mb-10" data-aos="fade-down">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            What Healthcare <span className="bg-gradient-to-r from-[#f14f3e] to-[#fab768] bg-clip-text text-transparent italic"> Experts Say </span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Hear from medical professionals who rely on SuperGITSA’s CDSS to
            improve diagnostics and care quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 200}`}
              className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-xl transition"
            >
              <p className="text-gray-700 text-sm mb-4">"{item.feedback}"</p>
              <h4 className="text-base font-semibold text-[#f14f3e]">
                {item.name}
              </h4>
              <span className="text-sm text-gray-500">{item.org}</span>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
