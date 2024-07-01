import React from 'react'
import './App.css'
import Hero from './sections/Hero/Hero'
import Projects from './sections/Projects/Projects'
import Skills from './sections/skills/Skills'
import Contact from './sections/contact/Contact'
import Footer from './sections/footer/Footer'

const App = () => {
  return (
    <div>
      <Hero/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
