import React from "react";
import NavbarTwo from "@/components/Layouts/NavbarTwo";
import ServicesDetailsContent from "@/components/Services/ServicesDetailsContent";
import ContactForm from "@/components/Common/ContactForm";
import ServiceSlider from "@/components/Services/ServiceSlider";
import CTO from "@/components/Common/CTO";
import Footer from "@/components/Layouts/Footer";
import PageBannerTitle from "@/components/Common/PageBannerTitle";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle="Services Details"
        homePageUrl="/"
        homePageText="Home"
        bgImg="/images/page-banner/banner-bg-4.jpg"
      />

      <ServicesDetailsContent />

      <ContactForm />

      <div className="radius-0">
        <ServiceSlider />
      </div>

      <CTO />

      <Footer />
    </>
  );
}
