import React from "react";

export function ClientLogo() {
  const logos = [
    "https://images.seeklogo.com/logo-png/23/2/ministry-of-health-saudi-arabia-logo-png_seeklogo-238647.png",
    "https://images.seeklogo.com/logo-png/39/2/saudi-arabia-logo-png_seeklogo-398267.png",
    "https://images.seeklogo.com/logo-png/25/1/national-day-84-logo-png_seeklogo-255969.png",
    "https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2020/10/21/2318246-635985877.jpg?itok=wIKcFmgZ",
    "https://w7.pngwing.com/pngs/796/586/png-transparent-riyadh-military-hospital-king-faisal-specialist-hospital-and-research-centre-medicine-military.png"
  ]
  return (
    <React.Fragment>
      <div className="pt-10 pb-4">
        <div className="text-center mb-10" data-aos="fade-down">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Trusted by HealthCare <span className="bg-gradient-to-r from-[#f14f3e] to-[#fab768] bg-clip-text text-transparent italic">Leaders</span> 
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            Hospitals and healthcare institutions rely on Super GITSA HIS for
            smarter workflows, better care, and regulatory compliance.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-2 items-center justify-center max-w-3xl mx-auto mb-0">
          {logos.map((src,index)=>(
              <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={`${index * 100}`}
            >
              <img
                src={src}
                alt={`Client ${index + 1}`}
                className=" h-18 "
              />
            </div>
          ))}
        </div>

      </div>
    </React.Fragment>
  );
}
