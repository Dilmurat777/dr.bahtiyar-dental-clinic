import React from 'react';
import tooth from '../../assets/img/tooth.png'

import './services.css';

const Services = () => {
  return (
    <div className='services section' id='services'>
      <div className='services__container container'>
        
        <h3 className='services__title title'>Услуги врача-стоматолога в Бишкеке</h3>
        

        <div className='services__info'>
          <div className='services__block-right'>
            <img src={tooth} alt="tooth" className='services__img' />
            <p className='services__text'>На приеме врач расспросит о ваших симптомах и жалобах, а также изучит медицинскую документацию. При необходимости врач использует современное диагностическое оборудование, которое дает возможность выявить заболевания и назначить дальнейшее лечение.</p>
          </div>
          <div className='services__block-left'>
            <div className='services__items'>
              <h4 className='services__title-item'>Терапевтическая стоматология</h4>
              <p className='services__text-item'>лечение кариеса и его осложнений, отбеливание зубов, профессиональная гигиена полости рта, реставрация зубов</p>
            </div>

            <div className='services__items'>
              <h4 className='services__title-item'>Ортопедическая стоматология</h4>
              <p className='services__text-item'>в том числе протезирование на имплантаты, протезирование без обточки зубов, нейлоновые протезы «Valplast» и «Acryfree», протезирование при наличии заболеваний пародонта</p>
            </div>

            <div className='services__items'>
              <h4 className='services__title-item'>Хирургическая стоматологияя</h4>
              <p className='services__text-item'>удаление зубов, все виды костной пластики, зубосберегающие операции</p>
            </div>

            <div className='services__items'>
              <h4 className='services__title-item'>Имплантология</h4>
              <p className='services__text-item'>имплантация в сложных условиях, при недостатке кости, имплантация при наличии общесоматических заболеваний, использование новейших систем имплантации, большой выбор различных видов имплантов</p>
            </div>

            <div className='services__items'>
              <h4 className='services__title-item'>Ортодонтия</h4>
              <p className='services__text-item'>исправление прикуса в любом возрасте, невидимые брекеты, система «INCOGNITO», микроимпланты, лечение без брекетов</p>
            </div>

            <div className='services__items'>
              <h4 className='services__title-item'>Пародонтология</h4>
              <p className='services__text-item'>терапевтическое и хирургическое лечение заболеваний пародонта (десен и полости рта), использование диодного лазера «OPUS5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services