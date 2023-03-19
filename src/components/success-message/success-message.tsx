import './success-message.css';

type PropsType = {
  buttonHandle: () => void;
}

function SuccessMessage({buttonHandle}: PropsType) {
  return (
    <div className="success-message">
      <svg className="success-message__image" width="64" height="60" viewBox="0 0 64 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.1" cx="30" cy="30" r="28" stroke="#1C1C1C" strokeWidth="4"/>
        <path d="M15 27.0769L29.6546 44L60 9" stroke="#1DC04B" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <h2 className="success-message__title">Сообщение успешно отправлено!</h2>
      <p className="success-message__description">Мы обязательно свяжемся с вами в ближайшее время и подробно ответим на ваш вопрос, будьте на связи!</p>
      <button className="custom__button success-message__button" type="button" onClick={buttonHandle}>ОК</button>
    </div>
  );
}

export default SuccessMessage;
