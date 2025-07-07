import React from "react";

export function ModulesSection() {
const modules = [
  {
    title: "Accounts",
    icon: "pi pi-chart-bar",
    description: "Manage your assets, liabilities, and equity accounts seamlessly.",
  },
  {
    title: "Journal Entries",
    icon: "pi pi-book",
    description: "Record every financial transaction with accurate double entries.",
  },
  {
    title: "Invoices",
    icon: "pi pi-file",
    description: "Create, send, and track invoices easily for your customers.",
  },
  {
    title: "Configuration",
    icon: "pi pi-sliders-h",
    description: "Customize settings, users, and system preferences.",
  },
  {
    title: "Payroll",
    icon: "pi pi-wallet",
    description: "Manage employee salaries, taxes, and payslips effortlessly.",
  },
  {
    title: "Purchases",
    icon: "pi pi-shopping-cart",
    description: "Track supplier orders, payments, and delivery status.",
  },
  {
    title: "Vouchers",
    icon: "pi pi-credit-card",
    description: "Generate payment, receipt, and adjustment vouchers.",
  },
  {
    title: "Reports",
    icon: "pi pi-chart-line",
    description: "Get insightful financial and management reports.",
  },
];
  return (
    <React.Fragment>
      <div className=" px-10 py-10 bg-gray-50">
        <h2 className="text-4xl font-bold mb-6">Core Modules</h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6  text-white">
          {modules.map((module, index) => (
             <li
      key={index}
      className="bg-gradient-to-r from-[#f14f3e] to-[#fab768] rounded-lg py-8 px-4 shadow-lg hover:scale-105 transition-all"
    >
      <i className={`${module.icon} text-[20px] mb-3`}></i>
      <h1 className="text-lg font-semibold mb-2">{module.title}</h1>
      <p className="text-sm text-white opacity-90">{module.description}</p>
    </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}
