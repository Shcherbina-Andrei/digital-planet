import {useState, useEffect} from 'react';
import Logo from '../logo/logo';
import OrderForm from '../order-form/order-form';
import SocialBlock from '../social-block/social-block';
import './navbar.css';

type PropsType = {
  handleScroll: (setSelectedScreen: (element: string) => void) => void;
}

function Navbar({handleScroll}: PropsType): JSX.Element {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [selectedScreen, setSelectedScreen] = useState('intro-screen');

  useEffect(() => {
    const scrollHandler = () => handleScroll(setSelectedScreen);
    window.addEventListener('scroll', scrollHandler);
    if ((toggleMenu && window.innerWidth < 950) || modalActive) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }

    return () => document.removeEventListener('scroll', scrollHandler);
  }, [toggleMenu, handleScroll, modalActive]);

  return (
    <nav className={`nav ${toggleMenu ? 'nav--opened' : ''}`}>
      <div className="nav__wrapper">
        <Logo />
        <ul className="nav__menu">
          <li className="nav__item">
            <a className={`nav__link ${selectedScreen === 'description-screen' ? 'nav__link--selected' : ''}`} href="#description-screen">О продукте</a>
          </li>
          <li className="nav__item">
            <a className={`nav__link ${selectedScreen === 'realization-screen' ? 'nav__link--selected' : ''}`} href="#realization-screen">Как работает</a>
          </li>
          <li className="nav__item">
            <a className={`nav__link ${selectedScreen === 'technology-screen' ? 'nav__link--selected' : ''}`} href="#technology-screen">Технология</a>
          </li>
          <li className="nav__item">
            <a className={`nav__link ${selectedScreen === 'questions-screen' ? 'nav__link--selected' : ''}`} href="#questions-screen">Вопросы</a>
          </li>
          <li className="nav__item">
            <a className={`nav__link ${selectedScreen === 'contacts-screen' ? 'nav__link--selected' : ''}`} href="#contacts-screen">Контакты</a>
          </li>
        </ul>
        <div className="nav__inner-wrapper">
          <button className="custom__button nav__order-button" type="button" onClick={() => setModalActive(true)}>Заказать</button>
          <a className="nav__phone-number" href="tel:+78005553575">8 (800) 555 35 75</a>
        </div>
        <button className="nav__burger-button" type="button" onClick={() => setToggleMenu(!toggleMenu)}>
          {toggleMenu
            ?
            <>
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2.36816" width="25" height="2" transform="rotate(45 2.36816 0)" fill="currentColor"/>
                <rect x="0.954102" y="18" width="25" height="2" transform="rotate(-45 0.954102 18)" fill="currentColor"/>
              </svg>
              <span className="visually-hidden">Закрыть</span>
            </>
            :
            <>
              <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="2" fill="currentColor"/>
                <rect y="6" width="24" height="2" fill="currentColor"/>
                <rect x="8" y="12" width="16" height="2" fill="currentColor"/>
              </svg>
              <span className="visually-hidden">Открыть</span>
            </>}
        </button>
      </div>
      {toggleMenu &&
      <>
        <ul className="nav__menu-smallscreen">
          <li className="nav__item">
            <a className={`nav__link ${selectedScreen === 'description-screen' ? 'nav__link--selected' : ''}`} href="#description-screen" onClick={() => setToggleMenu(false)}>О продукте</a>
          </li>
          <li className="nav__item">
            <a className={`nav__link ${selectedScreen === 'realization-screen' ? 'nav__link--selected' : ''}`} href="#realization-screen" onClick={() => setToggleMenu(false)}>Как работает</a>
          </li>
          <li className="nav__item">
            <a className={`nav__link ${selectedScreen === 'technology-screen' ? 'nav__link--selected' : ''}`} href="#technology-screen" onClick={() => setToggleMenu(false)}>Технология</a>
          </li>
          <li className="nav__item">
            <a className={`nav__link ${selectedScreen === 'questions-screen' ? 'nav__link--selected' : ''}`} href="#questions-screen" onClick={() => setToggleMenu(false)}>Вопросы</a>
          </li>
          <li className="nav__item">
            <a className={`nav__link ${selectedScreen === 'contacts-screen' ? 'nav__link--selected' : ''}`} href="#contacts-screen" onClick={() => setToggleMenu(false)}>Контакты</a>
          </li>
        </ul>
        <div className='nav__contacts-smallscreen'>
          <a className="nav__phone-number nav__phone-number--smallscreen" href="tel:+78005553575">8 (800) 555 35 75</a>
          <SocialBlock />
        </div>
      </>}
      <OrderForm modalActiveForm={modalActive} setModalActive={setModalActive} />
    </nav>
  );
}

export default Navbar;
