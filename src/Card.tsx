import React from 'react';

interface CardProps {
  title: string;
  description: string;
  image: string;
  bgColor: string;
  onNext: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, image, bgColor, onNext }) => {
  return (
    <div className="card-container">
      <div className="card-image" style={{ backgroundColor: bgColor }}>
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="card-footer">
          <div className="dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <button className="next-button" onClick={onNext}>
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
