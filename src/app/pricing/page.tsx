import React from "react";
import NavbarTwo from "@/components/Layouts/NavbarTwo";
import PricingTable from "@/components/Pricing/PricingTable";
import CTO from "@/components/Common/CTO";
import ContactForm from "@/components/Common/ContactForm";
import Footer from "@/components/Layouts/Footer";
import PageBannerTitle from "@/components/Common/PageBannerTitle";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle="Pricing"
        homePageUrl="/"
        homePageText="Home"
        bgImg="/images/page-banner/banner-bg.jpg"
      />

      <PricingTable />

      <ContactForm />

      <CTO />

      <Footer />
    </>
  );
}
