"use client";
  
import React from "react";
import Image from "next/image";

const OurGoal: React.FC = () => {
  return (
    <>
      <div className="about-area pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-wrap-image">
                <Image
                  src="/images/about/about-5.jpg"
                  alt="image"
                  width={850}
                  height={550}
                  data-aos="fade-down"
                  data-aos-delay="80"
                  data-aos-duration="800"
                  data-aos-once="true"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div
                className="about-wrap-content"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <span>OUR GOAL</span>
                <h3>Your Trusted Partner For All IT Solutions</h3>
                <p>
                  We are leading technology solutions providing company all over
                  the world doing over 40 years. Lorem ipsum dolor sit amet
                  consetetur sadipscing elitre sed diam non umy eirmod tempor
                  invidunt ut labore.
                </p>
              </div>
            </div>
          </div>

          <div className="about-inner-box">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-4 col-md-6">
                <div
                  className="single-about-card"
                  data-aos="fade-up"
                  data-aos-delay="80"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  <h3>Our Vision</h3>
                  <p>
                    Lorem ipsum dolor sit amet consetetur sadip scing elitr sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyamei erat sed diam voluptua at vero eos et accusam et
                    justo duo.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div
                  className="single-about-card"
                  data-aos="fade-down"
                  data-aos-delay="70"
                  data-aos-duration="700"
                  data-aos-once="true"
                >
                  <h3>Our Mission</h3>
                  <p>
                    Lorem ipsum dolor sit amet consetetur sadip scing elitr sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyamei erat sed diam voluptua at vero eos et accusam et
                    justo duo.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div
                  className="single-about-card"
                  data-aos="fade-up"
                  data-aos-delay="80"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  <div className="card-image">
                    <Image
                      src="/images/about/about-4.jpg"
                      alt="image"
                      width={650}
                      height={350}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-circle-shape">
          <Image
            src="/images/about/about-circle.png"
            alt="image"
            width={150}
            height={150}
          />
        </div>
      </div>
    </>
  );
};

export default OurGoal;
