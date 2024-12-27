import React, { useEffect, useRef } from "react";
import "./About.css";

export default function About() {
  const aboutRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    });

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="about-section" ref={aboutRef}>
      <div className="about-content container">
        <div className="about-image"></div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I am a dedicated B.Tech student specializing in Electronics and Telecommunication Engineering at MITS Gwalior, currently in my third year. As a proficient Full Stack Developer, I thrive on solving complex problems and building innovative solutions. My goal is to leverage my knowledge and experience to create impactful, user-centric applications that bridge the gap between hardware and software.
          </p>
        </div>
      </div>
    </section>
  );
};


