"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const WhoWeAre: React.FC = () => {
  return (
    <>
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <Image
                  src="/images/about/about-2.png"
                  alt="image"
                  width={750}
                  height={642}
                  data-aos="fade-down"
                  data-aos-delay="80"
                  data-aos-duration="800"
                  data-aos-once="true"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div
                className="about-content"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <span>WHO WE ARE</span>
                <h3>We Are All In One IT Solution & Technology Company</h3>
                <p>
                  We are leading technology solutions providing company all over
                  the world doing over 40 years lorem ipsum dolor sit amet.
                </p>
                <p>
                  We are leading technology solutions providing company all over
                  the world doing over 40 years. Lorem ipsum dolor sit amet
                  consetetur sadipscing elitr sed diam non umy eirmod tempor
                  invidunt ut labore.
                </p>
                <div className="about-btn">
                  <Link href="/about" className="default-btn">
                    Know More About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-shape-1">
          <Image
            src="/images/about/about-shape.png"
            alt="image"
            width={1920}
            height={612}
          />
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
