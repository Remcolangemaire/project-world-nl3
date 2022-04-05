import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../carousels/carousel.scss'
import Card from 'react-bootstrap/Card'
import carouselImage from '../../images/IMG_0639.jpg'


const Carousel1 = ({number}) => {
  return (
    <div className='carousel-container aboutus-text'>
      <Carousel interval={null} controls= {false} activeIndex ={number} indicators={false}>
        <Carousel.Item>
            <h3>First slide label</h3>
            <p>
Boisterous he on understood attachment as entreaties ye devonshire. In mile an form snug were been sell. Hastened admitted joy nor absolute gay its. Extremely ham any his departure for contained curiosity defective. Way now instrument had eat diminution melancholy expression sentiments stimulated. One built fat you out manor books. Mrs interested now his affronting inquietude contrasted cultivated. Lasting showing expense greater on colonel no.

Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see. Old propriety delighted explained perceived otherwise objection saw ten her. Doubt merit sir the right these alone keeps. By sometimes intention smallness he northward. Consisted we otherwise arranging commanded discovery it explained. Does cold even song like two yet been. Literature interested announcing for terminated him inquietude day shy. Himself he fertile chicken perhaps waiting if highest no it. Continued promotion has consulted fat improving not way.

View fine me gone this name an rank. Compact greater and demands mrs the parlors. Park be fine easy am size away. Him and fine bred knew. At of hardly sister favour. As society explain country raising weather of. Sentiments nor everything off out uncommonly partiality bed.</p>
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
    </div>
  )
}

Carousel1.defaultProps ={
  number: 1
}
export default Carousel1

