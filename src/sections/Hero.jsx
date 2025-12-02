import { motion } from 'framer-motion'
import { FaArrowRight, FaRocket, FaGithub, FaLinkedin } from 'react-icons/fa'
import { Container, Button } from '../components/ui'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24"
    >
      <Container className="relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 text-sm text-gray-300 bg-dark-800/80 border border-dark-600 rounded-full">
              <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
              Available for new projects
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-white">Hi, I'm </span>
            <span className="gradient-text">Yasir Sahto</span>
          </motion.h1>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-6"
          >
            <span className="text-xl md:text-2xl text-gray-300 font-medium">
              Backend Engineer
            </span>
            <span className="text-accent-primary text-2xl">•</span>
            <span className="text-xl md:text-2xl text-gray-300 font-medium">
              Mobile App Developer
            </span>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
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
          </motion.p>

          {/* Tech Stack Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-2 mb-10"
          >
            {['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'React Native', 'Docker', 'AWS'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 text-sm rounded-full bg-dark-700/60 border border-dark-500 text-gray-300 hover:border-accent-primary/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              href="#contact"
              size="lg"
              icon={<FaRocket />}
              className="min-w-[180px]"
            >
              Hire Me
            </Button>
            <Button
              href="#projects"
              variant="secondary"
              size="lg"
              icon={<FaArrowRight />}
              className="min-w-[180px]"
            >
              View Projects
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center justify-center gap-6 mt-10"
          >
            {[
              { Icon: FaGithub, href: 'https://github.com/yasirsahto', label: 'GitHub' },
              { Icon: FaLinkedin, href: 'https://linkedin.com/in/yasirsahto', label: 'LinkedIn' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-dark-700/60 border border-dark-500 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent-primary/50 transition-all duration-300"
              >
                <Icon size={22} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-gray-500 flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-3 bg-accent-primary rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default Hero
