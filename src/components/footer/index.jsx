import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faDiscord,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer-container">
      <div id="sf1" className="subfooter"></div>
      <div id="sf2" className="subfooter">
        <h1 className="gradee">Gradee</h1>
        <h5>Unlocking your future with better grades</h5>
        <h6>Copyright &#169; 2023, Gradee. All right reserved.</h6>
      </div>
      <div id="sf3" className="subfooter">
        <h3>Contact Us</h3>
        <ul className="socialMedia">
          <li>
            <a>
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ color: "#ffffff" }}
                className="icon"
              />
            </a>
          </li>
          <li>
            <a>
              <FontAwesomeIcon
                icon={faTwitter}
                style={{ color: "#ffffff" }}
                className="icon"
              />
            </a>
          </li>
          <li>
            <a>
              <FontAwesomeIcon
                icon={faDiscord}
                style={{ color: "#ffffff" }}
                className="icon"
              />
            </a>
          </li>
          <li>
            <a>
              <FontAwesomeIcon
                icon={faTiktok}
                style={{ color: "#ffffff" }}
                className="icon"
              />
            </a>
          </li>
        </ul>
        <p>Phone:</p>
        <p>+62XXXXXXXX</p>
      </div>
    </div>
  );
};

export default Footer;
