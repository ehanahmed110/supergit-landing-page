import React from "react";

export function HowWorksSection() {
  return (
    <React.Fragment>
      <div className="min-h-screen px-10 py-20 bg-white">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Sign up and configure your business</li>
          <li>Add financial data (invoices, journal entries, payroll)</li>
          <li>Track and generate real-time reports</li>
        </ol>
      </div>
    </React.Fragment>
  );
}
