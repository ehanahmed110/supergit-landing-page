import React from "react";

export function HEROHis() {
  return (
    <React.Fragment>
      <div
        className="relative h-[300px] md:min-h-[70vh] w-full bg-[length:100%_100%] bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://supergitsa.com/images/his.webp')",
        }}
        data-aos="zooom-in"
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-2">
            Hospital Information{" "}
            <span className="bg-gradient-to-r from-[#f14f3e] to-[#fab768] bg-clip-text text-transparent italic">
              System
            </span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl">
            Digital transformation for hospitals with streamlined, smart tools.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
