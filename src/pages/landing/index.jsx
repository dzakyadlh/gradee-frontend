import React from "react";
import Navbar from "../../components/navbar";
import StudyGirl from "../../assets/casual-life-3d-girl-studying-with-book-and-laptop.png";
import "./landing.css";
import { Button } from "react-bootstrap";

const LandingPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="scroll-container landing-container">
        <div className="landingFirst">
          <img src={StudyGirl} className="studyGirl"></img>
          <h1>
            Improve your grades with <span className="gradee">Gradee</span>
          </h1>
          <Button className="getStartedBtn">Get Started</Button>
        </div>
      </div>
    </React.Fragment>
  );
};
export default LandingPage;
