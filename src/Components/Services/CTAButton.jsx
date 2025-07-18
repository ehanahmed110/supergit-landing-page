import React from "react";
import { FaCalendarCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export function CTAButton({ label }) {
    const navigate = useNavigate()
  return (
    <React.Fragment>
      <button
      onClick={()=>navigate('/bookdemo')}
        data-aos="zoom-in"
        className="bg-white text-[#f14f3e] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition cursor-pointer"
      >
        <FaCalendarCheck className="inline mr-2 mb-1" />
        <span className="">{label}</span>
      </button>
    </React.Fragment>
  );
}
