import {useState, useRef, useEffect} from 'react';
import ContactsScreen from '../../screens/contacts-screen/contacts-screen';
import DescriptionScreen from '../../screens/description-screen/description-screen';
import IntroScreen from '../../screens/intro-screen/intro-screen';
import Navbar from '../../components/navbar/navbar';
import QuestionsScreen from '../../screens/questions-screen/questions-screen';
import RealizationScreen from '../../screens/realization-screen/realization-screen';
import TechnologyScreen from '../../screens/technology-screen/technology-screen';
import './main-page.css';
import OrderForm from '../../components/order-form/order-form';

function MainPage() {
  const [selectedScreen, setSelectedScreen] = useState('intro-screen');
  const [modalActive, setModalActive] = useState(false);
  const introRef = useRef<HTMLElement>(null);
  const descriptionRef = useRef<HTMLElement>(null);
  const realizationRef = useRef<HTMLElement>(null);
  const technologyRef = useRef<HTMLElement>(null);
  const questionsRef = useRef<HTMLElement>(null);
  const contactsRef = useRef<HTMLElement>(null);

  const handleScroll = () => {
    const mainElement = window.scrollY;
    [introRef, descriptionRef, realizationRef, technologyRef, questionsRef, contactsRef].forEach((elementRef) => {
      if (elementRef.current) {
        if (mainElement + 160 >= elementRef.current.offsetTop && elementRef.current.offsetTop + elementRef.current.offsetHeight > mainElement + 160) {
          setSelectedScreen(elementRef.current.id);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    if (modalActive) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [modalActive]);

  return (
    <div className="page">
      <Navbar selectedScreen={selectedScreen} setModalActive={setModalActive} />
      <IntroScreen setModalActive={setModalActive} introRef={introRef} />
      <DescriptionScreen descriptionRef={descriptionRef} />
      <RealizationScreen realizationRef={realizationRef} />
      <TechnologyScreen technologyRef={technologyRef} />
      <QuestionsScreen questionsRef={questionsRef} />
      <ContactsScreen contactsRef={contactsRef} />
      <OrderForm modalActiveForm={modalActive} setModalActive={setModalActive} />
    </div>
  );
}

export default MainPage;
