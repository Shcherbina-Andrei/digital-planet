import {memo, useState, useEffect} from 'react';
import ModalWindow from '../../components/modal-window/modal-window';
import ScrollButton from '../../components/scroll-button/scroll-button';
import SocialBlock from '../../components/social-block/social-block';
import './intro-screen.css';
import video from '../../assets/video.mp4';

type PropsType = {
  setModalActive: (modalActive: boolean) => void;
  introRef: React.RefObject<HTMLElement>;
}

function IntroScreen({setModalActive, introRef}: PropsType): JSX.Element {

  const [videoIsOpened, setVideoIsOpened] = useState<boolean>(false);

  useEffect(() => {
    if (videoIsOpened) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [videoIsOpened]);

  return (
    <section id="intro-screen" className="intro" ref={introRef}>
      <div className="intro__wrapper">
        <h1 className="intro__title">Digital Planet VR</h1>
        <p className="intro__description">
          Образовательный виртуальный планетарий в Новороссийске.<br/>
          Познавательное приключение в мир звёзд и галактик.
        </p>
        <div className="intro__controls">
          <button className="intro__order-button" type="button" onClick={() => setModalActive(true)}>
            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30.412 9.53846L28.4847 7.61118C28.2234 7.34985 27.7661 7.28451 27.4394 7.48051C26.2961 8.19916 24.8588 8.03582 23.9115 7.08851C22.9642 6.1412 22.8008 4.67123 23.5195 3.56059C23.7155 3.23393 23.6828 2.80927 23.3888 2.51528L21.4615 0.587995C20.6776 -0.195988 19.3709 -0.195988 18.5869 0.587995L13.687 5.48789L15.7123 7.51316L14.5363 8.68915L12.5111 6.66386L0.587995 18.5869C-0.195988 19.3709 -0.195988 20.6776 0.587995 21.4615L2.51528 23.3888C2.7766 23.6501 3.20127 23.7155 3.52793 23.5195C4.63857 22.8335 6.07586 23.0295 7.02317 23.9442C7.93782 24.8588 8.13383 26.2961 7.44785 27.4394C7.25185 27.7661 7.28451 28.1907 7.5785 28.452L9.53846 30.412C9.93045 30.804 10.4531 31 10.9758 31C11.4984 31 12.0211 30.804 12.4131 30.412L24.3361 18.4889L22.3109 16.4636L23.4868 15.2877L25.5121 17.313L30.412 12.4131C31.196 11.6291 31.196 10.3224 30.412 9.53846ZM15.647 9.83246L16.823 8.65647L19.0116 10.8451L17.8356 12.0211L15.647 9.83246ZM21.1349 15.3203L18.9463 13.1317L20.1222 11.9557L22.3109 14.1444L21.1349 15.3203Z" fill="currentColor"/>
            </svg>
            Заказать
          </button>
          <button className="custom__button intro__video-button" onClick={() => setVideoIsOpened(true)}>
            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5 0C6.93809 0 0 6.93809 0 15.5C0 24.0619 6.93809 31 15.5 31C24.0619 31 31 24.0619 31 15.5C31 6.93809 24.0619 0 15.5 0ZM20.8143 16.8286L13.4333 21.8845C12.3631 22.6226 10.8869 21.8476 10.8869 20.556V10.444C10.8869 9.15238 12.4 8.37738 13.4333 9.11548L20.7774 14.1714C21.7369 14.7988 21.7369 16.2012 20.8143 16.8286Z" fill="currentColor"/>
            </svg>
            Видео
          </button>
        </div>
      </div>
      <div className="intro__social-wrapper">
        <SocialBlock />
      </div>
      <div className="scroll-button__wrapper">
        <ScrollButton text="Скролл вниз" position={1} />
      </div>
      <div className="intro__kid-banner" />
      <ModalWindow themeClass='intro__modal-theme' active={videoIsOpened} setActive={() => setVideoIsOpened(false)}>
        <video className="intro__video" src={video} autoPlay muted loop />
      </ModalWindow>
    </section>
  );
}

export default memo(IntroScreen);
