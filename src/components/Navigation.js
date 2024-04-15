import React from 'react';
import '../styles/App.css';

const NavigationButton = ({ label, isSelected, onClick }) => (
  <button className={`nav-btn ${isSelected ? 'selected' : ''}`} onClick={onClick}>
    {label}
  </button>
);

const Navigation = ({ selectedTab, setSelectedTab }) => (
  <div className="navigation-container"> {/* New div container for styling */}
    <nav className="navigation-box"> {/* New class for box styling */}
      {['Section Offering', 'Profile', 'Registration', 'Grades', 'Account', 'Calendar', 'Faculty Evaluation', 'Password', 'Schedule', 'Curriculum/Evaluation', 'Announcement', 'Student Handbook'].map((label) => (
        <NavigationButton
          key={label}
          label={label}
          isSelected={selectedTab === label}
          onClick={() => setSelectedTab(label)}
        />
      ))}
    </nav>
  </div>
);

export default Navigation;
