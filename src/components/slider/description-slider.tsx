import React from 'react';
import HighOrderSlider from '../high-order-slider/high-order-slider';
import './description-slider.css';

type PropsType = {
  images: string[];
}

function DescriptionSlider({images}: PropsType) {

  return (
    <HighOrderSlider elements={
      images.map((image) => (
        <img className="description__slider-image" src={image} key={image} alt="slider item" width="561" height="300"/>
      ))
    }
    />
  );
}

export default DescriptionSlider;
