import React, { useEffect } from 'react'
import '../style/home.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope,faFaceSmile } from '@fortawesome/free-solid-svg-icons'
import avatar from '../image/avatarwithout.png'
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

import AOS from 'aos';
import 'aos/dist/aos.css';



function Home() {

  useEffect(() => {
    //AOS.init(); // Inicjalizacja biblioteki AOS
    window.addEventListener('scroll', AOS.refresh); // Odświeżanie animacji AOS przy scrollowaniu
  }, []);



  return (
    <div id='home' className='bg-page bg-page-home'>

      <div className='homePageContainer'>
        <div className='title'>
          <h1 data-aos="flip-left" data-aos-duration="2000">{'{'} HOME {'}'}</h1>
        </div>
        <div className='homePageHead'>
          <div className='homePageBody'>
          <div className='avatarOnlyMobile' data-aos="fade-left"  data-aos-duration="2000">
                <img alt="" src={avatar} className='avatarImageOnlyMobile'/>
          </div>
          <div className='diffLinks' data-aos="fade-right"  data-aos-duration="2000">
            <a href='https://github.com/aleksandraskrzypek'><FontAwesomeIcon icon={faGithub} className='iconBrands'/></a>
            <FontAwesomeIcon icon={faFacebook} className='iconBrands'/>
            <FontAwesomeIcon icon={faEnvelope} className='iconBrands'/>
          </div>
          <div className='homeContent' data-aos="fade-right"  data-aos-duration="2000">
            <h1 className='borderLine'>Hi! I'm Aleksandra</h1>
            <h2>Frontend Developer || UI Designer</h2>
            <p>I'm frontend developer with UI Designer experience, trying to improve my skills every day. I would like to work with react. Scroll down and look at my works! <FontAwesomeIcon icon={faFaceSmile} className='iconSmile'/> <br /> Nice to have you here </p>

            {/* <button className='buttonHireMe'>Hire me</button> */}
          </div>
          <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
            <div className='homeAvatar' data-aos="fade-left"  data-aos-duration="2000">
              <MouseParallaxChild factorX={0.3} factorY={0.5}>
                <img alt="" src={avatar} className='avatarImage'/>
              </MouseParallaxChild>
            </div>
          </MouseParallaxContainer>

          <div className='diffLinksMobile'>
            <a href='https://github.com/aleksandraskrzypek'><FontAwesomeIcon icon={faGithub} className='iconBrandsMobile'/></a>
            <FontAwesomeIcon icon={faFacebook} className='iconBrandsMobile'/>
            <FontAwesomeIcon icon={faEnvelope} className='iconBrandsMobile'/>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home