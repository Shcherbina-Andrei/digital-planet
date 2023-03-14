import React, { useState } from 'react';
import ContactsScreen from '../../components/contacts-screen/contacts-screen';
import DescriptionScreen from '../../components/description-screen/description-screen';
import IntroScreen from '../../components/intro-screen/intro-screen';
import Navbar from '../../components/navbar/navbar';
import QuestionsScreen from '../../components/questions-screen/questions-screen';
import RealizationScreen from '../../components/realization-screen/realization-screen';
import TechnologyScreen from '../../components/technology-screen/technology-screen';
import './main-page.css';


function MainPage() {
  const [selectedScreen, setSelectedScreen] = useState('intro-screen');
  return (
    <div className="page">
      <Navbar selectedScreen={selectedScreen} setSelectedScreen={setSelectedScreen}/>
      <IntroScreen />
      <DescriptionScreen />
      <RealizationScreen />
      <TechnologyScreen />
      <QuestionsScreen />
      <ContactsScreen />
    </div>
  );
}

export default MainPage;
