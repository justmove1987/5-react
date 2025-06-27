// Card.tsx
import React from 'react';
import './Card.css';
import Indicator from './Indicator';
import { motion, AnimatePresence } from 'framer-motion';

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

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  bgColor,
  step,
  totalSteps,
  onNext,
  onPrev
}) => {
  return (
    <div className="card-container">
      <div className="card-image" style={{ backgroundColor: bgColor }}>
        <AnimatePresence mode="wait">
          <motion.img
            key={image}
            src={image}
            alt={title}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
        </AnimatePresence>
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
