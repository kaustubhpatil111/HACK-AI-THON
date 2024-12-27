import React from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Hackathon from "./components/Hackathon";
import OtherSections from "./components/OtherSections";
import EventCard from "./components/EventCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar";
import Timeline from "./components/Timeline";
import Challenges from "./components/Challenges";
import FAQ from "./components/FAQ";
import "./App.css";
import Prize from "./components/Prize";

const App = () => {
  return (
    <div className="app-container">
      <Navigation />
      <main className="app-content">
        <div className="hero">
          <HeroSection />
        </div>
        <EventCard />
        <Navbar />
        <div className="main-content">
          <div className="left-content">
            <About />
            <OtherSections />
            <Challenges />
            <Timeline />
            <Prize />
            <FAQ />
          </div>
          <div className="right-content">
            <Hackathon />
          </div>
        </div>
      </main>
      <footer>Footer Content</footer>
    </div>
  );
};

export default App;
