import React from "react";
import {
  FaCheckCircle,
  FaLock,
  FaCogs,
  FaClock,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

export function WhyChooseSection() {
  return (
    <React.Fragment>
      <div className=" px-10 py-16 bg-white mb-0">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-900">
          Why Choose <span className="bg-gradient-to-r from-[#f14f3e] to-[#fab768] bg-clip-text text-transparent">Supergit</span>?
        </h2>
        <p className="text-center text-lg mb-12 text-gray-600">
          We simplify your financial operations and empower your business with
          intuitive, reliable tools.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="flex items-start space-x-4">
            <FaCogs className="text-orange-500 text-2xl mt-1" />
            <div>
              <h4 className="text-xl font-semibold mb-1">Powerful Modules</h4>
              <p className="text-gray-600 text-sm">
                Complete coverage from accounts, invoices, payroll to reports –
                all in one system.
              </p>
            </div>
          </div>
        
        <div className="flex items-start space-x-4">
          <FaLock className="text-orange-500 text-2xl mt-1" />
          <div>
            <h4 className="text-xl font-semibold mb-1">Secure & Reliable</h4>
            <p className="text-gray-600 text-sm">
              Your data is safe with enterprise-level encryption and regular
              backups.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <FaClock className="text-orange-500 text-2xl mt-1" />
          <div>
            <h4 className="text-xl font-semibold mb-1">Real-Time Operations</h4>
            <p className="text-gray-600 text-sm">
              All transactions and reports update instantly — no delay.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <FaUsers className="text-orange-500 text-2xl mt-1" />
          <div>
            <h4 className="text-xl font-semibold mb-1">Multi-User Support</h4>
            <p className="text-gray-600 text-sm">
              Invite your team with role-based access control and smooth
              collaboration.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <FaChartLine className="text-orange-500 text-2xl mt-1" />
          <div>
            <h4 className="text-xl font-semibold mb-1">Insightful Reports</h4>
            <p className="text-gray-600 text-sm">
              Get dynamic charts, dashboards, and financial insights at your
              fingertips.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <FaCheckCircle className="text-orange-500 text-2xl mt-1" />
          <div>
            <h4 className="text-xl font-semibold mb-1">Easy to Use</h4>
            <p className="text-gray-600 text-sm">
              No complex training needed. Clean and user-friendly interface.
            </p>
          </div>
        </div>
        </div>
      </div>
    </React.Fragment>
  );
}
