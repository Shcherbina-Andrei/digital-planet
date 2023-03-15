import React from 'react';

type PropsType = {
  element: JSX.Element;
}

function Popup({element}: PropsType): JSX.Element {
  return (
    <div className="popup">{element}</div>
  );
}

export default Popup;
