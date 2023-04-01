import {sliderImages} from '../../content';
import './description-screen.css';
import Slider from '../../components/slider/slider';
import ScrollButton from '../../components/scroll-button/scroll-button';

type PropsType = {
  descriptionRef: React.RefObject<HTMLElement>;
}

function DescriptionScreen({descriptionRef}: PropsType): JSX.Element {

  return (
    <section id="description-screen" className="description" ref={descriptionRef}>
      <div className="description__wrapper">
        <div className="description__text">
          <h2 className="screen-title description__title">Что такое VR-планетарий?</h2>
          <div className='description__paragraphs-wrapper'>
            <p className="description__paragraph">
          Это образовательная программа, использующая технологию виртуальной реальности.
            </p>
            <p className="description__paragraph">
          Зрителям выдаются очки виртуальной реальности, оператор запускает сеанс планетария на всех очках одновременно. В коллекции фильмов идут обучающие картины о космосе, астрономии  и обществознании.
            </p>
            <p className="description__paragraph">
          За счёт реалестичности  и имитации игры такое обучение повышает мотивацию и стимулирует активную мозговую деятельность ребёнка.
            </p>
          </div>

        </div>
        <div className="description__slider">
          <h3 className="description__slider-title">Что показываем<br/> в планетарии</h3>
          <Slider elements={
            sliderImages.map((image) => (
              <img className="description__slider-image" src={image} key={image} alt="slider item" width="561" height="300"/>
            ))
          }
          />
        </div>
      </div>
      <div className="scroll-button__wrapper">
        <ScrollButton position={2} />
      </div>
    </section>
  );
}

export default DescriptionScreen;
