
import React from 'react';
import './Projects.css'; // Importamos los estilos
import { projects } from '../projects/data/projectsData'; // Importamos los datos de los proyectos
import ProjectCard from './ProjectsCard'; // Importamos el componente de la tarjeta

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Mis Proyectos</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            tags={project.tags}
            liveUrl={project.liveUrl}
            sourceUrl={project.sourceUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;