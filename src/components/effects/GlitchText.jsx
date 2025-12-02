import { motion } from 'framer-motion'
import './GlitchText.css'

const GlitchText = ({ 
  children, 
  className = '',
  as: Component = 'span',
  intensity = 'medium',
  color = '#6366f1',
}) => {
  const intensityValues = {
    low: { clipDuration: 3, offset: 2 },
    medium: { clipDuration: 2, offset: 4 },
    high: { clipDuration: 1, offset: 6 },
  }

  const { offset } = intensityValues[intensity]

  return (
    <span className={`glitch-wrapper ${className}`}>
      <span 
        className="glitch-text" 
        data-text={typeof children === 'string' ? children : ''}
        style={{ 
          '--glitch-color-1': color,
          '--glitch-color-2': '#ec4899',
          '--glitch-offset': `${offset}px`,
        }}
      >
        {children}
      </span>
    </span>
  )
}

export default GlitchText

