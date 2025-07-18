import React from "react";
import { HeroNP } from "../../Components/Services/NPHIES/HeroNP";
import { FeaturesdNP } from "../../Components/Services/NPHIES/FeaturesdNP";
import { TestominalNp } from "../../Components/Services/NPHIES/TestominalNp";
import { BookDemo } from "../../Components/Services/BookDemo";
import { CTANP } from "../../Components/Services/NPHIES/CTANP";
import { ClientLogoNp } from "../../Components/Services/NPHIES/ClientLogoNp";

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
        <div>
          <TestominalNp />
        </div>
        <div>
          <CTANP />
        </div>
        <div>
          <ClientLogoNp />
        </div>
        <div>
          <BookDemo />
        </div>
      </div>
    </React.Fragment>
  );
}
