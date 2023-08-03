import { useState } from 'react'
import { Route, Router } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Content from './Components/Content'

function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <Content/>
    </>
  )
}

export default App
