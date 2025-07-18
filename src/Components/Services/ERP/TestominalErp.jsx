import React from "react";

export function TestominalErp() {
  const testimonials = [
    {
      name: "Dr. Ahmed Al-Sulami",
      company: "Al-Rayan Hospitals Group",
      feedback:
        "Implementing the ERP system from Super GITSA was a turning point. Our financial reporting, HR, and inventory are now completely automated and audit-ready.",
    },
    {
      name: "Sarah Bin Faisal",
      company: "HealthPro Solutions",
      feedback:
        "The dashboards and analytics have given our leadership team clarity we never had before. Seamless experience and outstanding support.",
    },
    {
      name: "Khalid Mansoor",
      company: "Al Nahda Medical",
      feedback:
        "From procurement to payroll, everything now happens in real-time. We saved countless hours of manual work thanks to Super GITSA ERP.",
    },
  ];

  return (
    <React.Fragment>
      <div className="bg-white py-14 px-4 md:px-20">
        <div className="text-center mb-10" data-aos="fade-down">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            What Our ERP <span className="bg-gradient-to-r from-[#f14f3e] to-[#fab768] bg-clip-text text-transparent italic">Clients Say</span> 
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Hear from leading organizations that trusted us to modernize their
            business operations.
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
