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
import { Container, SectionTitle } from '../components/ui'
import { 
  SpotlightCard, 
  BlurRevealText,
  TiltedCard,
  ElectricBorder,
} from '../components/effects'

const highlights = [
  {
    icon: HiLightningBolt,
    title: '15 Years Old',
    description: 'Started coding at 12, now shipping production apps at 15. Age is just a number when you love what you do.',
    color: '#f97316',
  },
  {
    icon: HiServer,
    title: '8+ Production Backends',
    description: 'Built and deployed backends for real businesses - from marketplaces to restaurant systems.',
    color: '#10b981',
  },
  {
    icon: HiDeviceMobile,
    title: 'Mobile Development',
    description: 'Intermediate React Native developer building cross-platform apps with Redux and smooth UIs.',
    color: '#8b5cf6',
  },
  {
    icon: HiCloud,
    title: 'Cloud Deployments',
    description: 'Experienced with Vercel, Heroku, and cPanel. Your app will be live and running smoothly.',
    color: '#3b82f6',
  },
]

const technologies = [
  { icon: FaNodeJs, name: 'Node.js', color: '#68a063' },
  { icon: SiMongodb, name: 'MongoDB', color: '#47a248' },
  { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
  { icon: SiStripe, name: 'Stripe', color: '#635bff' },
  { icon: SiDocker, name: 'Docker', color: '#2496ed' },
  { icon: SiAmazonaws, name: 'AWS', color: '#ff9900' },
]

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <Container className="relative z-10">
        <SectionTitle 
          title="About Me" 
          subtitle="A young developer with big dreams and real-world experience"
        />

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Decorative Element */}
              <motion.div 
                className="absolute -left-4 top-0 bottom-0 w-1 rounded-full"
                style={{
                  background: 'linear-gradient(to bottom, #6366f1, #a855f7, #ec4899)',
                }}
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              
              <div className="pl-8 space-y-6">
                <motion.p 
                  className="text-lg text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <BlurRevealText delay={0.1}>
                    Hey! I'm <span className="text-white font-semibold">Yasir Sahto</span>, a
                  </BlurRevealText>{' '}
                  <BlurRevealText delay={0.2}>
                    <span className="gradient-text font-semibold">15-year-old backend engineer</span> from
                  </BlurRevealText>{' '}
                  <BlurRevealText delay={0.3}>
                    <span className="text-white">Pakistan 🇵🇰</span>. I started my coding journey at 12 and 
                    haven't looked back since.
                  </BlurRevealText>
                </motion.p>

                <motion.p 
                  className="text-lg text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <BlurRevealText delay={0.4}>
                    I specialize in building <span className="text-neon-green font-medium">robust backend systems</span> with 
                    Node.js, Express, MongoDB, and PostgreSQL.
                  </BlurRevealText>{' '}
                  <BlurRevealText delay={0.5}>
                    I've integrated payment systems with
                    <span className="text-neon-purple font-medium"> Stripe</span>, built secure authentication with 
                    <span className="text-neon-blue font-medium"> JWT</span>, and deployed apps that real businesses use daily.
                  </BlurRevealText>
                </motion.p>

                <motion.p 
                  className="text-lg text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <BlurRevealText delay={0.6}>
                    Beyond backend, I'm also an <span className="text-neon-orange font-medium">intermediate React Native developer</span>. 
                    I build cross-platform mobile apps using Redux for state management, Axios for API calls, 
                    React Navigation for routing, and Async Storage for local data persistence.
                  </BlurRevealText>
                </motion.p>

                <motion.p 
                  className="text-lg text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <BlurRevealText delay={0.7}>
                    I actively deploy applications using <span className="text-white font-medium">Vercel, Heroku, and cPanel</span> — 
                    making sure your project goes from code to production seamlessly.
                  </BlurRevealText>
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Right - Tech Icons Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-3 gap-4">
              {technologies.map((tech, index) => (
                <TiltedCard 
                  key={tech.name}
                  rotateAmplitude={15} 
                  scaleOnHover={1.1}
                  containerHeight="auto"
                  containerWidth="100%"
                  showTooltip={false}
                >
                  <motion.div
                    className="aspect-square rounded-2xl bg-dark-800/60 border border-dark-600/50 flex flex-col items-center justify-center gap-3 hover:border-accent-primary/30 transition-all duration-300 cursor-pointer"
                    initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
                  >
                    <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.5 }}>
                      <tech.icon className="text-4xl md:text-5xl" style={{ color: tech.color }} />
                    </motion.div>
                    <span className="text-xs md:text-sm text-gray-400">{tech.name}</span>
                  </motion.div>
                </TiltedCard>
              ))}
            </div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -bottom-4 -right-4"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <ElectricBorder color="#10b981" speed={1.5} chaos={0.8} thickness={2} className="rounded-xl">
                <div className="flex items-center gap-2 px-4 py-2 text-white bg-dark-800 rounded-xl">
                  <FaRocket className="text-neon-green" />
                  <span className="font-semibold text-sm">Shipping Fast!</span>
                </div>
              </ElectricBorder>
            </motion.div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <TiltedCard 
              key={item.title} 
              rotateAmplitude={10} 
              scaleOnHover={1.03}
              containerHeight="100%"
              containerWidth="100%"
              showTooltip={false}
            >
              <SpotlightCard 
                spotlightColor={`${item.color}20`}
                borderColor={`${item.color}40`}
                className="p-6 h-full"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-dark-700 flex items-center justify-center mb-4"
                    style={{ color: item.color }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 10,
                      boxShadow: `0 0 20px ${item.color}40`,
                    }}
                  >
                    <item.icon size={24} />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              </SpotlightCard>
            </TiltedCard>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default About
