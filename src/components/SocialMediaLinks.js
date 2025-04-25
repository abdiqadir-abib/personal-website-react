// src/components/SocialMediaLinks.js
import React from 'react';
import './SocialMediaLinks.css'; // Add your social media link styles

const SocialMediaLinks = () => {
  return (
    <div className="social-media-links">
      <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>
      </a>
      {/* Add other social media links as needed */}
    </div>
  );
};

export default SocialMediaLinks;
