import React from "react";
import { HeroDemo } from "../Components/Demo/HeroDemo";
import { CardsDemo } from "../Components/Demo/CardsDemo";
import { TestominalDemo } from "../Components/Demo/TestominalDemo";
import { ChooseDemo } from "../Components/Demo/ChooseDemo";
import { FaqDemo } from "../Components/Demo/FaqDemo";
import { BookDemo } from "../Components/Services/BookDemo";

export function DemoPage() {
  return (
    <React.Fragment>
      <div>
        <HeroDemo />
      </div>
      <div>
        <ChooseDemo />
      </div>
      <div>
        <CardsDemo />
      </div>

      <div>
        <TestominalDemo />
      </div>
      <div>
        <FaqDemo />
      </div>
      <div>
        <BookDemo />
      </div>
    </React.Fragment>
  );
}
