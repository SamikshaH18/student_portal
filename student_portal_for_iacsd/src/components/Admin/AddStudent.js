import React from "react";
import "../App.css";
import "../../javascript/states";

export default function AddStudent() {
  return (
    <div className="myFormMargins">
      <div className="form-margin">
        <h2 className="addStudent">
          <b>Add New Student</b>
        </h2>
        <hr className="topHorizontalRule" />
        <form className="row g-3">
          <div className="col-md-4">
            <label htmlFor="firstName" className="form-label">
              First name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="Allen"
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="lastName" className="form-label">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Walker"
              required
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="gender" className="form-label">
              Gender
            </label>
            <select className="form-select" id="gender" required>
              <option selected disabled value="">
                Choose
              </option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="loginId" className="form-label">
              Login ID
            </label>
            <div className="input-group">
              <span className="input-group-text" id="loginId">
                @
              </span>
              <input
                type="text"
                className="form-control"
                id="validationDefaultLoginId"
                aria-describedby="inputGroupPrepend2"
                required
              />
            </div>
          </div>

          <div className="col-md-4">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <div className="input-group">
              <span className="input-group-text" id="email">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                </svg>
              </span>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="inputGroupPrepend2"
                required
              />
            </div>
          </div>

          <div className="col-md-3">
            <label htmlFor="dob" className="form-label">
              Date Of Birth
            </label>
            <input type="date" className="form-control" id="dob" required />
          </div>

          <div className="col-md-3">
            <label htmlFor="course" className="form-label">
              Course
            </label>
            <select className="form-select" id="course" required>
              <option selected disabled value="">
                Choose Course
              </option>
              <option>PG-DAC</option>
              <option disabled>PG-DBDA</option>
              <option disabled>PG-DITISS</option>
            </select>
          </div>
          <div className="col-md-3">
            <label htmlFor="startDate" className="form-label">
              Starting Date
            </label>
            <input
              type="date"
              className="form-control"
              id="startDate"
              required
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="mentor" className="form-label">
              Mentor
            </label>
            <select className="form-select" id="mentor" required>
              <option selected disabled value="">
                Choose Mentor
              </option>
              <option>Mr. Narendra Pawar</option>
              <option>Mrs. Vaishali Chikhalkar</option>
              <option>Mrs. Sonali Nikam</option>
              <option>Mrs. Monica Jadhav</option>
              <option>Mrs. Snehal Sapkal</option>
              <option>Mrs. Shilpa Pawale</option>
              <option>Mrs. Pratiksha Patil</option>
              <option>Mr. Karan & Mrs. Manjiri</option>
            </select>
          </div>
          <hr className="middleHr" />
          <div className="col-md-6">
            <label htmlFor="prn" className="form-label">
              PRN Number
            </label>
            <input type="number" className="form-control" id="prn" required />
          </div>

          <div className="col-md-6">
            <label htmlFor="rollNo" className="form-label">
              Roll Number
            </label>
            <input
              type="number"
              className="form-control"
              id="rollNo"
              required
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="adharNo" className="form-label">
              Adhaar Number
            </label>
            <input
              type="number"
              className="form-control"
              id="adharNo"
              max="999999999999"
              required
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="studentPhoto" className="form-label">
              Upload Student Photo
            </label>
            <input
              type="file"
              className="form-control"
              id="studentPhoto"
              accept=".jpeg,.pdf, .jpg"
              required
            />
          </div>

          <select
            onChange="print_city('state', this.selectedIndex);"
            id="sts"
            name="stt"
            className="form-control"
            required
          ></select>
          <select id="state" className="form-control" required></select>
          <script language="javascript">print_state("sts");</script>

          <div className="col-md-4">
            <label htmlFor="studentMobile" className="form-label">
              Student Mobile
            </label>
            <div className="input-group">
              <span className="input-group-text" id="studentMobile">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-phone"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
              </span>
              <input
                type="tel"
                pattern="^\d{10}$"
                className="form-control"
                id="studentMobile"
                aria-describedby="inputGroupPrepend2"
                placeholder="Enter 10 digit Number"
                required
              />
            </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="parentMobile" className="form-label">
              Parent Mobile
            </label>
            <div className="input-group">
              <span className="input-group-text" id="parentMobile">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-phone"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
              </span>
              <input
                type="tel"
                pattern="^\d{10}$"
                className="form-control"
                id="parentMobile"
                aria-describedby="inputGroupPrepend2"
                placeholder="Enter 10 digit Number"
                required
              />
            </div>
          </div>
          <hr className="middleHr"/>

          <div className="col-12">
            <button className="btn btn-primary" type="submit" >
              Add Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
