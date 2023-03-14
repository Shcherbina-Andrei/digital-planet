import React from 'react';
import {sliderImages} from '../../descriptions-slider-images';
import DescriptionSlider from '../slider/description-slider';
import './description-screen.css';

function DescriptionScreen(): JSX.Element {
  return (
    <section id="description-screen" className="description">
      <div className="description__wrapper">
        <div className="description__text">
          <h2 className="screen-title description__title">Что такое VR-планетарий?</h2>
          <div className='description__paragraphs-wrapper'>
            <p className="description__paragraph">
          Это образовательная программа, использующая технологию виртуальной реальности.
            </p>
            <p className="description__paragraph">
          Зрителям выдаются очки виртуальной реальности, оператор запускает сеанс планетария на всех очках одновременно. В коллекции фильмов идут обучающие картины о космосе, астрономии  и обществознании.
            </p>
            <p className="description__paragraph">
          За счёт реалестичности  и имитации игры такое обучение повышает мотивацию и стимулирует активную мозговую деятельность ребёнка.
            </p>
          </div>

        </div>
        <div className="description__slider">
          <h3 className="description__slider-title">Что показываем<br/> в планетарии</h3>
          <DescriptionSlider images={sliderImages}/>
        </div>
      </div>
    </section>
  );
}

export default DescriptionScreen;
