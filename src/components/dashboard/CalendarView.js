import React from 'react';
import { calendarData } from '../../data/calendarData';
import '../../styles/calendar.css';

function CalendarView() {
  return (
    <div className="calendar">
      <h3>October 2021</h3>
      <div className="calendar-grid">
        {calendarData.days.map((day, index) => (
          <div key={index} className="calendar-day">
            <div className="day-header">{day.day}</div>
            {day.slots.map((slot, idx) => (
              <div key={idx} className="slot">{slot}</div>
            ))}
          </div>
        ))}
      </div>
      <div className="appointments">
        {calendarData.appointments.map((appt, i) => (
          <div key={i} className="appointment-card">
            <strong>{appt.type}</strong>
            <p>{appt.time} - {appt.doctor}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarView;
