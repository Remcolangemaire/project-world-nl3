import React from 'react'
import './layoutBlogPost.scss'
import { Col, Container, Row } from 'react-bootstrap'
import TextCard from '../cards/TextCard'
import CarouselF2 from '../carousels/CarouselF2'

const FotoOnder = (props) => {
  return (
    <Container className='imga'>
    <Row>
      <Col>
        <TextCard title={props.title} description={props.description}/>
      </Col>
        
    </Row>
    <Row>
        <CarouselF2 img1={props.img1} img2={props.img2} alt={props.alt}/>
    </Row>
    </Container>
  )
}

export default FotoOnder;