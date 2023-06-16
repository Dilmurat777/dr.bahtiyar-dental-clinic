import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import PinImage from '../../assets/icons/map.svg';
import './yandexMap.css';

const YandexMap = () => {
  const placemarkOptions = {
    iconColor: '#dc1c23',
    iconLayout: 'default#image',
    iconImageHref: PinImage,
    iconImageSize: [30, 30],
  };

  const placemarkProperties = {
    balloonContent: '7-апрель Шейиттери tel: 0(555) 555-555',
    hintContent: 'Наведите на метку, чтобы увидеть адрес',
  };

  const BalloonLayout = ({ address }) => (
    <div className="custom-balloon">
      <p>{address}</p>
    </div>
  );

  const createHintLayout = React.useCallback((hintContent) => {
    return (ymaps) => {
      const layout = ymaps.templateLayoutFactory.createClass(
        `<div class="custom-hint">${hintContent}</div>`
      );
      return new layout();
    };
  }, []);

  return (
    <section className="yandex section" id='mapLook'>
      <div className="yandex__container container">
        <div>
          <h3 className="yandex__title title">Наш Адрес</h3>
          <div className="yandex__info">
            <YMaps>
              <Map defaultState={{ center: [42.82695, 74.62155], zoom: 16 }} className='yandex__map'>
                <Placemark
                  geometry={[42.82695, 74.62155]}
                  options={placemarkOptions}
                  properties={placemarkProperties}
                  modules={['geoObject.addon.hint', 'geoObject.addon.balloon']}
                  instanceRef={(ref) => {
                    if (ref) {
                      ref.events.add('mouseenter', () => {
                        ref.balloon.open();
                      });
                      ref.events.add('mouseleave', () => {
                        ref.balloon.close();
                      });
                    }
                  }}
                  balloonContentLayout={BalloonLayout}
                  balloonContentLayoutWidth={200}
                  balloonContentLayoutHeight={80}
                  balloonPanelMaxMapArea={0}
                  balloonShadow={false}
                  balloonAutoPan={false}
                  balloonOffset={[0, -40]}
                  hintContentLayout={createHintLayout(placemarkProperties.hintContent)}
                />
              </Map>
            </YMaps>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YandexMap;
