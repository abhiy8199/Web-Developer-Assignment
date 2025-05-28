import React from 'react';

const ThisWeek = () => {
  return (
    <div style={{
      backgroundColor: '#fff',
      borderRadius: '20px',
      padding: '20px',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)'
    }}>
      <h3>This Week</h3>
      <p>📅 Dentist: Tues 09:00–11:00</p>
      <p>🏃‍♂️ Physiotherapy: Thurs 11:00–12:00</p>
      <h4>Upcoming Schedule</h4>
      <p>🧪 Health Checkup: Thurs 11:00 AM</p>
      <p>👁 Ophthalmologist: Thurs 2:00 PM</p>
      <p>❤️ Cardiologist: Sat 12:00 AM</p>
      <p>🧠 Neurologist: Sat 4:00 PM</p>
    </div>
  );
};

export default ThisWeek;
