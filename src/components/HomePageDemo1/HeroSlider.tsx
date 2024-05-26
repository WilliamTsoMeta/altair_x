"use client";
  
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

const HeroSlider: React.FC = () => {
  return (
    <>
      <video autoPlay muted preload="auto" src={"/video/93_1716619701.mp4"} className="w-100 position-absolute top-0"/>
      <div className="main-slides-area position-relative top-0">
        <Swiper
          spaceBetween={0}
          effect={"fade"}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: true,
          }}
          modules={[EffectFade, Pagination, Autoplay]}
          className="home-slides"
        >
          <SwiperSlide>
            <div className="main-slides-item">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-lg-7 col-md-12">
                    <div className="main-slides-content">
                      <span
                        data-aos="fade-right"
                        data-aos-delay="70"
                        data-aos-duration="700"
                        data-aos-once="true"
                      >
                        WE ARE LEADING TECHNOLOGY SOLUTIONS PROVIDING COMPANY!
                      </span>
                      <h1
                        data-aos="fade-right"
                        data-aos-delay="70"
                        data-aos-duration="700"
                        data-aos-once="true"
                      >
                        We Make The Best IT Solutions
                      </h1>
                      <p
                        data-aos="fade-right"
                        data-aos-delay="70"
                        data-aos-duration="700"
                        data-aos-once="true"
                      >
                        We are leading technology solutions providing company
                        all over the world doing over 40 years. Lorem ipsum
                        dolor sit amet consetetur sadipscing elitr sed diam
                        nonumy eirmod tempor.
                      </p>

                      <div
                        className="slides-btn"
                        data-aos="fade-right"
                        data-aos-delay="70"
                        data-aos-duration="700"
                        data-aos-once="true"
                      >
                        <Link href="/contact" className="default-btn">
                          Get Started
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-lg-5 col-md-12"
                    data-aos="fade-down"
                    data-aos-delay="70"
                    data-aos-duration="700"
                    data-aos-once="true"
                  >
                    <div className="main-slides-image">
                      <Image
                        src="/images/home-slides/slides-1.png"
                        alt="image"
                        width={670}
                        height={735}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* <SwiperSlide>
            <div className="main-slides-item">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-lg-7 col-md-12">
                    <div className="main-slides-content">
                      <span
                        data-aos="fade-right"
                        data-aos-delay="70"
                        data-aos-duration="700"
                        data-aos-once="true"
                      >
                        WE ARE LEADING TECHNOLOGY SOLUTIONS PROVIDING COMPANY!
                      </span>

                      <h1
                        data-aos="fade-right"
                        data-aos-delay="70"
                        data-aos-duration="700"
                        data-aos-once="true"
                      >
                        Best IT Services For Your Business
                      </h1>

                      <p
                        data-aos="fade-right"
                        data-aos-delay="70"
                        data-aos-duration="700"
                        data-aos-once="true"
                      >
                        We are leading technology solutions providing company
                        all over the world doing over 40 years. Lorem ipsum
                        dolor sit amet consetetur sadipscing elitr sed diam
                        nonumy eirmod tempor.
                      </p>

                      <div
                        className="slides-btn"
                        data-aos="fade-right"
                        data-aos-delay="70"
                        data-aos-duration="700"
                        data-aos-once="true"
                      >
                        <Link href="/contact" className="default-btn">
                          Get Started
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-lg-5 col-md-12"
                    data-aos="fade-down"
                    data-aos-delay="70"
                    data-aos-duration="700"
                    data-aos-once="true"
                  >
                    <div className="main-slides-image">
                      <Image
                        src="/images/home-slides/slides-2.png"
                        alt="image"
                        width={670}
                        height={735}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide> */}
        </Swiper>

        {/* Shape Images */}
        <div className="main-slides-shape-1">
          <Image
            src="/images/home-slides/slides-shape-1.png"
            alt="image"
            width={155}
            height={166}
          />
        </div>
        <div className="main-slides-shape-2">
          <Image
            src="/images/home-slides/slides-shape-2.png"
            alt="image"
            width={140}
            height={125}
          />
        </div>
        <div className="main-slides-shape-3">
          <Image
            src="/images/home-slides/slides-shape-3.png"
            alt="image"
            width={124}
            height={124}
          />
        </div>
        <div className="main-slides-shape-4">
          <Image
            src="/images/home-slides/slides-shape-4.png"
            alt="image"
            width={185}
            height={92}
          />
        </div>
        <div className="main-slides-shape-5">
          <Image
            src="/images/home-slides/slides-shape-5.png"
            alt="image"
            width={45}
            height={45}
          />
        </div>
      </div>
    </>
  );
};

export default HeroSlider;
