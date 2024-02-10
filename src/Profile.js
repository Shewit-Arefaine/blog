import React from "react";
import profileImage from "./images/profile.jpg";
import "./Profile.css"; // Make sure this is correctly linked
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-pic-container">
        <img src={profileImage} alt="Shewit Arefaine" className="profile-pic" />
      </div>
      <h3>Shewit Arefaine</h3>
      <div className="social-icons">
        <a
          href="https://github.com/Shewit-Arefaine"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/shewit-arefaine/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
};

export default Profile;
