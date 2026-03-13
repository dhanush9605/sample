import React, { useState } from 'react';
import Display from './Display';
import ButtonGrid from './ButtonGrid';
import { add, subtract, multiply, divide } from '../utils/operations';

/**
 * Calculator component.
 * Manages the state and logic for the calculator application.
 */
const Calculator = ({ onCalculate }) => {
  const [displayValue, setDisplayValue] = useState('0');
  const [prevValue, setPrevValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const handleButtonClick = (btn) => {
    const { label, type, value } = btn;

    if (type === 'number') {
      if (waitingForOperand) {
        setDisplayValue(label);
        setWaitingForOperand(false);
      } else {
        setDisplayValue(displayValue === '0' ? label : displayValue + label);
      }
    } else if (type === 'clear') {
      setDisplayValue('0');
      setPrevValue(null);
      setOperator(null);
      setWaitingForOperand(false);
    } else if (type === 'operator') {
      const inputValue = parseFloat(displayValue);

      if (prevValue === null) {
        setPrevValue(inputValue);
      } else if (operator) {
        const result = performCalculation(prevValue, inputValue, operator);
        setDisplayValue(String(result));
        setPrevValue(result);
      }

      setWaitingForOperand(true);
      setOperator(value);
    } else if (type === 'equals') {
      const inputValue = parseFloat(displayValue);

      if (operator && prevValue !== null) {
        const result = performCalculation(prevValue, inputValue, operator);
        
        // Notify parent of calculation
        if (onCalculate) {
          onCalculate(`${prevValue} ${operator} ${inputValue} = ${result}`);
        }

        setDisplayValue(String(result));
        setPrevValue(null);
        setOperator(null);
        setWaitingForOperand(false);
      }
    }
  };

  const performCalculation = (a, b, op) => {
    switch (op) {
      case '+':
        return add(a, b);
      case '-':
        return subtract(a, b);
      case '*':
        return multiply(a, b);
      case '/':
        return divide(a, b);
      default:
        return b;
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator-frame">
        <Display value={displayValue} />
        <ButtonGrid onButtonClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default Calculator;
