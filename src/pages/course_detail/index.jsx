import React from "react";
import { useNavigate } from "react-router";
import { useParams, useLocation } from "react-router-dom";
import { BigPlayButton, Player } from "video-react";
import axios from "axios";
import "./detail.css";
import { useState } from "react";
import { useEffect } from "react";

const CourseDetail = (props) => {
  const [data, setData] = useState([]);
  const location = useLocation();

  const navigate = useNavigate();

  const handleClick = (link) => {
    navigate(link);
  };

  const handleFetch = () => {
    console.log(`${location.state.id}`);
    axios
      .get(`http://localhost:5000/courses/${location.state.id}`)
      .then((res) => {
        console.log(res.data.status);
        console.log(res.data.data);
        setData(res);
      })
      .catch((err) => {
        console.log(err.response.data.status);
      });
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div className="scroll-container">
      <div className="trailer-container"></div>
      <div className="perks-container"></div>
      <div className="description-container"></div>
      <div className="detail-container"></div>
      <div className="comment-container"></div>
    </div>
  );
};

export default CourseDetail;
