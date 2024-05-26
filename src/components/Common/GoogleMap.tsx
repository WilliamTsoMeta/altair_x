"use client";

import React from 'react'

const GoogleMap: React.FC = () => {
  return (
    <>
      <div className="container ptb-100">
        <div className="map-location">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102948.35266648312!2d-115.15540073403864!3d36.26047650441708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c2b00ad43d33%3A0x22c7fa13f5acf526!2sNorth%20Las%20Vegas%2C%20NV%2C%20USA!5e0!3m2!1sen!2sbd!4v1639919075838!5m2!1sen!2sbd" 
            width="100%" 
            height="450" 
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  )
}

export default GoogleMap
