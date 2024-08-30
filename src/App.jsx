import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Nav from "./components/Nav/Nav"
import Reading from "./components/Nav/Reading"

function App() {
  const [count, setCount] = useState(0)

  return (<>
    <Nav />
    <Reading />
  </>)
}

export default App
