import React from 'react';
import { navigation } from '../data/navigation';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h1 className="sidebar-logo">General</h1>
      <nav className="sidebar-menu">
        {navigation.map((item,i)=>{
          return <div key={i} className="sidebar-item">{item.name}</div>
        })}

        <div className="sidebar-section">Tools</div>
        <div className="sidebar-item">Chat</div>
        <div className="sidebar-item">Support</div>

        <div className="sidebar-section">Settings</div>
      </nav>
    </aside>
  );
};

export default Sidebar;
