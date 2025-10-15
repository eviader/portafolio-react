
import React from 'react';
import './Projects.css'; // Importamos los estilos
import { projects } from '../projects/data/projectsData'; // Importamos los datos de los proyectos
import ProjectCard from './ProjectsCard'; // Importamos el componente de la tarjeta
import PillNav from '../../components/pillNav/PillNav';
import img from '../../assets/logo-svg-ev.svg'; // Asegúrate de tener un logo en esta ruta

const Projects = () => {

  return (
  <>  

      <nav className='navbar'> {/* creamos el navbar */}
            <PillNav
              logo={img}
              logoAlt="Company Logo"
              items={[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Projects', href: '/services' },
                { label: 'Contact', href: '/contact' }
              ]}
              activeHref="/"
              className="custom-nav"
              ease="power2.easeOut"
              baseColor="transparent"
              pillColor="transparent"
              hoveredPillTextColor="#DF3F1F"
              pillTextColor="#000000"
            />
        </nav>
    
      <section id="projects" className="projects-section">
        <h2 className="section-title">Mis Proyectos </h2>
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
    </> 
  );
};

export default Projects;