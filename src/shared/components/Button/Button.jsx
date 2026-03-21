// src/shared/components/Button/Button.jsx
import React from 'react';
import './Button.scss';

function Button({ children, onClick, className = '', ...props }) {
  return (
    <button
      className={`c-button ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;