
import ContainerApp from './components/containerApp/ContainerApp.jsx'
import ClickSpark from '../src/components/cliclSpark/ClickSpark.jsx';
import './App.css'

function App() {




  return (
    <>
      
      <ClickSpark
        sparkColor='#EB2800'
        sparkSize={5}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        {<ContainerApp />}
      </ClickSpark>
      
    </>
  )
}

export default App
