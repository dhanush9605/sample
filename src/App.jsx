import React from 'react';
import Calculator from './components/Calculator';
import './styles/calculator.css';

/**
 * Main App component.
 * Renders the Calculator within the root of the application.
 */
function App() {
  return (
    <div className="App">
      <h1 className="app-title">calculator</h1>
      <Calculator />
    </div>
  );
}

export default App;
