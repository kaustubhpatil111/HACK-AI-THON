import React from "react";
import "./Hackathon.css";

function Hackathon() {
  return (
    <div className="hackathon-container">
      <h1>HACK-AI-THON 2024</h1>
      <div className="registration-info">
        <span className="calendar-icon">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15 2H1V14H15V2ZM11 6H5V10H11V6Z" fill="#2C3E50" />
          </svg>
        </span>
        <span>LAST DATE TO REGISTER</span>
        <span>Sun 22 Dec 2024</span>
      </div>
      <div className="registration-closed">
        <span>REGISTRATION CLOSED IN</span>
        <span className="timer">0d:0h:0m</span>
      </div>
      <div className="free-registration">
        <span>Free</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 10.5H10V14H6V10.5ZM4.5 8.5H11V12H4.5V8.5Z"
            fill="#2C3E50"
          />
          <path d="M2 4.5H14V8.5H2V4.5Z" fill="#2C3E50" />
        </svg>
      </div>
      <button className="registration-button" disabled>
        Registration Closed
      </button>
      <div className="participation-info">
        <h2>Who can Participate?</h2>
        <p>
          This initiative is open to students, professionals, startups, and
          freelance developers.
        </p>
      </div>
    </div>
  );
}

export default Hackathon;
