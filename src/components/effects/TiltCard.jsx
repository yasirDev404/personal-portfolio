import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

const TiltCard = ({ 
  children, 
  className = '',
  maxTilt = 15,
  scale = 1.02,
  perspective = 1000,
  glareOpacity = 0.1,
  ...props 
}) => {
  const ref = useRef(null)
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 })
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 })

  const handleMouseMove = (e) => {
    if (!ref.current) return

    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    
    const x = (clientX - left) / width
    const y = (clientY - top) / height
    
    const rotateX = (0.5 - y) * maxTilt * 2
    const rotateY = (x - 0.5) * maxTilt * 2
    
    setTilt({ rotateX, rotateY })
    setGlarePosition({ x: x * 100, y: y * 100 })
  }

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: tilt.rotateX,
        rotateY: tilt.rotateY,
        scale: tilt.rotateX !== 0 || tilt.rotateY !== 0 ? scale : 1,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      style={{ perspective: `${perspective}px`, transformStyle: 'preserve-3d' }}
      className={`relative ${className}`}
      {...props}
    >
      {children}
      
      {/* Glare Effect */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, ${glareOpacity}), transparent 50%)`,
        }}
      />
    </motion.div>
  )
}

export default TiltCard

