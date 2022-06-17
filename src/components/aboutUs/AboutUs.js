import React, { useState } from 'react'
import './aboutUs.scss'
import Carousel1 from '../cards/Carousel1'
import { Row } from 'react-bootstrap'
import profimage1 from '../../images/IMG_7993_small-crop.png'
import profimage2 from '../../images/IMG_8272-min-crop.png'

const AboutUs = () => {
  const [number, setNuber] = useState(0);
  return (
    <div className='about-hero-container imgas'>
      <Row className="content-containers">
        <div className="wrapper imgass">
          <div onClick={() => setNuber(0)}>    
          <div class="carde">
              <img src={profimage1} alt='Remco'/>
              <div class="details">
                <h4>Click here</h4>
                <p>For more info on Remco</p>
              </div>
            </div>        
          </div>
          <div onClick={() => setNuber(1)}>
            <div class="carde">
              <img src={profimage2} alt='Jord'/>
              <div class="details">
                <h4>Click here</h4>
                <p>For more info on Jord</p>
              </div>
            </div>          
          </div>
        </div>
      </Row>
      <Row>
        <Carousel1 number={number}/>
      </Row>
    </div>
  )
}

export default AboutUs