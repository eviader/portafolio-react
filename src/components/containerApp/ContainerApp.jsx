import React from 'react';
import img from "../../assets/logo-svg-ev.svg"
import './ContainerApp.css'
import BigTextHome from '../bigTextHome/BigTextHome';
import Avatar from '../avatar/Avatar.jsx';
import StaggeredMenu from '../staggeredMenu/StaggeredMenu.jsx';
import Button from '../button/Button.jsx';

function ContainerApp() {

  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
    { label: 'Services', ariaLabel: 'View our services', link: '/services' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
  ];
  
  const socialItems = [
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'GitHub', link: 'https://github.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' }
  ];

  const handleAnimationComplete = () => {
          console.log('All letters have animated!');
        };

  return (
    <>
      <main className='container-main'> {/* maquetamos la web */}
        <nav className='navbar'> {/* creamos el navbar */}
            <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh', background: 'transparent' }}>
              <StaggeredMenu
                position="right"
                items={menuItems}
                socialItems={socialItems}
                displaySocials={true}
                displayItemNumbering={true}
                menuButtonColor="#DF3F1F"
                openMenuButtonColor="#000"
                changeMenuColorOnOpen={true}
                colors={['#DF3F1F', '#848283']}
                logoUrl={img}
                accentColor="#DF3F1F"
                onMenuOpen={() => console.log('Menu opened')}
                onMenuClose={() => console.log('Menu closed')}
              />
            </div>
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
                delay={30}
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
                onClick={() => console.log('Proyectos clicked')}
              />
              <Button
                text="Contactarme"
                variant="secondary"
                onClick={() => console.log('Contactarme clicked')}
              />
            </div>
          </div>

        </div>

     {/*<section className='header-bigtext-img'>
        </section>
  
        <section className='proyects-container'>
        </section>*/}

        <footer className='container-footer'>{/* creamos la seccion del footer */}


        </footer>

       

      </main>
    </>
  );
}

export default ContainerApp;
