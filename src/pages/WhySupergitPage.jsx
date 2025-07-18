import React from "react";
import { HeroChoose } from "../Components/WhyChoose/HeroChoose";
import { CardsChoose } from "../Components/WhyChoose/CardsChoose";
import { TestominalsChoose } from "../Components/WhyChoose/TestominalsChoose";
import { CTASection } from "../Components/WhyChoose/CTASection";
import { FaqChoose } from "../Components/WhyChoose/FaqChoose";
import { ClintChoose } from "../Components/WhyChoose/ClintChoose";

export function WhySupergitPage() {
  return (
    <React.Fragment>
      <div className="bg-white pt-16  ">
        <div className="px-4 md:px-20">
          <HeroChoose />
          <CardsChoose />
          <TestominalsChoose />
          <FaqChoose />
        </div>
        <div>
          <CTASection />
        </div>
        <div>
          <ClintChoose />
        </div>
      </div>
    </React.Fragment>
  );
}
