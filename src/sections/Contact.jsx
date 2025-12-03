import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane, FaCalendarAlt, FaVideo } from 'react-icons/fa'
import { HiLocationMarker, HiClock } from 'react-icons/hi'
import { Container, SectionTitle, Card, Button } from '../components/ui'

const socialLinks = [
  { name: 'GitHub', icon: FaGithub, href: 'https://github.com/yasirDev404', description: '@yasirDev404' },
  { name: 'LinkedIn', icon: FaLinkedin, href: 'https://www.linkedin.com/in/yasir-sahto-507008364/', description: 'Yasir' },
  { name: 'Email', icon: FaEnvelope, href: 'mailto:yasirsahto193@gmail.com', description: 'yasirsahto193@gmail.com' },
]

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Send email using mailto with form data
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`)
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
      window.location.href = `mailto:dexadoors@gmail.com?subject=${subject}&body=${body}`
      
      setStatus({ type: 'success', message: 'Opening your email client...' })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-dark-800/30">
      <Container>
        <SectionTitle 
          title="Get In Touch" 
          subtitle="Have a project in mind? Let's build something amazing together."
        />

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* Info + Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Let's Talk</h3>
            <p className="text-gray-400 mb-8">
              Whether you need a robust backend or a cross-platform mobile app, I'm here to help.
            </p>

            {/* Location */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-dark-800/60 border border-dark-600/50 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent-primary/20 flex items-center justify-center">
                <HiLocationMarker className="text-accent-primary" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-white font-medium">Islamabad, Sindh, Pakistan 🇵🇰</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-dark-800/60 border border-dark-600/50 hover:border-accent-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-dark-700 flex items-center justify-center text-gray-400">
                    <link.icon size={20} />
                  </div>
                  <div>
                    <p className="text-white font-medium">{link.name}</p>
                    <p className="text-gray-400 text-sm">{link.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-2"
          >
            <Card className="p-6">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-gray-300 mb-2 text-sm">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-dark-700 border border-dark-600 text-white placeholder-gray-500 focus:border-accent-primary/50 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 text-sm">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-dark-700 border border-dark-600 text-white placeholder-gray-500 focus:border-accent-primary/50 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 text-sm">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-dark-700 border border-dark-600 text-white placeholder-gray-500 focus:border-accent-primary/50 focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {status.message && (
                  <div className={`p-4 rounded-xl ${
                    status.type === 'success' 
                      ? 'bg-neon-green/10 border border-neon-green/30 text-neon-green' 
                      : 'bg-red-500/10 border border-red-500/30 text-red-400'
                  }`}>
                    {status.message}
                  </div>
                )}

                <Button type="submit" className="w-full" size="lg" icon={<FaPaperPlane />} disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>

        {/* Book A Call Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Or Book A Call With Me
            </h3>
            <p className="text-gray-400">
              Prefer to talk? Schedule a 30-minute call to discuss your project in detail
            </p>
          </div>

          <Card className="p-8 bg-gradient-to-br from-dark-800/80 to-dark-900/80 border-accent-primary/20">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Call Benefits */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-white mb-4">What We'll Cover:</h4>
                <div className="space-y-4">
                  {[
                    { icon: FaVideo, text: 'Your project requirements & goals' },
                    { icon: HiClock, text: 'Timeline and delivery estimates' },
                    { icon: FaPaperPlane, text: 'Technical approach & stack' },
                    { icon: FaCalendarAlt, text: 'Pricing & next steps' },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-10 h-10 rounded-lg bg-accent-primary/20 border border-accent-primary/30 flex items-center justify-center flex-shrink-0">
                        <item.icon className="text-accent-primary" size={18} />
                      </div>
                      <span className="text-gray-300">{item.text}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-4 border-t border-dark-600">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <HiClock className="text-accent-primary" />
                    <span>30 minutes • Free consultation</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col justify-center items-center md:items-start space-y-6">
                <div className="text-center md:text-left">
                  <p className="text-gray-300 mb-2">Available for calls:</p>
                  <p className="text-white font-semibold text-lg">Monday - Saturday</p>
                  <p className="text-gray-400 text-sm">9:00 AM - 9:00 PM PKT</p>
                </div>

                <Button
                  onClick={() => window.open('https://calendly.com/yasirsaheto11/30min', '_blank')}
                  size="lg"
                  icon={<FaCalendarAlt />}
                  className="w-full md:w-auto min-w-[240px] bg-gradient-to-r from-accent-primary to-accent-secondary hover:shadow-lg hover:shadow-accent-primary/25"
                >
                  Schedule A Call Now
                </Button>

                <p className="text-xs text-gray-500 text-center md:text-left">
                  You'll be redirected to Calendly to pick a convenient time
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </Container>
    </section>
  )
}

export default Contact