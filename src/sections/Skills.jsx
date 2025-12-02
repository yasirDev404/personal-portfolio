import { motion } from 'framer-motion'
import { 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiPostgresql,
  SiJsonwebtokens,
  SiStripe,
  SiDocker,
  SiAmazonaws,
  SiPm2,
  SiGit,
  SiJest,
  SiReact,
  SiRedux,
} from 'react-icons/si'
import { HiDeviceMobile, HiServer, HiCode } from 'react-icons/hi'
import { FaRoute, FaSave } from 'react-icons/fa'
import { Container, SectionTitle } from '../components/ui'
import { SpotlightCard, TiltCard, ElectricBorder } from '../components/effects'

const backendSkills = [
  { name: 'Node.js', icon: SiNodedotjs, color: '#68a063', level: 95 },
  { name: 'Express', icon: SiExpress, color: '#ffffff', level: 92 },
  { name: 'MongoDB', icon: SiMongodb, color: '#47a248', level: 90 },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791', level: 85 },
  { name: 'JWT', icon: SiJsonwebtokens, color: '#d63aff', level: 90 },
  { name: 'Stripe', icon: SiStripe, color: '#635bff', level: 88 },
  { name: 'Docker', icon: SiDocker, color: '#2496ed', level: 80 },
  { name: 'AWS', icon: SiAmazonaws, color: '#ff9900', level: 75 },
  { name: 'PM2', icon: SiPm2, color: '#2b037a', level: 85 },
  { name: 'Git', icon: SiGit, color: '#f05032', level: 90 },
  { name: 'Jest', icon: SiJest, color: '#c21325', level: 78 },
]

const mobileSkills = [
  { name: 'React Native', icon: SiReact, color: '#61dafb', level: 82 },
  { name: 'Redux', icon: SiRedux, color: '#764abc', level: 85 },
  { name: 'Redux Toolkit', icon: SiRedux, color: '#764abc', level: 83 },
  { name: 'Axios', icon: HiCode, color: '#5a29e4', level: 90 },
  { name: 'React Navigation', icon: FaRoute, color: '#6b52ae', level: 80 },
  { name: 'Async Storage', icon: FaSave, color: '#10b981', level: 85 },
]

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group"
    >
      <motion.div 
        className="relative p-4 rounded-xl bg-dark-800/60 border border-dark-600/50 transition-all duration-300 overflow-hidden"
        whileHover={{ 
          borderColor: skill.color,
          boxShadow: `0 0 20px ${skill.color}20`,
        }}
      >
        {/* Animated Background on Hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${skill.color}10, transparent)`,
          }}
        />

        <div className="relative flex items-center gap-4">
          {/* Icon */}
          <motion.div
            className="w-12 h-12 rounded-xl bg-dark-700 flex items-center justify-center"
            style={{ color: skill.color }}
            whileHover={{ 
              scale: 1.15, 
              rotate: 10,
              boxShadow: `0 0 25px ${skill.color}50`,
            }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <skill.icon size={24} />
          </motion.div>

          {/* Name & Progress */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <span className="text-white font-medium group-hover:text-accent-glow transition-colors">
                {skill.name}
              </span>
              <motion.span 
                className="text-xs font-semibold"
                style={{ color: skill.color }}
                initial={{ opacity: 0.5 }}
                whileHover={{ opacity: 1, scale: 1.1 }}
              >
                {skill.level}%
              </motion.span>
            </div>
            
            {/* Animated Progress Bar */}
            <div className="h-2 bg-dark-600 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full relative overflow-hidden"
                style={{ backgroundColor: skill.color }}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: index * 0.05 + 0.3, ease: 'easeOut' }}
              >
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                  }}
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.1 }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-green/5 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple/5 rounded-full filter blur-[120px]" />
      </div>

      <Container className="relative z-10">
        <SectionTitle 
          title="Skills & Expertise" 
          subtitle="Technologies I use to build powerful backend systems and mobile applications"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Backend Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <TiltCard maxTilt={5} scale={1.01}>
              <ElectricBorder color="#10b981" secondaryColor="#22c55e" speed={6} borderRadius={24}>
                <div className="p-6 lg:p-8">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <motion.div 
                      className="w-14 h-14 rounded-2xl bg-gradient-to-br from-neon-green/20 to-emerald-500/20 border border-neon-green/30 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <HiServer className="text-2xl text-neon-green" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Backend Development</h3>
                      <p className="text-gray-400 text-sm">Server-side technologies & tools</p>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid gap-3">
                    {backendSkills.map((skill, index) => (
                      <SkillCard key={skill.name} skill={skill} index={index} />
                    ))}
                  </div>
                </div>
              </ElectricBorder>
            </TiltCard>
          </motion.div>

          {/* Mobile Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <TiltCard maxTilt={5} scale={1.01}>
              <ElectricBorder color="#8b5cf6" secondaryColor="#a855f7" speed={6} borderRadius={24}>
                <div className="p-6 lg:p-8">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <motion.div 
                      className="w-14 h-14 rounded-2xl bg-gradient-to-br from-neon-purple/20 to-violet-500/20 border border-neon-purple/30 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <HiDeviceMobile className="text-2xl text-neon-purple" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Mobile Development</h3>
                      <p className="text-gray-400 text-sm">React Native & ecosystem</p>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid gap-3">
                    {mobileSkills.map((skill, index) => (
                      <SkillCard key={skill.name} skill={skill} index={index} />
                    ))}
                  </div>

                  {/* Additional Info Card */}
                  <motion.div
                    className="mt-6 p-4 rounded-xl bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ 
                      borderColor: 'rgba(99, 102, 241, 0.5)',
                      boxShadow: '0 0 30px rgba(99, 102, 241, 0.1)',
                    }}
                  >
                    <p className="text-sm text-gray-300">
                      <span className="text-accent-glow font-semibold">Deployment Expertise:</span> I actively deploy applications using{' '}
                      <span className="text-white">Vercel</span>,{' '}
                      <span className="text-white">Heroku</span>, and{' '}
                      <span className="text-white">cPanel</span> — making sure your project goes from code to production seamlessly.
                    </p>
                  </motion.div>
                </div>
              </ElectricBorder>
            </TiltCard>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default Skills
