import React from "react";
import "../css/Header.css";

export default function Header() {
  return (
    <div class="header">
      <a href="#default" class="logo">
        <img classname="logo-image" src="../images/iacsdlogo.png" alt="myLogo" />
      </a>
      <h5 className="dy">Dr. D. Y. Patil Pratishthan's</h5>
      <h2 className="dy">
        Institute for Advanced Computing and Software Development
      </h2>
    </div>
  );
}
