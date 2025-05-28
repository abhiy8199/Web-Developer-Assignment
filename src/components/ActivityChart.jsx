import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';
import './activity.css'; // Import the CSS here

const data = [
  { day: 'Mon', appointments: 2 },
  { day: 'Tues', appointments: 3 },
  { day: 'Wed', appointments: 4 },
  { day: 'Thurs', appointments: 3 },
  { day: 'Fri', appointments: 2 },
  { day: 'Sat', appointments: 5 },
  { day: 'Sun', appointments: 1 }
];

const ActivityChart = () => {
  return (
    <div className="activity-chart">
      <div className="chart-header">
        <h4>Activity</h4>
        <p>3 appointments this week</p>
      </div>
      <ResponsiveContainer width="50%" height={75}>
        <BarChart data={data}>
          <XAxis dataKey="day" stroke="#8884d8" />
          <Tooltip />
          <Bar dataKey="appointments" radius={[10, 10, 0, 0]}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.appointments >= 3 ? "#3f80ff" : "#d0dfff"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;
