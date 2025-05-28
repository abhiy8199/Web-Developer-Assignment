import React from 'react';
import AnatomySection from './AnatomySection';
import ActivityChart from './ActivityChart';
import ThisWeek from './ThisWeek';
import '../styles/dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="left-section">
        <AnatomySection />
        <ActivityChart />
      </div>
      <div className="right-section">
        <ThisWeek />
      </div>
    </div>
  );
}

export default Dashboard;
