// src/components/About.js
import React from 'react';
import './Contacts.css'; // Add your about section styles

const Contacts = () => {
  return (
    <section id="contact" className="fade-in">
    <h2>Connect with Me</h2>
    {/* <div class="social-icons">
        <link href="https://github.com/abdiqadir-abib"  target="_blank" class="fab fa-github"/>
        <link href="https://linkedin.com/in/abdiqadir_abib" target="_blank" class="fab fa-linkedin"/>
        <link href="https://x.com/abdiqadir_abib" target="_blank"  class="fab fa-twitter"/>
        <link href="mailto:abdiqadir.smr@gmail.com" target="_blank"  class="fas fa-envelope"/>
    </div> */}
    <div className="social-media-links">
      <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="https://x.com/abdiqadir_abib" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i>
      </a>
     
      {/* Add other social media links as needed */}
    </div>
    </section>
  );
};

export default Contacts;
