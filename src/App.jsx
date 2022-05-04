import React from 'react'

import Header from './components/Header/header'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Portafolio from './components/Portafolio/Portafolio'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

export const App = () => {
  return (
    <>
    < Header />
    < Nav />
    < About />
    < Experience />
    < Portafolio />
    < Contact />
    < Footer />

    </>
  )
}

export default App