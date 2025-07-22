import React from 'react';
import './Projects.css';

const Projects = ({ content }) => {
  return (
    <section id="projects" className="projects-section">
      <h2>{content.projectsTitle}</h2>
      <div className="projects-container">
        {content.mainProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p className="project-year">{project.year}</p>
            <p className="project-description">{project.description}</p>
            {/* İsterseniz buraya proje linki, görsel veya detay butonu ekleyebilirsiniz */}
          </div>
        ))}
      </div>

      <div className="university-projects">
        <h3>{content.universityProjectsTitle}</h3>
        <ul>
          {content.otherUniversityProjects.map((proj, index) => (
            <li key={index}>{proj}</li>
          ))}
        </ul>
      </div>

      
    
    </section>
  );
};

export default Projects;