import React from 'react'
import { useEffect } from 'react';
import './navigation.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { navigationLinks } from '../../helpers/navigationLinks'
import siglog from "../../helpers/img/siglog.gif"
import Aos from "aos"
import "aos/dist/aos.css"

function createLinks() {

  return navigationLinks.map((e, idx) => (
    <Nav.Link key={idx} href={e.ref}>{e.name}</Nav.Link>
  ))
}

function NavigationBar() {

  useEffect(() => {
    Aos.init({duration:1000});
  }, [])

  return (
    <div id="home">
      <Navbar className="navigation__container" style={{
        zIndex: '2', position: 'fixed', top: '0', width: '100%'
      }} collapseOnSelect
        expand="md">
        <img  data-aos="slide-right" style={{height:"30px", marginLeft: '1rem' }} href="#home" src={siglog} alt=""/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse style={{ justifyContent: 'flex-end', marginRight: '1rem', borderColor: 'none' }}>
          <Nav data-aos="slide-right" className="links" style={{ margin: '0 1rem' }}>
            {createLinks()}
            <Nav.Link key={10} target="_blank" href="https://bit.ly/resume_krishnaKant">RESUME</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavigationBar
