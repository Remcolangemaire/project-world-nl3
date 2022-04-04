import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './carousel.scss'

const CarouselVerF2 = (props) => {
  return (
    <div className='foto-carousel-container'>
    <Carousel indicators={false}>
      <Carousel.Item>
        <img src={props.img1} alt={props.alt} className='imga'/>
      </Carousel.Item>
      <Carousel.Item >
        <img src={props.img2} alt={props.alt} className='imga'/>
      </Carousel.Item>
    </Carousel>
  </div>
  )
}

export default CarouselVerF2;