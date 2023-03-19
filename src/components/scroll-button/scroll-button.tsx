import './scroll-button.css';

type PropsType = {
  text?: string;
  position: number;
}

function ScrollButton({text, position}: PropsType): JSX.Element {
  return (
    <button className="scroll-button" type="button" onClick={() => window.scrollTo(0, window.innerHeight * position)}>
      {text &&
      <span className="scroll-button__text">{text}</span>}
      <svg width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L8.5 8L16 1" stroke="currentColor"/>
      </svg>

    </button>
  );
}

export default ScrollButton;
