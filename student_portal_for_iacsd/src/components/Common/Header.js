import React from "react";
import "./css/Header.css";
import iacsd from "./images/iacsdlogo2.jpg";
import cdac from "./images/cdaclogo1.jpg";
import { Col, Row } from "reactstrap";

export default function Header() {
  return (
    <Row className="header">
      <Col md={1}>
        <span className="iacsd-logo">
          <img className="iacsd-logo" src={iacsd} alt="myLogo" />
        </span>
      </Col>
      <Col md={10}>
        <h5 className="dy">Dr. D. Y. Patil Pratishthan's</h5>
        <h2 className="iacsd">
          <b>Institute for Advanced Computing and Software Development</b>
        </h2>
      </Col>
      <Col md={1}>
        <span className="cdac-logo">
          <img src={cdac} alt="myLogo" width="200" height="100" />
        </span>
      </Col>
    </Row>
    
  );
}
