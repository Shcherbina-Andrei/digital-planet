import {useState, useEffect} from 'react';
import {technologies} from '../../content';
import './technology-screen.css';
import vrImage from '../../assets/vr.png';
import Slider from '../../components/slider/slider';
import ScrollButton from '../../components/scroll-button/scroll-button';
import ModalWindow from '../../components/modal-window/modal-window';

type PropsType = {
  technologyRef: React.RefObject<HTMLElement>;
}

function TechnologyScreen({technologyRef}: PropsType) {
  const [imageIsOpened, setImageIsOpened] = useState<boolean>(false);

  useEffect(() => {
    if (imageIsOpened) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [imageIsOpened]);

  return (
    <section id="technology-screen" className="technology" ref={technologyRef}>
      <h2 className="screen-title technology__title">VR-технология</h2>
      <div className="technology__list">
        <div className="technology__image-wrapper">
          <img className="technology__image" src={vrImage} alt="VR" />
          <button className="technology__upscale-button" type="button" onClick={() => setImageIsOpened(true)}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M39.5815 37.6282L27.7637 25.8104C32.9257 19.6717 32.6467 10.3939 26.8568 4.60402C20.7181 -1.53467 10.7427 -1.53467 4.60402 4.60402C-1.53467 10.7427 -1.53467 20.7181 4.60402 26.8568C7.67337 29.8564 11.7193 31.3911 15.6955 31.3911C19.2532 31.3911 22.8806 30.1354 25.7407 27.7637L37.5585 39.5815C37.9073 39.8605 38.2561 40 38.6048 40C38.9536 40 39.3024 39.8605 39.5815 39.5815C40.1395 39.0234 40.1395 38.1863 39.5815 37.6282ZM24.8338 24.8338C19.8113 29.8564 11.5798 29.8564 6.55725 24.8338C1.53467 19.8113 1.53467 11.5798 6.55725 6.55725C9.06853 4.04596 12.4169 2.79032 15.6955 2.79032C18.9742 2.79032 22.3225 4.04596 24.8338 6.55725C29.8564 11.5798 29.8564 19.8113 24.8338 24.8338ZM24.0665 15.6955C24.0665 16.4629 23.4387 17.0907 22.6713 17.0907H17.0907V22.6713C17.0907 23.4387 16.4629 24.0665 15.6955 24.0665C14.9282 24.0665 14.3004 23.4387 14.3004 22.6713V17.0907H8.71974C7.9524 17.0907 7.32458 16.4629 7.32458 15.6955C7.32458 14.9282 7.9524 14.3004 8.71974 14.3004H14.3004V8.71974C14.3004 7.9524 14.9282 7.32458 15.6955 7.32458C16.4629 7.32458 17.0907 7.9524 17.0907 8.71974V14.3004H22.6713C23.4387 14.3004 24.0665 14.9282 24.0665 15.6955Z" fill="white"/>
            </svg>
          </button>
        </div>
        {technologies.map((technology) => (
          <div className="technology__item" key={technology.id}>
            <h3 className="technology__item-title">{technology.title}</h3>
            <p className="technology__item-description">{technology.description}</p>
          </div>
        ))}
      </div>
      <div className="technology__list-smallscreen">
        <div className="technology__image-wrapper">
          <img className="technology__image" src={vrImage} alt="VR" />
        </div>
        <Slider elements={
          technologies.map((technology) => (
            <div className="technology__item" key={technology.id}>
              <h3 className="technology__item-title">{technology.title}</h3>
              <p className="technology__item-description">{technology.description}</p>
            </div>
          ))
        }
        />
      </div>
      <div className="scroll-button__wrapper">
        <ScrollButton position={4} />
      </div>
      <ModalWindow active={imageIsOpened} setActive={() => setImageIsOpened(false)}>
        <img className="technology__image technology__image--modal" src={vrImage} alt="VR" />
      </ModalWindow>
    </section>
  );
}

export default TechnologyScreen;
