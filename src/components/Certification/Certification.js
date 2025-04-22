import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../Certification/Certification.css";

function Certification() {
  return (
    <div className="certification-container">
      <h1 className="certificates-heading">Certificates</h1>
      <Carousel interval={null} indicators={null}>
        <Carousel.Item>
        <img
            className="d-block w-100 h-100 container"
            src="/Template/nptel 1.jpg" // Replace with your image path
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 h-100 container"
            src="/Template/merit certi.jpg" // Replace with your image path
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="path_to_your_image3.jpg" // Replace with your image path
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Certification;
