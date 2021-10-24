import React from 'react'
import './technologies.css'
import { useEffect } from 'react';
import DevIcon from "devicon-react-svg";
import {techs} from '../../helpers/techs'

import Aos from "aos"
import "aos/dist/aos.css"

function Technologies() {

  useEffect(() => {
    Aos.init({duration:3000});
  }, [])

  return (
    <div className="technologies__container" id="skills">
      <div>
        <h1 style={{textAlign: 'center'}}>My Skills</h1>
      </div>
      <div className="tech__cards__container">
        {techs.map((e, idx) => {
          return (
            <div data-aos="zoom-in" key={idx} className="tech__card">
              <DevIcon data-aos="fade-bottom" className="tech__icons" icon={e.iconName} />
              <span  data-aos="fade-right" className="card_text_names" style={{ margin: '5px'}}>{e.name}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Technologies
