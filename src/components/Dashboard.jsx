import React from "react";
import muscle from "../images/muscle.jpg"
import { health } from "../data/healthData";
import ActivityChart from "./Activity";
import { FaSearch } from "react-icons/fa"

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-title">Dashboard</div>

      <div className="dashboard-top">
         <div className="container">
      {/* Search Icon */}
      <div className="search">
        <FaSearch size={18} />
      </div>

      {/* Human Body Image */}
      <img src={muscle} alt="Human Body" className="human-image" />

      {/* Heart Label */}
      <div className="label heart-label">
        <span className="icon">❤️</span> Healthily Heart
      </div>

      {/* Leg Label */}
      <div className="label leg-label">
        <span className="icon">⚡</span> Healthily Leg
      </div>
    </div>

        {/* Organs Status */}
        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      {health.map((item, i) => {
        const progress =
          item.name === "Teeth" ? 90 : item.name === "Bone" ? 70 : 60;
        const color =
          item.name === "Teeth"
            ? "#10b981" 
            : item.name === "Bone"
            ? "#f97316" 
            : "#ef4444"; 

        return (
          <div className="card" key={i}>
            <div className="card-body">
              <img
                src={item.image}
                alt={item.name}
                style={{ height: "25px", width: "25px" }}
              />
              <div style={{ color: "rgb(11, 11, 66)", fontWeight: "bold" }}>
                {item.name}
              </div>
            </div>
            <div style={{ color: "gray", marginTop: "10px" }}>{item.date}</div>
            <div className="progress-container">
              <div
                className="progress-bar"
                style={{ width: `${progress}%`, backgroundColor: color }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
      </div>

      {/* Activity Graph Placeholder */}
      <div className="activity-card">
        <ActivityChart/>
      </div>
    </div>
  );
};

export default Dashboard;
