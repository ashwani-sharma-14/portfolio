import React from "react";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>My Skills</h2>

        {/* Languages Section */}
        <div className="skill-category">
          <h3>Languages</h3>
          <div className="skill">
            <span>JavaScript</span>
            <div className="skill-bar">
              <div className="skill-level js" style={{ width: "90%" }}>
                <span className="skill-percentage">90%</span>
              </div>
            </div>
          </div>
          <div className="skill">
            <span>TypeScript</span>
            <div className="skill-bar">
              <div className="skill-level ts" style={{ width: "80%" }}>
                <span className="skill-percentage">80%</span>
              </div>
            </div>
          </div>
          <div className="skill">
            <span>C</span>
            <div className="skill-bar">
              <div className="skill-level c" style={{ width: "85%" }}>
                <span className="skill-percentage">85%</span>
              </div>
            </div>
          </div>
          <div className="skill">
            <span>C++</span>
            <div className="skill-bar">
              <div className="skill-level cpp" style={{ width: "80%" }}>
                <span className="skill-percentage">80%</span>
              </div>
            </div>
          </div>
          <div className="skill">
            <span>Python</span>
            <div className="skill-bar">
              <div className="skill-level python" style={{ width: "75%" }}>
                <span className="skill-percentage">75%</span>
              </div>
            </div>
          </div>
          <div className="skill">
            <span>HTML</span>
            <div className="skill-bar">
              <div className="skill-level html" style={{ width: "95%" }}>
                <span className="skill-percentage">95%</span>
              </div>
            </div>
          </div>
          <div className="skill">
            <span>CSS</span>
            <div className="skill-bar">
              <div className="skill-level css" style={{ width: "90%" }}>
                <span className="skill-percentage">90%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Frameworks Section */}
        <div className="skill-category">
          <h3>Frameworks</h3>
          <div className="circular-skill">
            <div className="circle" data-percent="85">
              <svg>
                <circle cx="50%" cy="50%" r="45%" />
                <circle cx="50%" cy="50%" r="45%" />
              </svg>
              <div className="number">
                <h4>85%</h4>
              </div>
            </div>
            <span>Node.js</span>
          </div>
          <div className="circular-skill">
            <div className="circle" data-percent="80">
              <svg>
                <circle cx="50%" cy="50%" r="45%" />
                <circle cx="50%" cy="50%" r="45%" />
              </svg>
              <div className="number">
                <h4>80%</h4>
              </div>
            </div>
            <span>Express.js</span>
          </div>
          <div className="circular-skill">
            <div className="circle" data-percent="90">
              <svg>
                <circle cx="50%" cy="50%" r="45%" />
                <circle cx="50%" cy="50%" r="45%" />
              </svg>
              <div className="number">
                <h4>90%</h4>
              </div>
            </div>
            <span>React.js</span>
          </div>
          <div className="circular-skill">
            <div className="circle" data-percent="75">
              <svg>
                <circle cx="50%" cy="50%" r="45%" />
                <circle cx="50%" cy="50%" r="45%" />
              </svg>
              <div className="number">
                <h4>75%</h4>
              </div>
            </div>
            <span>Bootstrap</span>
          </div>
          <div className="circular-skill">
            <div className="circle" data-percent="80">
              <svg>
                <circle cx="50%" cy="50%" r="45%" />
                <circle cx="50%" cy="50%" r="45%" />
              </svg>
              <div className="number">
                <h4>80%</h4>
              </div>
            </div>
            <span>Tailwind CSS</span>
          </div>
        </div>

        {/* Databases Section */}
        <div className="skill-category">
          <h3>Databases</h3>
          <div className="skill">
            <span>MongoDB</span>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: "85%" }}>
                <span className="skill-percentage">85%</span>
              </div>
            </div>
          </div>
          <div className="skill">
            <span>MySQL</span>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: "75%" }}>
                <span className="skill-percentage">75%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Skills Section */}
        <div className="skill-category">
          <h3>Professional Skills</h3>
          <div className="skill">
            <span>Team Work</span>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: "90%" }}>
                <span className="skill-percentage">90%</span>
              </div>
            </div>
          </div>
          <div className="skill">
            <span>Creativity</span>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: "85%" }}>
                <span className="skill-percentage">85%</span>
              </div>
            </div>
          </div>
          <div className="skill">
            <span>Leadership</span>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: "80%" }}>
                <span className="skill-percentage">80%</span>
              </div>
            </div>
          </div>
          <div className="skill">
            <span>Communication</span>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: "85%" }}>
                <span className="skill-percentage">85%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
