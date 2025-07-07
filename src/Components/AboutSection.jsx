import React from "react";

export function AboutSection() {
  return (
    <React.Fragment>
      <div className="min-h-screen px-6 md:px-10 py-16 md:py-24 bg-white flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#f14f3e] to-[#fab768] bg-clip-text text-transparent">
            About Supergit
          </h2>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            Smart Financial Management For Every Business
          </h3>
          <p className="text-gray-600 mb-4">
            Supergit is a comprehensive accounting and business management
            platform designed to simplify your operations. Whether you're a
            small startup or a growing enterprise, Supergit helps you manage
            your financials with ease and accuracy.
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2 text-start">
            <li>Cloud-based & accessible anywhere</li>
            <li>Secure role-based user management</li>
            <li>Integrated invoicing, payroll, and reporting</li>
            <li>Real-time analytics and insights</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            className="h-[300px]"
            src="https://acc2.fe.supergitsa.com/images/supergit-01.png"
            alt=""
          />
        </div>
      </div>
    </React.Fragment>
  );
}
