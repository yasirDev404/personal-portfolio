import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { Container, SectionTitle, TechBadge, Button } from '../components/ui'
import { SpotlightCard, ElectricBorder, TiltCard, MagneticButton } from '../components/effects'

const projects = [
  {
    title: 'Multi-Vendor Spray Paint Marketplace',
    description: 'A complete e-commerce backend supporting multiple vendors, product management, order processing, and vendor payouts. Handles complex multi-tenancy with role-based access.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Stripe', 'JWT'],
    github: 'https://github.com/yasirsahto',
    demo: '#',
    color: '#10b981',
    featured: true,
  },
  {
    title: 'Fast Food Restaurant Backend',
    description: 'RESTful API for a restaurant chain with menu management, real-time order tracking, table reservations, and integrated payment processing with Stripe.',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'Stripe', 'Redis'],
    github: 'https://github.com/yasirsahto',
    demo: '#',
    color: '#f97316',
    featured: false,
  },
  {
    title: 'Secure Admin/Vendor Auth System',
    description: 'Enterprise-grade authentication system with role-based access control, refresh tokens, password reset flows, and audit logging for security compliance.',
    tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'bcrypt'],
    github: 'https://github.com/yasirsahto',
    demo: '#',
    color: '#3b82f6',
    featured: true,
  },
  {
    title: 'Stripe Billing Integrations',
    description: 'Complete payment infrastructure with subscription management, usage-based billing, invoice generation, and webhook handling for SaaS applications.',
    tech: ['Node.js', 'Stripe', 'PostgreSQL', 'Webhooks', 'Docker'],
    github: 'https://github.com/yasirsahto',
    demo: '#',
    color: '#8b5cf6',
    featured: false,
  },
  {
    title: 'Mobile App - React Native',
    description: 'Cross-platform mobile application built with React Native featuring Redux state management, API integration, offline support with Async Storage, and smooth animations.',
    tech: ['React Native', 'Redux', 'Axios', 'React Navigation', 'Async Storage'],
    github: 'https://github.com/yasirsahto',
    demo: '#',
    color: '#ec4899',
    featured: true,
  },
  {
    title: 'SaaS Starter Architecture',
    description: 'Production-ready boilerplate for SaaS applications with multi-tenancy, team management, subscription billing, and scalable microservices architecture.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Docker', 'AWS', 'PM2'],
    github: 'https://github.com/yasirsahto',
    demo: '#',
    color: '#6366f1',
    featured: false,
  },
]

const ProjectCard = ({ project, index }) => {
  const CardWrapper = project.featured ? ElectricBorder : SpotlightCard

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <TiltCard maxTilt={10} scale={1.02} className="h-full group">
        {project.featured ? (
          <ElectricBorder 
            color={project.color} 
            secondaryColor="#a855f7"
            speed={5}
            borderRadius={20}
            className="h-full"
          >
            <ProjectCardContent project={project} index={index} />
          </ElectricBorder>
        ) : (
          <SpotlightCard 
            spotlightColor={`${project.color}20`}
            borderColor={`${project.color}40`}
            className="h-full"
          >
            <ProjectCardContent project={project} index={index} />
          </SpotlightCard>
        )}
      </TiltCard>
    </motion.div>
  )
}

const ProjectCardContent = ({ project, index }) => (
  <div className="p-6 h-full flex flex-col">
    {/* Project Number & Featured Badge */}
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <span 
          className="text-4xl font-bold opacity-20 group-hover:opacity-40 transition-opacity"
          style={{ color: project.color }}
        >
          0{index + 1}
        </span>
        {project.featured && (
          <motion.span 
            className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary text-white uppercase tracking-wider"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Featured
          </motion.span>
        )}
      </div>
      <div className="flex gap-3">
        <MagneticButton strength={0.3} radius={50}>
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-dark-700/80 flex items-center justify-center text-gray-400 hover:text-white hover:bg-dark-600 transition-all duration-300"
            whileHover={{ y: -2 }}
          >
            <FaGithub size={18} />
          </motion.a>
        </MagneticButton>
        <MagneticButton strength={0.3} radius={50}>
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-dark-700/80 flex items-center justify-center text-gray-400 hover:text-accent-primary transition-all duration-300"
            whileHover={{ y: -2 }}
            style={{ '--hover-color': project.color }}
          >
            <FaExternalLinkAlt size={16} />
          </motion.a>
        </MagneticButton>
      </div>
    </div>

    {/* Title */}
    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-glow transition-colors">
      {project.title}
    </h3>

    {/* Description */}
    <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
      {project.description}
    </p>

    {/* Tech Stack */}
    <div className="flex flex-wrap gap-2 mt-auto">
      {project.tech.map((tech) => (
        <motion.span
          key={tech}
          className="px-3 py-1 text-xs font-medium rounded-full bg-dark-700/60 border border-dark-500 text-gray-300"
          whileHover={{ 
            scale: 1.05, 
            borderColor: project.color,
            color: '#fff',
          }}
        >
          {tech}
        </motion.span>
      ))}
    </div>
  </div>
)

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden bg-dark-800/30">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-primary/5 rounded-full filter blur-[120px]" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-secondary/5 rounded-full filter blur-[120px]" />
      </div>

      <Container className="relative z-10">
        <SectionTitle 
          title="My Projects" 
          subtitle="Real-world backends and applications used by actual businesses"
        />

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
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
            <Button
              href="https://github.com/yasirsahto"
              target="_blank"
              variant="outline"
              icon={<FaGithub />}
              iconPosition="left"
            >
              View More on GitHub
            </Button>
          </MagneticButton>
        </motion.div>
      </Container>
    </section>
  )
}

export default Projects
