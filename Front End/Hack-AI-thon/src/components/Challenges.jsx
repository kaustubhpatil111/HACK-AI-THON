import React from "react";
import "./Challenges.css"; // Add styles in a separate CSS file

const challenges = [
  {
    id: "PS-1",
    title: "Enhancing Cybersecurity with Targeted Vulnerability...",
    image: "/img1.png",
  },
  {
    id: "PS-2",
    title: "Enhancing Customer Experience and Retention...",
    image: "/img2.png",
  },
  {
    id: "PS-3",
    title: "AI-Driven Fraud Detection and Prevention in...",
    image: "/img3.png",
  },
];

const Challenges = () => {
  return (
    <div className="challenges-container">
      <h2>Challenges</h2>
      <div className="challenges-grid">
        {challenges.map((challenge) => (
          <div className="challenge-card" key={challenge.id}>
            <img
              src={challenge.image}
              alt={challenge.title}
              className="challenge-image"
            />
            <div className="challenge-content">
              <h3>
                {challenge.id}: {challenge.title}
              </h3>
              <a href={`/challenge/${challenge.id}`} className="view-more">
                View More <span>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Challenges;
