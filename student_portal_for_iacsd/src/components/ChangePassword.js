import React from "react";
import { Container } from "reactstrap";

import "../javascript/ChangePassword";
export default function ChangePassword() {
  return (
    <span className="change-pass-container">
    <div className="card card-outline-secondary">
    <div className="card-header">
        <h3 className="mb-0">Change Password</h3>
    </div>
    <div className="card-body">
        <form className="form" role="form" autocomplete="off">
            <div className="form-group">
                <label htmlFor="inputPasswordOld">Current Password</label>
                <input type="password" className="form-control" id="inputPasswordOld" required=""/>
            </div>
            <div className="form-group">
                <label htmlFor="inputPasswordNew">New Password</label>
                <input type="password" className="form-control" id="inputPasswordNew" required=""/>
                <span className="form-text small text-muted">
                        The password must be 8-20 characters, and must <em>not</em> contain spaces.
                    </span>
            </div>
            <div className="form-group">
                <label htmlFor="inputPasswordNewVerify">Verify</label>
                <input type="password" className="form-control" id="inputPasswordNewVerify" required=""/>
                <span className="form-text small text-muted">
                        To confirm, type the new password again.
                    </span>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-success btn-lg float-right">Save</button>
            </div>
        </form>
    </div>
</div>
</span>
  );
}
