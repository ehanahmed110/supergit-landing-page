import React from "react";
import { ShareButton } from "../Shared/ShareButton";

export function HeroSection() {
  return (
    <React.Fragment>
      <div className="min-h-screen bg-gradient-to-r from-[#f14f3e] to-[#fab768] flex flex-col items-center justify-center text-center text-white text-4xl font-bold">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Welcome to <span className="text-yellow-300">Supergit</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Your All-in-One Financial Management Suite
        </h2>

        <p className="text-lg md:text-xl max-w-3xl mb-6">
          Supergit simplifies your accounting, payroll, invoicing, reporting,
          and more — all in one intuitive platform built for modern businesses.
        </p>
        <div className="flex gap-3 mt-4 text-xl">
          {/* <div>
            <ShareButton label="Get Started" className="!px-6 !py-3 !bg-white"/>
          </div>
          <div>
            <ShareButton label="See Demo" className="!px-6 !py-3 !bg-white"/>
          </div> */}

          <button className="px-4 py-2 bg-white border border-transparent hover:border-white hover:bg-transparent hover:text-white text-[#f14f3e] font-semibold rounded-lg transition cursor-pointer">
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
