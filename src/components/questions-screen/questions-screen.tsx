import React, {useState} from 'react';
import { questions } from '../../descriptions-slider-images';
import './questions-screen.css';

function QuestionsScreen() {
  const [openedQuestion, setOpenQuestion] = useState<string | null>(null);

  const toggleButtonHandle = (title: string) => {
    if (title === openedQuestion) {
      setOpenQuestion(null);
    } else {
      setOpenQuestion(title);
    }
  };

  return (
    <section id="questions-screen" className="questions">
      <h2 className="screen-title questions__title">Часто задаваемые вопросы</h2>
      <ul className="questions__list">
        {questions.map((question) => (
          <li className="questions__item" key={question.id}>
            <div className="questions__item-visible-part">
              <h3 className="questions__item-title">{question.title}</h3>
              <button className={`questions__toggle-button ${openedQuestion === question.title ? 'questions__toggle-button--opened' : ''}`} onClick={() => toggleButtonHandle(question.title)}>
                <span className="visually-hidden">Open</span>
              </button>
            </div>
            <div className={`questions__item-description ${openedQuestion === question.title ? 'questions__item-description--opened' : ''}`}>
              <p className="question__item-description-text">
                {question.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default QuestionsScreen;
