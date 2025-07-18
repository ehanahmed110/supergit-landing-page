import React from "react";

export function TestominalNp() {
  const testimonials = [
    {
      name: "Mohammed Al-Rashid",
      company: "Takaful Cooperative Insurance",
      feedback:
        "Thanks to Super GITSA’s NPHIES integration, we’ve reduced claim processing time by over 40% — with full traceability and compliance.",
    },
    {
      name: "Dr. Reem Al-Fahad",
      company: "Al Noor Hospital Group",
      feedback:
        "The eligibility checks and real-time claim status have transformed our patient experience. Zero bottlenecks, full transparency.",
    },
    {
      name: "Sami Al-Suwailem",
      company: "MediCare Health Insurance",
      feedback:
        "Super GITSA’s automated claim workflows made our operations leaner and faster. Their NPHIES support is simply unmatched.",
    },
  ];

  return (
    <React.Fragment>
      <div className="bg-white py-10 px-4 md:px-20">
        <div className="text-center mb-8" data-aos="fade-down">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            What Our NPHIES <span className="bg-gradient-to-r from-[#f14f3e] to-[#fab768] bg-clip-text text-transparent italic">Clients Say</span> 
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            Hear from insurance firms and healthcare providers who optimized
            their workflows with Super GITSA's NPHIES integration.
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
              <span className="text-sm text-gray-500">{item.company}</span>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
