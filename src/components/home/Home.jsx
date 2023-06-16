import React from 'react';
import './home.css'
import ReactWhatsapp from 'react-whatsapp';

const Home = () => {
  return (
    <div>
      <section className='home section' id='home'>
        <div className='home__bg'>
          <div className='home__container container'>

            <div className='home__title'>Dr. Bahtiyar Clinic</div>
            <div className='home__info'>
              <p className='home__text'>Нам доверяет уже не первое поколение наших <br /> пациентов, потому что мы знаем, <br /> как лечить ваши зубы! <br /> Стоматологическая Клиника (Бишкек)</p>
              <ReactWhatsapp number="+996706715757" className='whats__app home__btn'>
                <div>Записатся на прием</div>
              </ReactWhatsapp>
            </div>

          </div>

        </div>
      </section>
    </div>
  )
}

export default Home

