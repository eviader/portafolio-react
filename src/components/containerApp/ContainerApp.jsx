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
            openMenuButtonColor="#fff"
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
        </div>

        <section className='header-bigtext-img'>{/* creamos la seccion del header */}
          <BigTextHome />
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
