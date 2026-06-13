import { motion } from 'framer-motion'
import { 
  HiServer, 
  HiDeviceMobile, 
  HiCloud,
  HiLightningBolt,
  HiCode,
} from 'react-icons/hi'
import { FaRocket, FaGlobe, FaUsers, FaSearch } from 'react-icons/fa'
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
    icon: HiServer,
    title: '8+ Production Backends',
    description: 'Built for real businesses across multiple industries',
    color: 'text-green-400',
  },
  {
    icon: FaGlobe,
    title: '4+ Live Platforms',
    description: 'Shipped and serving real users worldwide',
    color: 'text-cyan-400',
  },
  {
    icon: HiDeviceMobile,
    title: 'Mobile Development',
    description: 'Cross-platform iOS & Android apps with React Native',
    color: 'text-purple-400',
  },
  {
    icon: HiLightningBolt,
    title: 'AI Integration',
    description: 'ChatGPT, Claude API, and custom AI chatbot systems',
    color: 'text-yellow-400',
  },
  {
    icon: HiCode,
    title: 'Full-Stack Capable',
    description: 'Frontend to backend to mobile to cloud',
    color: 'text-blue-400',
  },
  {
    icon: HiCloud,
    title: 'Cloud Deployments',
    description: 'Vercel, AWS, Heroku, cPanel',
    color: 'text-indigo-400',
  },
  {
    icon: FaUsers,
    title: 'Team at Dexa Doors',
    description: 'Always available, always shipping',
    color: 'text-pink-400',
  },
  {
    icon: SiStripe,
    title: 'Payment Systems',
    description: 'Stripe, PayPal, NowPayments integrated',
    color: 'text-purple-400',
  },
  {
    icon: FaSearch,
    title: 'SEO & Performance',
    description: 'Optimized for search and speed from day one',
    color: 'text-orange-400',
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
    const bookCallSection = document.getElementById('book-a-call')
    if (bookCallSection) {
      bookCallSection.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <Container>
        <SectionTitle 
          title="About Me" 
          subtitle="Full-stack builder shipping production systems for businesses worldwide"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Column - Profile Card + Journey */}
          <div className="space-y-8">
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

            {/* My Journey Timeline */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full max-w-md mx-auto lg:ml-auto"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">My Journey</span>
                <span className="text-2xl">🚀</span>
              </h3>
              
              <div className="space-y-6">
                {/* Early Days */}
                <div className="relative pl-8 border-l-2 border-blue-500/30">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-gray-900"></div>
                  <div className="pb-4">
                    <span className="text-blue-400 font-semibold text-sm">Early Days</span>
                    <h4 className="text-white font-semibold mt-1 mb-2">The Beginning 💻</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Started coding out of pure curiosity with no mentor and no guidance — just determination to figure things out. Didn't stop until things started making sense.
                    </p>
                  </div>
                </div>

                {/* Building for Mobile */}
                <div className="relative pl-8 border-l-2 border-purple-500/30">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-purple-500 ring-4 ring-gray-900"></div>
                  <div className="pb-4">
                    <span className="text-purple-400 font-semibold text-sm">Building for Mobile</span>
                    <h4 className="text-white font-semibold mt-1 mb-2">Mobile Era 📱</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Jumped deep into React Native. Built screens, components, and full cross-platform apps. Landed first paid project — invested every rupee back into learning.
                    </p>
                  </div>
                </div>

                {/* Backend Awakening */}
                <div className="relative pl-8 border-l-2 border-green-500/30">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-green-500 ring-4 ring-gray-900"></div>
                  <div className="pb-4">
                    <span className="text-green-400 font-semibold text-sm">Backend Awakening</span>
                    <h4 className="text-white font-semibold mt-1 mb-2">Backend Awakening ⚡</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Everything clicked. Node.js, Express, JWT, Redis, Docker, PostgreSQL. Found a true calling in backend architecture and system design.
                    </p>
                  </div>
                </div>

                {/* Today */}
                <div className="relative pl-8">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 ring-4 ring-gray-900 animate-pulse"></div>
                  <div>
                    <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-semibold text-sm">Today</span>
                    <h4 className="text-white font-semibold mt-1 mb-2">Building Real Systems 🔥</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Production backends. Crypto platforms. Multi-vendor marketplaces. Mobile apps. UK food delivery. Dutch rental platforms. All live, all real. Leading Dexa Doors — a team shipping full-stack solutions for clients worldwide. Still just getting started.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

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
                  I'm Yasir — a full-stack developer, backend engineer, and mobile app developer building real-world digital products that businesses actually use. I started coding out of pure curiosity, and since then I've been shipping production systems for clients across the UK, Netherlands, and beyond.
                </p>
                <p>
                  I specialize in Node.js, Express, MongoDB, and PostgreSQL — building secure, scalable backends, multi-role platforms, payment systems, and AI-powered tools. I approach every project like a founder: thinking about scalability, automation, and real business impact from day one.
                </p>
                <p>
                  I lead Dexa Doors — a development team always available to deliver across the full stack. From SEO and UI/UX design to mobile apps, API integrations, CRM systems, and cloud deployments — the projects below reflect everything we're capable of. Every single one of them.
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
