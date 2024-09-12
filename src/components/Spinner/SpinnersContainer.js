import React from 'react';
import Spinner from './Spinner';
import './Spinner.css'; 

const SpinnersContainer = () => (
  <div className="container">
    <div className="spinner-container">
      <Spinner size="small" />
      <div className="text">Loading...</div>
    </div>
    <div className="spinner-container">
      <Spinner size="medium" />
      <div className="text">Loading...</div>
    </div>
    <div className="spinner-container">
      <Spinner size="large" />
      <div className="text">Loading...</div>
    </div>
    <div className="spinner-container">
      <Spinner size="extra-large" />
      <div className="text">Loading...</div>
    </div>
  </div>
);

export default SpinnersContainer;
