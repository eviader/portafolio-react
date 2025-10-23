import React from 'react';
import PillNav from '../../components/pillNav/PillNav';
import img from '../../assets/logo-svg-ev.svg'; // Asegúrate de tener un logo en esta ruta

const Projects = () => {

  return (
  <>  
      <nav className='navbar'> 
            <PillNav
              logo={img}
              logoAlt="Company Logo"
              items={[
               { label: 'Inicio', href: '/' },
                { label: 'Sobre mí', href: '/about' },
                { label: 'Proyectos', href: '/projects' },
                { label: 'Contacto', href: '/contact' }
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
    </> 
  );
};

export default Projects;