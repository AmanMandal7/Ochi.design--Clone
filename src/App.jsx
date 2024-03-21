import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'

const App = () => {
  return (
    <div className="w-full min-h-screen bg-[#f1f1f1] text-[#212121]">
      <Navbar/>
      <LandingPage/>
      <Marquee/>
    </div>
  )
}

export default App