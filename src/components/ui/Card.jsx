import { motion } from 'framer-motion'

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  delay = 0,
  ...props 
}) => {
  return (
    <motion.div
      className={`
        relative overflow-hidden rounded-2xl
        bg-dark-800/60 backdrop-blur-lg
        border border-dark-600/50
        transition-all duration-300
        ${hover ? 'hover:border-accent-primary/30 hover:shadow-lg hover:shadow-accent-primary/5' : ''}
        ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -5 } : {}}
      {...props}
    >
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-primary/10 via-transparent to-accent-secondary/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      {children}
    </motion.div>
  )
}

export default Card

