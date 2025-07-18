import React from "react";
import { FaRegCalendarCheck } from "react-icons/fa";

export function BookDemo() {
  return (
    <React.Fragment>
      <div className="fixed bottom-4 right-8 translate-x-1/2 md:hidden z-50">
        <button
          href="/contact"
          className="bg-gradient-to-r from-[#f14f3e] to-[#fab768] text-white h-14 w-14 rounded-full shadow-md flex justify-center items-center cursor-pointer"
        >
          <FaRegCalendarCheck className="text-2xl " />
        </button>
      </div>
    </React.Fragment>
  );
}
