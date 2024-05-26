"use client";
  
import React from "react"; 
import Image from "next/image";

const GalleryImage: React.FC = () => {
  return (
    <>
      <div className="gallery-area pt-100 pb-75">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="single-gallery-item">
                <Image
                  src="/images/gallery/gallery-1.jpg"
                  alt="image"
                  width={750}
                  height={500}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="single-gallery-item">
                <Image
                  src="/images/gallery/gallery-2.jpg"
                  alt="image"
                  width={750}
                  height={500}
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-gallery-item">
                <Image
                  src="/images/gallery/gallery-3.jpg"
                  alt="image"
                  width={750}
                  height={500}
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-gallery-item">
                <Image
                  src="/images/gallery/gallery-4.jpg"
                  alt="image"
                  width={750}
                  height={500}
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-gallery-item">
                <Image
                  src="/images/gallery/gallery-5.jpg"
                  alt="image"
                  width={750}
                  height={500}
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-gallery-item">
                <Image
                  src="/images/gallery/gallery-6.jpg"
                  alt="image"
                  width={750}
                  height={500}
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-gallery-item">
                <Image
                  src="/images/gallery/gallery-7.jpg"
                  alt="image"
                  width={750}
                  height={500}
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-gallery-item">
                <Image
                  src="/images/gallery/gallery-8.jpg"
                  alt="image"
                  width={750}
                  height={500}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="single-gallery-item">
                <Image
                  src="/images/gallery/gallery-9.jpg"
                  alt="image"
                  width={750}
                  height={500}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="single-gallery-item">
                <Image
                  src="/images/gallery/gallery-10.jpg"
                  alt="image"
                  width={750}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryImage;
