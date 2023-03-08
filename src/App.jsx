import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="" target="_blank">
          <img src={ reactLogo } className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          
          count is {count}
        </button> */}
      {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}
      <p className="read-the-docs">
        This is my first Vite + React project.
      </p>
      <div className="card">
        <h2>My name is</h2>
        <h1>Amrit Adhikari</h1>
        <p>
          I am a web developer. I love to code and build beautiful websites. And this is my first react js project!
        </p>
        <a href="https://github.com/iamawmrit" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>

      </div>
    </div>

  )
}

export default App
