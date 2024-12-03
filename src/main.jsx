import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App'

import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/hero'
import Skills from './Components/Skills/Skills'
import Services from './Components/Services/Services'
import Portfolio from './Components/Portfolio/Portfolio'
import Number from './Components/Number/Number'
import Testmonials from './Components/Testmonials/Testmonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import AnimatedCursor from 'react-animated-cursor'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>

    <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='0, 65, 125'
      outerAlpha={0.2}
      innerScale={1.5}
      outerStyle={
        {border: "3px solid #fff"}
      }
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />

    <Navbar />
    <Hero />
    <Skills />
    <Services />
    <Portfolio />
    <Number />
    <Testmonials />
    <Contact />
    <Footer />
    </>
  </StrictMode>,
)
