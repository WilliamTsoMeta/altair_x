import React from "react";
import NavbarTwo from "@/components/Layouts/NavbarTwo";
import KeyFeatures from "@/components/Common/KeyFeatures";
import AllServicesCard from "@/components/Services/AllServicesCard";
import ContactForm from "@/components/Common/ContactForm";
import Footer from "@/components/Layouts/Footer";
import PageBannerTitle from "@/components/Common/PageBannerTitle";

export default function Services() {
  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle="Services Style One"
        homePageUrl="/"
        homePageText="Home"
        bgImg="/images/page-banner/banner-bg-4.jpg"
      />

      <KeyFeatures />

      <AllServicesCard />

      <ContactForm />

      <Footer />
    </>
  );
}
