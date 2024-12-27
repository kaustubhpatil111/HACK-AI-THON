import React from "react";
import "./hero.css";

const HeroSection = () => {
  return (
    <section className="hero">
      {/* <div className="hero__content">
        <div className="hero__logo">
          <img src="./SBI_Life_Insurance_2022_Logo.svg" alt="SBI Life Logo" />
          <p>Apne liye. Apno ke liye.</p>
        </div>
        <h1>HACK-AI-THON</h1>
        <h2>2024</h2>
        <p className="hero__prize">
          Prizes Worth <span>₹3,25,000/-</span>
        </p>
        <div className="hero__powered-by">
          POWERED BY <img src="./H2S_Logo.png" alt="112S Logo" />
        </div>
      </div> */}
      <div className="hero__image">
        <img src="./header-background.png" alt="Hero Image" />
      </div>
    </section>
  );
};

export default HeroSection;
