import React from 'react';
import '../../styles/upcomingSchedule.css';

const appointments = [
  {
    day: "On Thursday",
    items: [
      { title: "Health checkup complete", time: "11:00 AM", icon: "🧪" },
      { title: "Ophthalmologist", time: "14:00 PM", icon: "👁" }
    ]
  },
  {
    day: "On Saturday",
    items: [
      { title: "Cardiologist", time: "12:00 AM", icon: "❤️" },
      { title: "Neurologist", time: "16:00 PM", icon: "🧠" }
    ]
  }
];

const UpcomingSchedule = () => (
  <div className="upcoming-container">
    <h3 className="section-title">The Upcoming Schedule</h3>
    {appointments.map((group, idx) => (
      <div key={idx}>
        <h4 className="schedule-day">{group.day}</h4>
        <div className="schedule-cards">
          {group.items.map((item, i) => (
            <div key={i} className="schedule-card">
              <span>{item.icon}</span>
              <div>
                <p>{item.title}</p>
                <small>{item.time}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default UpcomingSchedule;
