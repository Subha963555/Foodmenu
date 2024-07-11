import React from 'react';

const PersonSelector = ({ people, selectedPerson, selectPerson }) => {
  return (
    <div className="person-selector fade-in">
      <h2>Select Person</h2>
      {people.map(person => (
        <button
          key={person.id}
          onClick={() => selectPerson(person.id)}
          className={selectedPerson === person.id ? 'active' : ''}
        >
          {person.name}
        </button>
      ))}
    </div>
  );
};

export default PersonSelector;
