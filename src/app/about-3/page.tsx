import React from "react";
import NavbarTwo from "@/components/Layouts/NavbarTwo";
import WhoWeAre from "@/components/AboutThree/WhoWeAre";
import WorkingProcess from "@/components/Common/WorkingProcess";
import IntroVideo from "@/components/Common/IntroVideo";
import TestimonialSliderStyle2 from "@/components/Common/TestimonialSliderStyle2";
import PricingTable from "@/components/Pricing/PricingTable";
import ContactForm from "@/components/Common/ContactForm";
import Footer from "@/components/Layouts/Footer";
import TeamMember from "@/components/Common/TeamMember";
import PageBannerTitle from "@/components/Common/PageBannerTitle";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle="About Style Three"
        homePageUrl="/"
        homePageText="Home"
        bgImg="/images/page-banner/banner-bg-3.jpg"
      />

      <WhoWeAre />

      <WorkingProcess />

      <IntroVideo />

      <TestimonialSliderStyle2 />

      <PricingTable />

      <TeamMember />

      <ContactForm />

      <Footer />
    </>
  );
}
