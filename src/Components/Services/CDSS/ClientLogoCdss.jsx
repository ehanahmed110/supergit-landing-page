import React from "react";

export function ClientLogoCdss() {
  const logos = [
    {
      src: "https://www.rasmal.com/wp-content/uploads/2023/11/17.Modern-Pharmaceutical-Company-MPC-1024x512.webp",
      alt: "Cleveland Clinic",
      height: "h-18",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCsbnjDGHf7OA1kyMi4J4uku5zLsjtK3VCMw&s",
      alt: "King Saud University Hospital",
      height: "h-18",
    },
    {
      src: "https://www.eyeofriyadh.com/directory/images/2023/01/346f0a0374a03.jpg",
      alt: "SEHA UAE",
      height: "h-18",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCsbnjDGHf7OA1kyMi4J4uku5zLsjtK3VCMw&s",
      alt: "Hamad Medical Corporation",
      height: "h-18",
    },
    {
      src: "https://www.dallah-hospital.com/images/ShareLogo.jpg",
      alt: "Hamad Medical Corporation",
      height: "h-18",
    },
  ];

  return (
    <React.Fragment>
      <div className="pt-10 bg-white px-4 md:px-10">
        <div className="text-center mb-10" data-aos="fade-down">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Trusted by <span className="bg-gradient-to-r from-[#f14f3e] to-[#fab768] bg-clip-text text-transparent italic"> Clinics</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            SuperGITSA CDSS is used by healthcare institutions across the region
            to power smarter, faster clinical decisions.
          </p>
        </div>

        <div
          className="flex items-center justify-center flex-wrap gap-6"
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
