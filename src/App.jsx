import ContainerApp from './components/containerApp/ContainerApp.jsx'
import ClickSpark from '../src/components/cliclSpark/ClickSpark.jsx';
import MetaBalls from './components/metaBalls/MetaBalls.jsx';
import Projects from './pages/projects/Projects.jsx';
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
        <Routes>
        <Route path='/' element={
          <ClickSpark
          sparkColor='#EB2800'
          sparkSize={8}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
          >
          <ContainerApp />
          </ClickSpark>
        } />
        <Route path='/projects' element={
          <ClickSpark
          sparkColor='#EB2800'
          sparkSize={8}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
          >
          <Projects />
          </ClickSpark>
        } />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
