import React from "react";
import NavbarTwo from "@/components/Layouts/NavbarTwo";
import SearchPagePost from "@/components/Blog/SearchPagePost";
import CTO from "@/components/Common/CTO";
import Footer from "@/components/Layouts/Footer";
import PageBannerTitle from "@/components/Common/PageBannerTitle";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle="Search Page"
        homePageUrl="/"
        homePageText="Home"
        bgImg="/images/page-banner/banner-bg-2.jpg"
      />

      <SearchPagePost />

      <CTO />

      <Footer />
    </>
  );
}
