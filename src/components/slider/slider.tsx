import {useState} from 'react';
import './slider.css';


type PropsType = {
  elements: JSX.Element[];
};

function HighOrderSlider({elements}: PropsType) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlideHandle = () => {
    if (currentIndex === elements.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlideHandle = () => {
    if (currentIndex === 0) {
      setCurrentIndex(elements.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="slider">
      <div className="slider__wrapper">
        <div className="slider__item-wrapper">
          {elements.map((element, elementIndex) => (
            <div className={`slider__item
          ${currentIndex === elementIndex
              ? 'slider__item--current'
              : ''}
          ${currentIndex < elementIndex
              ? 'slider__item--next'
              : ''}
          ${currentIndex > elementIndex
              ? 'slider__item--prev'
              : ''}`} key={element.key}
            >
              {element}
            </div>
          ))}
        </div>
      </div>
      <div className="slider__controls">
        <p className="slider__counter"><span className="slider__current-position">{currentIndex < 10 ? `0${currentIndex + 1}` : `${currentIndex + 1}`} /</span> {elements.length < 10 ? `0${elements.length}` : `${elements.length}`}</p>
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

export default HighOrderSlider;
