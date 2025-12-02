import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const ParticleField = ({ 
  particleCount = 50,
  colors = ['#6366f1', '#a855f7', '#ec4899', '#10b981'],
  maxSize = 4,
  speed = 1,
  className = '',
}) => {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const newParticles = [...Array(particleCount)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * maxSize + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: (Math.random() * 20 + 10) / speed,
      delay: Math.random() * 5,
    }))
    setParticles(newParticles)
  }, [particleCount, colors, maxSize, speed])

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export default ParticleField

