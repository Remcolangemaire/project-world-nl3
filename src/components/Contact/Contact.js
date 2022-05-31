import React from 'react'
import './contact.scss'
import { MdEmail, MdCall, MdLocationOn, MdFacebook } from "react-icons/md";
// import { Col } from 'react-bootstrap';

const Contact = () => {
  return (
    <>
        <h1>Contact us</h1>
        <p className='sub-title'>lorem ipsum</p>

        <div id="contact-container">
          <div className="contact-info">
            <h4>
            Contact Information
            </h4>
            <p>Fill up the form and then click send</p>
            <div className="icon-text">
              <MdCall/>
              <span>+31-623493617</span>
            </div>
            <div className="icon-text">
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
            {/* <div className="social-media">
              <a href="#" className="icon-circle">
                <MdFacebook className='iconsize'/>
              </a>
              <a href="#" className="icon-circle">
                <MdFacebook className='iconsize'/>
              </a>
              <a href="#" className="icon-circle">
                <MdFacebook className='iconsize'/>
              </a>
            </div> */}
        </div>
        <form>
          <div className='col'>
            <div className='form-group'>
              <label>First Name</label>
              <input type='text'/>
            </div>
            <div className='form-group'>
              <label>First Name</label>
              <input type='text'/>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Contact;