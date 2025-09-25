import ContainerApp from './components/containerApp/ContainerApp.jsx'
import ClickSpark from '../src/components/cliclSpark/ClickSpark.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={
          <ClickSpark
          sparkColor='#EB2800'
          sparkSize={5}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
          >
          {<ContainerApp />}
          </ClickSpark>
        } />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
