import "./App.css";
import AddStudent from "./components/AddStudent";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route,Routes, Link } from "react-router-dom";
import { Row, Col, Container } from "reactstrap";
import Dashboard from "../src/components/Dashboard";
import ViewInfo from "../src/components/ViewInfo";
import Timetable from "../src/components/Timetable";
import Attendance from "../src/components/Attendance";
import Assignment from "../src/components/Assignment";
import MockTest from "../src/components/MockTest";
import CCEE from "../src/components/CCEE";
import ChangePassword from "../src/components/ChangePassword";
import EndModule from "../src/components/EndModule";
import Help from "../src/components/Help";
import Logout from "../src/components/Logout";
import Project from "../src/components/Project";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <hr className="header-hr"/>

        <Row>
          <Col md={2}>
            <Navbar />
          </Col>
          <Col md={10}>
            
            <Routes>
            <Route path="/" element={<AddStudent />} exact/>
            <Route path="/view-info" element={<ViewInfo/>} exact/>
            <Route path="/Timetable" element={<Timetable/>} exact/>
            <Route path="/Attendance" element={<Attendance/>} exact/>
            <Route path="/MockTest" element={<MockTest/>} exact/>
            <Route path="/EndModule" element={<EndModule/>} exact/>
            <Route path="/Assignment" element={<Assignment/>} exact/>
            <Route path="/CCEE" element={<CCEE/>} exact/>
            <Route path="/Project" element={<Project/>} exact/>
            <Route path="/Help" element={<Help/>} exact/>
            <Route path="/ChangePassword" element={<ChangePassword/>} exact/>
            <Route path="/Logout" element={<Logout/>} exact/>
            </Routes>

            
          </Col>
        </Row>
      </Router>

      {/* <Navbar/> */}
      {/* <AddStudent /> */}
    </div>
  );
}

export default App;
