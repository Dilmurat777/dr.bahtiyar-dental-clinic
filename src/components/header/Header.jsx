import React, { useState } from 'react';

import ReactWhatsapp from 'react-whatsapp';
import Calendar  from '../../assets/icons/calendar.svg';
import Map1 from '../../assets/icons/map1.svg';
import Phone  from '../../assets/icons/phone.svg';

import './header.css';


const Header = () => {

  const [active, setActive] = useState(false)

  const toggleMenu = () => {
    setActive(!active) ? setActive(false) : setActive(!active)
  }

  
  return (
    <header className='header'>
      <nav className='nav container'>
        {/* Logo */}
        <a href="#home" className='nav__logo'>Dr. <span>Bahtiyar</span></a>

        {/* a */}
        <div className='nav__menu'>
          <div className='blur'/>
          <ul className={active ? 'nav__list active-link' : 'nav__list'} onClick={(e) => setActive(false)} >
            <li className='nav__item'>
              <a href="#services" className='nav__link active-link'>Услуги</a>
            </li>
            <li className='nav__item'>
              <a href="#recommendation" className='nav__link'>Рекомендации</a>
            </li>
            <li className='nav__item'>
              <a href="#about" className='nav__link'>О компании</a>
            </li>
            <li className='nav__item'>
              <a href="#gallery" className='nav__link'>Галерея</a>
            </li>
            <li className='nav__item'>
              <a href="#footer" className='nav__link'>Контакты</a>
            </li>
          </ul>
        </div>

        <dir className='btn__link-header'>
            <ReactWhatsapp number="+996706715757">
              <img src={Calendar} alt="Calendar" className='link__icon-calendar' />
            </ReactWhatsapp>

            <a href='tel:+996558755756' className='btn__link-phone'>
              <img src={Phone}  alt="Phone" />
            </a>

            <a href='#mapLook'>
              <img src={Map1} alt="Map"/>
            </a>
        </dir>

        <div className='nav__toggler' onClick={toggleMenu}>
          <div className='line1'></div>
          <div className='line2'></div>
          <div className='line3'></div>
        </div>
      </nav>
    </header >
  )
}

export default Header
