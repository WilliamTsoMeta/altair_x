"use client";
  
import React from "react";
import Image from "next/image";

const CTO: React.FC = () => {
  return (
    <>
      <div className="overview-area pt-100 pb-75">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="overview-card">
                <h3>Call Us</h3>
                <span>
                  <a href="tel:9901234567">+990-123-4567</a>
                </span>

                <div className="overview-shape">
                  <Image
                    src="/images/overview/overview-shape.png"
                    alt="image"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="overview-card">
                <h3>Email Us</h3>
                <span>
                  <a href="mailto:hellostax@gmail.com">hellostax@gmail.com</a>
                </span>

                <div className="overview-shape">
                  <Image
                    src="/images/overview/overview-shape.png"
                    alt="image"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="overview-card">
                <h3>Tech Support</h3>
                <span>
                  <a href="tel:15143125678">+1 (514) 312-5678</a>
                </span>

                <div className="overview-shape">
                  <Image
                    src="/images/overview/overview-shape.png"
                    alt="image"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="overview-card">
                <h3>Visit Us</h3>
                <span>413 North Las Vegas, NV 89032</span>

                <div className="overview-shape">
                  <Image
                    src="/images/overview/overview-shape.png"
                    alt="image"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CTO;
