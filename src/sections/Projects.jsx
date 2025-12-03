import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { Container, SectionTitle, Card, Button } from '../components/ui'

const projects = [
  {
    title: 'Crypto Trading Platform',
    description: 'Hyper-complex real-time trading backend with admin/user separation, wallets, transactions, trade flows, and high-security authentication. Infrastructure built for global usage.',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'JWT', 'WebSockets'],
    github: 'https://github.com/yasirsahto',
    demo: '#',
    color: 'border-neon-green/30',
    status: 'Production',
    locations: ['Global'],
  },
  {
    title: 'Multi-Vendor Spray Paint Marketplace',
    description: 'Large-scale SaaS backend with multi-vendor quoting system, real-time lead distribution, Stripe vendor payments, location-based filtering, and admin dashboards.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Stripe', 'Redis', 'JWT'],
    github: 'https://github.com/yasirsahto',
    demo: '#',
    color: 'border-neon-orange/30',
    status: 'Production',
    locations: ['Australia', 'UK'],
  },
  {
    title: 'AI Chatbot Backend (FarmBotJoke)',
    description: 'Custom AI backend powering ChatGPT-style interface with Claude + ChatGPT integration, session handling, memory, streaming responses, and multiple model fallbacks.',
    tech: ['Node.js', 'Express', 'Claude API', 'ChatGPT', 'WebSockets', 'MongoDB'],
    github: 'https://github.com/yasirsahto',
    demo: '#',
    color: 'border-neon-blue/30',
    status: 'Production',
    locations: ['Global'],
  },
  {
    title: 'UK Multi-Role Food Delivery Platform',
    description: 'Full backend powering chefs, admins, users, and delivery riders with ordering, menus, payouts, and real-time tracking.',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'Stripe', 'Redis', 'WebSockets'],
    github: 'https://github.com/yasirsahto',
    demo: '#',
    color: 'border-neon-purple/30',
    status: 'Production',
    locations: ['UK'],
  },
  {
    title: 'Enterprise Inventory Management System',
    description: 'Large-scale backend for global enterprise with multi-location inventory, role-based dashboards, procurement, stock levels, and massive scalability.',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
    github: 'https://github.com/yasirsahto',
    demo: '#',
    color: 'border-neon-pink/30',
    status: 'Production',
    locations: ['Russia', 'Siberia', 'Ukraine'],
  },
  {
    title: 'Subscription/Loan Processing Platform',
    description: 'Fully functional loan subscription backend with EMI calculations, repayment cycles, user onboarding, admin approval flows, and transaction tracking.',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'Stripe', 'Cron Jobs'],
    github: 'https://github.com/yasirsahto',
    demo: '#',
    color: 'border-accent-primary/30',
    status: 'Production',
    locations: ['Global'],
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-dark-800/30">
      <Container>
        <SectionTitle 
          title="My Projects" 
          subtitle="Real-world backends and applications used by actual businesses"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className={`p-6 h-full hover:${project.color} transition-colors`}>
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl font-bold text-dark-600">0{index + 1}</span>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-dark-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                    >
                      <FaGithub size={18} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-dark-700 flex items-center justify-center text-gray-400 hover:text-accent-primary transition-colors"
                    >
                      <FaExternalLinkAlt size={16} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-dark-700/60 border border-dark-500 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Button
            href="https://github.com/yasirsahto"
            target="_blank"
            variant="outline"
            icon={<FaGithub />}
            iconPosition="left"
          >
            View More on GitHub
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}

export default Projects
