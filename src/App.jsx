import React from 'react'
import Navbar from './sections/Navbar'
import LandingPage from './sections/LandingPage'
import About from './sections/About'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar />
      <LandingPage />
      <About />
    </main>
  )
}

export default App