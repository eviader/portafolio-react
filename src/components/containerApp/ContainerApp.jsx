import React from 'react';
import './ContainerApp.css'
import BigTextHome from '../bigTextHome/BigTextHome';
import Avatar from '../avatar/Avatar.jsx';
import NavBar from '../navbar/NavBar.jsx';

function ContainerApp() {

  return (
    <>
      <main className='container-main'> {/* maquetamos la web */}
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
