import { motion } from 'framer-motion'
import { FaArrowRight, FaRocket, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiCode, HiDatabase, HiDeviceMobile } from 'react-icons/hi'
import { Container, Button } from '../components/ui'
import { 
  GlitchText, 
  MagneticButton, 
  ShapeBlur,
  SplitText,
  GradientText,
  ElectricBorder,
} from '../components/effects'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const floatingIcons = [
    { Icon: HiCode, color: 'text-neon-green', delay: 0 },
    { Icon: HiDatabase, color: 'text-neon-blue', delay: 0.2 },
    { Icon: HiDeviceMobile, color: 'text-neon-purple', delay: 0.4 },
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
    >
      {/* Fixed Background - Same across all screens */}
      <div className="fixed inset-0 bg-dark-900 -z-20">
        {/* Base gradient that spans full viewport */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />
        
        {/* ShapeBlur Background Effect */}
        <ShapeBlur 
          colors={['#6366f1', '#a855f7', '#ec4899', '#10b981']}
          blur={150}
          shapeSize={0.4}
          roundness={0.7}
        />
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid opacity-20" />
        
        {/* Vignette Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,10,15,0.8)_100%)]" />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingIcons.map(({ Icon, color, delay }, index) => (
          <motion.div
            key={index}
            className={`absolute ${color} opacity-10`}
            style={{
              top: `${20 + index * 25}%`,
              left: `${10 + index * 35}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 6,
              delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Icon size={80} />
          </motion.div>
        ))}
      </div>

      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <ElectricBorder 
              color="#10b981" 
              speed={1.5}
              chaos={0.8}
              thickness={2}
              className="inline-block rounded-full"
            >
              <span className="inline-flex items-center gap-2 px-5 py-2.5 text-sm text-gray-300 bg-dark-800 rounded-full">
                <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                Available for new projects
              </span>
            </ElectricBorder>
          </motion.div>

          {/* Main Heading with Glitch Effect */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-white">Hi, I'm </span>
            <GlitchText intensity="medium" color="#6366f1">
              <GradientText colors={['#6366f1', '#a855f7', '#ec4899', '#6366f1']} speed={4}>
                Yasir Sahto
              </GradientText>
            </GlitchText>
          </motion.h1>

          {/* Role with Split Text */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-3 mb-6"
          >
            <span className="text-xl md:text-2xl text-gray-300 font-medium">
              <SplitText type="word" staggerDelay={0.1}>
                Backend Engineer
              </SplitText>
            </span>
            <motion.span 
              className="text-accent-primary text-2xl"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              •
            </motion.span>
            <span className="text-xl md:text-2xl text-gray-300 font-medium">
              <SplitText type="word" staggerDelay={0.1} delay={0.5}>
                Mobile App Developer
              </SplitText>
            </span>
          </motion.div>

          {/* Bio */}
          <motion.div
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            <span className="text-accent-glow font-semibold">15 y/o</span> backend engineer • 
            shipping production systems fast. 
            <span className="text-neon-green"> Node.js</span> • 
            <span className="text-neon-blue"> Express</span> • 
            <span className="text-neon-purple"> MongoDB</span> • 
            <span className="text-neon-orange"> PostgreSQL</span> • 
            <span className="text-neon-pink"> Stripe</span> • JWT.
            Built <span className="text-white font-semibold">8+ real-world backends</span> used by actual businesses 🚀
          </motion.div>

          {/* Tech Stack Pills */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-2 mb-10"
          >
            {['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'React Native', 'Docker', 'AWS'].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-1.5 text-sm rounded-full bg-dark-700/60 border border-dark-500 text-gray-300 cursor-default"
                whileHover={{ 
                  scale: 1.1, 
                  borderColor: 'rgba(99, 102, 241, 0.7)',
                  boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)',
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons with Magnetic Effect */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <MagneticButton strength={0.4} radius={150}>
              <ElectricBorder color="#6366f1" speed={1.2} chaos={0.6} thickness={2} className="rounded-xl">
                <Button
                  href="#contact"
                  size="lg"
                  icon={<FaRocket />}
                  className="min-w-[180px]"
                >
                  Hire Me
                </Button>
              </ElectricBorder>
            </MagneticButton>
            <MagneticButton strength={0.4} radius={150}>
              <Button
                href="#projects"
                variant="secondary"
                size="lg"
                icon={<FaArrowRight />}
                className="min-w-[180px]"
              >
                View Projects
              </Button>
            </MagneticButton>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-6 mt-10"
          >
            {[
              { Icon: FaGithub, href: 'https://github.com/yasirsahto', label: 'GitHub' },
              { Icon: FaLinkedin, href: 'https://linkedin.com/in/yasirsahto', label: 'LinkedIn' },
            ].map(({ Icon, href, label }) => (
              <MagneticButton key={label} strength={0.5} radius={100}>
                <motion.a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-dark-700/60 border border-dark-500 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent-primary/50 transition-all duration-300"
                  whileHover={{ 
                    boxShadow: '0 0 30px rgba(99, 102, 241, 0.3)',
                  }}
                >
                  <Icon size={22} />
                </motion.a>
              </MagneticButton>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-gray-500 flex items-start justify-center p-2"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div
              className="w-1.5 h-3 bg-accent-primary rounded-full"
              animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

export default Hero
