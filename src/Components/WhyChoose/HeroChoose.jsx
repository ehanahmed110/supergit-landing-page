import React from "react";

export function HeroChoose() {
  return (
    <React.Fragment>
      <div className="min-h-screen relative bg-[url('/images/why-bg.jpg')] bg-center bg-cover">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-white text-center py-24 px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Why Choose <span className="text-[#f14f3e]">Supergit</span>?
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Empowering hospitals with smart, scalable, and Saudi-aligned
            solutions.
          </p>
        </div>
      </div>
      <div className="text-center bg-gradient-to-r from-[#f14f3e] to-[#fab768] text-white py-12 px-4 mt-16 rounded-xl max-w-4xl mx-auto shadow-lg">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Transform Your Hospital?
        </h2>
        <p className="mb-6">
          Schedule a free demo and see how Supergit can elevate your operations.
        </p>
        <button className="bg-white text-[#f14f3e] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
          Book a Demo
        </button>
      </div>
    </React.Fragment>
  );
}
