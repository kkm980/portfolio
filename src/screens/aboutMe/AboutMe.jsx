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
       <p>Working as a Full-stack web developer specializing in MERN stack, and looking forward to becoming a Blockchain developer. I am a Team player with the top-notch ability to adapt to the company's changing needs. Looking for a Blockchain specialized platform where I can gain a deeper understanding and experience while utilizing my skills to add value in product building.</p>
     </div>
    </div>
  )
}

export default AboutMe
