// Card.tsx
import React from 'react';

interface CardProps {
  title: string;
  description: string;
    image: string;
}

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      
    </div>
  );
};

export default Card;
