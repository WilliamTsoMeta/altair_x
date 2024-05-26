"use client";

import React, { useState, useEffect } from "react";

const ScrollToTop: React.FC = () => {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 150) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <>
      {showButton && (
        <div onClick={scrollToTop} className="scroll-to-top">
          <i className="ri-arrow-up-s-line"></i>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
