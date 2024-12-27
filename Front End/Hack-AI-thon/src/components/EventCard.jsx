import React from "react";
import "./EventCard.css"; // External CSS file for styling

const EventCard = () => {
  return (
    <div className="event-card">
      <div className="event-image">
        <img src="./ABOUT.png" alt="Hack-AI-Thon 2024" />
      </div>
      <div className="event-details">
        <div>
          <h2>HACK-AI-THON 2024</h2>
          <div className="event-info">
            <span className="tag hybrid">Hybrid</span>
            <span className="tag free">Free</span>
            <span className="tag team-size">Team Size: 1-4</span>
          </div>
        </div>
        <button className="register-button" disabled>
          Registration Closed
        </button>
      </div>
    </div>
  );
};

export default EventCard;
