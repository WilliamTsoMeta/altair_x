"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const ServicesCard: React.FC = () => {
  return (
    <>
      <div className="services-area bg-with-14042C-color ptb-100">
        <div className="container">
          <div className="section-title">
            <span>SERVICES</span>
            <h2>
              We Provide the Best Quality <b>Services</b>
            </h2>
            <p>
              We are technology solutions providing company all over the world
              doing over 40 years. lorem ipsum dolor sit amet.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
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
                    Lorem ipsum dolor sit amet con setetur sadipscing elitr sed…
                  </p>
                  <Link
                    href="/services/details"
                    className="services-btn"
                  >
                    View More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
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
                    Lorem ipsum dolor sit amet con setetur sadipscing elitr sed…
                  </p>
                  <Link
                    href="/services/details"
                    className="services-btn"
                  >
                    View More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
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
                    Lorem ipsum dolor sit amet con setetur sadipscing elitr sed…
                  </p>
                  <Link
                    href="/services/details"
                    className="services-btn"
                  >
                    View More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
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
                    Lorem ipsum dolor sit amet con setetur sadipscing elitr sed…
                  </p>
                  <Link
                    href="/services/details"
                    className="services-btn"
                  >
                    View More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="services-all-btn">
            <Link href="/services/services" className="default-btn">
              Explore All Services
            </Link>
          </div>
        </div>

        {/* Shape Images */}
        <div className="services-shape-1">
          <Image
            src="/images/services/services-shape-1.png"
            alt="image"
            width={230}
            height={272}
          />
        </div>
        <div className="services-shape-2">
          <Image
            src="/images/services/services-shape-2.png"
            alt="image"
            width={140}
            height={125}
          />
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
