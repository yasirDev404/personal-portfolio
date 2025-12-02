import { motion } from 'framer-motion'
import { 
  HiServer, 
  HiDeviceMobile, 
  HiCloud,
  HiLightningBolt,
} from 'react-icons/hi'
import { FaRocket } from 'react-icons/fa'
import { SiMongodb, SiPostgresql, SiStripe, SiDocker, SiAmazonaws } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { Container, SectionTitle, Card } from '../components/ui'

const highlights = [
  {
    icon: HiLightningBolt,
    title: '15 Years Old',
    description: 'Started coding at 12, now shipping production apps at 15.',
    color: 'text-neon-orange',
  },
  {
    icon: HiServer,
    title: '8+ Production Backends',
    description: 'Built backends for real businesses - marketplaces to restaurants.',
    color: 'text-neon-green',
  },
  {
    icon: HiDeviceMobile,
    title: 'Mobile Development',
    description: 'React Native developer building cross-platform apps.',
    color: 'text-neon-purple',
  },
  {
    icon: HiCloud,
    title: 'Cloud Deployments',
    description: 'Experienced with Vercel, Heroku, and cPanel.',
    color: 'text-neon-blue',
  },
]

const technologies = [
  { icon: FaNodeJs, name: 'Node.js', color: 'text-green-500' },
  { icon: SiMongodb, name: 'MongoDB', color: 'text-green-400' },
  { icon: SiPostgresql, name: 'PostgreSQL', color: 'text-blue-400' },
  { icon: SiStripe, name: 'Stripe', color: 'text-purple-400' },
  { icon: SiDocker, name: 'Docker', color: 'text-blue-500' },
  { icon: SiAmazonaws, name: 'AWS', color: 'text-orange-400' },
]

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <Container>
        <SectionTitle 
          title="About Me" 
          subtitle="A young developer with big dreams and real-world experience"
        />

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative pl-6 border-l-2 border-gradient-to-b from-accent-primary to-accent-secondary">
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Hey! I'm <span className="text-white font-semibold">Yasir</span>, a{' '}
                  <span className="gradient-text font-semibold">15-year-old backend engineer</span> from{' '}
                  <span className="text-white">Islamabad, Pakistan 🇵🇰</span>. I started coding at 12.
                </p>
                <p>
                  I build <span className="text-neon-green">robust backend systems</span> with Node.js, Express, MongoDB, and PostgreSQL. Payment systems with{' '}
                  <span className="text-neon-purple">Stripe</span>, authentication with <span className="text-neon-blue">JWT</span>.
                </p>
                <p>
                  I'm also an <span className="text-neon-orange">intermediate React Native developer</span> building cross-platform mobile apps with Redux and smooth UIs.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - Tech Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="grid grid-cols-3 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="aspect-square rounded-2xl bg-dark-800/60 border border-dark-600/50 flex flex-col items-center justify-center gap-3 hover:border-accent-primary/30 transition-colors"
                >
                  <tech.icon className={`text-4xl md:text-5xl ${tech.color}`} />
                  <span className="text-xs md:text-sm text-gray-400">{tech.name}</span>
                </motion.div>
              ))}
            </div>

            {/* Badge */}
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-accent-primary to-accent-secondary text-white px-4 py-2 rounded-xl shadow-lg">
              <div className="flex items-center gap-2">
                <FaRocket />
                <span className="font-semibold text-sm">Shipping Fast!</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full">
                <div className={`w-12 h-12 rounded-xl bg-dark-700 flex items-center justify-center mb-4 ${item.color}`}>
                  <item.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default About
