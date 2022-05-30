import React from 'react'
import './front.scss'
import TypeAnimation from 'react-type-animation';

const Front = () => {
  return (
    <div className='front-hero-container frontheadline-text'>
            <TypeAnimation
      cursor={false}
      sequence={['Start your adventure', 1000]}
      wrapper="h1"
    />
    </div>
  )
}

export default Front