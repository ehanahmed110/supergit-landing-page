import React from "react";
import { HeroChoose } from "../Components/WhyChoose/HeroChoose";
import { CardsChoose } from "../Components/WhyChoose/CardsChoose";

export function WhySupergitPage() {
  return (
    <React.Fragment>
      <div className="bg-white py-16 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <HeroChoose />
          <CardsChoose />
        </div>
      </div>
    </React.Fragment>
  );
}
