import React from "react";
import NavbarTwo from "@/components/Layouts/NavbarTwo";
import TeamMembers from "@/components/Team/TeamMembers";
import CTO from "@/components/Common/CTO";
import Footer from "@/components/Layouts/Footer";
import PageBannerTitle from "@/components/Common/PageBannerTitle";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle="Team"
        homePageUrl="/"
        homePageText="Home"
        bgImg="/images/page-banner/banner-bg-5.jpg"
      />

      <TeamMembers />

      <CTO />

      <Footer />
    </>
  );
}
