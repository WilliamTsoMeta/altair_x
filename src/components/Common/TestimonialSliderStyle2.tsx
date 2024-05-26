"use client";
  
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const TestimonialSliderStyle2: React.FC = () => {
  return (
    <>
      <div className="testimonials-area ptb-100">
        <div className="container-fluid">
          <div className="section-title section-style-two">
            <div className="section-bg-text">FEEDBACK</div>
            <span>TESTIMONIALS</span>
            <h2>Our Client&apos;s Feedback</h2>
          </div>

          <Swiper
            slidesPerView={4}
            spaceBetween={25}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="testimonials-slides"
          >
            <SwiperSlide>
              <div className="single-testimonials-card">
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
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-card">
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
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-card">
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
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-card">
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
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-card">
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
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default TestimonialSliderStyle2;
