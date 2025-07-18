import React from "react";

import { CTAButton } from "../CTAButton";
export function CTACdss() {
  return (
    <React.Fragment>
      <div className="bg-gradient-to-r from-[#f14f3e] to-[#fab768] py-14 px-4 md:px-10 text-white text-center">
        <h2
          className="text-3xl md:text-4xl font-bold mb-4"
          data-aos="fade-down"
        >
          Ready to Enhance Clinical Accuracy with AI?
        </h2>
        <p
          className="text-base md:text-lg max-w-2xl mx-auto mb-6"
          data-aos="fade-up"
        >
          Experience how SuperGITSA CDSS can help your providers make faster,
          smarter, and safer decisions at the point of care.
        </p>
      <CTAButton label='Book CDSS Demo Now'/>
      </div>
    </React.Fragment>
  );
}
