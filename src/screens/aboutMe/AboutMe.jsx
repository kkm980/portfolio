import React from 'react'
import { useEffect } from 'react';
import './aboutMe.css'
import person from '../../images/person.png'
import Typed from 'react-typed';
import Aos from "aos"
import "aos/dist/aos.css"


function AboutMe() {
 
  useEffect(() => {
    Aos.init({duration:1000});
  }, [])


  return (
    <div className="about__container" id="about-me">
     <div data-aos="fade-up" className="firstRap">
      <img  src={person} alt="person icon"/>
      <div data-aos="zoom-out" className="typed">
      <h1 >Krishna Kant</h1>
      <Typed 
        strings={[
          " ",   
          "Front-end Web-developer", 
          "Back-end Web-developer", 
          "Full stack Web-developer",  
          "Problem solver",  
          '"a software Engineer"', 
          " ", 
          " "]}
          typeSpeed={40}
          backSpeed={50}
          loop
      />
      </div>
     
     </div>
     <div data-aos="fade-down" className="about__text">
       <h1>ABOUT ME</h1>
       <p>Aspiring full-stack web developer with a specialization in MERN stack. Team player with continuous and contagious ability to adapt to the changing needs of the company.</p>
     </div>
    </div>
  )
}

export default AboutMe
