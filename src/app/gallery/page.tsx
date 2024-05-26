import React from "react";
import NavbarTwo from "@/components/Layouts/NavbarTwo";
import Footer from "@/components/Layouts/Footer";
import PageBannerTitle from "@/components/Common/PageBannerTitle";
import GalleryImage from "@/components/Gallery/GalleryImage";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle="Gallery"
        homePageUrl="/"
        homePageText="Home"
        bgImg="/images/page-banner/banner-bg.jpg"
      />

      <GalleryImage />

      <Footer />
    </>
  );
}
