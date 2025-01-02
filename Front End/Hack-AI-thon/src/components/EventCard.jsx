import React from "react";
import img2 from "../assets/images/hybrid.png";
import img3 from "../assets/images/free.png";
import img4 from "../assets/images/team.png";
import "./EventCard.css"; // External CSS file for styling

const EventCard = () => {
  return (
    <div className="event-card">
      <div className="event-image">
        <img src="./ABOUT.png" alt="Hack-AI-Thon 2024" />
      </div>
      <div className="event-details">
        <div>
          <h1>HACK-AI-THON 2024</h1>
          <div className="event-info">
            <span className="tag hybrid">
              <img src={img2} alt="Hybrid" className="tag-icon" />
              Hybrid
            </span>
            <span className="tag free">
              <img src={img3} alt="Free" className="tag-icon" />
              Free
            </span>
            <span className="tag team-size">
              <img src={img4} alt="Team Size: 1-4" className="tag-icon" />
              Team Size: 1-4
            </span>
          </div>
        </div>
        <button className="register-button" disabled>
          Register
        </button>
      </div>
    </div>
  );
};

export default EventCard;

