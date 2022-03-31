import React from 'react'
import style from './fotoRight.scss'
import { Col, Container, Row } from 'react-bootstrap'

const FotoRight = (props) => {
  return (
    <Container>
    <Row>
      <Col>
        <h2 >{props.title}</h2>
        <p >{props.description}</p>
      </Col>
      <Col>
        <img src={props.img} alt={props.alt} style={style}/>
      </Col>
    </Row>
    </Container>
  )
}

export default FotoRight