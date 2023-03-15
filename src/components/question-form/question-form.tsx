import React from 'react';
import './question-form.css';

function QuestionForm() {
  return (
    <form action="" className="question-form">
      <input className="question-form__input question-form__input--name" type="text" placeholder="Ваше имя" />
      <input className="question-form__input question-form__input--email" type="email" placeholder="Ваш e-mail" />
      <textarea className="question-form__question-textarea" placeholder="Что вас интересует?" />
      <button className="custom__button question-form__submit-button" type="submit">Отправить</button>
    </form>
  );
}

export default QuestionForm;
