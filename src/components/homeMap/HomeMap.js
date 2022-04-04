import React from 'react'
import './homeMap.scss'
import Maps from '../googleMaps/Maps'

const HomeMap = () => {
  return (
    <div className='map-hero-container'>
        <div className="card">
          <Maps/>
        </div>
    </div>
  )
}

export default HomeMap