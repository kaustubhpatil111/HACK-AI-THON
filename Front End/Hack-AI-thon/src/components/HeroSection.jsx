import React from "react";
import img1 from "../assets/images/hack-ai-thon.png";
import "./hero.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero__image">
        <img src={img1} alt="Hack AI Thon" />
      </div>
    </section>
  );
};

export default HeroSection;
