import React from "react";
import NavbarTwo from "@/components/Layouts/NavbarTwo";
import SingleBlogContent from "@/components/Blog/SingleBlogContent";
import Footer from "@/components/Layouts/Footer";
import PageBannerTitle from "@/components/Common/PageBannerTitle";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle="Blog Details"
        homePageUrl="/"
        homePageText="Home"
        bgImg="/images/page-banner/banner-bg-2.jpg"
      />

      <SingleBlogContent />

      <Footer />
    </>
  );
}
