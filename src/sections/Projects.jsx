import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { Container, SectionTitle, Button } from '../components/ui'
import { TiltedCard, ElectricBorder, MagneticButton } from '../components/effects'

const projects = [
  {
    title: 'Multi-Vendor Spray Paint Marketplace',
    description: 'A complete e-commerce backend supporting multiple vendors, product management, order processing, and vendor payouts. Handles complex multi-tenancy with role-based access.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Stripe', 'JWT'],
    github: 'https://github.com/yasirsahto',
    demo: '#',
    color: '#10b981',
    gradient: 'from-emerald-500/20 to-green-600/20',
  },
  {
    title: 'Fast Food Restaurant Backend',
    description: 'RESTful API for a restaurant chain with menu management, real-time order tracking, table reservations, and integrated payment processing with Stripe.',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'Stripe', 'Redis'],
    github: 'https://github.com/yasirsahto',
    demo: '#',
    color: '#f97316',
    gradient: 'from-orange-500/20 to-amber-600/20',
  },
  {
    title: 'Secure Admin/Vendor Auth System',
    description: 'Enterprise-grade authentication system with role-based access control, refresh tokens, password reset flows, and audit logging for security compliance.',
    tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'bcrypt'],
    github: 'https://github.com/yasirsahto',
    demo: '#',
    color: '#3b82f6',
    gradient: 'from-blue-500/20 to-indigo-600/20',
  },
  {
    title: 'Stripe Billing Integrations',
    description: 'Complete payment infrastructure with subscription management, usage-based billing, invoice generation, and webhook handling for SaaS applications.',
    tech: ['Node.js', 'Stripe', 'PostgreSQL', 'Webhooks', 'Docker'],
    github: 'https://github.com/yasirsahto',
    demo: '#',
    color: '#8b5cf6',
    gradient: 'from-violet-500/20 to-purple-600/20',
  },
  {
    title: 'Mobile App - React Native',
    description: 'Cross-platform mobile application built with React Native featuring Redux state management, API integration, offline support with Async Storage, and smooth animations.',
    tech: ['React Native', 'Redux', 'Axios', 'React Navigation', 'Async Storage'],
    github: 'https://github.com/yasirsahto',
    demo: '#',
    color: '#ec4899',
    gradient: 'from-pink-500/20 to-rose-600/20',
  },
  {
    title: 'SaaS Starter Architecture',
    description: 'Production-ready boilerplate for SaaS applications with multi-tenancy, team management, subscription billing, and scalable microservices architecture.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Docker', 'AWS', 'PM2'],
    github: 'https://github.com/yasirsahto',
    demo: '#',
    color: '#6366f1',
    gradient: 'from-indigo-500/20 to-violet-600/20',
  },
]

const ProjectCard = ({ project, index }) => {
  return (
    <TiltedCard
      containerHeight="100%"
      containerWidth="100%"
      rotateAmplitude={8}
      scaleOnHover={1.02}
      showTooltip={false}
      className="h-full"
    >
      <div className={`h-full p-6 rounded-2xl bg-gradient-to-br ${project.gradient} backdrop-blur-sm border border-white/10`}>
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <motion.span 
              className="text-5xl font-bold opacity-20"
              style={{ color: project.color }}
            >
              0{index + 1}
            </motion.span>
            <div className="flex gap-2">
              <MagneticButton strength={0.3} radius={40}>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-dark-700/80 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaGithub size={18} />
                </motion.a>
              </MagneticButton>
              <MagneticButton strength={0.3} radius={40}>
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-dark-700/80 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaExternalLinkAlt size={16} />
                </motion.a>
              </MagneticButton>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium rounded-full bg-dark-700/60 border border-white/10 text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </TiltedCard>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background - consistent with rest of site */}
      <div className="absolute inset-0 bg-dark-800/50" />

      <Container className="relative z-10">
        <SectionTitle 
          title="My Projects" 
          subtitle="Real-world backends and applications used by actual businesses. Scroll to explore!"
        />

        {/* Scrollable Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="h-[350px]"
            >
              <ElectricBorder 
                color={project.color} 
                speed={1.5}
                chaos={0.5}
                thickness={2}
                className="h-full rounded-2xl"
              >
                <ProjectCard project={project} index={index} />
              </ElectricBorder>
            </motion.div>
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <MagneticButton strength={0.3} radius={120}>
            <ElectricBorder color="#6366f1" speed={1.2} chaos={0.4} thickness={2} className="rounded-xl inline-block">
              <Button
                href="https://github.com/yasirsahto"
                target="_blank"
                variant="secondary"
                icon={<FaGithub />}
                iconPosition="left"
              >
                View More on GitHub
              </Button>
            </ElectricBorder>
          </MagneticButton>
        </motion.div>
      </Container>
    </section>
  )
}

export default Projects
