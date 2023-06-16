import React from 'react';
import Image1 from '../../assets/gallery/image1.jpeg'
import Image2 from '../../assets/gallery/image2.jpg'
import Image3 from '../../assets/gallery/image3.jpg'
import Image4 from '../../assets/gallery/image4.png'
import Image5 from '../../assets/gallery/image5.jpg'
import Image6 from '../../assets/gallery/image6.jpg'
import Image7 from '../../assets/gallery/image7.jpg'
import Image8 from '../../assets/gallery/image8.jpeg'
import Image9 from '../../assets/gallery/image9.jpg'
import './gallery.css';

const Gallery = () => {
  return (
    <div className='gallery section' id='gallery'>
      <div className='gallery__container container'>
        <div>
          <h3 className='gallery__title title'>Галерея</h3>
          <div className='gallery__info'>
            <div>
              <img src={Image1} alt="images" className='gallery__image' />
            </div>
            <div>
              <img src={Image2} alt="images" className='gallery__image' />
            </div>
            <div>
              <img src={Image3} alt="images" className='gallery__image' />
            </div>
            <div>
              <img src={Image4} alt="images" className='gallery__image' />
            </div>
            <div>
              <img src={Image5} alt="images" className='gallery__image' />
            </div>
            <div>
              <img src={Image6} alt="images" className='gallery__image' />
            </div>
            <div>
              <img src={Image7} alt="images" className='gallery__image' />
            </div>
            <div>
              <img src={Image8} alt="images" className='gallery__image' />
            </div>
            <div>
              <img src={Image9} alt="images" className='gallery__image' />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Gallery
