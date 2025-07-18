import React from "react";
import myvideo from "../assets/WhatsApp Video 2025-07-08 at 10.49.58_52c4cdbe.mp4";
export function DemoSection() {
  return (
    <React.Fragment>
      <div className="md:min-h-screen px-4 md:px-20 pt-10">
        <h2
          data-aos="fade-down"
          data-aos-delay="100"
          className="text-4xl font-bold  mb-6 text-gray-900"
        >
          Live Demo{" "}
          <span className="bg-gradient-to-r from-[#f14f3e] to-[#fab768] bg-clip-text text-transparent">
            Preview
          </span>
        </h2>
        <p
          data-aos="zoom-in"
          data-aos-delay="500"
          className="text-gray-800 text-lg max-w-2xl mb-10"
        >
          Get a quick glimpse of how Supergit streamlines your financial
          management — from invoices to reports, all in one seamless experience.
        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="w-full rounded hover:scale-[1.01] transition-all duration-500 ease-in-out "
        >
          <video
            src={myvideo}
            autoPlay
            loop
            muted
            controls
            className=" mx-auto rounded md:h-[400px]"
          />
        </div>
      </div>
    </React.Fragment>
  );
}
