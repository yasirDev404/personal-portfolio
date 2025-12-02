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
]

const mobileSkills = [
  { name: 'React Native', icon: SiReact, color: '#61dafb', level: 82 },
  { name: 'Redux', icon: SiRedux, color: '#764abc', level: 85 },
  { name: 'Redux Toolkit', icon: SiRedux, color: '#764abc', level: 83 },
  { name: 'Axios', icon: HiCode, color: '#5a29e4', level: 90 },
  { name: 'React Navigation', icon: FaRoute, color: '#6b52ae', level: 80 },
  { name: 'Async Storage', icon: FaSave, color: '#10b981', level: 85 },
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

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32">
      <Container>
        <SectionTitle 
          title="Skills & Expertise" 
          subtitle="Technologies I use to build powerful backend systems and mobile applications"
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-neon-green/20 border border-neon-green/30 flex items-center justify-center">
                  <HiServer className="text-xl text-neon-green" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Backend Development</h3>
                  <p className="text-gray-400 text-sm">Server-side technologies</p>
                </div>
              </div>
              <div className="space-y-3">
                {backendSkills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
          >
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-neon-purple/20 border border-neon-purple/30 flex items-center justify-center">
                  <HiDeviceMobile className="text-xl text-neon-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Mobile Development</h3>
                  <p className="text-gray-400 text-sm">React Native ecosystem</p>
                </div>
              </div>
              <div className="space-y-3">
                {mobileSkills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>

              {/* Deployment Note */}
              <div className="mt-6 p-4 rounded-xl bg-accent-primary/10 border border-accent-primary/20">
                <p className="text-sm text-gray-300">
                  <span className="text-accent-glow font-semibold">Deployment:</span> Vercel, Heroku, cPanel
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default Skills
