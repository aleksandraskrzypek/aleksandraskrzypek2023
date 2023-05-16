import React from 'react';
import '../style/about.scss'

function About() {


  return (
    <div id='about' className='bg-page bg-page-about'>
      <div className='aboutPageContainer'>
        <div className='title'>
          <h1 data-aos="flip-left" data-aos-duration="2000">{'{'} ABOUT ME {'}'}</h1>
        </div>
        <div className='aboutPageHead'>
          <div className='aboutMeText'>
            <p data-aos="fade-up"
     data-aos-duration="1000">As a <strong>junior frontend developer</strong> and <strong>UI designer</strong>, I bring a passion for creating visually appealing and user-friendly digital experiences.</p>
            <p data-aos="fade-up"
     data-aos-duration="2000">With a <strong>strong foundation in HTML, CSS, and JavaScript</strong>, I am dedicated to crafting pixel-perfect designs that seamlessly merge functionality with <strong>aesthetics</strong>. My curiosity and eagerness to learn drive me to stay up-to-date with the latest industry trends and emerging technologies. </p>
            <p data-aos="fade-up"
     data-aos-duration="3000">I thrive in collaborative environments and value teamwork, as it allows me to contribute my skills and ideas while continuously <strong>growing as a professional</strong>. With a keen eye for detail and a creative mindset, I am committed to delivering innovative solutions that enhance user satisfaction and <strong>exceed expectations</strong>.</p>
          
  


          <div className='listSkills'>
              <ul>
                <li>well-organised person</li>
                <li>problem solver</li>
                <li>creativity</li>
                <li>cooperate</li>
                <li>responsible</li>
                <li>quick learning</li>
                <li>optimistic and smiling person</li>
              </ul>
            </div>
            </div>
          <div className='aboutMeSkills'>
            <h1 className='skills'>Skills:</h1>
            <div className='progress'>
              <h2>HTML</h2>
              <div className='emptyBar spaceBar'>
                <div data-aos="flip-left" data-aos-duration="3000" className='barHtml spaceBar '></div>
              </div>
              <h2>CSS/SCSS</h2>
              <div className='emptyBar spaceBar'>
                <div data-aos="flip-left" data-aos-duration="3000" className='barCss spaceBar'></div>
              </div>
              <h2>REACT</h2><div className='emptyBar spaceBar'>
                <div data-aos="flip-left" data-aos-duration="3000" className='barReact spaceBar'></div>
              </div>
              <h2>JavaScript</h2><div className='emptyBar spaceBar'>
                <div data-aos="flip-left" data-aos-duration="3000" className='barJavaScript spaceBar'></div>
              </div>
            </div>
            <h1 className='skills'>Also know/work with:</h1>
            <div className='listSkills'>
              <ul>
                <li>bootstrap</li>
                <li>tailwind</li>
                <li>next.js</li>
                <li>responsive web design</li>
                <li>git</li>
                <li>illustrator</li>
                <li>gimp</li>
                <li>canva</li>
                <li>inkscape</li>
                <li>linux</li>
                <li>wordpress</li>
                <li>jira</li>
                <li>figma</li>
                <li>wpf/xaml</li>
                <li>angular</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About