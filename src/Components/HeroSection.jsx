import React, { useState, useEffect } from "react";
import { ShareButton } from "../Shared/ShareButton";
import { useNavigate } from "react-router-dom";

export function HeroSection() {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://supergitsa.com/images/bg_1.jpg",
    "https://supergitsa.com/images/bg_2.jpg",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, []);
  return (
    <React.Fragment>
      <div
        className="md:min-h-screen h-[400px] relative bg-no-repeat bg-cover bg-center transition-all duration-1000 flex items-center"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          backgroundSize: "100% 100%",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="w-full px-4 sm:px-6 lg:px-10">
          <div className="  p-6 md:p-10  max-w-2xl">
            <h1
              data-aos="fade-down"
              data-aos-delay="100"
              className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-white mb-4 drop-shadow-[0_10px_4px_rgba(0,0,0,0.35)]"
            >
              Welcome to{" "}
              <span className="text-transparent bg-gradient-to-r from-[#f14f3e] to-[#fab768] bg-clip-text italic">
                SuperGit
              </span>
            </h1>
            <h2
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-lg md:text-2xl lg:text-4xl font-semibold text-white mb-4 capitalize"
            >
              Connecting you with innovative solutions
            </h2>
            <p
              data-aos="zoom-in"
              data-aos-delay="500"
              className="text-sm md:text-lg text-white max-w-2xl mb-6 "
            >
              Discover our cutting-edge products and services that enhance your
              daily life.
            </p>
            <div
              data-aos="fade-up"
              data-aos-delay="700"
              className="flex flex-wrap gap-4 mt-6 text-lg"
            >
              <button className="px-5 py-2 font-semibold rounded-lg text-white bg-gradient-to-r from-[#f14f3e] to-[#fab768] hover:opacity-90 transition duration-300 cursor-pointer">
                Get Started
              </button>
              <button
                onClick={() => navigate("/demo")}
                className="px-4 py-2 border border-[#f14f3e] text-[#f14f3e] font-semibold rounded-lg hover:bg-[#f14f3e] hover:text-white transition cursor-pointer"
              >
                See Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

{
  /* for animation gradiant */
}
{
  /* <div className="min-h-screen bg-gradient-to-r from-[#f14f3e] via-[#ff7e5f] to-[#fab768] animate-gradient-x bg-[length:200%_200%] flex flex-col items-center justify-center text-center text-white text-4xl font-bold"> */
}
// https://supergitsa.com/images/erp.webp
