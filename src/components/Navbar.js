import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">AbdiQadir</div>
        <button className="menu-toggle" onClick={toggleMenu}>
          <i className={`fa ${isOpen ? "fa-times" : "fa-bars"}`} />
        </button>
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#socials">Socials</a></li>
          <li><a href="#resume">Resume</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
