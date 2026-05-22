import React from 'react'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Benefits from './components/Benefits'
import Author from './components/Author'
import ContentPreview from './components/ContentPreview'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-deep">
      <Hero />
      <Problem />
      <Solution />
      <Benefits />
      <Author />
      <ContentPreview />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
