// src/components/Projects.js
import React from 'react';
import './Projects.css'; // Add your project section styles
import Project1 from './images/project1.jpg';
import Project2 from './images/project2.jpg';
import Project3 from './images/project3.jpg';

const projects = [
  {
    id: 1,
    title: 'SalePro POS',
    description: 'DSalePro POS, inventory management app. A brief description of your awesome project goes here.',
    image: Project1,
    link: 'https://github.com/project1'
  },
  {
    id: 2,
    title: 'Apexa – Multi-Purpose',
    description: 'Introducing Apexa – the Business Consulting Laravel Template designed for a variety of SaaS products',
    image: Project2,
    link: 'https://github.com/project1'
  },
  {
    id: 3,
    title: 'Curve POS',
    description: 'Curve POS – SaaS Point Of Sale System for Restaurants Bars Laravel Template.',
    image: Project3,
    link: 'https://github.com/project1'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-cards">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
        {/* Add more project cards */}
      </div>
    </section>
  );
};

export default Projects;
