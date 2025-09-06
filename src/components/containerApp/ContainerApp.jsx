import React from 'react';
import './ContainerApp.css'
import BigTextHome from '../bigTextHome/BigTextHome';
import Avatar from '../avatar/Avatar.jsx';
import NavBar from '../navbar/NavBar'

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
        <p className="p-main">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
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
