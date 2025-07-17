import React from "react";
import { WorkingImage } from "../Components/HowWork/workingImage";
import { FaqHowWork } from "../Components/HowWork/FaqHowWork";

export function HowWorksPage() {
  return (
    <React.Fragment>
      <div>
        <WorkingImage />
      </div>
      <div>
        <FaqHowWork/>
      </div>
    </React.Fragment>
  );
}
