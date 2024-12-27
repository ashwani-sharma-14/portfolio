import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h1>My Projects</h1>
        <div className="projects-wrapper">
          <div className="projects-group">
            <h3>Completed Projects</h3>
            <div className="project">
              <h5>Netflix Clone</h5>
              <p>
                A replication of Netflix's front-end interface, highlighting my skills in front-end development and design.
              </p>
              <a href="https://magenta-entremet-573ee2.netlify.app/" className="project-link">click to see</a>
            </div>
            <div className="project">
              <h5>WanderLust</h5>
              <p>
                A clone of Airbnb that showcases my abilities to build complex applications. This project demonstrates a thorough understanding of user interfaces and backend management.
              </p>
              <a href="https://wanderlust-full-stack-web-dev-project.onrender.com/listings" className="project-link">click to see </a>
            </div>
          </div>

          <div className="projects-group">
            <h3>Current Projects</h3>
            <div className="project">
              <h5>Travel Agency Website</h5>
              <p>
                Developing a comprehensive travel agency website using the MERN stack to offer a seamless user experience and efficient management system.
              </p>
            </div>
            <div className="project">
              <h5>Community-Based Chat WebApp</h5>
              <p>
                Building a community-based chat application for my college using the latest technologies to facilitate smooth communication among peers.
                <br />
                <b>Can't share more because it's a college project, I am working with my team</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
