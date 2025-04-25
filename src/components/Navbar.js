// src/components/Navbar.js
import React from 'react';
import './Navbar.css'; // Add your navbar styles here

const Navbar = () => {
  return (
    <nav className="navbar">
    
    <div className="nav-container">
      <a href="#home" className="logo">AbdiQadir</a>
      <div className="menu-toggle" id="menu-toggle">&#9776;</div>
     
      
      <div className="nav-links" id="nav-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href="resume.pdf" download>Resume</a>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
