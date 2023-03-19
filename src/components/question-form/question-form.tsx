import {useState} from 'react';
import ModalWindow from '../modal-window/modal-window';
import SuccessMessage from '../success-message/success-message';
import './question-form.css';
import {client} from '../../client';
import { Question } from '../../types';
import ErrorScreen from '../error-screen/error-screen';
import LoadingScreen from '../loading-screen/loading-screen';

function QuestionForm() {
  const [formData, setFormData] = useState<Question>({name: '', email: '', question: ''});
  const [formSended, setFormSended] = useState<boolean>(false);
  const [nameMistake, setNameMistake] = useState<boolean>(false);
  const [emailMistake, setEmailMistake] = useState<boolean>(false);
  const [questionMistake, setQuestionMistake] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);


  const inputNameHandle = (data: Question) => {
    setFormData(data);
    data.name.length < 4 ? setNameMistake(true) : setNameMistake(false);
  };

  const inputEmailHandle = (data: Question) => {
    setFormData(data);
    !/^\S+@\S+\.\S+$/.test(data.email) ? setEmailMistake(true) : setEmailMistake(false);
  };

  const inputQuestionHandle = (data: Question) => {
    setFormData(data);
    data.question.length < 10 ? setQuestionMistake(true) : setQuestionMistake(false);
  };

  const submitHandle = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (formData.name.length >= 4 && /^\S+@\S+\.\S+$/.test(formData.email) && formData.question.length >= 10) {
      const question = {...formData, _type: 'question'};
      setIsLoading(true);
      client.create(question)
        .then(() => {
          setFormSended(true);
          setIsLoading(false);
        })
        .catch(() => {
          setIsError(true);
          setIsLoading(false);
        });
    }
  };

  if (isLoading) {
    return (
      <LoadingScreen />
    );
  }

  const leaveModalHandle = () => {
    setFormData({name: '', email: '', question: ''});
    setFormSended(false);
    setIsError(false);
  };

  return (
    <form className="question-form" onSubmit={submitHandle} autoComplete="on">
      <div className="question-form__input-wrapper question-form__input-wrapper--name">
        <input className="question-form__input" value={formData.name} type="text" placeholder="Ваше имя" onChange={(evt) => inputNameHandle({...formData, name: evt.target.value})} required />
        <span className={`${nameMistake ? 'mistake' : 'visually-hidden'}`}>Поле имя должно содержать от 4 символов</span>
      </div>
      <div className="question-form_input-wrapper question-form__input-wrapper--email">
        <input className="question-form__input question-form__input--email" value={formData.email} type="email" placeholder="Ваш e-mail" onChange={(evt) => inputEmailHandle({...formData, email: evt.target.value})} required />
        <span className={`${emailMistake ? 'mistake' : 'visually-hidden'}`}>Введите корректный e-mail адрес</span>
      </div>
      <div className="question-form__input-wrapper question-form__input-wrapper--question-text">
        <textarea className="question-form__question-textarea" value={formData.question} placeholder="Что вас интересует?" onChange={(evt) => inputQuestionHandle({...formData, question: evt.target.value})} required />
        <span className={`${questionMistake ? 'mistake' : 'visually-hidden'}`}>Длина вопроса должна составлять более 10 символов</span>
      </div>
      <button className="custom__button question-form__submit-button" type="submit">Отправить</button>
      <ModalWindow active={formSended || isError} setActive={leaveModalHandle}>
        {
          isError
            ?
            <ErrorScreen buttonHandle={leaveModalHandle} />
            :
            <SuccessMessage buttonHandle={leaveModalHandle} />
        }
      </ModalWindow>
    </form>
  );
}

export default QuestionForm;
