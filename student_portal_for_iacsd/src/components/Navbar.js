import React from "react";
import "../css/Navbar.css";
import { ListGroup, ListGroupItem } from "reactstrap";
import {Link} from "react-router-dom";

export default function () {
  return (
    <ListGroup className="vertical-menu">
      <Link className="list-group-item list-group-item-action active" tag="a" to="/" action>Dashboard</Link>
      <Link className="list-group-item List-group-item-action" tag="a" to="/view-info" action>View Profile</Link>
      <Link className="list-group-item list-group-item-action" tag="a" to="/TimeTable" action>Timetable</Link>
      <Link className="list-group-item list-group-item-action" tag="a" to="/Attendance" action>Attendance</Link>
      <Link className="list-group-item list-group-item-action" tag="a" to="/MockTest" action>Mock Test</Link>
      <Link className="list-group-item list-group-item-action" tag="a" to="/EndModule" action>End Module</Link>
      <Link className="list-group-item list-group-item-action" tag="a" to="/Assignment" action>Assignments</Link>
      <Link className="list-group-item list-group-item-action" tag="a" to="/CCEE" action>CCEE</Link>
      <Link className="list-group-item list-group-item-action" tag="a" to="/Project" action>Project</Link>
      <Link className="list-group-item list-group-item-action" tag="a" to="/Help" action>Help</Link>
      <Link className="list-group-item list-group-item-action" tag="a" to="/ChangePassword" action>Change Password</Link>
      <Link className="list-group-item list-group-item-action" tag="a" to="/Logout" action>Logout</Link>
    </ListGroup>



      // <ListGroup className="vertical-menu">
      //   <ToastContainer />
      //   <Link href="#" class="active">
      //     Dashboard
      //   </Link>
      //   <Link to="#">View Profile</Link>
      //   <Link to="#">Timetable</Link>
      //   <Link to="#">Attendance</Link>
      //   <Link to="#">Mock Test</Link>
      //   <Link to="#">End Module</Link>
      //   <Link to="#">Assignments</Link>
      //   <Link to="#">CCEE</Link>
      //   <Link to="#">Project</Link>
      //   <Link to="#">Help</Link>
      //   <Link to="#">
      //     Change Password
      //   </Link>
      //   <Link href="#">Logout</Link>
      // </ListGroup>
    
  );
}
