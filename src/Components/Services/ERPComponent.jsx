import React from "react";
import {
  FaFileInvoiceDollar,
  FaUserTie,
  FaTruckMoving,
  FaBoxOpen,
  FaTasks,
  FaChartPie,
  FaFolderOpen,
  FaChartLine,
} from "react-icons/fa";
export function ERPComponent() {
const features = [
  {
    title: "Financial Management",
    desc: "Robust financial accounting, budgeting, and real-time financial reporting tailored for healthcare operations.",
    icon: <FaFileInvoiceDollar className="text-3xl text-[#f14f3e]" />,
  },
  {
    title: "Human Resource Management",
    desc: "Automate onboarding, attendance, payroll, leaves, and appraisals with full visibility into your workforce.",
    icon: <FaUserTie className="text-3xl text-[#f14f3e]" />,
  },
  {
    title: "Supply Chain Management",
    desc: "Streamline procurement, vendor management, and real-time inventory control across departments.",
    icon: <FaTruckMoving className="text-3xl text-[#f14f3e]" />,
  },
  {
    title: "Asset Management",
    desc: "Monitor medical equipment, IT hardware, and facility assets with lifecycle tracking and maintenance alerts.",
    icon: <FaBoxOpen className="text-3xl text-[#f14f3e]" />,
  },
  {
    title: "Project & Task Tracking",
    desc: "Plan, assign, and track internal projects with deadline alerts and department-specific task management.",
    icon: <FaTasks className="text-3xl text-[#f14f3e]" />,
  },
  {
    title: "Cost Center Analysis",
    desc: "Get detailed financial insights per department or unit to optimize cost allocation and reduce overhead.",
    icon: <FaChartPie className="text-3xl text-[#f14f3e]" />,
  },
  {
    title: "Integrated Document Management",
    desc: "Store contracts, invoices, and policies securely with access control and audit trails.",
    icon: <FaFolderOpen className="text-3xl text-[#f14f3e]" />,
  },
  {
    title: "Analytics & Dashboards",
    desc: "Customizable dashboards and KPIs for financials, HR, procurement, and operations — all in one view.",
    icon: <FaChartLine className="text-3xl text-[#f14f3e]" />,
  },
];
  return (
    <React.Fragment>
      <div className="w-full">
        {/* --------------- Banner Section---------------- */}
        <div
          className="relative h-[300px] md:h-[400px] w-full bg-[length:100%_100%] bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://supergitsa.com/images/erp.webp')",
          }}
           data-aos="zooom-in"
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-2">
              Enterprise Resource
              <span className="bg-gradient-to-r from-[#f14f3e] to-[#fab768] bg-clip-text text-transparent italic">
                Planning
              </span>
            </h2>
            <p className="text-base md:text-lg max-w-2xl">
              ERP simplifies your accounting, payroll, invoicing, reporting,
            and more — all in one intuitive platform built for modern
            businesses.
            </p>
          </div>
        </div>

        {/* ---------------- Heading + Features Section------------------ */}
        <div className="px-4 md:px-10 py-12">
          <div
            className="text-center max-w-3xl mx-auto mb-10"
            data-aos="fade-down"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
              Core ERP{" "}
              <span className="bg-gradient-to-r from-[#f14f3e] to-[#fab768] bg-clip-text text-transparent italic">
                {" "}
                Capabilities
              </span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              Streamline your operations with a comprehensive ERP system that
              integrates core business functions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {features.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${index * 200}`}
                className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-xl transition duration-300"
              >
                <div className="flex items-center gap-4 mb-3">
                  {item.icon}
                  <h3 className="text-lg font-semibold text-[#333]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
