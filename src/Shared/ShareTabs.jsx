import { TabPanel, TabView } from "primereact/tabview";
import React, { useState } from "react";

export function ShareTabs({ tabs = [], customClasses = {} }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <React.Fragment>
      <div className="relative">
        <TabView
          activeIndex={activeIndex}
          onChange={(e) => setActiveIndex(e.index)}
          pt={{
            nav: {
              className:
                customClasses.nav ||
                "!bg-gray-100 !py-6 !px-4 flex justify-between items-center !text-[16px]  !w-full",
            },
            header: {
              className:
                customClasses.header ||
                "hover:!text-[#fab768]  !flex-1",
            },
            panelContainer: {
              className: customClasses.panelContainer || "!p-0 mt-4",
            },
           
          }}
        >
          {tabs.map((tab, i) => (
            <TabPanel
              key={i}
              header={tab.label}
              pt={{
                headerAction: {
                  className: "!bg-transparent flex-1 !text-center !py-2 !border-transparent hover:!text-[#fab768]",
                    // ${
                    //   activeIndex === i
                    //     ? "!bg-gradient-to-r from-[#f14f3e] to-[#fab768] !bg-clip-text !text-transparent !font-semibold"
                    //     : "!text-black hover:!text-[#fab768]"
                    // }
                    //`,
                },
              }}
            >
              {tab.content}
            </TabPanel>
          ))}
        </TabView>
      </div>
    </React.Fragment>
  );
}
