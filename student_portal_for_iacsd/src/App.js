import "./App.css";

import Header from "./components/Common/Header";
import Navbar from "./components/Student/Navbar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Row, Col } from "reactstrap";
import Dashboard from "./components/Student/Dashboard";
import Notes from "./components/Student/Notes";
import Timetable from "./components/Student/Timetable";
import Welcome from "./components/Student/Welcome";
import Attendance from "./components/Student/Attendance";
import Assignment from "./components/Student/Assignment";
import MockTest from "./components/Student/MockTest";
import CCEE from "./components/Student/CCEE";
import ChangePassword from "../src/components/Student/ChangePassword";
import EndModule from "./components/Student/EndModule";
import Help from "./components/Student/Help";
import Logout from "./components/Student/Logout";
import Project from "./components/Student/Project";
import Marquee from "./components/Common/Marquee";

function App() {
  return (
    <div>
      <Router>
        <div className="overflow-div">
          <Header />

          <Marquee />
          <Row bg-color="white">
            <Col md={2}>
              <Navbar />
            </Col>
            <Col md={10}>
              <div  className="main-middle-column-for-components" >
                <Routes>
                  <Route path="/" element={<Welcome />} exact />
                  <Route path="/Student/" element={<Dashboard />} exact />
                  <Route path="/Student/Notes" element={<Notes />} exact />
                  <Route
                    path="/Student/Timetable"
                    element={<Timetable />}
                    exact
                  />
                  <Route
                    path="/Student/Attendance"
                    element={<Attendance />}
                    exact
                  />
                  <Route
                    path="/Student/MockTest"
                    element={<MockTest />}
                    exact
                  />
                  <Route
                    path="/Student/EndModule"
                    element={<EndModule />}
                    exact
                  />
                  <Route
                    path="/Student/Assignment"
                    element={<Assignment />}
                    exact
                  />
                  <Route path="/Student/CCEE" element={<CCEE />} exact />
                  <Route path="/Student/Project" element={<Project />} exact />
                  <Route path="/Student/Help" element={<Help />} exact />
                  <Route
                    path="/Student/ChangePassword"
                    element={<ChangePassword />}
                    exact
                  />
                  <Route path="/Student/Logout" element={<Logout />} exact />
                </Routes>
              </div>
            </Col>
          </Row>
        </div>
      </Router>
    </div>
  );
}

export default App;
