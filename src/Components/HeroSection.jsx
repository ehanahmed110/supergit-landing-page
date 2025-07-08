import React from "react";
import { ShareButton } from "../Shared/ShareButton";

export function HeroSection() {
  return (
    <React.Fragment>
      {/* simple gradient */}
      <div className="min-h-screen bg-gradient-to-r from-[#f14f3e] to-[#fab768] flex flex-col items-center justify-center text-center text-white text-4xl font-bold">
       {/* for animation gradiant */}
       {/* <div
  className="min-h-screen bg-[url('https://supergitsa.com/images/erp.webp')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center text-white text-4xl font-bold"
> */}
       {/* <div className="min-h-screen bg-gradient-to-r from-[#f14f3e] via-[#ff7e5f] to-[#fab768] animate-gradient-x bg-[length:200%_200%] flex flex-col items-center justify-center text-center text-white text-4xl font-bold"> */}
        <h1
          data-aos="fade-down"
          data-aos-delay="100"
          className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-[0_10px_4px_rgba(0,0,0,0.35)]"
        >
          Welcome to <span className="text-yellow-200 italic">Supergit</span>
        </h1>
        <h2
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-2xl md:text-3xl font-semibold mb-4"
        >
          Your All-in-One Financial Management Suite
        </h2>

        <p
          data-aos="zoom-in"
          data-aos-delay="500"
          className="text-lg md:text-xl max-w-3xl mb-6"
        >
          Supergit simplifies your accounting, payroll, invoicing, reporting,
          and more — all in one intuitive platform built for modern businesses.
        </p>
        <div
          data-aos="fade-up"
          data-aos-delay="700"
          className="flex flex-wrap justify-center gap-4 mt-6 text-lg"
        >
          {/* <div>
            <ShareButton label="Get Started" className="!px-6 !py-3 !bg-white"/>
          </div>
          <div>
            <ShareButton label="See Demo" className="!px-6 !py-3 !bg-white"/>
          </div> */}

          <button className="px-5 py-2 font-semibold rounded-lg text-[#fab768] bg-white hover:bg-none hover:shadow-none border border-[#fab768]  hover:border-white shadow transition-transform duration-300 cursor-pointer ">
            Get Started
          </button>
          <button className="px-4 py-2 bg-transparent border border-white font-semibold rounded-lg hover:bg-white hover:text-[#f14f3e] transition cursor-pointer">
            See Demo
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
