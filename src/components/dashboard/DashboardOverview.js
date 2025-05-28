// File: src/components/dashboard/DashboardOverview.js
import React from 'react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import '../../styles/dashboardOverview.css';
import '../styles/maincontent.css'; // ✅ Correct relative path

;


function DashboardOverview() {
  return (
    <section className="overview">
      <AnatomySection />
      <HealthStatusCards />
    </section>
  );
}

export default DashboardOverview;
