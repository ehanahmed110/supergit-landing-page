import React from "react";

export function HeroAbout() {
  const Items = [
    {
      title: "EnterPrise Resourse Plaining (ERP)",
      desc: "ERP simplifies your accounting, payroll, invoicing, reporting, and more — all in one intuitive businesses.",
    },
    {
      title: "Hospital Information System (HIS)",
      desc: "HIS to manage every aspect of your healthcare facility, enabling efficient and streamlined operations.",
    },
    {
      title: "NPHIES Connect Integration",
      desc: "Seamlessly integrate with NPHIES for efficient insurance claims processing and ensure compliance with us.",
    },
    {
      title: "Clinical Decesion Support System (CDSS)",
      desc: "Enhance patient care and improve outcomes with our AI-powered decision support system.",
    },
  ];
  return (
    <React.Fragment>
      <div className="min-h-screen relative bg-[url('https://supergitsa.com/images/erp.webp')] bg-no-repeat bg-center bg-[length:100%_100%] flex flex-col items-center justify-center text-center text-white text-4xl font-bold">
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-10 text-white text-center">
          <h1
            data-aos="fade-down"
            data-aos-delay="100"
            className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-[0_10px_4px_rgba(0,0,0,0.35)]"
          >
            About{" "}
            <span className="bg-gradient-to-r from-[#f14f3e] to-[#fab768] bg-clip-text text-transparent italic">
              Supergit
            </span>
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-delay="500"
            className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90 "
          >
            Pioneering digital transformation in Saudi Arabia’s healthcare
            sector with smart, scalable, and efficient solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mt-6">
            {Items.map((item, index) => (
              <div
                data-aos="fade-up"
                data-aos-delay="700"
                key={index}
                className="bg-white/20 backdrop-blur-md rounded-xl p-6 shadow-md hover:scale-105 transition-transform duration-300"
              >
                <h2 className="text-xl font-bold bg-gradient-to-r from-[#f14f3e] to-[#fab768] bg-clip-text text-transparent mb-2">
                  {item.title}
                </h2>
                <p className="text-sm opacity-90">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
  
// https://supergitsa.com/images/bg_2.jpg