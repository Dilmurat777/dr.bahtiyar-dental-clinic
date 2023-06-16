import React from 'react';
import Instagram from '../../assets/socialMedia/instagram-logo-8869.svg'
import Facebook from '../../assets/socialMedia/facebook-square-blue-logo-15981.svg'
import Youtube from '../../assets/socialMedia/youtube-logo-7123.svg'
import Whatsapp from '../../assets/socialMedia/whatsapp-green-square-logo-15994.svg'
import './footer.css'
import ReactWhatsapp from 'react-whatsapp';

const Footer = () => {
  return (
    <footer className='footer section' id='footer'>
      <div className='footer__wrapper container'>
        <div className='footer__wrap'>

          <div className='footer__logo-blog'>
            <h3 className='footer__title'>Dr. Bahtiyar Clinic</h3>
            <p className='footer__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, nesciunt facere, accusantium, suscipit dignissimos commodi molestias exercitationem sed odio consequuntur pariatur ut aut ipsum neque necessitatibus architecto eveniet! Ipsum, quis?</p>
          </div>

          <div className='footer__time-work'>
            <h3 className='footer__title'>Часы работы</h3>
            <div className='footer__time'>
              <div>Понедельник</div>
              <p>9:00 - 20:00</p>
            </div>

            <div className='footer__time'>
              <div>Вторник</div>
              <p>9:00 - 20:00</p>
            </div>

            <div className='footer__time'>
              <div> Среда</div>
              <p>9:00 - 20:00</p>
            </div>

            <div className='footer__time'>
              <div>Четверг</div>
              <p>9:00 - 20:00</p>
            </div>

            <div className='footer__time'>
              <div>Понедельник</div>
              <p>9:00 - 20:00</p>
            </div>

            <div className='footer__time'>
              <div>Суббота</div>
              <p>9:00 - 20:00</p>
            </div>

            <div className='footer__time'>
              <div>Воскресенье</div>
              <p>9:00 - 20:00</p>
            </div>
          </div>

          <div className='footer__address'>
            <h3 className='footer__title'>Наш адрес</h3>
            <div className='footer__address-wrap'>
              <div>г.Бишкек</div>
              <div>7-апрель Шейиттери</div>
              <p>dr.bahtiyar@gmail.com</p>
              <p>Tek. +996(555) - 555 - 555</p>
            </div>
            <div className='footer__social-wrap'>
              <a href="https://www.instagram.com/dr.sadykov_bakhtiiar/" target="_blank" rel="noreferrer">
                <img src={Instagram} alt="" />
              </a>
              <a href="https://www.facebook.com/" target='_blank' rel="noreferrer">
                <img src={Facebook} alt="" />
              </a>
              <a href="https://www.instagram.com/p/CpuJs-4o-id/" target="_blank" rel="noreferrer">
                <img src={Youtube} alt="" />
              </a>
              <ReactWhatsapp number="+996706715757" className='footer__whatsapp'>
                <img src={Whatsapp} alt="Calendar" />
              </ReactWhatsapp>
            </div>
          </div>
        </div>

        <div>
          <div className='footer__wrap-link'>
            <ul className='footer__links'>
              <li className='footer__link-li'>
                <a href='#home'>Главная</a>
              </li>
              <li className='footer__link-li'>
                <a href="#services">Услуги</a>
              </li>
              <li className='footer__link-li'>
                <a href="#about">О нас</a>
              </li>
              <li className='footer__link-li'>
                <a href="#gallery">Галерея</a>
              </li>
              <li className='footer__link-li'>
                <a href="#mapLook">Карта</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footer__copy'>
        <p className='footer__copy-copy'> © 2023. Все права защищены</p>
        <p className='footer__web-design'>Разработка сайта: Dilmurat Idrisov</p>
      </div>
    </footer>
  )
}

export default Footer
