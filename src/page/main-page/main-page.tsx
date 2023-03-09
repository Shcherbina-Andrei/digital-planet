import React from 'react';
import ContactsScreen from '../../components/contacts-screen/contacts-screen';
import DescriptionScreen from '../../components/description-screen/description-screen';
import IntroScreen from '../../components/intro-screen/intro-screen';
import Navbar from '../../components/navbar/navbar';
import QuestionsScreen from '../../components/questions-screen/questions-screen';
import TechnologyScreen from '../../components/technology-screen/technology-screen';
import './main-page.css';


function MainPage() {
  return (
    <div className="page">
      <Navbar />
      <IntroScreen />
      <DescriptionScreen />
      <TechnologyScreen />
      <QuestionsScreen />
      <ContactsScreen />
    </div>
  );
}

export default MainPage;
