import { Menubar } from "primereact/menubar";
import React, { useEffect, useState } from "react";
import { ShareButton } from "./ShareButton";
import { Menu, X } from "lucide-react";

export function NavBar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
       setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "modules", "how", "demo", "why", "contact"];
      let currentSection = "hero";

      for (let section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Modules", id: "modules" },
    { label: "How It Works", id: "how" },
    { label: "Demo", id: "demo" },
    { label: "Why Supergit", id: "why" },
    { label: "Contact", id: "contact" },
  ];

  return (
       <div className="bg-black fixed w-full z-50 shadow-md">
      <div className="flex justify-between items-center px-6 py-2">
        <div className="flex items-center space-x-4">
          <img
            className="w-10"
            src="https://acc2.fe.supergitsa.com/images/supergit-02.png"
            alt="logo"
          />

          {/* Desktop Nav ---------------------*/}
          <nav className="hidden md:flex space-x-0.5">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`uppercase text-sm font-semibold px-4 py-2 rounded-md transition duration-300 cursor-pointer ${
                  activeSection === link.id
                    ? "bg-gradient-to-r from-[#f14f3e] to-[#fab768] text-white"
                    : "text-white hover:bg-gradient-to-r from-[#f14f3e] to-[#fab768]"
                }`}
              >
                {link.label}
              </button>
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
          {/* <ShareButton
            label="Login"
            variant="transparent"
            className="!px-5 !py-2 !font-semibold !rounded-lg !border !border-white !text-white hover:!bg-white hover:!border-transparent hover:!text-[#f14f3e] transition-all duration-300"
          /> */}
        </div>

        {/* Mobile Menu Toggle ------------------*/}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white cursor-pointer">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Items------------------ */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-start px-6 pb-4 space-y-2 bg-black">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`w-full text-left uppercase text-sm font-semibold px-4 py-2 rounded-md transition duration-300 ${
                activeSection === link.id
                  ? "bg-gradient-to-r from-[#f14f3e] to-[#fab768] text-white"
                  : "text-white hover:bg-gradient-to-r from-[#f14f3e] to-[#fab768]"
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="flex flex-col w-full pt-4 gap-2">
            <ShareButton
              label="Get Started"
              variant="transparent"
              className="!w-full !py-2 !font-semibold !rounded-lg !text-white !bg-gradient-to-r from-[#f14f3e] to-[#fab768] !shadow-md transition-transform duration-300 !border !border-black hover:!text-white hover:!border-white hover:!bg-none hover:!shadow-none"
            />
            {/* <ShareButton
              label="Login"
              variant="transparent"
              className="!w-full !py-2 !font-semibold !rounded-lg !border !border-white !text-white hover:!bg-white hover:!border-transparent hover:!text-[#f14f3e] transition-all duration-300"
            /> */}
          </div>
        </div>
      )}
    </div>

  );
}
//    const [activeSection, setActiveSection] = useState("hero");

//       useEffect(() => {
//     const handleScroll = () => {
//       const sections = ["hero", "about", "modules", "how", "demo", "why", "contact"];
//       let currentSection = "hero";

//       for (let section of sections) {
//         const el = document.getElementById(section);
//         if (el) {
//           const rect = el.getBoundingClientRect();
//           if (rect.top <= 100 && rect.bottom >= 100) {
//             currentSection = section;
//             break;
//           }
//         }
//       }

//       setActiveSection(currentSection);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
 
//     const scrollToSection = (id) => {
//     const el = document.getElementById(id);
//     if (el) {
//       el.scrollIntoView({ behavior: "smooth" });
//     }
//   };
//   const links = [
//     { label: "Home", command: () => scrollToSection("hero") , id: "hero"},
//     { label: "About", command: () => scrollToSection("about"), id: "about" },
//     { label: "Modules", command: () => scrollToSection("modules"), id: "modules" },
//     { label: "How It Works", command: () => scrollToSection("how"), id: "how" },
//     { label: "Demo", command: () => scrollToSection("demo"), id: "demo" },
//     { label: "Why Supergit", command: () => scrollToSection("why"), id: "why" },
//     { label: "Contact", command: () => scrollToSection("contact"), id: "contact" },
//   ];
//   const formattedLinks = links.map((link) => ({
//   ...link,
//   className:
//     link.id === activeSection
//       ? "bg-gradient-to-r from-[#f14f3e] to-[#fab768] text-white rounded-md"
//       : "",
// }));

//   return (
//     <React.Fragment>
//       <div className="bg-black relative w-full ">
//         <div className="bg-black px-8 flex justify-between items-center space-x-4 fixed w-full z-50 ">
//           <div className="flex space-x-4 ml-2">
//             {/* ------for -links */}
//             <div
//               className="cursor-pointer flex justify-center items-center"
//             >
//               <img
//                 className="w-12 "
//                 src="https://acc2.fe.supergitsa.com/images/supergit-02.png"
//                 alt=""
//               />
//             </div>
//             <div className="card">
//               <Menubar
//                 model={formattedLinks}
//                 pt={{
//                   root: {
//                     className: "!bg-black !border !border-black text-white",
//                   },
//                   label: {
//                     className:
//                       "!text-white uppercase font-semibold text-[15px]",
//                   },
//                   //icon: { className: "!text-white !text-[13px]" },
//                  // submenu: { className: "!bg-black" },
//                   content: {
//                     className:
//                       "!-p-[2px] hover:!bg-linear-60 from-[#f14f3e] to-[#fab768]",
//                   },
//                   action: {
//                     className:
//                       "!px-4 !py-3 hover:!bg-linear-60 from-[#f14f3e] to-[#fab768] !rounded-lg",
//                   },
//                   menuitem:{className:""}
//                 }}
//               />
//             </div>
//           </div>
//           <div className="flex gap-2">
//             <div>
//                 <ShareButton label='Signup' variant="transparent" className="!px-5 !py-2 !font-semibold !rounded-lg !text-white !bg-gradient-to-r from-[#f14f3e] to-[#fab768] !shadow-md  !transition-transform !duration-300 !border !border-black hover:!text-white hover:!border-white hover:!bg-none hover:!shadow-none"/>
//             </div>
//             <div>
//                 <ShareButton label='Login' variant="transparent" className="!px-5 !py-2 !font-semibold !rounded-lg !border !border-white !text-white !hover:bg-white !hover:text-[#f14f3e] !transition-all !duration-300"/>
//             </div>
//           </div>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// }
