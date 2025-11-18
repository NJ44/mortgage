import React, { useEffect } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Services from './components/Services'
import MapEmbed from './components/MapEmbed'
import Reviews from './components/Reviews'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import SEO from './components/SEO'
import { config } from './config'

function App() {
  useEffect(() => {
    // Set CSS custom properties from config
    if (config.PRIMARY_COLOR && !config.PRIMARY_COLOR.startsWith('{{')) {
      document.documentElement.style.setProperty('--primary-color', config.PRIMARY_COLOR)
    }
    if (config.ACCENT_COLOR && !config.ACCENT_COLOR.startsWith('{{')) {
      document.documentElement.style.setProperty('--accent-color', config.ACCENT_COLOR)
    }
  }, [])

  return (
    <>
      <SEO />
      <NavBar />
      <main>
        <Hero />
        <Services />
        <MapEmbed />
        <Reviews />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}

export default App

