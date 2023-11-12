// ProgressBar.js
import React from 'react';


function ProgressBar({ option, answers }) {
    
  const calculatePercentage = () => {
    const totalResponses = answers.length;
    const selectedOptionCount = answers.filter(answer => answer.option === option).length;
    return (selectedOptionCount / totalResponses) * 100;
  };

  return (
    <div className="progress mt-3">
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: `${calculatePercentage()}%` }}
        aria-valuenow={calculatePercentage()}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {`${option} (${calculatePercentage().toFixed(2)}%)`}
      </div>
    </div>
  );
}

export default ProgressBar;
