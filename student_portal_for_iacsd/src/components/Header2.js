import React from "react";
import "../css/Header.css";
import iacsd from "../images/iacsdlogo2.jpg";
import cdac from "../images/cdaclogo1.jpg";
import { Col, Row } from "reactstrap";
export default function Header() {
  return (
    <div className="header">
      <span className="logo-image">
        <img className="logo-image" src={cdac} alt="myLogo" />

        <img className="logo-image" src={iacsd} alt="myLogo" />
      </span>
      <h5 className="dy">Dr. D. Y. Patil Pratishthan's</h5>
      <h2 className="iacsd">
        <b>Institute for Advanced Computing and Software Development</b>
      </h2>
    </div>
  );
}
