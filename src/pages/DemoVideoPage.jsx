import React from "react";
import myvideo from "/src/assets/WhatsApp Video 2025-07-08 at 10.49.58_52c4cdbe.mp4"

export function DemoVideoPage() {
  return (
    <React.Fragment>
      <div className="min-h-screen bg-gradient-to-r from-[#f14f3e] to-[#fab768] flex flex-col justify-center items-center p-6">
        <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Experience Our ERP Accounting System
          </h1>
          <p className="text-gray-700 mb-8 text-center">
            Watch this demo to see how our ERP module streamlines financial
            management, budgeting, and reporting — designed to give you
            real-time control over your organization's resources.
          </p>
          <div className="aspect-w-16 aspect-h-9">
            <video
              controls
              className="rounded-lg shadow-md w-full"
              src={myvideo} // replace with your actual video path
              poster="/path-to-your-video/erp-demo-poster.jpg" // optional thumbnail
            >
              Sorry, your browser does not support embedded videos.
            </video>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
