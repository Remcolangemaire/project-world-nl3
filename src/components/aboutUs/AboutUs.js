import React from 'react'
import './aboutUs.scss'
import Card1 from '../cards/Card1'
import Card2 from '../cards/Card2'
import Card3 from '../cards/Card3'
import Carousel1 from '../cards/Carousel1'
import { Row } from 'react-bootstrap'

const AboutUs = () => {
  return (
    <div className='about-hero-container'>
      <Row>
        <Card1/>
        <Card2/>
        <Card3/>
      </Row>
      <Row>
        <Carousel1/>
      </Row>
    </div>
  )
}

export default AboutUs