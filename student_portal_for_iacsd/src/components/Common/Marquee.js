import React from "react";
import "./css/Marquee.css";
export default function Marquee() {
  return (
    <div className="marquee-external-div">
      <div className="marquee-body">
        <div className="ticker">
          <div className="news">
            <marquee className="news-content">
              <p>
                Welcome To IACSD ! Institute for Advanced Computing and Software
                Development Enquiry : ittrg@iacsd.com or Call : +91 9607690988 /
                +91 9699050370{" "}
              </p>
            </marquee>
          </div>
        </div>
      </div>
    </div>
  );
}
