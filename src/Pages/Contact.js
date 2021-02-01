import React from 'react';
import './Contact.css';
// import {Route, BrowserRouter as Router} from "react-router-dom";

function Contact() {
  return (
    <div className='page-contact'>
      <text style={{fontSize: 70}}>Contacts</text>
      <div className='page-contact-main'>
        <div className='page-contact-map'>
        <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.2388931195596!2d-123.01821408391051!3d49.23395977932612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548676f3a823dee3%3A0x62cb539a5fd7bc0b!2s5655%20Inman%20Ave%2C%20Burnaby%2C%20BC%20V5H%202M2!5e0!3m2!1sen!2sca!4v1612203874388!5m2!1sen!2sca" width="700" height="550" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
        <div className='page-contact-container'>
          <div className='page-contact-text'>
            <text style={{fontWeight:700}}>Address:</text>
            <text>201, 5655 Inman Avenue, Burnaby, BC<br />V5H 2M2, Canada</text>
            <text style={{paddingTop:20, fontWeight:700}}>Phone:</text>
            <text>+1 778 877 2135</text>
            <text style={{paddingTop:20, fontWeight:700}}>E-mail:</text>
            <text>mmbocruz@gmail.com</text>
          </div>
          <div className='page-contact-social'>
            <div className='page-contact-social-box'>
              <div className='page-contact-icon-instagram'>
                <i class="fab fa-instagram fa-4x"></i>
              </div>
              <div className='page-contact-icon-facebook'>
                <i class="fab fa-facebook fa-4x"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;