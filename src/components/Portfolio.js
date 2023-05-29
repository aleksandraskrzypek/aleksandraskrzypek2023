import React from 'react'
import '../style/portfolio.scss'
import myData from '../Data/myData.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'

import mockup1 from '../image/mockup1Without.png'
import mockup2 from '../image/mockup2Without.png'

import img1 from '../image/wordleApp.png'
import img2 from '../image/englishApp.png'


function Portfolio() {
  

  return (
    <div id='portfolio' className='bg-page bg-page-portfolio'>
      <div className='portfolioPageContainer'>
        <div className='title'>
          <h1 data-aos="flip-left" data-aos-duration="2000">{'{'} Portfolio {'}'}</h1>
        </div>
        <div className='portfolioPageHead'>
          <div className='allContent'>
            <div className='work'>
              <h1 className='titlePortfolio'>My recantly Works</h1>
            </div>
            <div className='projects'>
              <div className='project'>
                <img alt="" src={img1} className='imgPortf'/>
                <div className='titleWithIcon'>
                  <h1 className='titlePortfolio'>Wordle Game</h1>
                  <div className='iconsPorfolio'>
                    <a href='https://darling-nasturtium-f7919b.netlify.app/'><FontAwesomeIcon icon={faHome} className='iconPortfolio'/></a>
                    <a href='https://github.com/aleksandraskrzypek/wordleGame2023'><FontAwesomeIcon icon={faGithub} className='iconPortfolio'/></a>
                  </div>
                </div>
              </div>
              <div className='project'>
                <img alt="" src={img2} className='imgPortf'/>
                <div className='titleWithIcon'>
                  <h1 className='titlePortfolio'>Guess World</h1>
                  <div className='iconsPorfolio'>
                    <a href='https://classy-starship-d66041.netlify.app/'><FontAwesomeIcon icon={faHome} className='iconPortfolio'/></a>
                    <a href='https://github.com/aleksandraskrzypek/quizEng'><FontAwesomeIcon icon={faGithub} className='iconPortfolio'/></a>
                  </div>
                </div>
              </div>
              <div className='project'>
              <div className='seeMore'>
                <h1 className='titlePortfolio'>See more</h1>
                <a href='https://github.com/aleksandraskrzypek?tab=repositories'><FontAwesomeIcon icon={faGithub} className='iconPortfolio'/></a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio