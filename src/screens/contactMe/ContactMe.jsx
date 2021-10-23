import React from 'react'
import './contactMe.css'
import { useEffect } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DvrIcon from '@mui/icons-material/Dvr';
import { pink } from '@mui/material/colors';

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
      padding: "1rem", marginTop:"0px",paddingTop:"10px"}} id="contact">
    <h1 data-aos="fade-top" style={{ marginBottom:"30px",marginTop:"0px",paddingTop:"0px",color:"black", textAlign: 'center'}}>CONTACT ME</h1>
    <h4 data-aos="fade-right" style={{marginLeft:"25%",marginTop:"60px", marginBottom:"30px",width:"50%",color:"black", textWrap:"wrap"}}>Hey, I love collaborating with new people, adapting with emerging technologies and exploring places. What about a cup of coffee with me?</h4>

      <div data-aos="slide-up" className="contactMe__data__links" style={{display:"flex", flexWrap:"wrap"}}>

        <p   > <a  style={{textDecoration:"none", textTransform:"none"}} rel="noreferrer" href="mailto:kantkrishna751@gmail.com?subject=Let us connect for future prospects" target="_blank">Send me a<MailOutlineIcon sx={{ fontSize: 30 }}/></a></p>

        <p  ><a  style={{textDecoration:"none", textTransform:"none"}} href="tel:+919801184456">Click to<CallIcon sx={{ fontSize: 30 }}/>8921277536</a></p>

        <p  ><a   rel="noreferrer" style={{textDecoration:"none", textTransform:"none"}} href="https://kantkrishna751.medium.com/" target="_blank">Read on <DvrIcon sx={{ fontSize: 30 }}/></a></p>

        <p  ><a rel="noreferrer" style={{textDecoration:"none", textTransform:"none"}} href="https://github.com/kkm980" target="_blank">Find me here <GitHubIcon sx={{ fontSize: 30 }}/></a></p>

        <p  ><a rel="noreferrer" style={{textDecoration:"none", textTransform:"none"}} href="https://www.linkedin.com/in/krishna980/" target="_blank">Let's connect on<LinkedInIcon sx={{ fontSize: 30 }}/></a></p>

      </div>
      <div style={{display:"flex", flexWrap:"wrap",margin:"25px 0px",backgroundColor:"black", justifyContent:"center"}}>
      <div data-aos="zoom-in" style={{color:"white", marginRight:"25px"}}>Made with <FavoriteIcon sx={{ color: pink[500] }}/> in India</div>
      <div  data-aos="fade-right" style={{color:"white", textAlign:'center'}}>No Copyright&copy; Feel free to learn. Any doubt?<a style={{textDecoration:"none", color:"white", textTransform:"none"}} rel="noreferrer" href="https://bit.ly/3duDJaL" target="_blank"> Ping me  <WhatsAppIcon/></a></div>
      </div>
    </div>
    </>
  )
}

export default ContactMe

// https://wa.me/918921277536/?
// text=Hi%20Krishna%2C%20I%20need%20a%20favour%20with%20your%20portfolio%20source%20code.
