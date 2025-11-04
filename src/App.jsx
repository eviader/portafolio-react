import ContainerApp from './components/containerApp/ContainerApp.jsx'
import ClickSpark from './components/mouse/cliclSpark/ClickSpark.jsx';
import MetaBalls from './components/metaBalls/MetaBalls.jsx';
import Layout from './components/layout/Layout.jsx';
import Projects from './pages/projects/Projects.jsx';
import About from './pages/about/About.jsx';
import Contact from './pages/contact/Contact.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <>
      <div className='metaballs-background'>
        <MetaBalls
          color="#EB2800"
          cursorBallColor="#6cb4ee"
          ballCount={10}
          speed={0.1}
          animationSize={15}
          clumpFactor={1.2}
          cursorBallSize={0.5}
          enableTransparency={true}
          hoverSmoothness={1}
        />
      </div>

      <BrowserRouter>
        <ClickSpark
          sparkColor='#EB2800'
          sparkSize={8}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <Layout>
            <Routes>
              <Route path='/' element={<ContainerApp />} />
              <Route path='/about' element={<About />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </Layout>
        </ClickSpark>
      </BrowserRouter>

    </>
  )
}

export default App
