import React, { useState } from 'react';
import Logo from '../logo/logo';
import SocialBlock from '../social-block/social-block';
import './navbar.css';

type PropsType = {
  selectedScreen: string;
  setSelectedScreen: (selectedScreen: string) => void;
}

function Navbar({selectedScreen, setSelectedScreen}: PropsType): JSX.Element {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className={`nav ${toggleMenu ? 'nav--opened' : ''}`}>
      <div className="nav__wrapper">
        <Logo />
        <ul className="nav__menu">
          <li className="nav__item">
            <a className={`nav__link ${selectedScreen === 'intro-screen' ? 'nav__link--selected' : ''}`} href="#intro-screen" onClick={() => setSelectedScreen('intro-screen')}>О продукте</a>
          </li>
          <li className="nav__item">
            <a className={`nav__link ${selectedScreen === 'realization-screen' ? 'nav__link--selected' : ''}`} href="#realization-screen" onClick={() => setSelectedScreen('realization-screen')}>Как работает</a>
          </li>
          <li className="nav__item">
            <a className={`nav__link ${selectedScreen === 'technology-screen' ? 'nav__link--selected' : ''}`} href="#technology-screen" onClick={() => setSelectedScreen('technology-screen')}>Технология</a>
          </li>
          <li className="nav__item">
            <a className={`nav__link ${selectedScreen === 'questions-screen' ? 'nav__link--selected' : ''}`} href="#questions-screen" onClick={() => setSelectedScreen('questions-screen')}>Вопросы</a>
          </li>
          <li className="nav__item">
            <a className={`nav__link ${selectedScreen === 'contacts-screen' ? 'nav__link--selected' : ''}`} href="#contacts-screen" onClick={() => setSelectedScreen('contacts-screen')}>Контакты</a>
          </li>
        </ul>
        <div className="nav__inner-wrapper">
          <button className="custom__button nav__order-button">Заказать</button>
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
            <a className="nav__link" href="/">О продукте</a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="/">Как работает</a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="/">Технология</a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="/">Вопросы</a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="/">Контакты</a>
          </li>
        </ul>
        <div className='nav__contacts-smallscreen'>
          <a className="nav__phone-number nav__phone-number--smallscreen" href="tel:+78005553575">8 (800) 555 35 75</a>
          <SocialBlock />
        </div>
      </>}
    </nav>
  );
}

export default Navbar;
