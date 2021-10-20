import React from 'react'
import './aboutMe.css'
import person from '../../images/person.png'
import Typed from 'react-typed';

function AboutMe() {
  return (
    <div className="about__container" id="about-me">
     <div className="firstRap">
      <img src={person} alt="person icon"/>
      <div>
      <h1>Krishna Kant</h1>
      <h3>Who am I?</h3>
      <Typed 
        strings={[
          " ", 
          "A Software Engineer", 
          "Also known as an", 
          "Front-end developer", 
          "Back-end developer", 
          "Full stack developer", 
          "Or!", 
          '"a coder"', 
          " ", 
          " "]}
          typeSpeed={40}
          backSpeed={50}
          loop
      />
      </div>
     
     </div>
     <div className="about__text">
       <h1>ABOUT ME</h1>
       <p>Aspiring full-stack web developer with a specialization in MERN stack. Team player with continuous and contagious ability to adapt to the changing needs of the company.</p>
     </div>
    </div>
  )
}

export default AboutMe
