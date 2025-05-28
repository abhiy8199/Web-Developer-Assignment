import React, { useState } from 'react';
import { navLinks } from '../data/navLinks';
import '../styles/sidebar.css';

function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(0); // Dashboard is initially active

  return (
    <aside className="sidebar">
      <div className="top-section">
        <h2 className="logo">
          <span className="highlight">Health</span>care.
        </h2>

        <nav>
          <h4 className="section-title">General</h4>
          <ul className="nav-list">
            {navLinks.slice(0, 5).map((link, index) => (
              <li
                key={index}
                className={`nav-item ${activeIndex === index ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <span className="icon">{link.icon}</span>
                <span className="label">{link.label}</span>
              </li>
            ))}
          </ul>

          <h4 className="section-title">Tools</h4>
          <ul className="nav-list">
            {navLinks.slice(5, 7).map((link, index) => (
              <li
                key={index + 5}
                className={`nav-item ${activeIndex === index + 5 ? 'active' : ''}`}
                onClick={() => setActiveIndex(index + 5)}
              >
                <span className="icon">{link.icon}</span>
                <span className="label">{link.label}</span>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <ul className="nav-list bottom">
        <li
          className={`nav-item ${activeIndex === 7 ? 'active' : ''}`}
          onClick={() => setActiveIndex(7)}
        >
          <span className="icon">{navLinks[7].icon}</span>
          <span className="label">{navLinks[7].label}</span>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
