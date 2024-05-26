"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

const IntroVideo: React.FC = () => {
  // if toggler is updated when lightbox is closed it will open it
  // if toggler is updated when lightbox is opened it will close it
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=bk7McNUjWgw"]}
      />

      <div className="video-area">
        <div className="container">
          <div
            className="video-view-content"
            data-aos="fade-up"
            data-aos-delay="80"
            data-aos-duration="800"
            data-aos-once="true"
          >
            <div className="video-image">
              <Image
                src="/images/video/video.jpg"
                alt="image"
                width={1850}
                height={1050}
              />
            </div>

            <button className="video-btn" onClick={() => setToggler(!toggler)}>
              <i className="ri-play-mini-fill"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroVideo;
