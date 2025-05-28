import React from 'react';
import { healthStatusData } from '../../data/healthData';
import '../../styles/healthStatus.css';

function HealthStatusCards() {
  return (
    <div className="status-cards">
      {healthStatusData.map((item, index) => (
        <div key={index} className={`status-card ${item.status.toLowerCase()}`}>
          <h4>{item.title}</h4>
          <p>{item.date}</p>
          <div className="progress-wrapper">
            <div className="progress-bar" style={{ width: `${item.progress}%` }}></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HealthStatusCards;