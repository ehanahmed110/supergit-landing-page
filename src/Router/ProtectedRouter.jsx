import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import { Layout } from "../Lauyout/Layout";
import { LandingPage } from "../pages/LandingPage";
import { AboutUsPage } from "../pages/AboutUsPage";
import { ModulesPage } from "../pages/ModulesPage";
import { HowWorksPage } from "../pages/HowWorksPage";
import { DemoPage } from "../pages/DemoPage";
import { WhySupergitPage } from "../pages/WhySupergitPage";
import { ContactUsPage } from "../pages/ContactUsPage";

export function ProtectedRouter() {
  return (
    <React.Fragment>
      
        <Routes>
            <Route element={<Layout/>}>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/about" element={<AboutUsPage/>}/>
          <Route path="/modules" element={<ModulesPage/>}/>
          <Route path="/howWork" element={<HowWorksPage/>}/>
          <Route path="/demo" element={<DemoPage/>}/>
          <Route path="/whySupergit" element={<WhySupergitPage/>}/>
          <Route path="/contact" element={<ContactUsPage/>}/>
          </Route>
        </Routes>
      
    </React.Fragment>
  );
}
