import React from 'react'
import './homeMap.scss'
import Maps from '../googleMaps/Maps'

const HomeMap = () => {
  return (
    <div className='map-hero-container'>
      <h1>Where to?</h1>
      <Maps/>
    </div>
  )
}

export default HomeMap