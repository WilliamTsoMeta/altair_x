import React from "react";
import Link from "next/link";
import CTO from "@/components/Common/CTO"; 
import Image from "next/image";

export default function NotFound() {
  return (
    <>
      <div className="error-area ptb-100">
        <div className="container">
          <div className="error-content">
            <Image
              src="/images/error.png"
              alt="image"
              width={500}
              height={198}
            />
            <h3>Error 404 : Page Not Found</h3>
            <p>
              The page you are looking for might have been removed had its name
              changed or is temporarily unavailable.
            </p>
            <Link href="/" className="default-btn">
              Back to Homepage
            </Link>
          </div>
        </div>
      </div>

      <CTO /> 
    </>
  );
}
