// src/components/DarkModeToggle.js
import React, { useEffect, useState } from 'react';
import './DarkModeToggle.css';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
      }
      return newMode;
    });
  };

  return (
    <button id="darkModeToggle" className="dark-mode-btn" onClick={toggleDarkMode}>
      <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
    </button>
  );
};

export default DarkModeToggle;
