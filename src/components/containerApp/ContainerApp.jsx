import React from 'react';
import './ContainerApp.css'
import BigTextHome from '../bigTextHome/BigTextHome';
import Avatar from '../avatar/Avatar.jsx';
import NavBar from '../navbar/NavBar.jsx';
import StaggeredMenu from '../staggeredMenu/StaggeredMenu.jsx';

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
      <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh', background: 'transparent' }}>
          <StaggeredMenu
            position="right"
            items={menuItems}
            socialItems={socialItems}
            displaySocials={true}
            displayItemNumbering={true}
            menuButtonColor="#fff"
            openMenuButtonColor="#000"
            changeMenuColorOnOpen={true}
            colors={['#EB2800', '#848283']}
            logoUrl=""
            accentColor="#ff6b6b"
            onMenuOpen={() => console.log('Menu opened')}
            onMenuClose={() => console.log('Menu closed')}
          />
        </div>

        <nav className='navbar'> {/* creamos el navbar */}
          <NavBar />
        </nav>

        <div className='container-avatar'>
          <Avatar />

        <BigTextHome
          text="HOLA, SOY EMA!"
          className="text-2xl font-semibold text-center"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-300px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
        </div>

        <section className='header-bigtext-img'>{/* creamos la seccion del header */}
          
        </section>
        

        <section>
          
        </section>
        <section className='proyects-container'>{/* creamos la seccion de los proyectos */}

        </section>

        <footer className='container-footer'>{/* creamos la seccion del footer */}


        </footer>

       

      </main>
    </>
  );
}

export default ContainerApp;
