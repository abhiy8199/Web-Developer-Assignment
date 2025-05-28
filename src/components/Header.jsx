
import React from 'react';
import '../styles/App.css';

function Header() {
  return (
    <div className="header">
      <div className="logo">Healthcare<span className="dot">.</span></div>
      <input className="search" placeholder="Search" />
      <div className="header-right">
        <div className="notif-icon">🔔</div>
        <img src="/assets/avatar.png" alt="User Avatar" className="avatar" />
        <button className="add-btn">+</button>
      </div>
    </div>
  );
}
export default Header;
