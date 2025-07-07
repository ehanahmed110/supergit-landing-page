import { Menubar } from "primereact/menubar";
import React from "react";
import { ShareButton } from "./ShareButton";


export function NavBar() {
  const links = [
    { label: "Home", command: () => scrollToSection("hero") },
    { label: "About", command: () => scrollToSection("about") },
    { label: "Modules", command: () => scrollToSection("modules") },
    { label: "How It Works", command: () => scrollToSection("how") },
    { label: "Demo", command: () => scrollToSection("demo") },
    { label: "Why Supergit", command: () => scrollToSection("why") },
    { label: "Contact", command: () => scrollToSection("contact") },
  ];
    const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <React.Fragment>
      <div className="bg-black relative w-full ">
        <div className="bg-black px-8 flex justify-between items-center space-x-4 fixed w-full z-50 ">
          <div className="flex space-x-4 ml-2">
            {/* ------for -links */}
            <div
              className="cursor-pointer flex justify-center items-center"
            >
              <img
                className="w-12 "
                src="https://acc2.fe.supergitsa.com/images/supergit-02.png"
                alt=""
              />
            </div>
            <div className="card">
              <Menubar
                model={links}
                pt={{
                  root: {
                    className: "!bg-black !border !border-black text-white",
                  },
                  label: {
                    className:
                      "!text-white uppercase font-semibold text-[15px]",
                  },
                  //icon: { className: "!text-white !text-[13px]" },
                 // submenu: { className: "!bg-black" },
                  content: {
                    className:
                      "!-p-[2px] hover:!bg-linear-60 from-[#f14f3e] to-[#fab768]",
                  },
                  action: {
                    className:
                      "!px-4 !py-3 hover:!bg-linear-60 from-[#f14f3e] to-[#fab768] !rounded-lg",
                  },
                  menuitem:{className:""}
                }}
              />
            </div>
          </div>
          <div className="flex gap-2">
            <div>
                <ShareButton label='Signup' variant="transparent" className="!px-4"/>
            </div>
            <div>
                <ShareButton label='Login' variant="transparent" className="!px-4"/>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
