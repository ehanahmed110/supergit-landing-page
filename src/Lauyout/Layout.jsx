import React from "react";
import { NavBar } from "../Shared/NavBar";
import { ContactSection } from "../Components/ContactSection";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <React.Fragment>
      <div className="w-full  overflow-hidden">
        <div>
          <NavBar />
        </div>
        <main className="w-full overflow-hidden">
          <div className="pt-15 h-[calc(100vh-30px )]"><Outlet /></div>
        </main>
        <div className="mt-8">
          <ContactSection />
        </div>
      </div>
    </React.Fragment>
  );
}
