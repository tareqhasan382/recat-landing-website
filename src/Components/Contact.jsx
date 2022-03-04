import React from 'react';

function Contact() {
  return (
    <div id='contact'>
      <h3>Send Me Mail</h3>
      <div className='contact-input'>
        <input type="email" placeholder='example@gmail.com'/>
            <a href="#">Contact</a>
            
      </div>
      <p id='footer'>© 2022 Powered By <span id='by'>TaReQ</span></p>
    </div>
  );
}

export default Contact;
