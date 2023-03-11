import React from 'react';
import {useState} from 'react';
import './slider.css';

type PropsType = {
  images: string[];
}

function Slider({images}: PropsType) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlideHandle = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlideHandle = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="slider">
      <div className="slider__wrapper">
        <div className="slider__item-wrapper">
          {images.map((image, imageIndex) => (
            <div className={`slider__item
            ${currentIndex === imageIndex
              ? 'slider__item--current'
              : ''}
            ${currentIndex < imageIndex
              ? 'slider__item--next'
              : ''}
            ${currentIndex > imageIndex
              ? 'slider__item--prev'
              : ''}`} key={image}
            >
              <img className="slider__image" src={image} alt="slider item" width="561" height="300"/>
            </div>
          ))}
        </div>
      </div>
      <div className="slider__controls">
        <p className="slider__counter"><span className="slider__current-position">{currentIndex < 10 ? `0${currentIndex + 1}` : `${currentIndex + 1}`} /</span> {images.length < 10 ? `0${images.length}` : `${images.length}`}</p>
        <div className="slider__buttons">
          <button className="slider__button" type="button" onClick={prevSlideHandle}>
            <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.21839 1L1 9L9.21839 17" stroke="currentColor"/>
            </svg>
            <span className="visually-hidden">Предыдущий слайд</span>
          </button>
          <button className="slider__button" type="button" onClick={nextSlideHandle}>
            <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.78161 17L9 9L0.78161 1" stroke="currentColor"/>
            </svg>
            <span className="visually-hidden">Предыдущий слайд</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slider;
