import React from "react";
import { useNavigate } from "react-router-dom";
export function CTAHis() {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="text-center py-12" data-aos="fade-up">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Ready to Modernize Your Hospital?
        </h3>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          Book a demo today and see how SuperGIT HIS streamlines workflows,
          improves patient outcomes, and reduces admin burden.
        </p>
        <button
          onClick={() => navigate("/bookdemo")}
          className="inline-block bg-gradient-to-r from-[#f14f3e] to-[#fab768] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition cursor-pointer"
        >
          Book a Demo
        </button>
      </div>

      
    </React.Fragment>
  );
}
