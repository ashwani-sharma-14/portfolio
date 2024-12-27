import React from "react";
import "./Nav.css";

import { Link } from "react-scroll";
export default function Nav() {
  return (
    <nav className="navbar">
      <h1 style={{ color: "white", marginTop: "10px" }}>My Portfolio</h1>
      <div className="navbar-links">
        <Link to="home" smooth={true} duration={500}>
          Home
        </Link>
        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          Skills
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          Projects
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
      </div>
    </nav>
  );
}
