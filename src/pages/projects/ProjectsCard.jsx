
import React from 'react';
import './Projects.css'; // Podemos usar los mismos estilos

const ProjectCard = ({ title, description, imageUrl, tags, liveUrl, sourceUrl }) => {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-image" />
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <div className="project-ctas">
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="button primary-button">Ver Sitio</a>
          <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="button secondary-button">Código Fuente</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;