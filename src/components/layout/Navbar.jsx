import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { Container, Button } from '../ui'
import { MagneticButton, GradientText, GlassSurface } from '../effects'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.slice(1))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
    >
      <Container>
        <GlassSurface 
          borderRadius={20}
          blur={scrolled ? 12 : 8}
          brightness={scrolled ? 40 : 50}
          className="nav-glass"
        >
          <div className="flex items-center justify-between h-16 px-6">
            {/* Logo */}
            <MagneticButton strength={0.3} radius={100}>
              <motion.a
                href="#home"
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center"
                  whileHover={{ rotate: 10 }}
                >
                  <span className="text-white font-bold text-xl">Y</span>
                </motion.div>
                <span className="hidden sm:block font-bold text-xl">
                  <span className="text-white">Yasir</span>
                  <GradientText colors={['#6366f1', '#a855f7', '#ec4899', '#6366f1']} speed={3}>
                    .dev
                  </GradientText>
                </span>
              </motion.a>
            </MagneticButton>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link, index) => (
                <MagneticButton key={link.name} strength={0.2} radius={60}>
                  <motion.a
                    href={link.href}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                      activeSection === link.href.slice(1) 
                        ? 'text-white' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    {link.name}
                    {/* Active Indicator */}
                    {activeSection === link.href.slice(1) && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent-primary"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.a>
                </MagneticButton>
              ))}
              <MagneticButton strength={0.3} radius={80}>
                <Button href="#contact" size="sm" className="ml-2">
                  Hire Me
                </Button>
              </MagneticButton>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden border-t border-white/10"
              >
                <div className="py-4 px-6 space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      className={`block px-4 py-3 rounded-xl transition-colors ${
                        activeSection === link.href.slice(1)
                          ? 'bg-accent-primary/20 text-accent-glow'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="pt-2"
                  >
                    <Button href="#contact" className="w-full" onClick={() => setIsOpen(false)}>
                      Hire Me
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </GlassSurface>
      </Container>
    </motion.nav>
  )
}

export default Navbar
