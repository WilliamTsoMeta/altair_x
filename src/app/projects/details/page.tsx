import React from "react";
import NavbarTwo from "@/components/Layouts/NavbarTwo";
import ProjectsDetailsContent from "@/components/Projects/ProjectsDetailsContent";
import CTO from "@/components/Common/CTO";
import ContactForm from "@/components/Common/ContactForm";
import Footer from "@/components/Layouts/Footer";
import PageBannerTitle from "@/components/Common/PageBannerTitle";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle="Projects Details"
        homePageUrl="/"
        homePageText="Home"
        bgImg="/images/page-banner/banner-bg-3.jpg"
      />

      <ProjectsDetailsContent />

      <CTO />

      <ContactForm />

      <Footer />
    </>
  );
}
