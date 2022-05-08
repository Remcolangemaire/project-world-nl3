import React from 'react'
import './contact.scss'

const Contact = () => {
  return (
    <>
        <h1>Contact us</h1>
        <p>lorem ipsum</p>

        <div id='contact-container'>
          <div className='contact-info'>
          <h4>Contact information</h4>
            <p>text</p>
            <div className='icon-text'>
            <i class="fa fa-phone" aria-hidden="true"></i>
              <span>text</span>
            </div>
            <div className='social-media'>
              <a href='#' className='icon-circle'>
                <i className='icon'></i>
              </a>
            </div>
          </div>
          <form>
            
          </form>
        </div>
    </>
  )
}

export default Contact