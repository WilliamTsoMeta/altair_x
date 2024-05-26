import React from "react";
import NavbarTwo from "@/components/Layouts/NavbarTwo";
import CTO from "@/components/Common/CTO";
import ContactForm from "@/components/Common/ContactForm";
import Footer from "@/components/Layouts/Footer";
import PageBannerTitle from "@/components/Common/PageBannerTitle";
import LatestProjects from "./../../components/Projects/LatestProjects";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle="Projects"
        homePageUrl="/"
        homePageText="Home"
        bgImg="/images/page-banner/banner-bg-3.jpg"
      />

      <LatestProjects />

      <CTO />

      <ContactForm />

      <Footer />
    </>
  );
}
