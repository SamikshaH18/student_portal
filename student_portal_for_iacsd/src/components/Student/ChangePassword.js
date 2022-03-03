import React from "react";

import "./css/ChangePassword.css";
import checkForm from "./javascript/ChangePassword";
export default function ChangePassword() {
  return (
    <div className=".change-pass-div-margin">
      <form method="post" onSubmit={checkForm}>
        <div className="box box-primary">
          <div className="box-header dy">
            <h2 className="page-header">
              <i className="fa fa-lock"></i> Change Password
            </h2>
          </div>

          <div className="box-body change-pass-div-margin">
            <div className="row">
              <div className="col-xs-12 col-sm-3 col-md-3">
                <label>Old Password</label>
              </div>
              <div className="col-xs-12 col-sm-3 col-md-3">
                <div className="input-group">
                  <div className="input-group-addon">
                    <i className="fa fa-lock"></i>
                  </div>
                  <input
                    className="form-control"
                    id="oldPassword"
                    name="oldPassword"
                    placeholder="Enter the Old Password"
                    type="password"
                  />
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-xs-12 col-sm-3 col-md-3">
                <label>New Password</label>
              </div>
              <div className="col-xs-12 col-sm-3 col-md-3">
                <div className="input-group">
                  <div className="input-group-addon">
                    <i className="fa fa-lock"></i>
                  </div>
                  <input
                    className="form-control"
                    id="newPassword"
                    name="newPassword"
                    placeholder="Enter the New Password"
                    type="password"
                  />
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-xs-12 col-sm-3 col-md-3">
                <label>Confirm Password</label>
              </div>
              <div className="col-xs-12 col-sm-3 col-md-3">
                <div className="input-group">
                  <div className="input-group-addon">
                    <i className="fa fa-lock"></i>
                  </div>
                  <input
                    className="form-control"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Re-enter the New Password"
                    type="password"
                  />
                </div>
              </div>
              <br />
              <br />
              <div className="pull-right  change-pass-div-margin">
                <button
                  name="Submit"
                  value="Save"
                  className="btn btn-success"
                  onclick={checkForm}
                >
                  Save
                </button>
                <button
                  type="reset"
                  name="Reset"
                  value="Clear"
                  className="btn btn-danger"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
