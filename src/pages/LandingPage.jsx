import React from "react";
import { NavBar } from "../Shared/NavBar";
import { HeroSection } from "../Components/HeroSection";
import { AboutSection } from "../Components/AboutSection";
import { ModulesSection } from "../Components/ModulesSection";
import { HowWorksSection } from "../Components/HowWorksSection";
import { DemoSection } from "../Components/DemoSection";
import { WhyChooseSection } from "../Components/WhyChooseSection";
import { ContactSection } from "../Components/ContactSection";
import { ArrowUp } from "lucide-react"; // for the icon
import { useEffect, useState } from "react";

export function LandingPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const el = document.getElementById("hero");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <React.Fragment>
      <div>
        <section id="hero">
          <HeroSection />
        </section>
      </div>
      <div>
        <section id="about">
          <AboutSection />
        </section>
      </div>
      <div>
        <section id="modules">
          <ModulesSection />
        </section>
      </div>
      <div>
        <section id="how">
          <HowWorksSection />
        </section>
      </div>
      <div>
        <section id="demo">
          <DemoSection />
        </section>
      </div>
      <div>
        <section id="why">
          <WhyChooseSection />
        </section>
      </div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 bg-gradient-to-r from-[#f14f3e] to-[#fab768] text-white rounded-full shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} className="font-extrabold" />
        </button>
      )}
    </React.Fragment>
  );
}
