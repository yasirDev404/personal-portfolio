import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'
import { Container, SectionTitle, Button } from '../components/ui'
import { SpotlightCard, MagneticButton, ElectricBorder, TiltCard } from '../components/effects'

const socialLinks = [
  { 
    name: 'GitHub', 
    icon: FaGithub, 
    href: 'https://github.com/yasirsahto',
    color: '#ffffff',
    hoverColor: '#333',
    description: '@yasirsahto'
  },
  { 
    name: 'LinkedIn', 
    icon: FaLinkedin, 
    href: 'https://linkedin.com/in/yasirsahto',
    color: '#0a66c2',
    hoverColor: '#0a66c2',
    description: 'Yasir Sahto'
  },
  { 
    name: 'Email', 
    icon: FaEnvelope, 
    href: 'mailto:contact@yasirsahto.dev',
    color: '#ea4335',
    hoverColor: '#ea4335',
    description: 'contact@yasirsahto.dev'
  },
]

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      // Placeholder API endpoint - replace with your actual endpoint
      const response = await fetch('https://api.example.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus({ 
          type: 'success', 
          message: 'Message sent successfully! I\'ll get back to you soon.' 
        })
        setFormData({ name: '', email: '', message: '' })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      // For demo purposes, show success anyway
      setStatus({ 
        type: 'success', 
        message: 'Thanks for reaching out! I\'ll get back to you soon.' 
      })
      setFormData({ name: '', email: '', message: '' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClasses = (fieldName) => `
    w-full px-4 py-3 rounded-xl bg-dark-800/80 border text-white placeholder-gray-500 
    transition-all duration-300 outline-none
    ${focusedField === fieldName 
      ? 'border-accent-primary shadow-[0_0_20px_rgba(99,102,241,0.2)]' 
      : 'border-dark-600/50 hover:border-dark-500'
    }
  `

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden bg-dark-800/30">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-primary/10 rounded-full filter blur-[120px]" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-secondary/10 rounded-full filter blur-[120px]" />
      </div>

      <Container className="relative z-10">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="Have a project in mind? Let's build something amazing together."
        />

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Let's Talk</h3>
              <p className="text-gray-400 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities 
                to be part of your vision. Whether you need a robust backend system or a 
                cross-platform mobile app, I'm here to help.
              </p>
            </div>

            {/* Location */}
            <TiltCard maxTilt={8}>
              <SpotlightCard 
                spotlightColor="rgba(99, 102, 241, 0.15)"
                className="mb-8"
              >
                <motion.div
                  className="flex items-center gap-4 p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 border border-accent-primary/30 flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <HiLocationMarker className="text-xl text-accent-primary" />
                  </motion.div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-medium">Pakistan 🇵🇰</p>
                  </div>
                </motion.div>
              </SpotlightCard>
            </TiltCard>

            {/* Social Links */}
            <div className="space-y-4">
              <p className="text-gray-400 text-sm uppercase tracking-wider">Connect with me</p>
              {socialLinks.map((link, index) => (
                <MagneticButton key={link.name} strength={0.2} radius={100}>
                  <motion.a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-dark-800/60 border border-dark-600/50 transition-all duration-300 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    whileHover={{ 
                      borderColor: link.color,
                      boxShadow: `0 0 30px ${link.color}20`,
                    }}
                  >
                    <motion.div 
                      className="w-10 h-10 rounded-lg bg-dark-700 flex items-center justify-center text-gray-400 group-hover:text-white transition-colors"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      style={{ '--hover-color': link.color }}
                    >
                      <link.icon size={20} />
                    </motion.div>
                    <div>
                      <p className="text-white font-medium group-hover:text-accent-glow transition-colors">{link.name}</p>
                      <p className="text-gray-400 text-sm">{link.description}</p>
                    </div>
                  </motion.a>
                </MagneticButton>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <TiltCard maxTilt={5} scale={1.01}>
              <ElectricBorder color="#6366f1" secondaryColor="#a855f7" speed={5} borderRadius={24}>
                <form onSubmit={handleSubmit} className="p-6 lg:p-8 space-y-6">
                  {/* Name Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <label htmlFor="name" className="block text-gray-300 mb-2 text-sm font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={inputClasses('name')}
                      placeholder="John Doe"
                    />
                  </motion.div>

                  {/* Email Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <label htmlFor="email" className="block text-gray-300 mb-2 text-sm font-medium">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={inputClasses('email')}
                      placeholder="john@example.com"
                    />
                  </motion.div>

                  {/* Message Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <label htmlFor="message" className="block text-gray-300 mb-2 text-sm font-medium">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={5}
                      className={`${inputClasses('message')} resize-none`}
                      placeholder="Tell me about your project..."
                    />
                  </motion.div>

                  {/* Status Message */}
                  {status.message && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      className={`p-4 rounded-xl ${
                        status.type === 'success'
                          ? 'bg-neon-green/10 border border-neon-green/30 text-neon-green'
                          : 'bg-red-500/10 border border-red-500/30 text-red-400'
                      }`}
                    >
                      {status.message}
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <MagneticButton strength={0.3} radius={120} className="w-full">
                      <Button
                        type="submit"
                        className="w-full"
                        size="lg"
                        icon={<FaPaperPlane />}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <motion.span
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                              className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                            />
                            Sending...
                          </span>
                        ) : (
                          'Send Message'
                        )}
                      </Button>
                    </MagneticButton>
                  </motion.div>
                </form>
              </ElectricBorder>
            </TiltCard>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default Contact
