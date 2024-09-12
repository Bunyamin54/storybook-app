import React from 'react';
import Spinner from './Spinner';
import './Spinner.css'; 

const SpinnersContainer = () => (
  <div className="container">
    <div className="spinner-container">
      <Spinner size="small" />
      <div className="text small">Loading...</div>
    </div>
    <div className="spinner-container">
      <Spinner size="medium" />
      <div className="text medium">Loading...</div>
    </div>
    <div className="spinner-container">
      <Spinner size="large" />
      <div className="text large">Loading...</div>
    </div>
    <div className="spinner-container">
      <Spinner size="extra-large" />
      <div className="text extra-large">Loading...</div>
    </div>
  </div>
);

export default SpinnersContainer;
