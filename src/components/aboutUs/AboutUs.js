import React, { useState } from 'react'
import './aboutUs.scss'
import Carousel1 from '../cards/Carousel1'
import { Row } from 'react-bootstrap'
import Card from '../cards/Card'
import imgJ from '../../images/IMG_9761.jpg'
import profimage from '../../images/round.png'

const AboutUs = () => {
  const [number, setNuber] = useState(0);
  return (
    <div className='about-hero-container imgas'>
      <Row className="content-containers">
        <div className="wrapper">
          <div onClick={() => setNuber(0)}>          
            <img src={profimage} alt='Remco'/>
          </div>
          <div onClick={() => setNuber(1)}>          
            <img src={profimage} alt='Remco'/>
          </div>
          <div onClick={() => setNuber(2)}>    
            <img src={profimage} alt='Remco'/>
          </div>
        </div>
      </Row>
      <Row>
        <Carousel1 number={number}/>
      </Row>
    </div>
  )
}

export default AboutUs