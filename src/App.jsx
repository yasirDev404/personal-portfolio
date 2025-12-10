import { useEffect } from 'react'
import { Navbar, Footer } from './components/layout'
import { Hero, About, Projects, Skills, Reviews, Contact } from './sections'
import Particles from './components/effects/Particles'

function App() {
  useEffect(() => {
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
    <div className="min-h-screen bg-dark-900 text-white">
      {/* Fixed Particles Background */}
      <div 
        className="particles-bg"
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100vw', 
          height: '100vh', 
          zIndex: 0,
          pointerEvents: 'none',
          background: '#0a0a0f'
        }}
      >
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={15000}
          particleSpread={30}
          speed={0.3}
          particleBaseSize={120}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      {/* Content wrapper with higher z-index */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Reviews />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}

export default App
