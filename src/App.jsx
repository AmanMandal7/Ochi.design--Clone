import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'

const App = () => {
  return (
    <h1 className="w-full h-screen bg-white text-font-color">
      <Navbar/>
      <LandingPage/>
    </h1>
  )
}

export default App