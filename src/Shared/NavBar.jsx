import { Menubar } from "primereact/menubar";
import React, { useEffect, useState } from "react";
import { ShareButton } from "./ShareButton";
import { Menu, X } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

export function NavBar() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { label: "Home", id: "hero", path: "/" },
    { label: "About", id: "about", path: "/about" },
    { label: "Our Services", id: "modules", path: "/modules" },
    { label: "How It Works", id: "how", path: "/howWork" },
    { label: "Demo", id: "demo", path: "/demo" },
    { label: "Why Supergit", id: "why", path: "/whySupergit" },
    { label: "Contact", id: "contact", path: "/contact" },
  ];

  return (
    <div className="bg-black fixed w-full z-50 shadow-md">
      <div className="flex justify-between items-center px-6 py-2">
        <div className="flex items-center space-x-4">
          <img
            onClick={() => navigate("/")}
            className="w-10 cursor-pointer"
            src="https://acc2.fe.supergitsa.com/images/supergit-02.png"
            alt="logo"
          />
          <div onClick={()=>navigate('/')} className="flex md:hidden">
            <h2 className="text-3xl -ml-[10px] font-bold bg-gradient-to-r from-[#f14f3e] to-[#fab768] bg-clip-text text-transparent italic">
              SuperGit
            </h2>
          </div>
          {/* Desktop Nav ---------------------*/}
          <nav className="hidden md:flex space-x-0.5">
            {links.map((link) => (
              <NavLink
                to={link.path}
                key={link.id}
                className={({ isActive }) =>
                  `uppercase text-sm font-semibold px-4 py-2 rounded-md transition duration-300 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-[#f14f3e] to-[#fab768] bg-clip-text text-transparent"
                      : "text-white hover:text-[#f14f3e]"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
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
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-start px-6 pb-4 space-y-2 bg-black">
          {links.map((link) => (
            <NavLink
              to={link.path}
              key={link.id}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `w-full text-left uppercase text-sm font-semibold px-4 py-2 rounded-md transition duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-[#f14f3e] to-[#fab768] text-white"
                    : "text-white hover:bg-gradient-to-r from-[#f14f3e] to-[#fab768]"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="flex flex-col w-full pt-4 gap-2">
            <ShareButton
              label="Get Started"
              variant="transparent"
              className="!w-full !py-2 !font-semibold !rounded-full !text-white !bg-gradient-to-r from-[#f14f3e] to-[#fab768] !shadow-md transition-transform duration-300 !border !border-black hover:!text-white hover:!border-white hover:!bg-none hover:!shadow-none"
            />
          </div>
        </div>
      )}
    </div>
  );
}
