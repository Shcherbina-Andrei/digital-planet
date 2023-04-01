import {useRef} from 'react';
import ContactsScreen from '../../screens/contacts-screen/contacts-screen';
import DescriptionScreen from '../../screens/description-screen/description-screen';
import IntroScreen from '../../screens/intro-screen/intro-screen';
import Navbar from '../../components/navbar/navbar';
import QuestionsScreen from '../../screens/questions-screen/questions-screen';
import RealizationScreen from '../../screens/realization-screen/realization-screen';
import TechnologyScreen from '../../screens/technology-screen/technology-screen';
import './main-page.css';

function MainPage(): JSX.Element {
  const introRef = useRef<HTMLElement>(null);
  const descriptionRef = useRef<HTMLElement>(null);
  const realizationRef = useRef<HTMLElement>(null);
  const technologyRef = useRef<HTMLElement>(null);
  const questionsRef = useRef<HTMLElement>(null);
  const contactsRef = useRef<HTMLElement>(null);

  const handleScroll = (setSelectedScreen: (element: string) => void) => {
    const mainElement = window.scrollY;
    [introRef, descriptionRef, realizationRef, technologyRef, questionsRef, contactsRef].forEach((elementRef) => {
      if (elementRef.current) {
        if (mainElement + 160 >= elementRef.current.offsetTop && elementRef.current.offsetTop + elementRef.current.offsetHeight > mainElement + 160) {
          setSelectedScreen(elementRef.current.id);
        }
      }
    });
  };

  return (
    <div className="page">
      <Navbar handleScroll={handleScroll} />
      <IntroScreen introRef={introRef} />
      <DescriptionScreen descriptionRef={descriptionRef} />
      <RealizationScreen realizationRef={realizationRef} />
      <TechnologyScreen technologyRef={technologyRef} />
      <QuestionsScreen questionsRef={questionsRef} />
      <ContactsScreen contactsRef={contactsRef} />
    </div>
  );
}

export default MainPage;
