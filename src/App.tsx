import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Clock from '../src/components/pure/clockCompClass'
import ClockCompF from './components/pure/clockCompF'

function App() {
  const [count, setCount] = useState(0)
  
  
  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {/* <Clock></Clock> */}
        <ClockCompF></ClockCompF>

      </div>
    </div>
  )
}

export default App
