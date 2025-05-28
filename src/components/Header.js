import React from 'react';
import '../styles/header.css';

function Header() {
  return (
    <header className="header">
      <input type="text" placeholder="Search..." className="search-bar" />
      <div className="header-icons">
        <button className="add-btn">+</button>
        <img src="/images/avatar.png" alt="User" className="avatar" />
      </div>
    </header>
  );
}

export default Header;
