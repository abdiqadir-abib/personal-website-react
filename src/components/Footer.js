// src/components/About.js
import React from 'react';
import './Footer.css'; // Add your about section styles

const Footer = () => {
  return (
    <footer className=".reveal.visible">
    <p>© 2025 AbdiQadir. All rights reserved.</p>
   
    <div className="footer-socials">
      <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="https://x.com/abdiqadir_abib" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="mailto:abdiqadir.smr@gmail.com" target="_blank" rel="noopener noreferrer">
        <i className="fas fa-envelope"></i>
      </a>
      {/* Add other social media links as needed */}
    </div>
    </footer>
  );
};

export default Footer;
