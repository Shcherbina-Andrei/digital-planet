import {memo} from 'react';
import WorkCard from '../../components/work-card/work-card';
import './realization-screen.css';
import Slider from '../../components/slider/slider';
import { realizationSteps } from '../../content';
import ScrollButton from '../../components/scroll-button/scroll-button';

type PropsType = {
  realizationRef: React.RefObject<HTMLElement>;
}

function RealizationScreen({realizationRef}: PropsType): JSX.Element {
  return (
    <section id="realization-screen" className="realization" ref={realizationRef}>
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
        <Slider elements={realizationSteps.map((step) => (
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
      <div className="scroll-button__wrapper">
        <ScrollButton position={3} />
      </div>
    </section>
  );
}

export default memo(RealizationScreen);

