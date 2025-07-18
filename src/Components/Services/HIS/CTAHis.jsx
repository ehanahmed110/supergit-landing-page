import React from "react";
import { CTAButton } from "../CTAButton";
export function CTAHis() {

  return (
    <React.Fragment>
      <div className="bg-gradient-to-r from-[#f14f3e] to-[#fab768] py-14 px-4 md:px-10 text-white text-center">
        <h2
          className="text-3xl md:text-4xl font-bold mb-4"
          data-aos="fade-down"
        >
          Ready to Modernize Your Hospital?
        </h2>
        <p
          className="text-base md:text-lg max-w-3xl mx-auto mb-6"
          data-aos="fade-up"
        >
          Book a personalized demo and discover how Super GITSA HIS simplifies
          hospital operations from patient care to billing.
        </p>
         <CTAButton label='Book HIS Demo Now'/>
      </div>
    </React.Fragment>
  );
}
