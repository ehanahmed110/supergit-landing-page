import React from "react";
import { FaCalendarCheck } from "react-icons/fa";
import { CTAButton } from "../CTAButton";

export function CTAErp() {
  return (
    <React.Fragment>
      <div className="bg-gradient-to-r from-[#f14f3e] to-[#fab768]  py-14 px-4 md:px-10 text-white text-center">
        <h2
          className="text-3xl md:text-4xl font-bold mb-4"
          data-aos="fade-down"
        >
          Ready to Digitize Your Entire Operation?
        </h2>
        <p
          className="text-base md:text-lg max-w-3xl mx-auto mb-6"
          data-aos="fade-up"
        >
          Experience how Super GITSA ERP can streamline your business in real
          time — from finance to HR to supply chain.
        </p>
         <CTAButton label='Book ERP Demo Now'/>
      </div>
    </React.Fragment>
  );
}
