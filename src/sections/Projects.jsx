import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { Container, SectionTitle, Card, Button } from '../components/ui'

const projects = [
  {
    title: 'Deepsurf — Crypto Analytics Platform',
    description: 'A production-grade cryptocurrency analytics platform delivering real-time market data, AI-powered analysis tools, and subscription-based client management. Integrated CoinMarketCap & CoinGecko APIs, JWT authentication, Stripe & NowPayments, caching strategies, and AI analytics. Live and serving real users.',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'JWT', 'Stripe', 'AI Analytics'],
    demo: 'https://www.deepsurf.io/',
    color: 'border-neon-green/30',
    status: 'Production',
    locations: ['Global'],
  },
  {
    title: 'LichtLettersXXL — Admin, Vendor & User Platform',
    description: 'A large-scale multi-role web platform with separate admin, vendor, and user sides. Features an integrated AI chatbot, role-based dashboards, vendor management, and full order flow. Built for a Dutch lighting letters rental business.',
    tech: ['Node.js', 'Express', 'MongoDB', 'AI Chatbot', 'JWT', 'REST API'],
    demo: 'https://xxllichtletters.nl/',
    color: 'border-neon-orange/30',
    status: 'Production',
    locations: ['Netherlands'],
  },
  {
    title: 'Hoppaverhuur — Rental Platform',
    description: 'A complete rental management platform with admin and user sides. Handles bookings, inventory, user management, and admin controls — built for a Dutch rental business and deployed live.',
    tech: ['Node.js', 'Express', 'MongoDB', 'REST API', 'JWT', 'Admin Dashboard'],
    demo: 'https://www.hoppaverhuur.nl/',
    color: 'border-neon-blue/30',
    status: 'Production',
    locations: ['Netherlands'],
  },
  {
    title: "Zanny's Food — UK Food Delivery App",
    description: 'A full-scale food delivery ecosystem based in London, UK. Built native mobile applications for both Android and iOS with separate flows for admin, driver, vendor, and user. Handles menus, live order tracking, payouts, and real-time delivery management.',
    tech: ['React Native', 'Node.js', 'Express', 'PostgreSQL', 'Stripe', 'WebSockets', 'Redux'],
    demo: 'https://www.zannysfood.co.uk/',
    color: 'border-neon-purple/30',
    status: 'Production',
    locations: ['UK'],
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 relative">
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
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-lg bg-dark-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                      >
                        <FaGithub size={18} />
                      </a>
                    )}
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
