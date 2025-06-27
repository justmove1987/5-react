import React from 'react';
import Indicator from './Indicator';
interface CardProps {
  title: string;
  description: string;
  image: string;
  bgColor: string;
  step: number;
  totalSteps: number;
  onNext: () => void;
  onPrev: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, image, bgColor, onNext, onPrev, step, totalSteps }) => {
  return (
    <div className="card-container">
      <div className="card-image" style={{ backgroundColor: bgColor }}>
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="card-footer">
          
          <Indicator totalSteps={totalSteps} step={step} />

          <div className="buttons">
            {step > 0 && (
              <button className="prev-button" onClick={onPrev}>
                ←
              </button>
            )}

            {step < totalSteps - 1 && (
              <button className="next-button" onClick={onNext}>
                →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
