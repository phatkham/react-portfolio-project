import {useState} from 'react'
import reactLogo from './assets/react.svg'
// import vitelogo from './vite.svg'
import './App.css'

import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/hero'
import Skills from './Components/Skills/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Hero />
    <Skills />
    </>
  )
}

export default App