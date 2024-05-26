"use client";
  
import React from "react";
import Image from "next/image";

const WorkingProcess: React.FC = () => {
  return (
    <>
      <div className="choose-area pt-100 pb-75">
        <div className="container">
          <div className="section-title section-style-two">
            <div className="section-bg-text">PROCESS</div>
            <span>WORK PROCESS</span>
            <h2>We Follow Four Simple Steps</h2>
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
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div className="choose-image">
                  <Image
                    src="/images/choose/choose-1.png"
                    alt="image"
                    width={140}
                    height={150}
                  />
                  <div className="number">1</div>
                </div>
                <div className="choose-content">
                  <h3>Discussion</h3>
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
                data-aos-duration="600"
                data-aos-once="true"
              >
                <div className="choose-image">
                  <Image
                    src="/images/choose/choose-2.png"
                    alt="image"
                    width={140}
                    height={150}
                  />
                  <div className="number">2</div>
                </div>
                <div className="choose-content">
                  <h3>Testing & Trying</h3>
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
                data-aos-duration="700"
                data-aos-once="true"
              >
                <div className="choose-image">
                  <Image
                    src="/images/choose/choose-3.png"
                    alt="image"
                    width={140}
                    height={150}
                  />
                  <div className="number">3</div>
                </div>
                <div className="choose-content">
                  <h3>Ideas & Concept</h3>
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
                data-aos-duration="800"
                data-aos-once="true"
              >
                <div className="choose-image">
                  <Image
                    src="/images/choose/choose-4.png"
                    alt="image"
                    width={140}
                    height={150}
                  />
                  <div className="number">4</div>
                </div>
                <div className="choose-content">
                  <h3>Execute & Install</h3>
                  <p>
                    Lorem ipsum dolor sit amet conset sadipscing elitr sed diam
                    nonumy eirm od tempor invidunt ut labore.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkingProcess;
