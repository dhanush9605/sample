import React from 'react';

/**
 * Display component for the calculator.
 * Shows the current input or the result of a calculation.
 */
const Display = ({ value }) => {
  return (
    <div className="calculator-display">
      <div className="display-value">{value}</div>
    </div>
  );
};

export default Display;
