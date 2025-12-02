import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'
import { Container } from '../ui'

const socialLinks = [
  { name: 'GitHub', icon: FaGithub, href: 'https://github.com/yasirsahto' },
  { name: 'LinkedIn', icon: FaLinkedin, href: 'https://linkedin.com/in/yasirsahto' },
  { name: 'Email', icon: FaEnvelope, href: 'mailto:contact@yasirsahto.dev' },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-800/50 border-t border-dark-600/50 py-8">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <a href="#home" className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center">
                <span className="text-white font-bold text-sm">Y</span>
              </div>
              <span className="font-bold text-lg">
                <span className="text-white">Yasir</span>
                <span className="gradient-text">.dev</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm">
              © {currentYear} Yasir Sahto. All rights reserved.
            </p>
          </motion.div>

          {/* Made With Love */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-sm flex items-center gap-1"
          >
            Made with <FaHeart className="text-red-500 animate-pulse" /> in Pakistan 🇵🇰
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent-primary transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer

