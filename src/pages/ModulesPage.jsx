import React from "react";
import { HIScomponent } from "../Components/Services/HIScomponent";
import { ERPComponent } from "../Components/Services/ERPComponent";
import { NPHIESComponent } from "../Components/Services/NPHIESComponent";
import { CDSSComponent } from "../Components/Services/CDSSComponent";
import { ShareTabs } from "../Shared/ShareTabs";

export function ModulesPage() {
    const tabs = [
        {label:"HIS", content:<HIScomponent/>},
        {label:"ERP",content:<ERPComponent/>},
        {label:"NPHIES",content:<NPHIESComponent/>},
        {label:"CDSS",content:<CDSSComponent/>}
    ]
  return (
   <React.Fragment>
      {/* Section Header */}
      <section className="w-full min-h-[50vh]  flex items-center justify-center px-6 text-center">
        <div className="max-w-4xl">
          <h3
            className="text-sm md:text-md uppercase tracking-wide font-medium mb-2"
            data-aos="fade-down"
          >
            Services
          </h3>
          <h1
            className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Explore Our <span className="bg-gradient-to-r from-[#f14f3e] to-[#fab768] bg-clip-text text-transparent italic">Services</span>
          </h1>
          <p
            className="text-sm md:text-base opacity-90 text-gray-500"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            Discover a comprehensive range of high-quality healthcare services
            delivered by our experienced and compassionate team.
          </p>
        </div>
    </section>

      {/* Tab Content */}
      <section className="pb-12 px-4 md:px-10 max-w-7xl mx-auto">
        <div data-aos="fade-up" data-aos-delay="300">
          <ShareTabs tabs={tabs} />
        </div>
      </section>
    </React.Fragment>
  );
}
