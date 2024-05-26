"use client";
  
import React from "react";
import Image from "next/image";

const TeamMember: React.FC = () => {
  return (
    <>
      <div className="team-area pt-100 pb-75">
        <div className="container">
          <div className="section-title section-style-two">
            <div className="section-bg-text">TEAM</div>
            <span>TEAM MEMBER</span>
            <h2>Our Expert IT Consultants</h2>
            <p>
              We are leading technology solutions providing company all over the
              world doing over 40 years lorem ipsum dolor sit amet.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div className="single-team-card">
                <div className="team-image">
                  <Image
                    src="/images/team/team-1.png"
                    alt="image"
                    width={285}
                    height={305}
                  />

                  <ul className="team-social">
                    <li>
                      <a
                        href="https://www.facebook.com/EnvyTheme"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-facebook-fill"></i>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://twitter.com/?lang=en"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-twitter-fill"></i>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-instagram-line"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3>Johny Smith</h3>
                  <span>President & CEO</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-team-card">
                <div className="team-image">
                  <Image
                    src="/images/team/team-2.png"
                    alt="image"
                    width={285}
                    height={305}
                  />

                  <ul className="team-social">
                    <li>
                      <a
                        href="https://www.facebook.com/EnvyTheme"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-facebook-fill"></i>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://twitter.com/?lang=en"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-twitter-fill"></i>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-instagram-line"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3>Jennifer Walter</h3>
                  <span>Product Manager</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-team-card">
                <div className="team-image">
                  <Image
                    src="/images/team/team-3.png"
                    alt="image"
                    width={285}
                    height={305}
                  />

                  <ul className="team-social">
                    <li>
                      <a
                        href="https://www.facebook.com/EnvyTheme"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-facebook-fill"></i>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://twitter.com/?lang=en"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-twitter-fill"></i>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-instagram-line"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3>Jems Rodrigez</h3>
                  <span>UI UX Designer</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-team-card">
                <div className="team-image">
                  <Image
                    src="/images/team/team-4.png"
                    alt="image"
                    width={285}
                    height={305}
                  />

                  <ul className="team-social">
                    <li>
                      <a
                        href="https://www.facebook.com/EnvyTheme"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-facebook-fill"></i>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://twitter.com/?lang=en"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-twitter-fill"></i>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-instagram-line"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3>Deren Bravoo</h3>
                  <span>Web Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMember;
