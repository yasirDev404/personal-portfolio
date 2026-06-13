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
  SiOpenai,
  SiHtml5,
} from 'react-icons/si'
import { 
  HiDeviceMobile, 
  HiServer, 
  HiCode,
  HiLightningBolt,
  HiColorSwatch,
  HiTrendingUp,
  HiChatAlt2,
} from 'react-icons/hi'
import { 
  FaRoute, 
  FaSave,
  FaCode,
  FaPlug,
  FaCogs,
  FaUsers,
  FaChartBar,
  FaRobot,
  FaPaintBrush,
  FaSearch,
  FaTachometerAlt,
  FaWrench,
} from 'react-icons/fa'
import { Container, SectionTitle, Card } from '../components/ui'

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
  { name: 'REST API Development', icon: FaCode, color: '#3b82f6', level: 92 },
  { name: 'API Integration', icon: FaPlug, color: '#8b5cf6', level: 90 },
  { name: 'Authentication & Authorization (JWT, OAuth)', icon: SiJsonwebtokens, color: '#d63aff', level: 90 },
  { name: 'Business Automation Systems', icon: FaCogs, color: '#f59e0b', level: 85 },
  { name: 'CRM Development', icon: FaUsers, color: '#06b6d4', level: 84 },
  { name: 'Admin Dashboard Development', icon: FaChartBar, color: '#10b981', level: 88 },
]

const mobileSkills = [
  { name: 'React Native', icon: SiReact, color: '#61dafb', level: 82 },
  { name: 'Redux', icon: SiRedux, color: '#764abc', level: 85 },
  { name: 'Redux Toolkit', icon: SiRedux, color: '#764abc', level: 83 },
  { name: 'Axios', icon: HiCode, color: '#5a29e4', level: 90 },
  { name: 'React Navigation', icon: FaRoute, color: '#6b52ae', level: 80 },
  { name: 'Async Storage', icon: FaSave, color: '#10b981', level: 85 },
]

const aiSkills = [
  { name: 'OpenAI / ChatGPT API', icon: SiOpenai, color: '#412991', level: 88 },
  { name: 'Claude API', icon: FaRobot, color: '#d97706', level: 85 },
  { name: 'AI Chatbot Development', icon: HiChatAlt2, color: '#8b5cf6', level: 87 },
  { name: 'AI Integration', icon: FaPlug, color: '#6366f1', level: 86 },
]

const frontendSkills = [
  { name: 'UI/UX Design', icon: FaPaintBrush, color: '#ec4899', level: 82 },
  { name: 'Responsive Web Design', icon: HiDeviceMobile, color: '#3b82f6', level: 85 },
  { name: 'HTML/CSS', icon: SiHtml5, color: '#e34f26', level: 88 },
]

const growthSkills = [
  { name: 'SEO (Search Engine Optimization)', icon: FaSearch, color: '#22c55e', level: 84 },
  { name: 'Website Performance Optimization', icon: FaTachometerAlt, color: '#f97316', level: 86 },
  { name: 'Bug Fixing & Maintenance', icon: FaWrench, color: '#64748b', level: 90 },
]

const SkillBar = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ delay: index * 0.05 }}
    className="flex items-center gap-4 p-3 rounded-xl bg-dark-700/40 hover:bg-dark-700/60 transition-colors"
  >
    <div 
      className="w-10 h-10 rounded-lg bg-dark-600 flex items-center justify-center"
      style={{ color: skill.color }}
    >
      <skill.icon size={20} />
    </div>
    <div className="flex-1">
      <div className="flex justify-between mb-1">
        <span className="text-white text-sm font-medium">{skill.name}</span>
        <span className="text-gray-400 text-xs">{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-dark-600 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: skill.color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.05 }}
        />
      </div>
    </div>
  </motion.div>
)

const SkillCategory = ({ title, subtitle, headerIcon: HeaderIcon, accentClass, skills, delay = 0, footer }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ delay }}
  >
    <Card className="p-6">
      <div className="flex items-center gap-4 mb-6">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${accentClass}`}>
          <HeaderIcon className="text-xl" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <p className="text-gray-400 text-sm">{subtitle}</p>
        </div>
      </div>
      <div className="space-y-3">
        {skills.map((skill, index) => (
          <SkillBar key={skill.name} skill={skill} index={index} />
        ))}
      </div>
      {footer}
    </Card>
  </motion.div>
)

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32">
      <Container>
        <SectionTitle 
          title="Skills & Expertise" 
          subtitle="Technologies I use to build powerful backend systems and mobile applications"
        />

        <div className="grid lg:grid-cols-2 gap-8">
          <SkillCategory
            title="Backend Development"
            subtitle="Server-side technologies"
            headerIcon={HiServer}
            accentClass="bg-neon-green/20 border border-neon-green/30 text-neon-green"
            skills={backendSkills}
          />

          <SkillCategory
            title="Mobile Development"
            subtitle="React Native ecosystem"
            headerIcon={HiDeviceMobile}
            accentClass="bg-neon-purple/20 border border-neon-purple/30 text-neon-purple"
            skills={mobileSkills}
            delay={0.1}
            footer={
              <div className="mt-6 p-4 rounded-xl bg-accent-primary/10 border border-accent-primary/20">
                <p className="text-sm text-gray-300">
                  <span className="text-accent-glow font-semibold">Deployment:</span> Vercel, Heroku, cPanel, AWS
                </p>
              </div>
            }
          />

          <SkillCategory
            title="AI & Integrations"
            subtitle="AI-powered tools and APIs"
            headerIcon={HiLightningBolt}
            accentClass="bg-neon-orange/20 border border-neon-orange/30 text-neon-orange"
            skills={aiSkills}
            delay={0.2}
          />

          <SkillCategory
            title="Frontend & Design"
            subtitle="UI and web design"
            headerIcon={HiColorSwatch}
            accentClass="bg-neon-pink/20 border border-neon-pink/30 text-neon-pink"
            skills={frontendSkills}
            delay={0.3}
          />

          <SkillCategory
            title="Growth & Optimization"
            subtitle="SEO, performance, and maintenance"
            headerIcon={HiTrendingUp}
            accentClass="bg-neon-blue/20 border border-neon-blue/30 text-neon-blue"
            skills={growthSkills}
            delay={0.4}
          />
        </div>
      </Container>
    </section>
  )
}

export default Skills
