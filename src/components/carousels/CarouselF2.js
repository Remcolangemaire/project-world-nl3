import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './carousel1.scss'

const CarouselF2 = (number, props) => {
  return (
    <div className='carousel-container'>
    <Carousel interval={null} controls= {false} activeIndex ={number} indicators={false}>
      <Carousel.Item>
        <img src={props.img1} alt={props.alt} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={props.img2} alt={props.alt} />
      </Carousel.Item>
    </Carousel>
  </div>
  )
}

export default CarouselF2