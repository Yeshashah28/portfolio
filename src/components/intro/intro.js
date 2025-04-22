import React from 'react'
import "../intro/intro.css"

export default function Intro() {
  return (
    <div className='container1 container'>
    <div className='main-container1'>
        <span className='greetings'>Aloha,</span>
        <span className='introduction'>This is Yesha Shah</span>
        <span className='role'>Web Developer</span>
    </div>
    <div className='main-container2'>
        <img src="/Template/greetings.png" alt="owner's image" className='intro-image'></img>
    </div>
    </div>
  )
}
