import React from 'react';
import { days,dates,times } from '../data/days';


const Calendar = () => {

  return (
    <div className="calendar-main">
      <div className="calendar-header">
        <span>October 2025</span>
        <div className="calendar-nav">
          <span>&lt;</span>
          <span>&gt;</span>
        </div>
      </div>

      <div className="calendar-row day-names">
        {days.map((day, i) => (
          <div key={i} className="day-label">{day}</div>
        ))}
      </div>

      <div className="calendar-row dates">
        {dates.map((date, i) => (
          <div key={i} className="date-cell">
            {date}
          </div>
        ))}
      </div>

      <div className="calendar-row time-cells">
        {times.map((timeSlots, i) => (
          <div key={i} className="time-column">
            {timeSlots.map((time, j) => (
              <div
                key={j}
                className={`time-slot ${time === "09:00" && dates[i] === 26  ? 'selected-time' : ''}
                ${time === "11:00" && dates[i] === 28 ? 'gray-highlight' : ''}
                ${time === "12:00" && dates[i] === 30 ? 'gray-highlight' : ''}`}
              >
                {time}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="calendar-appointments">
        <div className="appointment-card dentist">
          <h4>Dentist 🦷</h4>
          <p>09:00–11:00</p>
          <p>Dr. Cameron Williamson</p>
        </div>
        <div className="appointment-card physio">
          <h4>Physiotherapy Appointment 💪</h4>
          <p>11:00–12:00</p>
          <p>Dr. Kevin Djones</p>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
