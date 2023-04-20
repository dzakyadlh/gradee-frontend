import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import StudyGirl from "../../assets/casual-life-3d-girl-studying-with-book-and-laptop.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./landing.css";
import { Pagination } from "swiper";
import { Button, Card, CardImg, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBook,
  faCircleCheck,
  faHardDrive,
  faListCheck,
  faPersonChalkboard,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const LandingPage = (props) => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  const handleClick = (link, rowId) => {
    navigate(link, { state: { id: rowId } });
  };

  const handleFetch = () => {
    axios
      .get("http://localhost:5000/courses")
      .then((res) => {
        setCourses(res);
        console.log(res.data.data);
        console.log(res.data.status);
      })
      .catch((err) => {
        console.log(err.response.data.status);
      });
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <div className="scroll-container landing-container">
        <div className="landingFirst">
          <img src={StudyGirl} className="studyGirl" alt="studygirl"></img>
          <h1>
            Improve your grades with <span className="gradee">Gradee</span>
          </h1>
          <Button
            className="getStartedBtn"
            onClick={() => handleClick("/register")}
          >
            Get Started
          </Button>
        </div>
        <div className="landingSecond">
          <h2>Why us?</h2>
          <Row id="lsRow1" className="lsRow">
            <Col xs={1} className="me-1">
              <h4>
                <FontAwesomeIcon icon={faBook} />
              </h4>
            </Col>
            <Col>
              <h5>Comprehensive Curriculum</h5>
            </Col>
            <div id="lsDesc1" className="lsDesc">
              <p>
                The course curriculum is designed to cover all major aspects of
                high school and university.
              </p>
            </div>
          </Row>
          <Row id="lsRow2" className="lsRow">
            <Col xs={1} className="me-1">
              <h4>
                <FontAwesomeIcon icon={faPersonChalkboard} />
              </h4>
            </Col>
            <Col>
              <h5>Interactive Lessons</h5>
            </Col>
            <div id="lsDesc2" className="lsDesc">
              <p>
                Our lessons are interactive and engaging, incorporating
                multimedia, discussions, and real-life examples to help you
                improve better.
              </p>
            </div>
          </Row>
          <Row id="lsRow3" className="lsRow">
            <Col xs={1} className="me-1">
              <h4>
                <FontAwesomeIcon icon={faListCheck} />
              </h4>
            </Col>
            <Col>
              <h5>Personalized Learning</h5>
            </Col>
            <div id="lsDesc3" className="lsDesc">
              <p>
                Learn at your own pace, allowing you to revisit concepts or
                progress through the material based on your comfort level.
              </p>
            </div>
          </Row>
          <Row id="lsRow4" className="lsRow">
            <Col xs={1} className="me-1">
              <h4>
                <FontAwesomeIcon icon={faUserGraduate} />
              </h4>
            </Col>
            <Col>
              <h5>Expert Instructors</h5>
            </Col>
            <div id="lsDesc4" className="lsDesc">
              <p>
                Our instructors are experienced educators with a passion for
                their teachings. They provide clear explanations, answer
                questions, and provide feedback.
              </p>
            </div>
          </Row>
          <Row id="lsRow5" className="lsRow">
            <Col xs={1} className="me-1">
              <h4>
                <FontAwesomeIcon icon={faHardDrive} />
              </h4>
            </Col>
            <Col>
              <h5>Resources and Materials</h5>
            </Col>
            <div id="lsDesc5" className="lsDesc">
              <p>
                Access to a variety of resources, including downloadable study
                materials, practice exercises, and reference materials.
              </p>
            </div>
          </Row>
        </div>
        <div className="landingThird">
          <h2>Discover our courses</h2>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            centeredSlides={true}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="cardCarousel"
          >
            {courses?.data?.data?.map((row, index) => (
              <SwiperSlide key={index}>
                <Card
                  className="discoverCard"
                  onClick={() => handleClick(`/courses/${row.name}`, row.id)}
                >
                  <CardImg
                    variant="top"
                    src={row.image}
                    className="cardImg"
                  ></CardImg>
                  <Card.Body>
                    <Card.Title className="discoverCardTitle">
                      {row.name}
                    </Card.Title>
                    <Card.Text></Card.Text>
                    <h6>
                      <FontAwesomeIcon icon={faArrowRight} className="icon" />
                    </h6>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="landingFourth">
          <h2>
            Join us now
            <span>
              <br></br>
            </span>
            and get access to:
          </h2>
          <Row className="fsRow">
            <Col xs={1} className="me-1">
              <h4>
                <FontAwesomeIcon icon={faCircleCheck} />
              </h4>
            </Col>
            <Col>
              <h5>More than 100 videos of each subject</h5>
            </Col>
          </Row>
          <Row className="fsRow">
            <Col xs={1} className="me-1">
              <h4>
                <FontAwesomeIcon icon={faCircleCheck} />
              </h4>
            </Col>
            <Col>
              <h5>More than 1000 exercises on each subjects</h5>
            </Col>
          </Row>
          <Row className="fsRow">
            <Col xs={1} className="me-1">
              <h4>
                <FontAwesomeIcon icon={faCircleCheck} />
              </h4>
            </Col>
            <Col>
              <h5>Weekly quiz and challenges</h5>
            </Col>
          </Row>
          <Row className="fsRow">
            <Col xs={1} className="me-1">
              <h4>
                <FontAwesomeIcon icon={faCircleCheck} />
              </h4>
            </Col>
            <Col>
              <h5>Online mentors to help you 24/7</h5>
            </Col>
          </Row>
          <h6>Starts from $29/month or $299/year</h6>
          <Button
            className="btn getStartedBtn"
            onClick={() => handleClick("/register")}
          >
            Sign Up
          </Button>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};
export default LandingPage;
