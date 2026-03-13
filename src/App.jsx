import React from 'react';
import Calculator from './components/Calculator';
import NotesCard from './components/NotesCard';
import './styles/calculator.css';

/**
 * Main App component.
 * Renders the Calculator and a side Notes card.
 */
function App() {
  return (
    <div className="App">
      <div className="app-container">
        <h1 className="app-title">calculator</h1>
        
        <div className="main-content">
          <div className="calculator-section">
            <Calculator />
          </div>
          
          <aside className="notes-sidebar">
            <NotesCard />
          </aside>
        </div>
      </div>
    </div>
  );
}

export default App;
