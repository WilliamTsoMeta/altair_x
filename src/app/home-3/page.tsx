import React from "react";
import NavbarThree from "@/components/Layouts/NavbarThree";
import MainBanner from "@/components/HomePageDemo3/MainBanner";
import TopServices from "@/components/HomePageDemo3/TopServices";
import WhoWeAre from "@/components/HomePageDemo3/WhoWeAre";
import ServiceSlider from "@/components/Services/ServiceSlider";
import WorkingProcess from "@/components/Common/WorkingProcess";
import IntroVideo from "@/components/Common/IntroVideo";
import TestimonialSliderStyle2 from "@/components/Common/TestimonialSliderStyle2";
import ContactForm from "@/components/Common/ContactForm";
import ProjectSliderTwo from "@/components/Projects/ProjectSliderTwo";
import Partners from "@/components/Common/Partners";
import TeamMember from "@/components/Common/TeamMember";
import CTO from "@/components/Common/CTO";
import Article from "@/components/Common/Article";
import Footer from "@/components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <NavbarThree />

      <MainBanner />

      <TopServices />

      <WhoWeAre />

      <div className="radius-0">
        <ServiceSlider />
      </div>

      <WorkingProcess />
      
      <IntroVideo />

      <TestimonialSliderStyle2 />

      <ContactForm />
    
      <ProjectSliderTwo />

      <Partners />

      <TeamMember />

      <CTO />

      <Article />

      <Footer />
    </>
  );
}
