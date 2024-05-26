"use client";
  
import React from "react";
import Image from "next/image";

const CareerDetailsContent: React.FC = () => {
  return (
    <>
      <div className="career-details-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-12">
              <div className="career-details-desc">
                <h3>Team Lead - Digital Marketing</h3>
                <div className="career-content">
                  <h4>Job Description</h4>
                  <p>
                    Lorem ipsum dolor sit amet consetetur sadipscing elitr sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren no
                    sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </p>
                </div>

                <div className="career-content">
                  <h4>Roles & Responsibilities:</h4>
                  <p>
                    Lorem ipsum dolor sit amet consetetur sadipscing elitr sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum.
                  </p>

                  <ul className="list">
                    <li>Stet clita kasd gubergren no sea takimata sanctus.</li>
                    <li>
                      Lorem ipsum dolor sit amet lorem ipsum dolor sit amet.
                    </li>
                    <li>
                      Consetetur sadipscing elitr sed diam nonumy eirmod tempor.
                    </li>
                    <li>Aliquyam erat sed diam voluptua.</li>
                  </ul>
                </div>

                <div className="career-content">
                  <h4>Qualifications:</h4>
                  <p>
                    Lorem ipsum dolor sit amet consetetur sadipscing elitr sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum.
                  </p>

                  <ul className="list">
                    <li>Stet clita kasd gubergren no sea takimata sanctus.</li>
                    <li>
                      Lorem ipsum dolor sit amet lorem ipsum dolor sit amet.
                    </li>
                    <li>
                      Consetetur sadipscing elitr sed diam nonumy eirmod tempor.
                    </li>
                    <li>Aliquyam erat sed diam voluptua.</li>
                  </ul>
                </div>

                <div className="career-content">
                  <h4>Experience Requirements:</h4>
                  <p>
                    Lorem ipsum dolor sit amet consetetur sadipscing elitr sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum.
                  </p>

                  <ul className="list">
                    <li>Stet clita kasd gubergren no sea takimata sanctus.</li>
                    <li>
                      Lorem ipsum dolor sit amet lorem ipsum dolor sit amet.
                    </li>
                    <li>
                      Consetetur sadipscing elitr sed diam nonumy eirmod tempor.
                    </li>
                  </ul>
                </div>

                <div className="career-content">
                  <h4>Benefits</h4>
                  <p>
                    Lorem ipsum dolor sit amet consetetur sadipscing elitr sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum.
                  </p>

                  <ul className="list">
                    <li>
                      Consetetur sadipscing elitr sed diam nonumy eirmod tempor
                    </li>
                    <li>Stet clita kasd gubergren no sea takimata sanctus</li>
                    <li>
                      Lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                    </li>
                    <li>Aliquyam erat sed diam voluptua</li>
                    <li>
                      Consetetur sadipscing elitr sed diam nonumy eirmod tempor
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                    </li>
                  </ul>
                </div>

                <div className="career-details-image">
                  <Image
                    src="/images/career-details.jpg"
                    alt="image"
                    width={1250}
                    height={750}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-12">
              <div className="career-details-info">
                <h3>Job Overview</h3>

                <ul className="list">
                  <li>
                    <span>Location:</span> United Kingdom
                  </li>
                  <li>
                    <span>Job Title:</span> Project Manager
                  </li>
                  <li>
                    <span>Hours:</span> 50h / Week
                  </li>
                  <li>
                    <span>Rate:</span> $15 - $25 / Hour
                  </li>
                  <li>
                    <span>Salary:</span> $45k - $55k
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerDetailsContent;
