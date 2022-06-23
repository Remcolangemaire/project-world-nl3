import React from 'react'
import './contact.scss'
import { MdEmail, MdCall, MdLocationOn, MdFacebook} from "react-icons/md";
// import { Col } from 'react-bootstrap';

const Contact = () => {
  return (
    <div className='contactcont'>
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
              <span>projectworldnl@gmail.com</span>
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
          <div className='col'>
            <div className='form-group'>
              <label>First Name</label>
              <input type='text'/>
            </div>
            <div className='form-group'>
              <label>last Name</label>
              <input type='text'/>
            </div>
          </div>
          <div className='col'>
            <div className='form-group'>
              <label>E-mail</label>
              <input type='email'/>
            </div>
            <div className='form-group'>
              <label>Phone</label>
              <input type='tel'/>
            </div> 
          </div>
          <div className='col'>
            <div className='form-group'>
              <label>Why are you contacting us?</label>
              <div id='radio-buttons'>
                <div className='radio-buttons'>
                  <input type='radio' id="radiobusiness" name='type' value="business"/><label for="radiobusiness">Business</label>
                </div>
                <div className='radio-buttons'>
                  <input type='radio' id="radioProblem" name='type' value="Problem"/><label for="radioProblem">Problem</label>
                </div>
                <div className='radio-buttons'>
                  <input type='radio' id="radioPersonal" name='type' value="Personal"/><label for="radioPersonal">Personal</label>
                </div>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='form-group'>
              <label>Message</label>
              <textarea></textarea>
            </div>
          </div>
          <div className='col'>
            <div className='form-group right'>
              <button className='primary right'>Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact;