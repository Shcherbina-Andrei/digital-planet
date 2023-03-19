import {useState, memo} from 'react';
import ScrollButton from '../../components/scroll-button/scroll-button';
import { questions } from '../../content';
import './questions-screen.css';

type PropsType = {
  questionsRef: React.RefObject<HTMLElement>;
}

function QuestionsScreen({questionsRef}: PropsType) {
  const [openedQuestion, setOpenQuestion] = useState<string | null>(null);

  const toggleButtonHandle = (title: string) => {
    if (title === openedQuestion) {
      setOpenQuestion(null);
    } else {
      setOpenQuestion(title);
    }
  };

  return (
    <section id="questions-screen" className="questions" ref={questionsRef}>
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
      <div className="scroll-button__wrapper">
        <ScrollButton position={5} />
      </div>
    </section>
  );
}

export default memo(QuestionsScreen);
