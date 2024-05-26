"use client";
  
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

const ServiceSlider: React.FC = () => {
  return (
    <>
      <div className="services-area with-radius ptb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12">
              <div
                className="services-section-content"
                data-aos="fade-down"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <span>SERVICES</span>
                <h3>
                  We Provide the Best Quality <b>Services</b>
                </h3>
                <p>
                  We are technology solutions providing company all over the
                  world doing over 40 years.
                </p>
                <div className="services-section-btn">
                  <Link href="/services/services" className="default-btn">
                    Explore All Services
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-md-12">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 6000,
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
                }}
                modules={[Autoplay, Pagination]}
                className="services-slides"
              >
                <SwiperSlide>
                  <div className="services-item">
                    <div className="services-image">
                      <Link href="/services/details">
                        <Image
                          src="/images/services/services-1.jpg"
                          alt="image"
                          width={500}
                          height={335}
                        />
                      </Link>
                    </div>
                    <div className="services-content">
                      <h3>
                        <Link href="/services/details">
                          Software Development
                        </Link>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet con setetur sadipscing elitr
                        sed…
                      </p>
                      <Link
                        href="/services/details"
                        className="services-btn"
                      >
                        View More
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="services-item">
                    <div className="services-image">
                      <Link href="/services/details">
                        <Image
                          src="/images/services/services-2.jpg"
                          alt="image"
                          width={500}
                          height={335}
                        />
                      </Link>
                    </div>
                    <div className="services-content">
                      <h3>
                        <Link href="/services/details">
                          App Development
                        </Link>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet con setetur sadipscing elitr
                        sed…
                      </p>
                      <Link
                        href="/services/details"
                        className="services-btn"
                      >
                        View More
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="services-item">
                    <div className="services-image">
                      <Link href="/services/details">
                        <Image
                          src="/images/services/services-3.jpg"
                          alt="image"
                          width={500}
                          height={335}
                        />
                      </Link>
                    </div>
                    <div className="services-content">
                      <h3>
                        <Link href="/services/details">
                          Web Development
                        </Link>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet con setetur sadipscing elitr
                        sed…
                      </p>
                      <Link
                        href="/services/details"
                        className="services-btn"
                      >
                        View More
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="services-item">
                    <div className="services-image">
                      <Link href="/services/details">
                        <Image
                          src="/images/services/services-4.jpg"
                          alt="image"
                          width={500}
                          height={335}
                        />
                      </Link>
                    </div>
                    <div className="services-content">
                      <h3>
                        <Link href="/services/details">
                          Analytic Solutions
                        </Link>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet con setetur sadipscing elitr
                        sed…
                      </p>
                      <Link
                        href="/services/details"
                        className="services-btn"
                      >
                        View More
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSlider;
