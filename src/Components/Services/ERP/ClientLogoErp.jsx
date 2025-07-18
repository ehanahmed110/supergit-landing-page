import React from "react";

export function ClientLogoErp() {
  const logos = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr2HRswwtbdtu4_-ilpB6UTuN0rsUqYc7o2w&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQrVLjoaIUnEGy4a6JtZ3mvZHtLv3yKLbTZA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwbhgTdXw_Oah6F7NTjH5r-jva-97JZm5CbA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2rSyzYpa3WkVvQW1swTeTDHaSnGdq-5ZjhQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXfR_q9-2EirHvgdj_ShKoZ3qU3AVq_Apzmg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4WjqQOchhs5XDZNcFZ_Cm-i-I7qmeP3Nj_w&s",
  ];

  return (
    <React.Fragment>
      <div className="pt-14 bg-white px-4 md:px-10">
        <div className="text-center mb-10" data-aos="fade-down">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Trusted by Industry <span className="bg-gradient-to-r from-[#f14f3e] to-[#fab768] bg-clip-text text-transparent italic"> Leaders</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Our ERP software is empowering organizations across the healthcare
            and enterprise sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center justify-center max-w-6xl mx-auto mb-0">
          {logos.map((src, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={`${index * 100}`}
            >
              <img
                src={src}
                alt={`Client ${index + 1}`}
                className="w-full h-[18] "
              />
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
