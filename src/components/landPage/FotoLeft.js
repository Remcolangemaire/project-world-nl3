import React from 'react'
import './fotoHorRL.scss'
import { Col, Container, Row } from 'react-bootstrap'
import TextCard from '../cards/TextCard'
import CarouselF2 from '../carousels/CarouselF2'

const FotoLeft = (props) => {
  return (
    <Container className='imga'>
        <Row>
            <Col>
                <CarouselF2 img1={props.img1} img2={props.img2} alt={props.alt}/>
            </Col>
            <Col>
                <TextCard title={props.title} description={props.description}/>
            </Col>
        </Row>
    </Container>
  )
}

export default FotoLeft;