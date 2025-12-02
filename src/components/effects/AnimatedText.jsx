import { motion } from 'framer-motion'

// Blur Reveal Text Effect
export const BlurRevealText = ({ 
  children, 
  className = '',
  delay = 0,
  duration = 0.8,
}) => {
  return (
    <motion.span
      initial={{ filter: 'blur(10px)', opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration, delay }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.span>
  )
}

// Split Text Animation (letter by letter)
export const SplitText = ({ 
  children, 
  className = '',
  delay = 0,
  staggerDelay = 0.03,
  type = 'letter', // 'letter' or 'word'
}) => {
  const text = typeof children === 'string' ? children : ''
  const items = type === 'letter' ? text.split('') : text.split(' ')

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  }

  const child = {
    hidden: { 
      opacity: 0, 
      y: 20,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  }

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`inline-block ${className}`}
      style={{ perspective: '1000px' }}
    >
      {items.map((item, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
          style={{ transformOrigin: 'bottom' }}
        >
          {item}
          {type === 'word' && index < items.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </motion.span>
  )
}

// Gradient Flow Text
export const GradientText = ({ 
  children, 
  className = '',
  colors = ['#6366f1', '#a855f7', '#ec4899', '#6366f1'],
  speed = 3,
}) => {
  return (
    <motion.span
      className={`inline-block bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage: `linear-gradient(90deg, ${colors.join(', ')})`,
        backgroundSize: '200% 100%',
      }}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {children}
    </motion.span>
  )
}

// Typewriter Effect
export const TypewriterText = ({ 
  text, 
  className = '',
  speed = 0.05,
  delay = 0,
  cursor = true,
}) => {
  const characters = text.split('')

  return (
    <span className={`inline-block ${className}`}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.01,
            delay: delay + index * speed,
          }}
        >
          {char}
        </motion.span>
      ))}
      {cursor && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="text-accent-primary"
        >
          |
        </motion.span>
      )}
    </span>
  )
}

// Scramble Text Effect
export const ScrambleText = ({ 
  children, 
  className = '',
  scrambleSpeed = 30,
}) => {
  const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?'
  const text = typeof children === 'string' ? children : ''

  return (
    <motion.span
      className={`inline-block ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.02 }}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  )
}

// Wave Text
export const WaveText = ({ 
  children, 
  className = '',
  amplitude = 10,
  frequency = 0.5,
}) => {
  const text = typeof children === 'string' ? children : ''

  return (
    <span className={`inline-block ${className}`}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          animate={{
            y: [0, -amplitude, 0],
          }}
          transition={{
            duration: frequency,
            repeat: Infinity,
            delay: index * 0.05,
            ease: 'easeInOut',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  )
}

