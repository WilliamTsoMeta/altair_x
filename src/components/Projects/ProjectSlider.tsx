"use client";
  
import React from "react";
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const ProjectSlider: React.FC = () => {
  return (
    <>
      <div className="projects-area with-black-background pb-100">
        <div className="container-fluid">
          <div className="section-title">
            <span>PROJECTS</span>
            <h2>
              Our Latest <b>Incredible</b> Client&apos;s Projects
            </h2>
            <p>
              We are leading technology solutions providing company all over the
              world doing over 40 years lorem ipsum dolor sit amet.
            </p>
          </div>

          <div className="px-3 text-center">
            <Swiper
              spaceBetween={30}
              navigation={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
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
              modules={[Navigation, Autoplay]}
              className="projects-slides"
            >
              <SwiperSlide>
                <div className="projects-item text-start">
                  <div className="projects-image">
                    <Link href="/projects/details">
                      <Image
                        src="/images/projects/projects-1.jpg"
                        alt="image"
                        width={750}
                        height={500}
                      />
                    </Link>
                  </div>
                  <div className="projects-content">
                    <h3>
                      <Link href="/projects/details">
                        3D Animation
                      </Link>
                    </h3>
                    <Link
                      href="/projects/details"
                      className="projects-btn"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="projects-item text-start">
                  <div className="projects-image">
                    <Link href="/projects/details">
                      <Image
                        src="/images/projects/projects-2.jpg"
                        alt="image"
                        width={750}
                        height={500}
                      />
                    </Link>
                  </div>
                  <div className="projects-content">
                    <h3>
                      <Link href="/projects/details">
                        Online Banking Software
                      </Link>
                    </h3>
                    <Link
                      href="/projects/details"
                      className="projects-btn"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="projects-item text-start">
                  <div className="projects-image">
                    <Link href="/projects/details">
                      <Image
                        src="/images/projects/projects-3.jpg"
                        alt="image"
                        width={750}
                        height={500}
                      />
                    </Link>
                  </div>
                  <div className="projects-content">
                    <h3>
                      <Link href="/projects/details">
                        Cashier Software
                      </Link>
                    </h3>
                    <Link
                      href="/projects/details"
                      className="projects-btn"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="projects-item text-start">
                  <div className="projects-image">
                    <Link href="/projects/details">
                      <Image
                        src="/images/projects/projects-4.jpg"
                        alt="image"
                        width={750}
                        height={500}
                      />
                    </Link>
                  </div>
                  <div className="projects-content">
                    <h3>
                      <Link href="/projects/details">
                        Analytics Software
                      </Link>
                    </h3>
                    <Link
                      href="/projects/details"
                      className="projects-btn"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="projects-item text-start">
                  <div className="projects-image">
                    <Link href="/projects/details">
                      <Image
                        src="/images/projects/projects-5.jpg"
                        alt="image"
                        width={750}
                        height={500}
                      />
                    </Link>
                  </div>
                  <div className="projects-content">
                    <h3>
                      <Link href="/projects/details">
                        Messaging App
                      </Link>
                    </h3>
                    <Link
                      href="/projects/details"
                      className="projects-btn"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        {/* Shape Images */}
        <div className="projects-bg-shape-1">
          <Image
            src="/images/projects/projects-bg-shape.png"
            alt="image"
            width={1920}
            height={612}
          />
        </div>
        <div className="projects-shape-1">
          <Image
            src="/images/projects/projects-shape-1.png"
            alt="image"
            width={90}
            height={88}
          />
        </div>
        <div className="projects-shape-2">
          <Image
            src="/images/projects/projects-shape-2.png"
            alt="image"
            width={300}
            height={312}
          />
        </div>
        <div className="projects-shape-3">
          <Image
            src="/images/projects/projects-shape-3.png"
            alt="image"
            width={185}
            height={192}
          />
        </div>
      </div>
    </>
  );
};

export default ProjectSlider;
