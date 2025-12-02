import { motion } from 'framer-motion'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  onClick, 
  className = '',
  icon,
  iconPosition = 'right',
  ...props 
}) => {
  const baseStyles = `
    relative inline-flex items-center justify-center gap-2
    font-semibold rounded-xl transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-900
  `

  const variants = {
    primary: `
      bg-gradient-to-r from-accent-primary to-accent-secondary
      hover:from-accent-secondary hover:to-accent-tertiary
      text-white shadow-lg hover:shadow-accent-primary/25
      focus:ring-accent-primary
    `,
    secondary: `
      bg-dark-700 border border-dark-500 text-white
      hover:bg-dark-600 hover:border-accent-primary/50
      focus:ring-dark-500
    `,
    outline: `
      bg-transparent border-2 border-accent-primary text-accent-primary
      hover:bg-accent-primary hover:text-white
      focus:ring-accent-primary
    `,
    ghost: `
      bg-transparent text-gray-300 hover:text-white
      hover:bg-dark-700
      focus:ring-dark-500
    `,
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="text-lg">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="text-lg">{icon}</span>}
    </>
  )

  const MotionComponent = href ? motion.a : motion.button

  return (
    <MotionComponent
      href={href}
      onClick={onClick}
      className={combinedStyles}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {content}
    </MotionComponent>
  )
}

export default Button

