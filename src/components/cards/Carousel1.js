import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './carousel1.scss'
import carouselImage from '../../images/IMG_0639.jpg'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'

const Carousel1 = () => {
  return (
    <Carousel className='carousel-container' interval={null} controls= {false} indicatorLabels ={[Card1, Card2, Card3]} indicators={false}>
      <Carousel.Item>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Item>
      <Carousel.Item>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Item>
      <Carousel.Item>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Item>
    </Carousel>
  )
}

FormatCard() {
  const {count} = Card1.s
}

export default Carousel1

