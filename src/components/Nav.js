import React, {useEffect, useState} from 'react'
import '../style/nav.scss'
import { BrowserRouter, NavLink } from 'react-router-dom';

function Nav() {
  const [show, handleShow] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  
  const handleItemClick = (item) => {
    setActiveItem(item);
  };



  return (
    <div className='navBar'>

      <ul>
        <li ><a href="#home" onClick={() => handleItemClick('Home')}>Portfolio.</a></li>
        <li className={activeItem === 'Home' ? 'active' : ''}><a className='hoverNav' href="#home" onClick={() => handleItemClick('Home')}>Home</a></li>
        <li className={activeItem === 'About' ? 'active' : ''}><a className='hoverNav' href="#about" onClick={() => handleItemClick('About')}>About</a></li>
        <li className={activeItem === 'Skills' ? 'active' : ''}><a className='hoverNav' href="#skills" onClick={() => handleItemClick('Skills')}>Skills</a></li>
        <li className={activeItem === 'Portfolio' ? 'active' : ''}><a className='hoverNav' href="#portfolio" onClick={() => handleItemClick('Portfolio')}>Portfolio</a></li>
        <li className={activeItem === 'Contact' ? 'active' : ''}><a className='hoverNav' href="#contact" onClick={() => handleItemClick('Contact')}>Contact</a></li>
      </ul>

    </div>

  )
}

export default Nav
