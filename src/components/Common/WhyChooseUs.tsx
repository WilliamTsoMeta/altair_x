"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const WhyChooseUs: React.FC = () => {
  return (
    <>
      <div className="choose-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>WHY CHOOSE US</span>
            <h2>
              We Help You To <b>Increase</b> Your Sale Through Solutions
            </h2>
            <p>
              We are leading technology solutions providing company all over the
              world doing over 40 years lorem ipsum dolor sit amet.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-choose-card"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <div className="choose-image">
                  <Link href="/services/details">
                    <Image
                      src="/images/choose/choose-1.png"
                      alt="image"
                      width={140}
                      height={150}
                    />
                  </Link>
                </div>
                <div className="choose-content">
                  <h3>
                    <Link href="/services/details">Mobile Apps</Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet conset sadipscing elitr sed diam
                    nonumy eirm od tempor invidunt ut labore.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div
                className="single-choose-card"
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <div className="choose-image">
                  <Link href="/services/details">
                    <Image
                      src="/images/choose/choose-2.png"
                      alt="image"
                      width={140}
                      height={150}
                    />
                  </Link>
                </div>
                <div className="choose-content">
                  <h3>
                    <Link href="/services/details">
                      Branding Strategy
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet conset sadipscing elitr sed diam
                    nonumy eirm od tempor invidunt ut labore.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div
                className="single-choose-card"
                data-aos="fade-up"
                data-aos-delay="70"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <div className="choose-image">
                  <Link href="/services/details">
                    <Image
                      src="/images/choose/choose-3.png"
                      alt="image"
                      width={140}
                      height={150}
                    />
                  </Link>
                </div>
                <div className="choose-content">
                  <h3>
                    <Link href="/services/details">Graphic Design</Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet conset sadipscing elitr sed diam
                    nonumy eirm od tempor invidunt ut labore.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div
                className="single-choose-card"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <div className="choose-image">
                  <Link href="/services/details">
                    <Image
                      src="/images/choose/choose-4.png"
                      alt="image"
                      width={140}
                      height={150}
                    />
                  </Link>
                </div>
                <div className="choose-content">
                  <h3>
                    <Link href="/services/details">
                      Search Optimization
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet conset sadipscing elitr sed diam
                    nonumy eirm od tempor invidunt ut labore.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="choose-shape-1">
          <Image
            src="/images/choose/choose-shape.png"
            alt="image"
            width={1920}
            height={612}
          />
        </div>
        <div className="choose-shape-2">
          <Image
            src="/images/choose/choose-shape-2.png"
            alt="image"
            width={1920}
            height={612}
          />
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
