import React from "react";

export function TestominalDemo() {
      const testimonials = [
    {
      quote:
        "After watching the SuperGit demo, our team realized how much time we were wasting on manual workflows. Within 2 months, our claim rejection rate dropped by 40%!",
      name: "— Operations Head, Private Hospital, Riyadh",
    },
    {
      quote:
        "The live demo helped our leadership visualize real-time clinical decisions powered by AI. We were impressed with how seamlessly SuperGit integrated HIS and CDSS.",
      name: "— Dr. Reem Al-Harbi, Chief Medical Officer, Al Noor Clinics",
    },
  ];
  return (
     <React.Fragment>
      <section className="bg-white pb-10 pt-4 px-4 md:px-20 text-center">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">
          Hear from Our{" "}
          <span className="bg-gradient-to-r from-[#f14f3e] to-[#fab768] bg-clip-text text-transparent italic">
            Clients
          </span>
        </h1>

        <div className="grid md:grid-cols-2 gap-8   ">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-left"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <p className="italic text-gray-700 mb-4">“{item.quote}”</p>
              <h4 className="font-semibold text-[#f14f3e]">{item.name}</h4>
            </div>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
}
