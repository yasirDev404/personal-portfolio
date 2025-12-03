import { motion } from 'framer-motion'
import { 
  HiServer, 
  HiDeviceMobile, 
  HiCloud,
  HiLightningBolt,
} from 'react-icons/hi'
import { FaRocket } from 'react-icons/fa'
import { SiMongodb, SiPostgresql, SiStripe, SiDocker, SiAmazonaws, SiNodedotjs } from 'react-icons/si'
import ProfileCard from '../components/ProfileCard'
import '../components/ProfileCard.css'

const Container = ({ children, className = '' }) => (
  <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
)

const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold mb-4"
    >
      <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        {title}
      </span>
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-gray-400 max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
)

const Card = ({ children, className = '' }) => (
  <div className={`bg-gray-900/50 border border-gray-800 rounded-2xl backdrop-blur-sm ${className}`}>
    {children}
  </div>
)

const highlights = [
  {
    icon: HiLightningBolt,
    title: '15 Years Old',
    description: 'Started coding at 12, now shipping production apps at 15.',
    color: 'text-orange-400',
  },
  {
    icon: HiServer,
    title: '8+ Production Backends',
    description: 'Built backends for real businesses - marketplaces to restaurants.',
    color: 'text-green-400',
  },
  {
    icon: HiDeviceMobile,
    title: 'Mobile Development',
    description: 'React Native developer building cross-platform apps.',
    color: 'text-purple-400',
  },
  {
    icon: HiCloud,
    title: 'Cloud Deployments',
    description: 'Experienced with Vercel, Heroku, and cPanel.',
    color: 'text-blue-400',
  },
]

const technologies = [
  { icon: SiNodedotjs, name: 'Node.js', color: 'text-green-500' },
  { icon: SiMongodb, name: 'MongoDB', color: 'text-green-400' },
  { icon: SiPostgresql, name: 'PostgreSQL', color: 'text-blue-400' },
  { icon: SiStripe, name: 'Stripe', color: 'text-purple-400' },
  { icon: SiDocker, name: 'Docker', color: 'text-blue-500' },
  { icon: SiAmazonaws, name: 'AWS', color: 'text-orange-400' },
]

const About = () => {
  const handleContactClick = () => {
    // Scroll to Book A Call section
    const bookCallSection = document.getElementById('book-a-call')
    if (bookCallSection) {
      bookCallSection.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <section id="about" className="py-20 md:py-32 relative bg-gray-950">
      <Container>
        <SectionTitle 
          title="About Me" 
          subtitle="A young developer with big dreams and real-world experience"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-md">
              <ProfileCard
                name="Yasir"
                title="Backend Engineer"
                handle="yasirDev404"
                status="Available for work"
                contactText="Book a Call"
                avatarUrl="/avatar.png"
                miniAvatarUrl="/avatar.png"
                iconUrl="https://assets.codepen.io/13471/holo-icons.svg"
                grainUrl="https://assets.codepen.io/13471/noise.png"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={true}
                mobileTiltSensitivity={5}
                behindGlowEnabled={true}
                onContactClick={handleContactClick}
              />
            </div>
          </motion.div>

          {/* Right - Story + Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Story */}
            <div className="relative pl-6 border-l-2 border-gradient-to-b from-blue-400 to-purple-500">
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Hi, I'm <span className="text-white font-semibold">Yasir</span>, a{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-semibold">15-year-old backend engineer</span> from{' '}
                  <span className="text-white">Islamabad, Pakistan 🇵🇰</span>. I started coding at 12, and since then I've been building real-world systems that people actually use.
                </p>
                <p>
                  I specialize in <span className="text-green-400">Node.js, Express, MongoDB, and PostgreSQL</span>, creating secure, scalable, and production-ready backend systems. I've built multi-vendor marketplaces, payment platforms, authentication services, and automated business tools — all used by actual clients.
                </p>
                <p>
                  I'm a <span className="text-blue-400">creative problem-solver</span> who enjoys tackling complex challenges head-on. I've built systems like a multi-vendor spray-paint marketplace with live lead-purchase and{' '}
                  <span className="text-purple-400">Stripe integration</span> — coordinating multiple moving parts and designing from scratch.
                </p>
                <p>
                  As a <span className="text-orange-400">fearless builder</span>, I pitch software ideas to business owners directly, handle client requirements, and deploy solutions live — all before finishing high school. I focus on shipping production-ready systems fast, constantly improving my skills along the way.
                </p>
                <p>
                  I'm <span className="text-yellow-400">curious and hungry to learn</span>, diving deep into system internals, database optimizations, payment flows, and authentication logic. I approach development like a young founder, thinking about scalability, automation, and real business impact.
                </p>
                <p>
                  Alongside backend work, I'm also an <span className="text-pink-400">intermediate React Native developer</span>, building cross-platform apps with Redux, clean architecture, and smooth UI experiences.
                </p>
                <p className="text-white font-medium pt-2">
                  I'm Yasir — a builder, problem-solver, and lifelong learner, creating systems that work in the real world, one line of code at a time. 🚀
                </p>
              </div>
            </div>

            {/* Tech Grid */}
            <div className="grid grid-cols-3 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="aspect-square rounded-2xl bg-gray-900/60 border border-gray-800/50 flex flex-col items-center justify-center gap-3 hover:border-blue-500/30 transition-colors"
                >
                  <tech.icon className={`text-4xl md:text-5xl ${tech.color}`} />
                  <span className="text-xs md:text-sm text-gray-400">{tech.name}</span>
                </motion.div>
              ))}
            </div>

            {/* Badge */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-xl shadow-lg inline-flex items-center gap-2">
              <FaRocket />
              <span className="font-semibold text-sm">Shipping Fast!</span>
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
                <div className={`w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center mb-4 ${item.color}`}>
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