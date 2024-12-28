import React from "react";
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="intro">
        <h1>I'm Ashwani Sharma</h1>
        <p className="tagline">A Full Stack Web Developer</p>
        <br />
        <article className="detail-intro">
          Welcome to my Portfolio! I am a self-taught Full Stack Web Developer,
          primarily working with the MERN stack.
        </article>
        <div className="links">
          <a
            href="https://github.com/ashwani-sharma-14"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="www.linkedin.com/in/ashwani-sharma-36b428273"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </div>
      <div className="img"></div>
      <div className="scroll-down">
        <a href="#about">
          <span></span>Scroll Down
        </a>
      </div>
    </section>
  );
};

export default Hero;
