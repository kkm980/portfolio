import React from 'react'
import './contactMe.css'
import { navigationLinks } from '../../helpers/navigationLinks'

function createLinks() {
  return navigationLinks.map((e, idx) => (
    <p key={idx}><a href={e.ref}>{e.name}</a></p>
  ))
}

function ContactMe() {
  return (
    <div className="contactMe__container" id="contact">
      <div className="contactMe__data__links">
        <div>
          <p>Patna, Bihar</p>
          <p>Krishna Kant</p>
          <p>kantkrishna751@gmail.com</p>
        </div>
        <div>
          {createLinks()}
        </div>
      </div>
      <div style={{ textAlign:'center'}}>No Copyright&copy;. Feel free to copy and learn</div>
    </div>
  )
}

export default ContactMe
