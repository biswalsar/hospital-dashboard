import React from "react";
import schedule from "../data/schueduleData.js"


const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h2>The Upcoming Schedule</h2>

      <div>
        {schedule.map(({ day, events }) => (
          <div key={day} className="schedule-block">
            <p className="day">On {day}</p>
            <div className="schedule-flex">
              {events.map(({ title, time }, idx) => (
              <div key={idx} className="event-row">
                <div className="title">{title}</div>
                <div className="time">{time}</div>
              </div>
            ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingSchedule;
