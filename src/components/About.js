// src/components/About.js
import React from 'react';
import './About.css'; // Add your about section styles

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>Welcome to my personal website! I'm a web developer with a passion for creating beautiful and functional web applications. Let's work together!</p>
      <a href="your_resume.pdf" download>Download Resume</a>
    </section>
  );
};

export default About;
