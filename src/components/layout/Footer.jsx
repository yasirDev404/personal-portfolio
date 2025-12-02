import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'
import { Container } from '../ui'

const socialLinks = [
  { name: 'GitHub', icon: FaGithub, href: 'https://github.com/yasirDev404' },
  { name: 'LinkedIn', icon: FaLinkedin, href: 'https://www.linkedin.com/in/yasir-sahto-507008364/' },
  { name: 'Email', icon: FaEnvelope, href: 'mailto:yasirsahto193@gmail.com' },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-800/50 border-t border-dark-600/50 py-8">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
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
              © {currentYear} Yasir. All rights reserved.
            </p>
          </div>

          {/* Made With Love */}
          <p className="text-gray-400 text-sm flex items-center gap-1">
            Made with <FaHeart className="text-red-500" /> in Pakistan 🇵🇰
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent-primary transition-colors"
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
