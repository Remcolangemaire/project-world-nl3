import React from 'react'
import './homeMap.scss'
// import Maps from '../googleMaps/Maps'
import TypeAnimation from 'react-type-animation';


const HomeMap = () => {
  return (
    <div className='map-hero-container'>
      <TypeAnimation
      cursor={false}
      sequence={['Where to?', 2000]}
      wrapper="h1"
      />
      {/* <Maps/> */}
    </div>
  )
}

export default HomeMap