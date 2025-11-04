import { useNavigate } from 'react-router-dom';
import './ContainerApp.css'
import BigTextHome from '../bigTextHome/BigTextHome';
import Avatar from '../avatar/Avatar.jsx';
import Button from '../button/Button.jsx';
import ContactIcons from '../contactIcons/ContactIcons.jsx';
import PillNav from '../pillNav/PillNav';
import img from '../../assets/logo-svg-ev.svg';

function ContainerApp() {
  const navigate = useNavigate();;

  const handleAnimationComplete = () => {
          console.log('All letters have animated!');
        };

  return (
    <>
      <main className='container-main'> {/* maquetamos la web */}

        <nav className='navbar'> {/* creamos el navbar */}
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

        <div className='container-avatar'>
          <div>
            <Avatar />
          </div>

          <div className="text-content-wrapper">
            <BigTextHome
              text="HOLA, SOY EMA!"
              className="main-title"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0}
              rootMargin="-300px"
              fontS= '6rem'
              textAlign="center"
              zIndex='8'
              onLetterAnimationComplete={handleAnimationComplete}
            />

            <div className="subtitle-wrapper">
              <BigTextHome
                text="Desarrollador front-end y diseñador UI/UX. Me apasiona crear experiencias digitales innovadoras y funcionales. Amante de la tecnología y el diseño."
                className="subtitle-text"
                delay={15}
                duration={0.4}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0}
                rootMargin="-200px"
                fontS='0.95rem'
                textAlign="center"
                zIndex='8'
                margin='5px'
                onLetterAnimationComplete={handleAnimationComplete}
              />
            </div>

            <div className="buttons-wrapper">
              <Button
                text="Proyectos"
                variant="primary"
                customPadding= "1rem 2.5rem"
                onClick={() => navigate('/projects')}
              />
              <Button
                text="Contactarme"
                variant="secondary"
                customPadding= "1rem 2.5rem"
                onClick={() => navigate('/contact')}
              />
            </div>

           
            
          </div>

        </div>

        <footer className='container-footer'>{/* creamos la seccion del footer */}
            <div className='contact-icons-wrapper'>
              <ContactIcons />
            </div>

        </footer>

       

      </main>
    </>
  );
}

export default ContainerApp;
