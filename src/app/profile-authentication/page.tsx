import React from "react";
import NavbarTwo from "@/components/Layouts/NavbarTwo";
import CTO from "@/components/Common/CTO";
import Footer from "@/components/Layouts/Footer";
import Authentication from "@/components/Authentication/Authentication";
import PageBannerTitle from "@/components/Common/PageBannerTitle";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle="Profile Authentication"
        homePageUrl="/"
        homePageText="Home"
        bgImg="/images/page-banner/banner-bg-4.jpg"
      />

      <Authentication />

      <CTO />

      <Footer />
    </>
  );
}
