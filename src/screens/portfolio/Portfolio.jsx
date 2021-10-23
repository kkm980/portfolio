import React, { useState, useEffect } from 'react';
import './portfolio.css'
import portfolioData from '../../helpers/portfolioData'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Aos from "aos"
import "aos/dist/aos.css"


function Portfolio() {
  
  useEffect(() => {
    Aos.init({duration:1000});
  }, [])

  const [modalShow, setModalShow] = useState(false);
  const [tempData, setTempData] = useState({})

  function createModal(data) {
    return (
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        arial-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            {data.desc}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="summary_desc">
          <Image src={data.image} style={{ width: '200px' }} />
          <div>{data.summary}</div>
          </div>
        </Modal.Body>
        <div style={{display:"flex", justifyContent:"flex-start"}}>
        <a className="portfolio__modal__link" href={data.link} target="_blank" rel="noreferrer">Site</a>
        <a className="portfolio__modal__link" href={data.gitlink} target="_blank" rel="noreferrer">Github</a>
        <a className="portfolio__modal__link" href={data.medlink} target="_blank" rel="noreferrer">Blog</a>
        </div>
        <Modal.Footer>
          <div>Technologies used: </div>
          <p style={{ fontSize: '0.7rem', marginRight: 'auto'}}>{data.tech}</p>
          <Button onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }

  const mapped = portfolioData.map((e, idx) => {
    return (
      <Card data-aos={idx%2!==0?"fade-down-left":"fade-up-right"} key={idx} id="portfolio__card__container">
         <h4 className="bold_text">{idx+1}. {e.desc}</h4>
        <Image className="portfolio__image"
          onClick={() => {
            setTempData({
              image: e.image,
              link: e.link,
              gitlink: e.gitlink,
              medlink: e.medlink,
              desc: e.desc,
              summary: e.summary,
              tech: e.tech
            })
            setModalShow(true)
          }}
          src={e.image} />
        <div className="portfolio__click__info">&#x1F50E;&#xFE0E;</div>
        {createModal(tempData)}
      </Card>
    )
  })

  return (
    <div className="portfolio__main__container" id="projects">
      <h1>PROJECTS</h1>
      <p data-aos="fade-right">Explore more on my Github
        <a className="nextLink" style={{color:"black", textDecoration:"none"}} href="https://github.com/kkm980" target="_blank" rel="noreferrer"> https://github.com/kkm980</a>
      </p>
      <p data-aos="fade-down" >Pay a visit
        <a className="nextLink" style={{color:"black",  textDecoration:"none"}} href="https://bit.ly/3Ef3dU7" target="_blank" rel="noreferrer"> Resume</a>
      </p>
      <Container fluid="lg" style={{ padding: '1rem 0' }}>
        <Row>
          {mapped}
        </Row>
      </Container>
    </div>
  )
}

export default Portfolio
