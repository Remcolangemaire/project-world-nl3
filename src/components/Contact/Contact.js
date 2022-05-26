import React from 'react'
import './contact.scss'
import { MdEmail, MdCall, MdLocationOn, MdFacebook } from "react-icons/md";

const Contact = () => {
  return (
    <>
        <h1>Contact us</h1>
        <p>lorem ipsum</p>

        <div id="contact-container">
          <div className="contact-info">
            <h4>
            Contact Information
            </h4>
            <p>Fill up the form and then click send</p>
            <div className="icon-text">
              <MdCall/>
              <span>+31-623493617</span>
              <MdCall/>
              <span>+31-610695887</span>
            </div>
            <div className="icon-text">
              <MdEmail/>
              <span>admin@billys.com</span>
            </div>
            <div className="icon-text">
              <MdLocationOn/>
              <span>435 Grand Ave,Ridgewood,NY 11385</span>
            </div>
            <div className="social-media">
              <a href="#" className="icon-circle">
                <MdFacebook className='iconsize'/>
              </a>
              <a href="#" className="icon-circle">
                <MdFacebook className='iconsize'/>
              </a>
              <a href="#" className="icon-circle">
                <MdFacebook className='iconsize'/>
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

