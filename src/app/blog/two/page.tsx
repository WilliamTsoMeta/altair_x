import React from "react";
import NavbarTwo from "@/components/Layouts/NavbarTwo";
import BlogGridStyle2 from "@/components/Blog/BlogGridStyle2";
import CTO from "@/components/Common/CTO";
import Footer from "@/components/Layouts/Footer";
import PageBannerTitle from "@/components/Common/PageBannerTitle";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle="Blog Style Two"
        homePageUrl="/"
        homePageText="Home"
        bgImg="/images/page-banner/banner-bg.jpg"
      />

      <BlogGridStyle2 />

      <CTO />

      <Footer />
    </>
  );
}
