import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../carousels/carousel.scss'
import { Container } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons';

const Carousel1 = ({number}) => {
  return (
    <Container className='aboutus-text' style={{
      paddingTop: 20, paddingRight: 100, paddingLeft:100, paddingBottom: 20
    }}>
      <Carousel className='carousel-container' interval={null} controls= {false} activeIndex ={number} indicators={false}>
        <Carousel.Item>
            <h1>Remco</h1>
            <p>
Boisterous he on understood attachment as entreaties ye devonshire. In mile an form snug were been sell. Hastened admitted joy nor absolute gay its. Extremely ham any his departure for contained curiosity defective. Way now instrument had eat diminution melancholy expression sentiments stimulated. One built fat you out manor books. Mrs interested now his affronting inquietude contrasted cultivated. Lasting showing expense greater on colonel no.

Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see. Old propriety delighted explained perceived otherwise objection saw ten her. Doubt merit sir the right these alone keeps. By sometimes intention smallness he northward. Consisted we otherwise arranging commanded discovery it explained. Does cold even song like two yet been. Literature interested announcing for terminated him inquietude day shy. Himself he fertile chicken perhaps waiting if highest no it. Continued promotion has consulted fat improving not way.

View fine me gone this name an rank. Compact greater and demands mrs the parlors. Park be fine easy am size away. Him and fine bred knew. At of hardly sister favour. As society explain country raising weather of. Sentiments nor everything off out uncommonly partiality bed.</p>
          <SocialIcon url="https://twitter.com/Remcolang" network="twitter" style={{marginRight: 15}}/>
          <SocialIcon url="https://www.instagram.com/remcolangemaire/" network="instagram" style={{marginRight: 15}}/>
          <SocialIcon url="https://www.youtube.com/channel/UC-qODza4NJhV_fJfnE1jWww" network="youtube" style={{marginRight: 15}}/>
          <SocialIcon url="https://www.facebook.com/profile.php?id=100008816744304" network="facebook" />
        </Carousel.Item>
        <Carousel.Item>
            <h1>Jord</h1>
            <p>
Hey! I’m Jord, I’m an adventure/travel photographer based in Noordwijk, NL. I’m currently the main photographer behind ProjectWorldNL, and love to travel the world to tell our story through my photography. By sharing our experiences and encouraging others to go out and explore. 
At the moment I’m unfortunately not able to fully live the dream, because I’m still a third year Industrial Design student. But would love to make this a full time job!</p>
<SocialIcon url="https://twitter.com/Jord33Sytsema" network="twitter" style={{marginRight: 15}}/>
          <SocialIcon url="https://www.instagram.com/george_the_mx5/" network="instagram" style={{marginRight: 15}}/>
          <SocialIcon url="https://www.youtube.com/channel/UC0A0v9kaUGL27KCkGmS_Vog" network="youtube" style={{marginRight: 15}}/>
          <SocialIcon url="https://www.facebook.com/jord.sytsema" network="facebook" />
        </Carousel.Item>
        <Carousel.Item>
            <h1>Third slide label</h1>
          <p>Who am I? To be honest some times I don't even know the awnser to that question. Others often call me crazy and impulsive, wich is something I can't argue with to be honest. Since I've given up my study to play for an e-sports team, I've finnaly been able to find out where my passion lies and who I am. I became a pretty succesfull coach and analist in the gaming industry. But decieded I wanted to take a step back from that life in 2022. Being a bit lost after quiting, I one day reciesved a message from a friend to go and travel the world. Offcourse I couldn't recist and had to say yes to this oppertunity. Which leads us to the current day, in wich were constantly looking at our next oppertunity to travel, explore and intorduce to others.  </p>
          <SocialIcon url="https://twitter.com/Remcolang" network="twitter" style={{marginRight: 15}}/>
          <SocialIcon url="https://www.instagram.com/remcolangemaire/" network="instagram" style={{marginRight: 15}}/>
          <SocialIcon url="https://www.youtube.com/channel/UC-qODza4NJhV_fJfnE1jWww" network="youtube" style={{marginRight: 15}}/>
          <SocialIcon url="https://www.facebook.com/profile.php?id=100008816744304" network="facebook" />
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}

Carousel1.defaultProps ={
  number: 1
}
export default Carousel1

