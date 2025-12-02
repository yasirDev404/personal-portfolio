import { motion } from 'framer-motion'

const TechBadge = ({ name, color = 'default', className = '' }) => {
  const colors = {
    default: 'from-dark-600 to-dark-500 border-dark-500 text-gray-300',
    primary: 'from-accent-primary/20 to-accent-secondary/20 border-accent-primary/30 text-accent-glow',
    green: 'from-neon-green/20 to-emerald-500/20 border-neon-green/30 text-neon-green',
    blue: 'from-neon-blue/20 to-blue-500/20 border-neon-blue/30 text-neon-blue',
    purple: 'from-neon-purple/20 to-violet-500/20 border-neon-purple/30 text-neon-purple',
    orange: 'from-neon-orange/20 to-amber-500/20 border-neon-orange/30 text-neon-orange',
    pink: 'from-neon-pink/20 to-rose-500/20 border-neon-pink/30 text-neon-pink',
  }

  return (
    <motion.span
      className={`
        inline-flex items-center px-3 py-1 text-xs font-medium rounded-full
        bg-gradient-to-r ${colors[color]} border
        transition-all duration-300 hover:scale-105
        ${className}
      `}
      whileHover={{ scale: 1.05 }}
    >
      {name}
    </motion.span>
  )
}

export default TechBadge

