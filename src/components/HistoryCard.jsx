import React from 'react';

/**
 * HistoryCard component.
 * Displays a list of recent calculations.
 */
const HistoryCard = ({ history, onClear }) => {
  return (
    <div className="history-card">
      <div className="history-header">
        <h2 className="history-title">History</h2>
        <button className="clear-history-btn" onClick={onClear} title="Clear history">
          Clear
        </button>
      </div>
      <div className="history-list">
        {history.length === 0 ? (
          <div className="history-empty">No calculations yet</div>
        ) : (
          history.map((item, index) => (
            <div key={index} className="history-item">
              {item}
            </div>
          ))
        ).reverse()}
      </div>
    </div>
  );
};

export default HistoryCard;
