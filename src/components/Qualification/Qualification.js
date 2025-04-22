import React from 'react';
import '../Qualification/Qualification.css';

const events = [
  { id: 1, year: 2020, title: "Secondary Education", description: "Maharshi Sandipani School, Naroda", marks:"98.70pr" },
  { id: 2, year: 2022, title: "Higher Secondary Education ", description: "Maharshi Sandipani School, Naroda", marks:"91.67pr" },
  { id: 3, year: 2026, title: "BE-IT", description: "LDRP Institute Of Technology And Research, Gandhinagar", marks:"8.83 CPI (5th sem)" },
];

const Timeline = () => {
  return (
    <>
    <h1 className="Qualification-heading">Qualification Timeline</h1>
    <div className="timeline-container">
      <div className="timeline">
        {events.map((event) => (
          <div key={event.id} className="timeline-item">
            <div className="timeline-year">{event.year}</div>
            <div className="timeline-content">
              <h3 className="Qualification-name">{event.title}</h3>
              <p className="Qualification-desc">{event.description}</p>
              <p className="Qualification-marks">{event.marks}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="Qualify-image-class"><img src="/Template/Qualification.png" className='Qualification-image'></img></div>
    </div>
    </>
  );
};

export default Timeline;
