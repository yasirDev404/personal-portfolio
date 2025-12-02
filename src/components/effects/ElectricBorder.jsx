import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const ElectricBorder = ({ 
  children, 
  className = '', 
  color = '#6366f1',
  secondaryColor = '#a855f7',
  speed = 3,
  borderWidth = 2,
  glowIntensity = 20,
  borderRadius = 16,
}) => {
  return (
    <div 
      className={`relative group ${className}`}
      style={{ borderRadius: `${borderRadius}px` }}
    >
      {/* Animated Electric Border */}
      <div 
        className="absolute -inset-[1px] rounded-[inherit] overflow-hidden"
        style={{ padding: `${borderWidth}px` }}
      >
        {/* Rotating Gradient */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `conic-gradient(from 0deg, ${color}, ${secondaryColor}, #ec4899, #f97316, #10b981, ${color})`,
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: speed,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        
        {/* Electric Sparks */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: color,
                boxShadow: `0 0 ${glowIntensity}px ${color}, 0 0 ${glowIntensity * 2}px ${color}`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Inner Content Container */}
      <div 
        className="relative bg-dark-800 rounded-[inherit] z-10"
        style={{ borderRadius: `${borderRadius - borderWidth}px` }}
      >
        {children}
      </div>

      {/* Glow Effect */}
      <div 
        className="absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: `0 0 ${glowIntensity}px ${color}, 0 0 ${glowIntensity * 2}px ${secondaryColor}`,
        }}
      />
    </div>
  )
}

export default ElectricBorder

