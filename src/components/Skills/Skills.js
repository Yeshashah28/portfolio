import React from "react";
import "../Skills/Skills.css";
import ProgressBar from "react-bootstrap/ProgressBar";

const Skills = () => {
    const HTML = 75;
    const CSS = 80;
    const javascript = 65;
    const Reactjs = 55;
    const Nodejs = 50;
    const python = 68;
  
    // Personal Skills
    const communication = 80;
    const teamwork = 85;
    const problemSolving = 90;
    const leadership = 80;
  
    return (
      <div className="main-skills-container">
        {/* Technical Skills Section */}
        <div className="skills-section">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-progress">
            <h3>HTML</h3>
            <ProgressBar now={HTML} />
          </div>
          <div className="skills-progress">
            <h3>CSS</h3>
            <ProgressBar now={CSS} />
          </div>
          <div className="skills-progress">
            <h3>JavaScript</h3>
            <ProgressBar now={javascript} />
          </div>
          <div className="skills-progress">
            <h3>React.js</h3>
            <ProgressBar now={Reactjs} />
          </div>
          <div className="skills-progress">
            <h3>Node.js</h3>
            <ProgressBar now={Nodejs} />
          </div>
          <div className="skills-progress">
            <h3>Python</h3>
            <ProgressBar now={python} />
          </div>
        </div>
  
        {/* Personal Skills Section */}
        <div className="skills-section">
          <h2 className="section-title">Personal Skills</h2>
          <div className="skills-progress">
            <h3>Communication</h3>
            <ProgressBar now={communication} />
          </div>
          <div className="skills-progress">
            <h3>Teamwork</h3>
            <ProgressBar now={teamwork} />
          </div>
          <div className="skills-progress">
            <h3>Problem Solving</h3>
            <ProgressBar now={problemSolving} />
          </div>
          <div className="skills-progress">
            <h3>Leadership</h3>
            <ProgressBar now={leadership} />
          </div>
        </div>
      </div>
  
  );
};

export default Skills;
