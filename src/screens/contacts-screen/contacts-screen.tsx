import {contacts} from '../../content';
import QuestionForm from '../../components/question-form/question-form';
import SocialBlock from '../../components/social-block/social-block';
import './contacts-screen.css';
import {memo} from 'react';

type PropsType = {
  contactsRef: React.RefObject<HTMLElement>;
}

function ContactsScreen({contactsRef}: PropsType): JSX.Element {
  return (
    <section id="contacts-screen" className="contacts" ref={contactsRef}>
      <h2 className="screen-title contacts__title">Контакты</h2>
      <div className="contacts__wrapper">
        <div className="contacts__coordinates-wrapper">
          {contacts.map((contact) => (
            <address className="contacts__item" key={contact.id}>
              <h3 className="contacts__city">{contact.city}</h3>
              <a className="contacts_phone-number" href={`tel:${contact.phoneNumber}`}>{contact.phoneNumber}</a>
              <a className="contacts__email" href={`mailto:${contact.email}`}>{contact.email}</a>
            </address>
          ))}
        </div>
        <div className="contacts__form-wrapper">
          <h3 className="contacts__form-title">Остались вопросы? Задайте их нам!</h3>
          <p className="contacts__form-text">Мы обязательно свяжемся с вами в течение двух рабочих дней</p>
          <QuestionForm />
        </div>
      </div>
      <footer className="contacts__footer">
        <span className="contacts__license">© Digital Planet, 2019</span>
        <span className="contacts__rights">Детский VR планетарий. Все права защищены.</span>
        <div className="contacts__social">
          <SocialBlock />
        </div>
      </footer>
    </section>
  );
}

export default memo(ContactsScreen);
