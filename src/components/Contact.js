import React from 'react'
import '../style/contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLocationPin } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
    <div id='contact' className='bg-page bg-page-contact'>
      <div className='contactPageContainer'>
        <div className='title'>
          <h1 data-aos="flip-left" data-aos-duration="2000">{'{'} CONTACT {'}'}</h1>
        </div>
        <div className='contactPageHead'>
          <div className='infoContact' data-aos="fade-right" data-aos-duration="2000">
            <h1>Don't be a stranger <br /> just say hello.</h1>
            <h2>Thank you for your time. If you have questions or something else feel free to contact with me.</h2>

            <div className='iconContainer'>
              <FontAwesomeIcon icon={faLocationPin} className='iconContact'/>
              <p>Cracow, Poland</p>
            </div>
            <div className='iconContainer'>
              <FontAwesomeIcon icon={faEnvelope} className='iconContact'/>
              <p>aleksandraskrzypek97@gmail.com</p>
            </div>


          </div>
          <div className='formContainer' data-aos="fade-left" data-aos-duration="2000">
            <form action="sendMail.php" method="post">
              <input placeholder='First Name*' type='text' className='contactInput' required/>
              <input placeholder='Last Name' type='text' className='contactInput'/>
              <input placeholder='Phone' type='number' className='contactInput'/>
              <input placeholder='Email' type='email' className='contactInput'/>
              <textarea placeholder='Message*' rows="8" cols="35" className='contactInput' required/>
              <button className='buttonForm' type="submit">SEND MESSAGE</button>
              {/* <input type="submit" value="Wyślij" /> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact