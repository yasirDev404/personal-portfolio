import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CursorGlow = ({ 
  color = '#6366f1',
  size = 400,
  opacity = 0.15,
  blur = 100,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.body.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.body.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed pointer-events-none z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            left: mousePosition.x - size / 2,
            top: mousePosition.y - size / 2,
            width: size,
            height: size,
            background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
            filter: `blur(${blur}px)`,
            opacity: opacity,
          }}
          transition={{ duration: 0.15 }}
        />
      )}
    </AnimatePresence>
  )
}

export default CursorGlow

