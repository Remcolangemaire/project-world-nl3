import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './carousel.scss'

const CarouselF2 = (props) => {
  return (
    <div className='foto-carousel-container'>
    <Carousel indicators={false} interval={null}>
      <Carousel.Item>
        <img src={props.img1} alt={props.alt} />
      </Carousel.Item>
      <Carousel.Item >
        <img src={props.img2} alt={props.alt} />
      </Carousel.Item>
    </Carousel>
  </div>
  )
}

export default CarouselF2;