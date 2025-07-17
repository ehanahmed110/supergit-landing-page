import { Menubar } from "primereact/menubar";
import React, { useEffect, useState } from "react";
import { ShareButton } from "./ShareButton";
import { Menu, X } from "lucide-react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  FiHome,
  FiInfo,
  FiLayers,
  FiHelpCircle,
  FiVideo,
  FiStar,
  FiPhone,
} from "react-icons/fi";
import {
  FaHospitalSymbol,
  FaFileInvoiceDollar,
  FaRegIdCard,
  FaStethoscope,
} from "react-icons/fa";
export function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const links = [
    { label: "Home", id: "hero", path: "/", icon: <FiHome /> },
    { label: "About", id: "about", path: "/about", icon: <FiInfo /> },
    {
      label: "Our Services",
      id: "modules",
      icon: <FiLayers />,
      children: [
        {
          label: "HIS",
          path: "/services/his",
          icon: <FaHospitalSymbol className="text-base" />,
        },
        {
          label: "ERP",
          path: "/services/erp",
          icon: <FaFileInvoiceDollar className="text-base" />,
        },
        {
          label: "NPHIES",
          path: "/services/nphies",
          icon: <FaRegIdCard className="text-base" />,
        },
        {
          label: "CDSS",
          path: "/services/cdss",
          icon: <FaStethoscope className="text-base" />,
        },
      ],
    },
    {
      label: "How It Works",
      id: "how",
      path: "/howWork",
      icon: <FiHelpCircle />,
    },
    { label: "Demo", id: "demo", path: "/demo", icon: <FiVideo /> },
    {
      label: "Why Supergit",
      id: "why",
      path: "/whySupergit",
      icon: <FiStar />,
    },
    { label: "Contact", id: "contact", path: "/contact", icon: <FiPhone /> },
  ];

  const isLinkActive = (link) => {
    if (link.path && location.pathname === link.path) return true;
    if (link.children) {
      return link.children.some((child) =>
        location.pathname.startsWith(child.path)
      );
    }
    return false;
  };
  return (
    <div className="bg-black fixed w-full z-50 shadow-md">
      <div className="flex justify-between items-center px-6 py-2">
        <div className="flex items-center space-x-4 -ml-[10px] md:ml-0">
          <img
            onClick={() => navigate("/")}
            className="w-10 cursor-pointer"
            src="https://acc2.fe.supergitsa.com/images/supergit-02.png"
            alt="logo"
          />
          <div onClick={() => navigate("/")} className="flex md:hidden">
            <h2 className="text-3xl -ml-[10px] font-bold bg-gradient-to-r from-[#f14f3e] to-[#fab768] bg-clip-text text-transparent italic">
              SuperGit
            </h2>
          </div>
          {/* Desktop Nav ---------------------*/}
          <nav className="hidden md:flex space-x-6">
            {links.map((link) => {
              const active = isLinkActive(link);

              // Check for dropdown
              if (link.children) {
                return (
                  <div className="relative group" key={link.id}>
                    {/* Parent link */}
                    <div
                      className={`flex items-center gap-2 py-2 uppercase text-sm font-semibold cursor-pointer relative 
              before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 
              before:w-0 before:h-[2px] before:bg-[#f14f3e] 
              before:transition-all before:duration-300 
              group-hover:before:w-full
              ${
                active
                  ? "text-[#f14f3e] before:w-full"
                  : "text-white hover:text-[#f14f3e]"
              }`}
                    >
                      {link.icon}
                      {link.label}
                    </div>

                    {/* Dropdown children */}
                    <div className="absolute hidden group-hover:block bg-black text-white rounded  mt-1 z-50 w-46">
                      {link.children.map((child, index) => (
                        <NavLink
                          to={child.path}
                          key={index}
                          className={({ isActive }) =>
                            `flex items-center gap-2 px-4 py-2 text-sm font-medium  hover:bg-black relative 
                   before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 
                   before:w-0 before:h-[2px] before:bg-[#f14f3e] 
                   before:transition-all before:duration-300 
                   hover:before:w-full ${
                     isActive ? "text-[#f14f3e] before:w-full" : ""
                   }`
                          }
                        >
                          {child.icon}
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                );
              }

              // Simple links
              return (
                <NavLink
                  to={link.path}
                  key={link.id}
                  className={({ isActive }) =>
                    `flex items-center gap-x-4 uppercase text-sm font-semibold  py-2 relative 
           before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 
           before:w-0 before:h-[2px] before:bg-[#f14f3e] 
           before:transition-all before:duration-300 
           hover:before:w-full
           ${
             isActive
               ? "text-[#f14f3e] before:w-full"
               : "text-white hover:text-[#f14f3e]"
           }`
                  }
                >
                  <div className="flex gap-2">
                    <span className="text-lg">{link.icon}</span>
                    <span>{link.label}</span>
                  </div>
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Desktop Buttons-------------------------- */}
        <div className="hidden md:flex gap-2">
          <ShareButton
            label="Get Started"
            variant="transparent"
            className="!px-5 !py-2 !font-semibold !rounded-lg !text-white !bg-gradient-to-r from-[#f14f3e] to-[#fab768] !shadow-md transition-transform duration-300 !border !border-black hover:!text-white hover:!border-white hover:!bg-none hover:!shadow-none"
          />
        </div>

        {/* Mobile Menu Toggle ------------------*/}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white cursor-pointer"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Items------------------ */}
      <div>
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col items-start px-2 pb-4 space-y-2 bg-black">
            {links.map((link) => {
              const active = isLinkActive(link);

              if (link.children) {
                return (
                  <div key={link.id} className="w-full">
                    {/* Dropdown Toggle */}
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === link.id ? null : link.id
                        )
                      }
                      className={`flex justify-between items-center w-full px-4 py-2 uppercase text-sm font-semibold rounded-full cursor-pointer ${
                        active
                          ? "bg-gradient-to-r from-[#f14f3e] to-[#fab768] text-white"
                          : "text-white hover:bg-gradient-to-r from-[#f14f3e] to-[#fab768]"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {link.icon}
                        {link.label}
                      </span>
                      <span>
                        {openDropdown === link.id ? (
                          <ChevronUp size={16} />
                        ) : (
                          <ChevronDown size={16} />
                        )}
                      </span>
                    </button>

                    {/*------------------- Children Links------------------ */}
                    {openDropdown === link.id && (
                      <div className="ml-6 space-y-1 pt-2">
                        {link.children.map((child, index) => (
                          <NavLink
                            to={child.path}
                            key={index}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={({ isActive }) =>
                              `flex items-center gap-2 text-white px-4 py-1 text-sm rounded-full  ${
                                isActive
                                  ? "bg-gradient-to-r from-[#f14f3e] to-[#fab768] text-white"
                                  : "text-white hover:bg-gradient-to-r from-[#f14f3e] to-[#fab768]"
                              }`
                            }
                          >
                            {child.icon}
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <NavLink
                  to={link.path}
                  key={link.id}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-2 w-full px-4 py-2 uppercase text-sm font-semibol rounded-full ${
                      isActive
                        ? "bg-gradient-to-r from-[#f14f3e] to-[#fab768] text-white"
                        : "text-white hover:bg-gradient-to-r from-[#f14f3e] to-[#fab768]"
                    }`
                  }
                >
                  {link.icon}
                  {link.label}
                </NavLink>
              );
            })}

            {/* ---------------Mobile CTA --------------------*/}
            <div className="flex flex-col w-full pt-4 gap-2">
              <ShareButton
                label="Get Started"
                variant="transparent"
                className="!w-full !py-2 !font-semibold !rounded-full !text-white !bg-gradient-to-r from-[#f14f3e] to-[#fab768]"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
