import React from "react";
import { Stethoscope, Lightbulb, DollarSign, Target } from "lucide-react";

export function CardsAbout() {
  const cards = [
    {
      title: "Healthcare Technology Expertise",
      desc: "We specialize in the insurance sector, understanding the unique challenges providers face. We deliver solutions to address these challenges effectively.",
      icon: <Stethoscope className="w-10 h-10 text-[#f14f3e] mb-4" />,
    },
    {
      title: "Unique & Innovative Products",
      desc: "Our Clinical Decision Support System reduces rejection rates, ensuring smoother claims processing and improved revenue cycles.",
      icon: <Lightbulb className="w-10 h-10 text-[#f14f3e] mb-4" />,
    },
    {
      title: "Cost-Effective Operations",
      desc: "We help providers cut down operational costs while enhancing efficiency and patient satisfaction.",
      icon: <DollarSign className="w-10 h-10 text-[#f14f3e] mb-4" />,
    },
    {
      title: "Alignment with Vision 2030",
      desc: "Our solutions are designed to support Saudi Arabia’s national strategy for digital transformation in healthcare.",
      icon: <Target className="w-10 h-10 text-[#f14f3e] mb-4" />,
    },
  ];
  return (
    <React.Fragment>
      <div className="bg-white py-16 px-4 md:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-black text-4xl md:text-5xl font-bold mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-[#f14f3e] to-[#fab768] bg-clip-text text-transparent">
              Us
            </span>
          </h1>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            At Super GIT, we are transforming the healthcare landscape in Saudi
            Arabia by delivering cutting-edge technology solutions.
          </h2>
          <p
            data-aos="zoom-in"
            data-aos-delay="500"
            className="text-center opacity-90"
          >
            Founded as part of Vision 2030, our mission is to digitalize
            healthcare operations, improve efficiency, and enhance patient care,
            particularly for those requiring acute and critical care in hospital
            settings.{" "}
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {cards.map((card,index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 200}`}
              className="bg-white rounded-xl p-6 text-center shadow-md border border-gray-200 hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-center">{card.icon}</div>
              <h3 className="text-lg font-bold text-[#f14f3e] mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
