"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const LatestProjects: React.FC = () => {
  return (
    <>
      <div className="projects-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>PROJECTS</span>
            <h2>
              Our Latest <b>Incredible</b> Client&apos;s Projects
            </h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div
                className="single-projects-item"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div className="projects-image">
                  <Link href="/projects/details">
                    <Image
                      src="/images/projects-two/projects-1.jpg"
                      alt="image"
                      width={750}
                      height={500}
                    />
                  </Link>
                </div>
                <div className="projects-content">
                  <Link href="#" className="category">
                    Animation
                  </Link>
                  <h3>
                    <Link href="/projects/details">3D Animation</Link>
                  </h3>
                  <Link
                    href="/projects/details"
                    className="projects-btn"
                  >
                    View More
                  </Link>
                </div>
              </div>

              <div
                className="single-projects-item"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div className="projects-image">
                  <Link href="/projects/details">
                    <Image
                      src="/images/projects-two/projects-2.jpg"
                      alt="image"
                      width={750}
                      height={500}
                    />
                  </Link>
                </div>
                <div className="projects-content">
                  <Link href="#" className="category">
                    Software
                  </Link>
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
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="single-projects-item"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div className="projects-image">
                  <Link href="/projects/details">
                    <Image
                      src="/images/projects-two/projects-3.jpg"
                      alt="image"
                      width={750}
                      height={500}
                    />
                  </Link>
                </div>
                <div className="projects-content">
                  <Link href="#" className="category">
                    Web Design
                  </Link>
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
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="single-projects-item"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div className="projects-image">
                  <Link href="/projects/details">
                    <Image
                      src="/images/projects-two/projects-4.jpg"
                      alt="image"
                      width={750}
                      height={500}
                    />
                  </Link>
                </div>
                <div className="projects-content">
                  <Link href="#" className="category">
                    Mobile App
                  </Link>
                  <h3>
                    <Link href="/projects/details">Messaging App</Link>
                  </h3>
                  <Link
                    href="/projects/details"
                    className="projects-btn"
                  >
                    View More
                  </Link>
                </div>
              </div>

              <div
                className="single-projects-item"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div className="projects-image">
                  <Link href="/projects/details">
                    <Image
                      src="/images/projects-two/projects-5.jpg"
                      alt="image"
                      width={750}
                      height={500}
                    />
                  </Link>
                </div>
                <div className="projects-content">
                  <Link href="#" className="category">
                    Development
                  </Link>
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
            </div>
          </div>
        </div>

        <div className="projects-bg-shape-1">
          <Image
            src="/images/projects/projects-bg-shape.png"
            alt="image"
            width={1920}
            height={612}
          />
        </div>
      </div>
    </>
  );
};

export default LatestProjects;
