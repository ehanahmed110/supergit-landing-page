import React from "react";

export function ClientLogoNp() {
  const logos = [
    {
      src: "https://www.reinsurancene.ws/wp-content/uploads/2018/10/saudi-re-logo.jpg",
      alt: "CCHI",
      height: "h-12",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSk31zycKH8rbu9i6JT38vu9oO9cCnk2BZ0Q&s",
      alt: "NPHIES",
      height: "h-12",
    },
    {
      src: "https://companieslogo.com/img/orig/8160.SR_BIG-f8260768.png?t=1720244490",
      alt: "Tawuniya",
      height: "h-12",
    },
    {
      src: "https://amin.com.sa/img/IA.png",
      alt: "Bupa Arabia",
      height: "h-12",
    },
     {
      src: "https://www.boat-insurance.biz/assets/images/saudi-arabia-boat-insurance-logo.svg?v=1.1",
      alt: "Bupa Arabia",
      height: "h-14",
    },
    // Add more logos here
  ];

  return (
    <React.Fragment>
      <div className="pt-10 pb-4 bg-white px-4 md:px-10">
        <div className="text-center mb-10" data-aos="fade-down">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Trusted by Insurers <span className="bg-gradient-to-r from-[#f14f3e] to-[#fab768] bg-clip-text text-transparent italic"> Provider</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-4xl mx-auto">
            Our NPHIES-ready solutions are empowering seamless communication
            between insurance companies and healthcare organizations across
            Saudi Arabia.
          </p>
        </div>

        <div
          className="flex items-center justify-center flex-wrap gap-8 "
          data-aos="fade-up"
        >
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className={logo.height}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
