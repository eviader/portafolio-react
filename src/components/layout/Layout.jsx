import PillNav from '../pillNav/PillNav';
import img from '../../assets/logo-svg-ev.svg';
import './Layout.css';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Para la página home, el navbar debe estar dentro del container-main
  if (isHome) {
    return children;
  }

  // Para otras páginas, el navbar está fuera
  return (
    <>
      <nav className='navbar'>
        <PillNav
          logo={img}
          logoAlt="Logo de Emanuel Viader - Desarrollador Web"
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
      {children}
    </>
  );
};

export default Layout;
