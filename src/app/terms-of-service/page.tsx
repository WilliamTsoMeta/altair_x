import React from "react";
import NavbarTwo from "@/components/Layouts/NavbarTwo";
import CTO from "@/components/Common/CTO";
import Footer from "@/components/Layouts/Footer";
import PageBannerTitle from "@/components/Common/PageBannerTitle";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle="Terms of Service"
        homePageUrl="/"
        homePageText="Home"
        bgImg="/images/page-banner/banner-bg-4.jpg"
      />

      <div className="terms-of-service-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12">
              <div className="terms-of-service-content">
                <div className="terms-of-service-image">
                  <Image
                    src="/images/terms-of-service.jpg"
                    alt="image"
                    width={1250}
                    height={750}
                  />
                </div>
                <p>
                  <i>
                    This Terms of Service was last updated on September 1, 2022.
                  </i>
                </p>
                <h3>
                  <span>1.</span> Our Website
                </h3>
                <p>Our website address is: http://staxexample.com</p>
                <blockquote className="blockquote">
                  <p>
                    We collect certain data from you directly, like information
                    you enter yourself, data about your participation in
                    courses, and data from third-party platforms you connect
                    with Stax. We also collect some data automatically, like
                    information about your device and what parts of our Services
                    you interact with or spend time using.
                  </p>
                </blockquote>
                <h3>
                  <span>2.</span> Data You Provide to Us
                </h3>
                <p>
                  We may collect different data from or about you depending on
                  how you use the Services. Below are some examples to help you
                  better understand the data we collect.
                </p>
                <h3>
                  <span>3.</span> How We Get Data About You
                </h3>
                <p>
                  We use tools like cookies, web beacons, analytics services,
                  and advertising providers to gather the data listed above.
                  Some of these tools offer you the ability to opt out of data
                  collection.
                </p>
                <h3>
                  <span>4.</span> What We Use Your Data For
                </h3>
                <ol>
                  <li>Responding to your questions and concerns;</li>
                  <li>
                    Sending you administrative messages and information,
                    including messages from instructors and teaching assistants,
                    notifications about changes to our Service, and updates to
                    our agreements;
                  </li>
                  <li>
                    Sending push notifications to your wireless device to
                    provide updates and other relevant messages (which you can
                    manage from the “options” or “settings” page of the mobile
                    app);
                  </li>
                </ol>
                <h3>
                  <span>5.</span> Your Choices About the Use of Your Data
                </h3>
                <p>
                  You can choose not to provide certain data to us, but you may
                  not be able to use certain features of the Services.
                </p>
                <ul>
                  <li>
                    To stop receiving promotional communications from us, you
                    can opt out by using the unsubscribe mechanism in the
                    promotional communication you receive or by changing the
                    email preferences in your account. Note that regardless of
                    your email preference settings, we will send you
                    transactional and relationship messages regarding the
                    Services, including administrative confirmations, order
                    confirmations, important updates about the Services, and
                    notices about our policies.
                  </li>
                  <li>
                    The browser or device you use may allow you to control
                    cookies and other types of local data storage. Your wireless
                    device may also allow you to control whether location or
                    other data is collected and shared. You can manage
                    Adobe&apos;s LSOs through their Website Storage Settings
                    panel.
                  </li>
                  <li>
                    To get information and control cookies used for tailored
                    advertising from participating companies, see the consumer
                    opt-out pages for the Network Advertising Initiative and
                    Digital Advertising Alliance, or if you&apos;re located in
                    the European Union, visit the Your Online Choices site. To
                    opt out of Google&apos;s display advertising or customize
                    Google Display Network ads, visit the Google Ads Settings
                    page. To opt out of Taboola&apos;s targeted ads, see the
                    Opt-out Link in their Cookie Policy.
                  </li>
                  <li>
                    To update data you provide directly, log into your account
                    and update your account at any time.
                  </li>
                </ul>
                <h3>
                  <span>6.</span> Our Policy Concerning Children
                </h3>
                <p>
                  We recognize the privacy interests of children and encourage
                  parents and guardians to take an active role in their
                  children&apos;s online activities and interests. Children
                  under 13 (or under 16 in the European Economic Area) should
                  not use the Services. If we learn that we&apos;ve collected
                  personal data from a child under those ages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTO />

      <Footer />
    </>
  );
}
