import React from "react";
import { HeroNP } from "../../Components/Services/NPHIES/HeroNP";
import { FeaturesdNP } from "../../Components/Services/NPHIES/FeaturesdNP";

export function NPHIES() {
  return (
    <React.Fragment>
      <div className="w-full">
        <div>
          <HeroNP />
        </div>
        <div>
          <FeaturesdNP />
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </React.Fragment>
  );
}
