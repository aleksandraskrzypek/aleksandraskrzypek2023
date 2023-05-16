import React from 'react'
import '../style/portfolio.scss'
import myData from '../Data/myData.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'


function Portfolio() {
  

  return (
    <div id='portfolio' className='bg-page bg-page-portfolio'>
      <div className='portfolioPageContainer'>
        <div className='title'>
          <h1 data-aos="flip-left" data-aos-duration="2000">{'{'} Portfolio {'}'}</h1>
        </div>
        <div className='portfolioPageHead'>
            <div className="portfolioContainer">
                {myData.map((item) => (
                  <div className='portfolioContent'>
                  <img src={item.image} alt="" className='imagesPortfolio'/>
                    <div className='bg-imagesPortfolio'>
                      <h1>{item.title}</h1>
                      <p>{item.description}</p>
                      <div className='containerIconsPortfolio'>
                        <FontAwesomeIcon icon={faGithub} className='iconsPortfolio'/>
                        <FontAwesomeIcon icon={faHome} className='iconsPortfolio'/>
                      </div>
                    </div>
                  </div>
                 ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio