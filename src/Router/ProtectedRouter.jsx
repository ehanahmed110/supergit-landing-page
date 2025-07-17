import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import { Layout } from "../Lauyout/Layout";
import { LandingPage } from "../pages/LandingPage";
import { AboutUsPage } from "../pages/AboutUsPage";

import { HowWorksPage } from "../pages/HowWorksPage";
import { DemoPage } from "../pages/DemoPage";
import { WhySupergitPage } from "../pages/WhySupergitPage";
import { ContactUsPage } from "../pages/ContactUsPage";
import { DemoVideoPage } from "../pages/DemoVideoPage";
import { BookDemo } from "../pages/BookDemo";
import ScrollToTop from "../ScrollToTop";
import { HIS } from "../pages/Services/HIS";
import { ERP } from "../pages/Services/ERP";
import { NPHIES } from "../pages/Services/NPHIES";
import { CDSS } from "../pages/Services/CDSS";

export function ProtectedRouter() {
  return (
    <React.Fragment>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUsPage />} />

          <Route path="/howWork" element={<HowWorksPage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/services/his" element={<HIS />} />
          <Route path="/services/erp" element={<ERP />} />
          <Route path="/services/nphies" element={<NPHIES />} />
          <Route path="/services/cdss" element={<CDSS />} />
          <Route path="/whySupergit" element={<WhySupergitPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/demovideo" element={<DemoVideoPage />} />
          <Route path="/bookdemo" element={<BookDemo />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}
