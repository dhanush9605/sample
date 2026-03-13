import React, { useState, useEffect } from 'react';
import Calculator from './components/Calculator';
import NotesCard from './components/NotesCard';
import HistoryCard from './components/HistoryCard';
import './styles/calculator.css';

/**
 * Main App component.
 * Renders the Calculator, side Notes card, and Calculation History.
 */
function App() {
  const [history, setHistory] = useState([]);

  // Load history from localStorage
  useEffect(() => {
    const savedHistory = localStorage.getItem('calculator_history');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  const addCalculation = (calculation) => {
    const newHistory = [...history, calculation].slice(-20); // Keep last 20
    setHistory(newHistory);
    localStorage.setItem('calculator_history', JSON.stringify(newHistory));
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem('calculator_history');
  };

  return (
    <div className="App">
      <div className="app-container">
        <h1 className="app-title">calculator</h1>
        
        <div className="main-content">
          <div className="calculator-section">
            <Calculator onCalculate={addCalculation} />
          </div>
          
          <aside className="notes-sidebar">
            <NotesCard />
            <HistoryCard history={history} onClear={clearHistory} />
          </aside>
        </div>
      </div>
    </div>
  );
}

export default App;
