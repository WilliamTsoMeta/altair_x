"use client";
  
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const Partners: React.FC = () => {
  return (
    <>
      <div className="partner-area ptb-100">
        <div className="container">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
              delay: 6000,
              disableOnInteraction: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 6,
              },
            }}
            modules={[Autoplay]}
            className="partner-slides"
          >
            <SwiperSlide>
              <div className="partner-card">
                <a href="#" target="_blank" rel="noreferrer">
                  <Image
                    src="/images/partner/partner-1.png"
                    alt="partner"
                    width={150}
                    height={150}
                  />
                  <Image
                    src="/images/partner/partner-hover-1.png"
                    alt="partner"
                    width={150}
                    height={150}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-card">
                <a href="#" target="_blank" rel="noreferrer">
                  <Image
                    src="/images/partner/partner-2.png"
                    alt="partner"
                    width={150}
                    height={150}
                  />
                  <Image
                    src="/images/partner/partner-hover-2.png"
                    alt="partner"
                    width={150}
                    height={150}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-card">
                <a href="#" target="_blank" rel="noreferrer">
                  <Image
                    src="/images/partner/partner-3.png"
                    alt="partner"
                    width={150}
                    height={150}
                  />
                  <Image
                    src="/images/partner/partner-hover-3.png"
                    alt="partner"
                    width={150}
                    height={150}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-card">
                <a href="#" target="_blank" rel="noreferrer">
                  <Image
                    src="/images/partner/partner-4.png"
                    alt="partner"
                    width={150}
                    height={150}
                  />
                  <Image
                    src="/images/partner/partner-hover-4.png"
                    alt="partner"
                    width={150}
                    height={150}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-card">
                <a href="#" target="_blank" rel="noreferrer">
                  <Image
                    src="/images/partner/partner-5.png"
                    alt="partner"
                    width={150}
                    height={150}
                  />
                  <Image
                    src="/images/partner/partner-hover-5.png"
                    alt="partner"
                    width={150}
                    height={150}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-card">
                <a href="#" target="_blank" rel="noreferrer">
                  <Image
                    src="/images/partner/partner-6.png"
                    alt="partner"
                    width={150}
                    height={150}
                  />
                  <Image
                    src="/images/partner/partner-hover-6.png"
                    alt="partner"
                    width={150}
                    height={150}
                  />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-card">
                <a href="#" target="_blank" rel="noreferrer">
                  <Image
                    src="/images/partner/partner-4.png"
                    alt="partner"
                    width={150}
                    height={150}
                  />
                  <Image
                    src="/images/partner/partner-hover-4.png"
                    alt="partner"
                    width={150}
                    height={150}
                  />
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Partners;
