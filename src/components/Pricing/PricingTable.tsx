"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const PricingTable: React.FC = () => {
  return (
    <>
      <div className="pricing-area with-black-background pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>PRICING</span>
            <h2>
              Our <b>Pricing</b> For All Type Of Technology Services
            </h2>
            <p>
              We are leading technology solutions providing company all over the
              world doing over 40 years lorem ipsum dolor sit amet.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div
                className="single-pricing-card"
                data-aos="fade-up"
                data-aos-delay="70"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <h3>Startup</h3>
                <div className="price">
                  $19 <span>/ month</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consetetur sadi scing elitr sed
                  diam nonumy eirmod.
                </p>

                <ul className="pricing-list">
                  <li>
                    <i className="ri-check-fill"></i> Lorem ipsum dolor.
                  </li>
                  <li>
                    <i className="ri-check-fill"></i> Sit amet consetetur set a
                    ledip.
                  </li>
                </ul>
                <div className="pricing-btn">
                  <Link href="/contact" className="default-btn">
                    Choose Plan
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="single-pricing-card"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="1100"
                data-aos-once="true"
              >
                <h3>Basic</h3>
                <div className="price">
                  $49 <span>/ month</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consetetur sadi scing elitr sed
                  diam nonumy eirmod.
                </p>

                <ul className="pricing-list">
                  <li>
                    <i className="ri-check-fill"></i> Lorem ipsum dolor.
                  </li>
                  <li>
                    <i className="ri-check-fill"></i> Sit amet consetetur set a
                    ledip.
                  </li>
                  <li>
                    <i className="ri-check-fill"></i> Lorems Sit ledip ipsum
                    dolor.
                  </li>
                </ul>
                <div className="pricing-btn">
                  <div className="pricing-btn">
                    <Link href="/contact" className="default-btn">
                      Choose Plan
                    </Link>
                  </div>
                </div>
                <div className="most-popular">
                  <span>Most Popular</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="single-pricing-card"
                data-aos="fade-up"
                data-aos-delay="90"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <h3>Advanced</h3>
                <div className="price">
                  $79 <span>/ month</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consetetur sadi scing elitr sed
                  diam nonumy eirmod.
                </p>

                <ul className="pricing-list">
                  <li>
                    <i className="ri-check-fill"></i> Lorem ipsum dolor.
                  </li>
                  <li>
                    <i className="ri-check-fill"></i> Sit amet consetetur set a
                    ledip.
                  </li>
                  <li>
                    <i className="ri-check-fill"></i> Lorems Sit ledip ipsum
                    dolor.
                  </li>
                  <li>
                    <i className="ri-check-fill"></i> Lorem ipsum dolor.
                  </li>
                </ul>
                <div className="pricing-btn">
                  <div className="pricing-btn">
                    <Link href="/contact" className="default-btn">
                      Choose Plan
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Image */}
        <div className="pricing-bg-shape-1">
          <Image
            src="/images/pricing/pricing-bg-shape.png"
            alt="image"
            width={1920}
            height={612}
          />
        </div>
        <div className="pricing-shape-1">
          <Image
            src="/images/pricing/pricing-shape-1.png"
            alt="image"
            width={40}
            height={40}
          />
        </div>
        <div className="pricing-shape-2">
          <Image
            src="/images/pricing/pricing-shape-2.png"
            alt="image"
            width={140}
            height={125}
          />
        </div>
      </div>
    </>
  );
};

export default PricingTable;
