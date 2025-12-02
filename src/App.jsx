import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Navbar, Footer } from './components/layout'
import { Hero, About, Projects, Skills, Contact } from './sections'
import { CursorGlow } from './components/effects'

function App() {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]')
      if (target) {
        e.preventDefault()
        const id = target.getAttribute('href').slice(1)
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  return (
    <AnimatePresence>
      <div className="min-h-screen bg-dark-900 text-white overflow-hidden">
        {/* Custom Cursor Glow Effect */}
        <CursorGlow 
          color="#6366f1" 
          size={500} 
          opacity={0.12} 
          blur={120} 
        />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Global Background Elements */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-grid opacity-20" />
        </div>
      </div>
    </AnimatePresence>
  )
}

export default App
