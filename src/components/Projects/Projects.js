import React from "react";
import "../Projects/Projects.css"

const Projects = () => {
  const events=[
    {id:1, imagepath:"/Template/project_logo.png", heading:"Vansarthi", shortdesc:"Wildlife Welfare NGO", description:" Developed a comprehensive website for Vansaarthi and implemente user-friendly features, including informative content, event calendars, and a secure donation portal. Created engaging articles and infographics to educate visitors on conservation strategies and sustainable practices."}
  ]
  return (
    <div className="main-project container">
      {events.map((event)=>(
      <div key={event.id} className="project-container">
        <div className="project-logo"><img src={event.imagepath} alt="image of logo" className="project-logo"></img></div>
        <div className="project-details">
        <h1 className="project-heading">{event.heading}</h1>
        <h4 className="short-desc">{event.shortdesc}</h4>
        <p className="description">{event.description}</p>
        </div>
      </div>
      ))}
    </div>
  );
};

export default Projects;
