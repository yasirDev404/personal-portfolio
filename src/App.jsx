import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Navbar, Footer } from './components/layout'
import { Hero, About, Projects, Skills, Contact } from './sections'
import { CursorGlow, ShapeBlur } from './components/effects'

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
      <div className="min-h-screen bg-dark-900 text-white overflow-x-hidden">
        {/* Fixed Background - Consistent across entire site */}
        <div className="fixed inset-0 -z-50">
          {/* Base dark background */}
          <div className="absolute inset-0 bg-dark-900" />
          
          {/* Animated Shape Blur Background */}
          <ShapeBlur 
            colors={['#6366f1', '#a855f7', '#ec4899', '#10b981']}
            blur={180}
            shapeSize={0.35}
            roundness={0.8}
          />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-grid opacity-15" />
          
          {/* Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,10,15,0.7)_100%)]" />
        </div>

        {/* Custom Cursor Glow Effect */}
        <CursorGlow 
          color="#6366f1" 
          size={600} 
          opacity={0.08} 
          blur={150} 
        />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="relative z-10">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </AnimatePresence>
  )
}

export default App
