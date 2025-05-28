import React from 'react';
import '../../styles/simpleCard.css';

function SimpleAppointmentCard({ title, time, icon }) {
  return (
    <div className="simple-card">
      <span className="icon">{icon}</span>
      <div>
        <p className="title">{title}</p>
        <p className="time">{time}</p>
      </div>
    </div>
  );
}

export default SimpleAppointmentCard;