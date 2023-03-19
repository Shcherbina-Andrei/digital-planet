import {memo} from 'react';
import './modal-window.css';

type PageProps = {
  children: JSX.Element;
  themeClass?: string;
  active: boolean;
  setActive: () => void;
}

function ModalWindow({themeClass, children, active, setActive}: PageProps) {
  return (
    <div className={active ? 'modal modal--active' : 'modal'}>
      <div className={`modal__content ${themeClass ? `${themeClass}` : ''} ${active ? 'modal__content--active' : ''}`} onClick={(evt) => evt.stopPropagation()}>
        <button className="modal__close-button" type="button" onClick={setActive}>
          <span className="visually-hidden">
            Close
          </span>
        </button>
        {children}
      </div>
    </div>
  );
}

export default memo(ModalWindow);
