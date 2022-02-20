import React from "react";
import "../images/iacsdlogo.png";

export default function Header() {
  return (
    <div>
      <span className="header-top">
      {/* <div class="col-md-2" align="left">
        <a href="index.php"><img src="../images/iacsdlogo.png" alt=""  title="" /></a>
      </div> */}
        <div className="col-md-8 heading">
          <span className="dy">Dr. D. Y. Patil Pratishthan's </span>
          <span class="iacsd">
            <strong>
              <h3>Institute for Advanced Computing and Software Development</h3>
            </strong>
          </span>
        </div>
      </span>
      {/* <div>
          <image src="./images/iacsdlogo"/>
        <span className="dy">Dr. D. Y. Patil Pratishthan's </span>
        <br />
        <span class="iacsd">
          <strong>
            Institute for Advanced Computing and Software Development
          </strong>
        </span>
      </div> */}
    </div>
  );
}
