import React from "react";
import "./css/Navbar.css";
import { ListGroup } from "reactstrap";
import {Link} from "react-router-dom";

export default function Navbar () {
  return (
    <ListGroup className="vertical-menu">
      <Link className="list-group-item list-group-item-action active" tag="a" to="/Student" >Dashboard</Link>
      <Link className="list-group-item list-group-item-action" tag="a" to="/Student/TimeTable" >Timetable</Link>
      <Link className="list-group-item list-group-item-action" tag="a" to="/Student/Attendance" >Attendance</Link>
      <Link className="list-group-item List-group-item-action" tag="a" to="/Student/Notes" >Notes</Link>
      <Link className="list-group-item list-group-item-action" tag="a" to="/Student/MockTest" >Mock Test</Link>
      <Link className="list-group-item list-group-item-action" tag="a" to="/Student/EndModule" >End Module</Link>
      <Link className="list-group-item list-group-item-action" tag="a" to="/Student/Assignment" >Assignments</Link>
      <Link className="list-group-item list-group-item-action" tag="a" to="/Student/CCEE" >CCEE</Link>
      <Link className="list-group-item list-group-item-action" tag="a" to="/Student/Project" >Project</Link>
      <Link className="list-group-item list-group-item-action" tag="a" to="/Student/Help" >Help</Link>
      <Link className="list-group-item list-group-item-action" tag="a" to="/Student/ChangePassword" >Change Password</Link>
      <Link className="list-group-item list-group-item-action" tag="a" to="/Student/Logout" >Logout</Link>
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
