import React from "react";
import { HEROHis } from "../../Components/Services/HIS/HEROHis";
import { FeaturedHis } from "../../Components/Services/HIS/FeaturedHis";
import { CTAHis } from "../../Components/Services/HIS/CTAHis";
import { ClientLogo } from "../../Components/Services/HIS/ClientLogoHis";
import { Testominal } from "../../Components/Services/HIS/TestominalHis";
import { BookDemo } from "../../Components/Services/BookDemo";

export function HIS() {
  return (
    <React.Fragment>
      <div className="w-full">
        <div>
          <HEROHis />
        </div>
        <div>
          <FeaturedHis />
        </div>
        <div className="">
          <Testominal/>
        </div>
        <div>
          <CTAHis/>
        </div>
        <div>
          <ClientLogo/>
        </div>
        <div>
          <BookDemo/>
        </div>
      </div>
    </React.Fragment>
  );
}
