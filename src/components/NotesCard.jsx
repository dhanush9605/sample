import React, { useState, useEffect } from 'react';

/**
 * NotesCard component.
 * Provides a side card for users to enter and persist notes.
 */
const NotesCard = () => {
  const [note, setNote] = useState('');

  // Load note from localStorage on component mount
  useEffect(() => {
    const savedNote = localStorage.getItem('calculator_notes');
    if (savedNote) {
      setNote(savedNote);
    }
  }, []);

  // Save note to localStorage whenever it changes
  const handleNoteChange = (e) => {
    const newValue = e.target.value;
    setNote(newValue);
    localStorage.setItem('calculator_notes', newValue);
  };

  return (
    <div className="notes-card">
      <div className="notes-header">
        <h2 className="notes-title">Quick Notes</h2>
        <div className="notes-indicator"></div>
      </div>
      <textarea
        className="notes-textarea"
        placeholder="Type your notes here..."
        value={note}
        onChange={handleNoteChange}
      />
      <div className="notes-footer">
        <span>Auto-saved</span>
      </div>
    </div>
  );
};

export default NotesCard;
