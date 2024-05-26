import React from "react";
import NavbarTwo from "@/components/Layouts/NavbarTwo";
import Footer from "@/components/Layouts/Footer";
import Image from "next/image";
import PageBannerTitle from "@/components/Common/PageBannerTitle";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle="Testimonials"
        homePageUrl="/"
        homePageText="Home" 
        bgImg="/images/page-banner/banner-bg-5.jpg"
      />

      <div className="testimonials-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>TESTIMONIALS</span>
            <h2>Our Client Feedbacks</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div
                className="single-testimonials-card"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <p>
                  We look and sound so good! I am still in shock at how smooth
                  this process was. The professionalism, collaboration and the
                  design they come up is great.
                </p>

                <div className="info-item-box">
                  <Image
                    src="/images/testimonials/testimonials-4.jpg"
                    className="rounded-circle"
                    alt="image"
                    width={150}
                    height={150}
                  />
                  <h4>
                    Bradly Doe, <span>Founder of Medizo</span>
                  </h4>
                  <ul className="rating-list">
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-line"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="single-testimonials-card"
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <p>
                  We look and sound so good! I am still in shock at how smooth
                  this process was. The professionalism, collaboration and the
                  design they come up is great.
                </p>

                <div className="info-item-box">
                  <Image
                    src="/images/testimonials/testimonials-6.jpg"
                    className="rounded-circle"
                    alt="image"
                    width={150}
                    height={150}
                  />
                  <h4>
                    Jennifer Smith, <span>Spix Team</span>
                  </h4>
                  <ul className="rating-list">
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-line"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="single-testimonials-card"
                data-aos="fade-up"
                data-aos-delay="90"
                data-aos-duration="900"
                data-aos-once="true"
              >
                <p>
                  We look and sound so good! I am still in shock at how smooth
                  this process was. The professionalism, collaboration and the
                  design they come up is great.
                </p>

                <div className="info-item-box">
                  <Image
                    src="/images/testimonials/testimonials-8.jpg"
                    className="rounded-circle"
                    alt="image"
                    width={150}
                    height={150}
                  />
                  <h4>
                    Jane Ronan, <span>Lebu Team</span>
                  </h4>
                  <ul className="rating-list">
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-line"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="single-testimonials-card"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <p>
                  The professionalism, collaboration and the design they come up
                  with is pheno-menal. Thanks a lot the Stax Team.
                </p>

                <div className="info-item-box">
                  <Image
                    src="/images/testimonials/testimonials-5.jpg"
                    className="rounded-circle"
                    alt="image"
                    width={150}
                    height={150}
                  />
                  <h4>
                    Daniel John, <span>Solit Team</span>
                  </h4>
                  <ul className="rating-list">
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-line"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="single-testimonials-card"
                data-aos="fade-up"
                data-aos-delay="70"
                data-aos-duration="700"
                data-aos-once="true"
              >
                <p>
                  The professionalism, collaboration and the design they come up
                  with is pheno-menal. Thanks a lot the Stax Team.
                </p>

                <div className="info-item-box">
                  <Image
                    src="/images/testimonials/testimonials-7.jpg"
                    className="rounded-circle"
                    alt="image"
                    width={150}
                    height={150}
                  />
                  <h4>
                    Sarp Karahan, <span>Benzo Team</span>
                  </h4>
                  <ul className="rating-list">
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-line"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="single-testimonials-card"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <p>
                  The professionalism, collaboration and the design they come up
                  with is pheno-menal. Thanks a lot the Stax Team.
                </p>

                <div className="info-item-box">
                  <Image
                    src="/images/testimonials/testimonials-1.jpg"
                    className="rounded-circle"
                    alt="image"
                    width={150}
                    height={150}
                  />
                  <h4>
                    Johny Smith, <span>Solit Team</span>
                  </h4>
                  <ul className="rating-list">
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="ri-star-line"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
