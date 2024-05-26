"use client";
  
import React from "react";
import Image from "next/image";

const ProjectsDetailsContent: React.FC = () => {
  return (
    <>
      <div className="projects-details-area ptb-100">
        <div className="container">
          <div className="projects-details-desc">
            <div className="article-projects-with-info">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-6">
                  <div className="projects-info-image">
                    <Image
                      src="/images/projects-details/projects-details-1.jpg"
                      alt="image"
                      width={750}
                      height={580}
                    />

                    <div className="info-shape">
                      <Image
                        src="/images/projects-details/circle-shape.png"
                        alt="image"
                        width={150}
                        height={150}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-5 col-md-6">
                  <div className="projects-info-content">
                    <span>PROJECT DETAILS</span>
                    <h3>Messaging App</h3>

                    <ul className="info-list">
                      <li>
                        <span>Category:</span> App Development
                      </li>
                      <li>
                        <span>Client:</span> Solit IT Group
                      </li>
                      <li>
                        <span>Duration:</span> August 2020 - January 2022
                      </li>
                      <li>
                        <span>Location:</span> Australia
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="article-projects-content">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                  <div className="content">
                    <h3>Problems We Faced</h3>
                    <p>
                      Lorem ipsum dolor sit amet consetetur sadip scing elitr
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyamei erat sed diam voluptua at vero eos et
                      accusam et justo duo.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="image">
                    <Image
                      src="/images/projects-details/projects-details-2.jpg"
                      alt="image"
                      width={750}
                      height={350}
                    />
                  </div>
                </div>
              </div>
              <ul className="projects-list">
                <li>
                  <h4>Our Steps To Solve The Problems</h4>
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
            <div className="article-projects-image">
              <Image
                src="/images/projects-details/projects-details-3.jpg"
                alt="image"
                width={1250}
                height={750}
              />
            </div>
            <div className="article-projects-text">
              <h3>How We Achieve Success</h3>
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
            <div className="article-projects-quote">
              <i className="ri-double-quotes-l"></i>
              <p>
                Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat sed diam voluptua.
              </p>

              <div className="quote-shape">
                <Image
                  src="/images/projects-details/circle-shape.png"
                  alt="image"
                  width={150}
                  height={150}
                />
              </div>
            </div>
            <div className="article-projects-text">
              <p>
                Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam
                nonumy eirmod tempor invidunt ut labore dolore magna aliquyam
                erat sed diam voluptua.
              </p>
            </div>
          </div>
        </div>

        <div className="projects-details-shape">
          <Image
            src="/images/projects-details/line-shape.png"
            alt="image"
            width={1920}
            height={612}
          />
        </div>
      </div>
    </>
  );
};

export default ProjectsDetailsContent;
