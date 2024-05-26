import React from "react";
import NavbarTwo from "@/components/Layouts/NavbarTwo";
import WhoWeAre from "@/components/About/WhoWeAre";
import Partners from "@/components/Common/Partners";
import OurGoal from "@/components/About/OurGoal";
import WhyChooseUs from "@/components/Common/WhyChooseUs";
import Skills from "@/components/Common/Skills";
import PricingTable from "@/components/Pricing/PricingTable";
import ContactForm from "@/components/Common/ContactForm";
import Article from "@/components/Common/Article";
import Footer from "@/components/Layouts/Footer";
import PageBannerTitle from "@/components/Common/PageBannerTitle";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle="About"
        homePageUrl="/"
        homePageText="Home"
        bgImg="/images/page-banner/banner-bg.jpg"
      />

      <WhoWeAre />

      <Partners />

      <OurGoal />

      <div className="bg-with-F5F5F5-color">
        <WhyChooseUs />
      </div>

      <Skills />

      <PricingTable />

      <ContactForm />

      <Article />

      <Footer />
    </>
  );
}
