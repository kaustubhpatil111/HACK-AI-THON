import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <h2>About</h2>
      <p>
        Welcome to SBI Life presents HACK-AI-THON 2024, powered by Hack2skill,
        where innovation meets artificial intelligence to shape the future of
        technology.
      </p>
      <div className="image-container">
        <img src="./AboutCover.png" className="about-image" alt="Example" />
      </div>
      <p>
        Participants can explore the vast potential of Al-whether it's through
        automating processes, enhancing decision-making, or revolutionizing user
        experiences.
        <br /> With Al evolving at a rapid pace, this hackathon encourages
        participants to tap into its transformative capabilities, exploring
        diverse areas such as predictive modeling, natural language processing,
        machine learning, and beyond. <br />
        Join us in this exciting journey of building Al-driven innovations that
        will shape a smarter and more efficient tomorrow.
      </p>
    </div>
  );
};

export default About;
