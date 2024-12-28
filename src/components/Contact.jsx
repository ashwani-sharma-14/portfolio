import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h1>Contact Me</h1>
        <div className="contact-info">
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
            <h3>Email</h3>
            <p><a href="mailto:ashwanisharma5541@gmail.com">ashwanisharma5541@gmail.com</a></p>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} size="2x" />
            <h3>Phone</h3>
            <p><a href="tel:+917879255241">+917879255241</a></p>
          </div>
        </div>
        <div className="social-media">
          <h3>Follow Me</h3>
          <a href="https://github.com/ashwani-sharma-14" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://www.instagram.com/ashwani_sharma.14" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="http://www.linkedin.com/in/ashwani-sharma-36b428273" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </div>
    </section>
  );
}
