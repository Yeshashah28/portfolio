import React from 'react'
import "../Aboutme/Aboutme.css"

const Aboutme = () => {
  return (
    <div className='about-me-container'>
        <div className='about-me-image'><img src="/Template/aboutme.png" alt="description" className='about-me-svg' /></div>
        <div className='about-me-content'>
            <h1 className="about-me-heading">About Me</h1>
            <p className='about-me-paragraph1'>My name is <i>Yesha Shah</i> and I'm currently Pursuing <i>BE-IT</i> in <i>Ldrp Institute Of Technology And Research,Gandhinagar</i>.</p>
            <p className='about-me-paragraph2'>I'm an average IT student, learning basics, diving deep into tech tutorials or building random projects.
                I may not always have the answer right away, but give me a bit of time with Google and some snacks, and 
                I’ll crack it.</p>
        </div>
    </div>
  )
}

export default Aboutme;

