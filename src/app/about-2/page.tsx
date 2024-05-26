import React from "react";
import NavbarTwo from "@/components/Layouts/NavbarTwo";
import WhoWeAre from "@/components/AboutTwo/WhoWeAre";
import WhyChooseUs from "@/components/Common/WhyChooseUs";
import IntroVideo from "@/components/Common/IntroVideo";
import Testimonials from "@/components/Common/Testimonials";
import Skills from "@/components/Common/Skills";
import PricingTable from "@/components/Pricing/PricingTable";
import ContactForm from "@/components/Common/ContactForm";
import Footer from "@/components/Layouts/Footer";
import PageBannerTitle from "@/components/Common/PageBannerTitle";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle="About Style Two"
        homePageUrl="/"
        homePageText="Home"
        bgImg="/images/page-banner/banner-bg-2.jpg"
      />

      <WhoWeAre />

      <WhyChooseUs />

      <IntroVideo />

      <Skills />

      <PricingTable />

      <Testimonials />

      <ContactForm />

      <Footer />
    </>
  );
}
