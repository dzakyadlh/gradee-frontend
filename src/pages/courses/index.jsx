import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import Navbar from "../../components/navbar";
import "./courses.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  const handleFetch = () => {
    axios
      .get("http://localhost:5000/courses")
      .then((res) => {
        setCourses(res);
        console.log(res.data);
        console.log(res.data.status);
      })
      .catch((err) => {
        console.log(err.response.data.status);
      });
  };

  const handleClick = (link) => {
    navigate(link);
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <div className="scroll-container courses-container">
        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input placeholder="Search" />
        </div>
        <div className="list-container">
          {courses?.data?.data?.map((row, index) => (
            <div
              className="course"
              key={index}
              onClick={() => handleClick(`${row.id}`)}
            >
              <h6 className="list-number">{row.id}</h6>
              <img className="course-img" src={row.image} alt={`${row.name}`} />
              <div className="course-desc">
                <h4>{row.name}</h4>
                <p>Highschool Masterclass</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Courses;
