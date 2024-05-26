"use client";
  
import React from "react";
import Image from "next/image";

const ServicesDetailsContent: React.FC = () => {
  return (
    <>
      <div className="services-details-area ptb-100">
        <div className="container">
          <div className="services-details-desc">
            <div className="article-services-image">
              <Image
                src="/images/services-details/services-details-1.jpg"
                alt="image"
                width={1280}
                height={500}
              />
            </div>
            <div className="article-services-content">
              <h3>Software Development</h3>
              <p>
                Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam
                nonumy eirmod tempor invidunt ut labore dolore magna aliquyam
                erat sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum steter clita kasd gubergren no sea takimata
                sanctus est Lorem ipsum dolor sit amet.
              </p>
              <p>
                Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam
                nonumy eirmod tempor invidunt ut labore dolore magna aliquyam
                erat sed diam voluptua.
              </p>

              <ul className="list">
                <li>
                  <h4>What You Will Get Under This Service</h4>
                </li>
                <li>
                  <i className="ri-checkbox-circle-line"></i> Lorem ipsum dolor
                  sit amet consetetur sadipscing elitr sed diam nonumy eirmod
                  tempor invidunt ut
                </li>
                <li>
                  <i className="ri-checkbox-circle-line"></i> Dolor sit amet
                  consetetur sadipscing elitr sed diam nonumy eirmod tempor
                  invidunt.
                </li>
                <li>
                  <i className="ri-checkbox-circle-line"></i> Consetetur
                  sadipscing elitr sed diam nonumy eirmod tempor invidunt.
                </li>
                <li>
                  <i className="ri-checkbox-circle-line"></i> Sadipscing elitr
                  sed diam nonumy eirmod tempor invidunt ut labore dolore magna
                  aliquyam erat.
                </li>
                <li>
                  <i className="ri-checkbox-circle-line"></i> Sed diam nonumy
                  eirmod tempor invidunt ut labore dolore magna aliquyam erat.
                </li>
              </ul>
            </div>
            <div className="row">
              <div className="col-lg-7 col-sm-6">
                <div className="article-services-middle-image">
                  <Image
                    src="/images/services-details/services-details-2.jpg"
                    alt="image"
                    width={650}
                    height={400}
                  />
                </div>
              </div>
              <div className="col-lg-5 col-sm-6">
                <div className="article-services-middle-image">
                  <Image
                    src="/images/services-details/services-details-3.jpg"
                    alt="image"
                    width={455}
                    height={400}
                  />
                </div>
              </div>
            </div>

            <div className="article-services-content">
              <p>
                Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam
                nonumy eirmod tempor invidunt ut labore dolore magna aliquyam
                erat sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum steter clita kasd gubergren no sea takimata
                sanctus est Lorem ipsum dolor sit amet.
              </p>
              <p>
                Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam
                nonumy eirmod tempor invidunt ut labore dolore magna aliquyam
                erat sed diam voluptua.
              </p>
            </div>
            <div className="article-services-quote">
              <i className="ri-double-quotes-l"></i>
              <p>
                Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat sed diam voluptua.
              </p>

              <div className="quote-shape">
                <Image
                  src="/images/services-details/circle-shape.png"
                  alt="image"
                  width={150}
                  height={150}
                />
              </div>
            </div>
            <div className="article-services-content">
              <p>
                Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam
                nonumy eirmod tempor invidunt ut labore dolore magna aliquyam
                erat sed diam voluptua. At vero eos et accusam et justo duo
                dolores et ea rebum steter clita kasd gubergren no sea takimata
                sanctus est Lorem ipsum dolor sit amet.
              </p>
              <p>
                Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam
                nonumy eirmod tempor invidunt ut labore dolore magna aliquyam
                erat sed diam voluptua.
              </p>
            </div>
          </div>
        </div>

        <div className="services-details-shape">
          <Image
            src="/images/services-details/line-shape.png"
            alt="image"
            width={1920}
            height={612}
          />
        </div>
      </div>
    </>
  );
};

export default ServicesDetailsContent;
