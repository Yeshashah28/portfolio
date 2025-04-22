import React from 'react'
import { FaLinkedin, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import "../Contact/Contact.css"

const Contact = () => {
  return (
    <div className='Contact-container'>
      <h1 className="contact-heading">Contact</h1>
      <div className='contact-details container'>
      <FaEnvelope size={30} color="red" /> 
      <p className='contact-desc'>yeshah2807@gmail.com</p>
      </div>

      <div className='contact-details container'>
      <FaMapMarkerAlt size={30} color="red" /> 
      <p className='contact-desc'>Ahmedabad,Gujarat,India</p>
      </div>

      <div className='contact-details container'>
      <FaLinkedin size={30} color="red" /> 
      <p className='contact-desc'><a href="https://www.linkedin.com/in/yesha-shah28" target="_blank" rel="noopener noreferrer">
      https://www.linkedin.com/in/yesha-shah28
      </a></p>
      </div>
    </div>
  )
}

export default Contact
