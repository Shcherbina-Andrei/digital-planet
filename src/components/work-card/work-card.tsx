import React from 'react';
import './work-card.css';

type PropsType = {
  image: string;
  title: string;
  description: string;
}

function WorkCard({image, title, description}: PropsType): JSX.Element {
  return (
    <article className="work-card">
      <div className="work-card__image-wrapper">
        <img className="work-card__image" src={`${image}`} width="195" height="130" alt="work-card" />
      </div>
      <h3 className="work-card__title">{title}</h3>
      <p className="work-card__description">{description}</p>
    </article>
  );
}

export default WorkCard;
