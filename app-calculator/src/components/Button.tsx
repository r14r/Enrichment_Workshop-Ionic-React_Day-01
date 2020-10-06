import React from 'react';
import './ExploreContainer.css';

interface ButtonProps {
  name: string;
}

const Button: React.FC<ButtonProps> = ({ name }) => {
  return (
    <div className="button">
      <strong>{name}</strong>
    </div>
  );
};

export default Button;
