import React from 'react';
import '../../App.css';

const Portfolio: React.FC = () => {
  return (
    <div className="portfolio-page">
      <h1>My Portfolio</h1>
      <p>Welcome to my portfolio page.</p>
      <div className="card">
        <h2>Project 1</h2>
        <p>Description of project 1.</p>
      </div>
      <div className="card">
        <h2>Project 2</h2>
        <p>Description of project 2.</p>
      </div>
    </div>
  );
};

export default Portfolio;
