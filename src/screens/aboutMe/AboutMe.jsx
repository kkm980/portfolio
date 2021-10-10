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
      <h1>Who am I?</h1>
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
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quia placeat eos atque veniam voluptatum sapiente ipsum tempore iste, omnis cumque velit autem consectetur. Veritatis molestias ullam voluptas nostrum? Dolorum.</p>
     </div>
    </div>
  )
}

export default AboutMe
