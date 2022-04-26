import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './carousel.scss'

const CarouselVerF3 = (number, props) => {
  return (
    <div className='foto-carousel-container'>
    <Carousel interval={null} indicators={false}>
      <Carousel.Item>
        <img src={props.img1} alt={props.alt} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={props.img2} alt={props.alt} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={props.img3} alt={props.alt} />
      </Carousel.Item>
    </Carousel>
  </div>
  )
}

export default CarouselVerF3;