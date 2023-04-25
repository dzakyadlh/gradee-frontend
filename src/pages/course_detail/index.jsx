import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { BigPlayButton, Player } from "video-react";
import axios from "axios";
import "./detail.css";
import "./detail_video.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Card, CardImg, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

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
        console.log(course);
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
          <Row className="titleRow">
            <Col>
              <h1>{course.name}</h1>
            </Col>
            <Col xs={1}>
              <FontAwesomeIcon icon={faHeart} className="likeIcon" />
            </Col>
          </Row>

          {/* <div className="rating-container">
            <h6>4.9</h6>
            <h5 className="rating">
              <FontAwesomeIcon
                icon={faStar}
                style={{ color: "#fbff00" }}
                className="icon"
              />
            </h5>
          </div> */}
        </div>
        <div className="detail-container">
          <p>{detail.description}</p>
          <p>{detail.overview}</p>
        </div>
        <div className="materials-container"></div>
        <div className="mentors-container">
          <h2>Our Mentors</h2>
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="cardCarousel"
          >
            {course?.course_mentors?.map((row, index) => (
              <SwiperSlide key={index}>
                <Card className="mentorCard" onClick={() => handleClick(`/`)}>
                  <CardImg
                    src={row.image}
                    className="cardImg"
                    alt="Mentor Picture"
                  ></CardImg>
                  <Card.Body>
                    <Card.Title className="mentorCardTitle">
                      {row.name}
                    </Card.Title>
                    <Card.Subtitle className="mentorCardSubtitle">
                      {row.job} at Gradee
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default CourseDetail;
