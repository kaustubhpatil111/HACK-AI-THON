import React from "react";
import "./Navigation.css";
const Navigation = () => {
  return (
    <nav>
      <div>
        <span>Select Language</span>
        <span>▼</span>
      </div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/blogs">Blogs</a>
        </li>
        <li>
          <a href="/organize-initiative">Organize Initiative</a>
        </li>
      </ul>
      <button>Login/Register</button>
    </nav>
  );
};

export default Navigation;
