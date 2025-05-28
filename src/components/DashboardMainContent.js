import React from 'react';
import AnatomySection from './dashboard/AnatomySection';
import ActivityFeed from './dashboard/activityFeed';
import CalendarView from './dashboard/CalendarView';
import '../styles/maincontent.css'; // ✅ Correct relative path

function DashboardMainContent() {
  return (
    <main className="dashboard-grid">
    

      <div className="dashboard-section">
        <AnatomySection />
        <ActivityFeed />
      </div>
        
      <div className="calendar-section">
        <CalendarView />
      </div>
    </main>
  );
}

export default DashboardMainContent;
