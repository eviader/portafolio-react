
import React from 'react';
import './Projects.css';
import Button from '../../components/button/Button';

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
          <Button
                text="Ver Proyecto"
                variant="primary"
                customPadding= "10px 10px"
                onClick={() => navigate('/projects')}
              />
          <Button
                text="Código GitHub"
                variant="secondary"
                customPadding= "10px 10px"
                onClick={() => navigate('/projects')}
              />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;