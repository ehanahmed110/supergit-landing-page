import React from "react";

export function BookDemo() {
  return (
    <React.Fragment>
      <div className="fixed bottom-4 right-18 translate-x-1/2 md:hidden z-50">
        <button
          href="/contact"
          className="bg-gradient-to-r from-[#f14f3e] to-[#fab768] text-white px-6 py-2 rounded-full shadow-md"
        >
          Book Demo
        </button>
      </div>
    </React.Fragment>
  );
}
