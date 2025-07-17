import React from "react";

export function ClientLogo() {
  return (
    <React.Fragment>
      <div className="py-12" data-aos="fade-up">
        <h4 className="text-center text-xl font-semibold text-gray-800 mb-6">
          Trusted by Healthcare Leaders
        </h4>
        <div className="flex items-center justify-center flex-wrap gap-6">
          <img src="https://images.seeklogo.com/logo-png/23/2/ministry-of-health-saudi-arabia-logo-png_seeklogo-238647.png" className="h-16" alt="NHIC" />
          <img src="https://images.seeklogo.com/logo-png/39/2/saudi-arabia-logo-png_seeklogo-398267.png" className="h-16" alt="NPHIES" />
          <img src="https://images.seeklogo.com/logo-png/25/1/national-day-84-logo-png_seeklogo-255969.png" className="h-16" alt="PACS" />
          {/* Add more as needed */}
        </div>
      </div>
    </React.Fragment>
  );
}
