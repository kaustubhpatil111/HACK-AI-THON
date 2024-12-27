import React, { useState } from "react";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Track the active menu item

  const handleItemClick = (index) => {
    setActiveIndex(index); // Set the clicked menu item as active
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      style={{ position: "sticky", top: 0, zIndex: 1000 }}
    >
      <br></br>
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {[
              "About",
              "Challenges",
              "Evaluation Parameters",
              "Timeline",
              "Prize",
              "FAQ",
            ].map((item, index) => (
              <li
                key={index}
                className={`nav-item ${activeIndex === index ? "active" : ""}`} // Apply "active" class conditionally
                onClick={() => handleItemClick(index)} // Update state on click
              >
                <a className="nav-link" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
