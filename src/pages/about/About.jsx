import './About.css';
import PillNav from '../../components/pillNav/PillNav';
import img from '../../assets/logo-svg-ev.svg';
import emaProfilePic from '../../assets/perfil-about.webp';

const About = () => {

  const skills = [
    'React',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Figma',
    'Prototipado',
    'UX Research',
    'Git',
    'GitHub',
    'Python',
    'FastApi',
    'Firebase',
    'NodeJS'
  ];

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
      <section id="about" className="about-section">
        <div className="about-container">
          {/* Columna Izquierda: Imagen y Breve Declaración */}
          <div className="about-image-content">
            <img src={emaProfilePic} alt="Ema Profile" className="profile-pic" />
            <h3 className="about-statement">¡<>EMA</>!</h3>
          </div>

          {/* Columna Derecha: Texto Principal y Habilidades */}
          <div className="about-text-content">
            <h2 className="section-title">Sobre Mí</h2>

            <p className="intro-paragraph">
              Hola, soy Emanuel Viader, un desarrollador apasionado por la tecnología, el diseño y las soluciones que hacen más simple la vida de las personas.

              Mi impulso siempre fue entender cómo funcionan las cosas para poder mejorarlas, y eso me llevó al mundo del desarrollo web. Durante varios años trabajé como Store Manager en Lacoste, donde aprendí el valor del detalle, la organización y la comunicación efectiva dentro de un equipo.

              Esa experiencia me enseñó que la empatía y la constancia son tan importantes como el conocimiento técnico. Hoy, estoy enfocado en seguir creciendo como desarrollador, perfeccionando mis habilidades y buscando una oportunidad para aportar valor real. Me motiva crear productos que no solo sean funcionales, sino que transmitan claridad, estética y propósito.

              Soy una persona curiosa, detallista y comprometida. Disfruto aprender, trabajar en equipo y asumir nuevos desafíos.
            </p>

            <h3>Mi Trayectoria & Pasión</h3>
            <p>
              Desde que descubrí el mundo del desarrollo web, quedé fascinado por el poder de combinar la lógica del código con la creatividad del diseño. Siempre buscando la optimización de la experiencia de usuario y la excelencia en el código.
            </p>

            <h3>Habilidades Clave</h3>
            <div className="skills-grid">
              {
                skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))
              }
            </div>

            <h3>Más Allá del Código</h3>
            <p>
              Fuera de la pantalla, me encanta pasar tiempo en familia. Siempre estoy en busca de nuevas fuentes de inspiración y desafíos, tanto en la vida como en el desarrollo.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;