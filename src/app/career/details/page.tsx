import React from "react";
import NavbarTwo from "@/components/Layouts/NavbarTwo";
import CTO from "@/components/Common/CTO";
import CareerDetailsContent from "@/components/Career/CareerDetailsContent";
import Footer from "@/components/Layouts/Footer";
import PageBannerTitle from "@/components/Common/PageBannerTitle";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle="Career Details"
        homePageUrl="/"
        homePageText="Home"
        bgImg="/images/page-banner/banner-bg-5.jpg"
      />

      <CareerDetailsContent />

      <CTO />

      <Footer />
    </>
  );
}
