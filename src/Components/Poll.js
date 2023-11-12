// YourMainComponent.js
import React from 'react';
import ProgressBar from './ProgressBar';

function Poll({ question, options, answers }) {
  return (
    <div className="container">
      <h3>{question}</h3>
      {options.map(option => (
        <ProgressBar key={option} option={option} answers={answers} />
      ))}
    </div>
  );
}

export default Poll;
