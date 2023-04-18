import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../../components/navbar";
import StudyGirl from "../../assets/casual-life-3d-girl-studying-with-book-and-laptop.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./landing.css";
import { Pagination } from "swiper";
import { Button, Card, CardImg } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const LandingPage = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

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
          <img src={StudyGirl} className="studyGirl"></img>
          <h1>
            Improve your grades with <span className="gradee">Gradee</span>
          </h1>
          <Button className="getStartedBtn">Get Started</Button>
        </div>
        <div className="landingSecond">
          <h2>Discover our courses</h2>
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="cardCarousel"
          >
            {courses?.data?.data?.map((row, index) => (
              <SwiperSlide key={index}>
                <Card className="discoverCard">
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
                    <Button className="btn">
                      <FontAwesomeIcon icon={faArrowRight} className="icon" />
                    </Button>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </React.Fragment>
  );
};
export default LandingPage;
