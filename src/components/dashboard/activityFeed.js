import React from 'react';
import '../../styles/activity.css'; // ✅ Corrected path


function ActivityFeed() {
  const data = [
    { day: 'Mon', value: 12 },
    { day: 'Tue', value: 18 },
    { day: 'Wed', value: 10 },
    { day: 'Thu', value: 20 },
    { day: 'Fri', value: 14 },
    { day: 'Sat', value: 16 },
    { day: 'Sun', value: 9 }
  ];

  return (
    <div className="activity-section">
      <h3>Activity</h3>
      <div className="activity-graph">
        {data.map((item, index) => (
          <div key={index} className="bar-container">
            <div className="bar" style={{ height: `${item.value*4}px` }}></div>
            <span className="label">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityFeed;
