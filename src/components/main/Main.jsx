// Main.js
import React from 'react';
import Home from '../home/Home';
import Services from '../services/Services';
import About from '../about/About';
import Gallery from '../gallery/Gallery';
import YandexMap from '../mapYandex/YandexMap';

const Main = () => {
  return (
    <div>
      <Home />
      <Services />
      <About />
      <Gallery />
      <YandexMap />
    </div>
  );
};

export default Main;

