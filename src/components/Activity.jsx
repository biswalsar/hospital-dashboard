import React from 'react';


const ActivityChart = () => {
  const data = [
    { day: 'Mon', levels: [2, 4, 6] },
    { day: 'Tues', levels: [3, 5, 7] },
    { day: 'Wed', levels: [1, 3, 5] },
    { day: 'Thurs', levels: [4, 6, 8] },
    { day: 'Fri', levels: [2, 5, 7] },
    { day: 'Sat', levels: [3, 6, 9] },
    { day: 'Sun', levels: [1, 4, 6] },
  ];

  return (
    <div className="activity-chart">
      <div className="header">
        <span>Activity</span>
        <span className='appointment-paragraph'>3 appointment on this week</span>
      </div>
      <div className="chart">
        {data.map((item, index) => (
          <div key={index} className="day">
            {item.levels.map((level, idx) => (
              <>
              <div key={idx} className="bar" style={{ height: `${level * 10}px` }}></div>
              </>
            ))}
            <span className="day-label">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityChart;