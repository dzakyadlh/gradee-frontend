import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useParams, useLocation } from "react-router-dom";
import { BigPlayButton, Player } from "video-react";
import axios from "axios";
import "./detail.css";
import "./detail_video.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Button, Card, CardImg, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import Navbar from "../../components/navbar";

const CourseDetail = (props) => {
  const [course, setCourse] = useState([]);
  const [detail, setDetail] = useState([]);
  const [player, setPlayer] = useState();
  const { id } = useParams();

  const navigate = useNavigate();

  const handleClick = (link) => {
    navigate(link);
  };

  const handleFetch = () => {
    axios
      .get(`http://localhost:5000/courses/${id}`)
      .then((res) => {
        console.log(res.data.status);
        setCourse(res.data.data);
        setDetail(res.data.data.course_detail);
        console.log(res);
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
      <div className="scroll-container courseDetail">
        <div className="trailer-container">
          <Player
            ref={(player) => {
              setPlayer(player);
            }}
            poster={course.image}
            src={course.video}
            className
          >
            <BigPlayButton position="center" />
          </Player>
        </div>
        <div className="perks-container">
          <h1>{course.name}</h1>
          <div className="rating-container">
            <h6>4.9</h6>
            <h5 className="rating">
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "#fbff00" }}
                className="icon"
              />
            </h5>
          </div>
        </div>
        <div className="detail-container">
          <p>{detail.description}</p>
          <p>{detail.overview}</p>
        </div>
        <div className="material-container"></div>
        <div className="mentors-container">
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            centeredSlides={true}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="cardCarousel"
          >
            {course?.data?.data?.map((row, index) => (
              <SwiperSlide key={index}>
                <Card className="mentorCard" onClick={() => handleClick(`/`)}>
                  <CardImg
                    variant="top"
                    src={row.image}
                    className="cardImg"
                    alt="Mentor Picture"
                  ></CardImg>
                  <Card.Body>
                    <Card.Title className="mentorCardTitle">
                      Qwerty, Ph.D
                    </Card.Title>
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

export default CourseDetail;
