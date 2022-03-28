import React, { useState } from 'react'
import './aboutUs.scss'
import Carousel1 from '../cards/Carousel1'
import { Row } from 'react-bootstrap'
import Card from '../cards/Card'
import imgJ from '../../images/IMG_9761.jpg'

const AboutUs = () => {
  // const [number, setNuber] = useState('')
  const onClick = (type) => {
    // onchange={(e) => setNuber(e.type)};
  }
  return (
    <div className='about-hero-container'>
      <Row>
        <div className="wrapper">
          <button onClick={onClick (0)}>          
            <Card
            img= {imgJ}
            title="Remco "
            description="Dit is wat boring text"
          /></button>
          <button onClick={onClick (1)}>          
            <Card
            img={imgJ}
            title="Jord "
            description="Dit is wat boring text"
          /></button>
          <button onClick={onClick (2)}>    
            <Card 
            img={imgJ}
            title="Jos"
            description="Dit is wat boring text"
          /></button>
        </div>
      </Row>
      <Row>
        <Carousel1 number={1
        }/>
      </Row>
    </div>
  )
}

export default AboutUs