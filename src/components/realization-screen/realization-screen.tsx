import React from 'react';
import WorkCard from '../work-card/work-card';
import './realization-screen.css';

import HighOrderSlider from '../high-order-slider/high-order-slider';
import { realizationSteps } from '../../descriptions-slider-images';

function RealizationScreen(): JSX.Element {
  return (
    <section id="realization-screen" className="realization">
      <h2 className="screen-title realization__title">Как это работает?</h2>
      <div className="realization__work-steps">
        {realizationSteps.map((step) => (
          <div className="realization__work-step" key={step.id}>
            <WorkCard
              image={step.image}
              title={step.title}
              description={step.description}
            />
          </div>
        ))}
      </div>
      <div className="realization__work-steps-smallscreen">
        <HighOrderSlider elements={realizationSteps.map((step) => (
          <div className="realization__work-step" key={step.id}>
            <WorkCard
              image={step.image}
              title={step.title}
              description={step.description}
            />
          </div>
        ))}
        />
      </div>
    </section>
  );
}

export default RealizationScreen;

