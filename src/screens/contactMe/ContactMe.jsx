import React from 'react'
import './contactMe.css'
import { useEffect } from 'react';

import FavoriteIcon from '@mui/icons-material/Favorite';
import { pink } from '@mui/material/colors';


import location from "../../helpers/img/location.gif"
import whatsapp from "../../helpers/img/whatsapp.gif"
import linkedin from "../../helpers/img/linkedin.gif"
import github from "../../helpers/img/github.gif"
import medium from "../../helpers/img/medium.gif"
import call from "../../helpers/img/call.gif"
import mail from "../../helpers/img/mail.gif"
import facebook from "../../helpers/img/facebook.gif"


import Aos from "aos"
import "aos/dist/aos.css"

function ContactMe() {

  useEffect(() => {
    Aos.init({duration:2000});
  }, [])

  return (
    <>
      <div className="contactMe__container" style={{
        color: "white",
        padding: "1rem", marginTop: "0px", paddingTop: "10px"
      }} id="contact">
        <h1 data-aos="fade-top" style={{ marginBottom: "30px", marginTop: "0px", paddingTop: "0px", color: "black", textAlign: 'center' }}>CONTACT ME <img src={location} height="25px" alt="medium" /></h1>
        <h4 data-aos="fade-right" style={{
          marginLeft: "25%", marginTop: "60px", marginBottom: "30px", width: "50%", color: "black", textAlign: "justify",
          textJustify: "inter-word", textWrap: "wrap"
        }}>Hey, I love collaborating with new people, adapting with emerging technologies and exploring places. What about a cup of coffee with me?</h4>

        <div data-aos="slide-up" className="contactMe__data__links" style={{ display: "flex", flexWrap: "wrap" }}>

          <p> <a style={{ textDecoration: "none", textTransform: "none" }} rel="noreferrer" href="mailto:kantkrishna751@gmail.com?subject=Let us connect for future projects" target="_blank">Send <img src={mail} height="25px" alt="medium" /></a></p>

          <p  ><a style={{ textDecoration: "none", textTransform: "none" }} href="tel:+919801184456"><img src={call} height="25px" alt="medium" /> 8921277536</a></p>

          <p  ><a rel="noreferrer" style={{ textDecoration: "none", textTransform: "none" }} href="https://kantkrishna751.medium.com/" target="_blank">Read on <img src={medium} height="25px" alt="medium" /></a></p>

          <p  ><a rel="noreferrer" style={{ textDecoration: "none", textTransform: "none" }} href="https://www.facebook.com/0xABC.dev" target="_blank">My page <img src={facebook} height="25px" alt="medium" /></a></p>

          <p  ><a rel="noreferrer" style={{ textDecoration: "none", textTransform: "none" }} href="https://github.com/kkm980" target="_blank">Catch on <img src={github} height="30px" alt="github" /></a></p>

          <p  ><a rel="noreferrer" style={{ textDecoration: "none", textTransform: "none" }} href="https://www.linkedin.com/in/krishna980/" target="_blank">Connect on <img src={linkedin} height="30px" alt="linkedin" /></a></p>

        </div>
        <div style={{ display: "flex", width: "100%", flexWrap: "wrap", margin: "25px 0px", padding: "5px 0px", backgroundColor: "black", justifyContent: "center" }}>
          <div style={{ color: "white", marginRight: "25px" }}>Made with <FavoriteIcon sx={{ color: pink[500] }} /> in India</div>
          <div style={{ color: "white", textAlign: 'center' }}>No Copyright&copy; Feel free to learn. Any doubt?<a style={{ textDecoration: "none", color: "white", textTransform: "none" }} rel="noreferrer" href="https://bit.ly/3duDJaL" target="_blank"> Ping me <img src={whatsapp} height="25px" alt="whatsapp" /></a></div>
        </div>
      </div>
    </>
  )
}

export default ContactMe

// https://wa.me/918921277536/?
// text=Hi%20Krishna%2C%20I%20need%20a%20favour%20with%20your%20portfolio%20source%20code.

// https://icons8.com/icons
