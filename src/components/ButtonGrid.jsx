import React from 'react';

/**
 * ButtonGrid component for the calculator.
 * Renders the layout of all buttons and handles click events.
 */
const ButtonGrid = ({ onButtonClick }) => {
  const buttons = [
    { label: 'C', type: 'clear' },
    { label: '÷', type: 'operator', value: '/' },
    { label: '7', type: 'number' },
    { label: '8', type: 'number' },
    { label: '9', type: 'number' },
    { label: '×', type: 'operator', value: '*' },
    { label: '4', type: 'number' },
    { label: '5', type: 'number' },
    { label: '6', type: 'number' },
    { label: '-', type: 'operator', value: '-' },
    { label: '1', type: 'number' },
    { label: '2', type: 'number' },
    { label: '3', type: 'number' },
    { label: '+', type: 'operator', value: '+' },
    { label: '0', type: 'number' },
    { label: '.', type: 'number' },
    { label: '=', type: 'equals' },
  ];

  return (
    <div className="button-grid">
      {buttons.map((btn, index) => (
        <button
          key={index}
          className={`calc-button btn-${btn.type} ${btn.label === '0' ? 'btn-zero' : ''}`}
          onClick={() => onButtonClick(btn)}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
};

export default ButtonGrid;
