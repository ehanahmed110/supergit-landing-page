import React from "react";

export function HeroChoose() {
  return (
    <React.Fragment>
      <div className="text-center mb-12">
        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-4xl font-bold text-gray-800"
        >
          Why Choose{" "}
          <span className="bg-gradient-to-r from-[#f14f3e] to-[#fab768] bg-clip-text text-transparent italic">
            {" "}
            SuperGit
          </span>
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-gray-600 mt-4 max-w-2xl mx-auto"
        >
          Built for hospitals. Powered by innovation. Trusted by healthcare
          leaders and Insurance Companies.
        </p>
      </div>
    </React.Fragment>
  );
}
