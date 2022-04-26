import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TextCard from '../cards/TextCard'
import CarouselF2 from '../carousels/CarouselF2'

const FotoVerRight = (props) => {
  return (
    <Container >
    <Row>
      <Col sm={7}>
        <div className='vertical'>
            <TextCard title={props.title1} description={props.description1}/>
        </div>
        <div className='vertical'>
            <TextCard title={props.title2} description={props.description2}/>
        </div>
      </Col>
      <Col>
        <CarouselF2 img1={props.img1} img2={props.img2} alt={props.alt}/>
      </Col>
    </Row>
    </Container>
  )
}

export default FotoVerRight;