import React from 'react';
import './eval.css';

const EvaluationParameters = () => {
  return (
    <div className="footer">
      <h1>Evaluation Parameters</h1>
      <div className="outer-box">
        <div className="cards">
          <div className="card">
            <h2>Ideation</h2>
            <ul>
              <li>How good is the idea</li>
              <li>Alignment with the problem statement</li>
            </ul>
          </div>
          <div className="card">
            <h2>Novelty & Impact</h2>
            <ul>
              <li>Is the solution novel?</li>
              <li>Impact of the solution</li>
            </ul>
          </div>
          <div className="card">
            <h2>Feasibility</h2>
            <ul>
              <li>Technical Feasibility</li>
              <li>Business Feasibility</li>
            </ul>
          </div>
          <div className="card">
            <h2>Market Readiness</h2>
            <ul>
              <li>Market Readiness</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvaluationParameters;
