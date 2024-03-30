import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Prefooter from './components/Prefooter'

const App = () => {
  return (
    <div className="w-full min-h-screen bg-[#f1f1f1] text-[#212121]">
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Featured/>
      <Cards/>
      <Prefooter/>
    </div>
  )
}

export default App