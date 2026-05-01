import { motion } from 'framer-motion'
import { FaTrophy, FaMedal, FaStar, FaCode, FaBook, FaCertificate } from 'react-icons/fa'

const Achievements = () => {
  const achievements = [
    {
      icon: '🥇',
      color: 'gold',
      title: 'TOP 10 NATIONAL FINALIST — AI for All',
      subtitle: 'Government of India',
      description: 'Recognized among the Top 10 teams in all of India in the prestigious AI for All competition conducted by the Government of India. Built the Tender Cartel Detection System — an intelligent ML-powered solution to detect bid-rigging, cartel behavior, and collusion in government procurement tenders using anomaly detection and pattern recognition.',
      date: '2024',
      type: 'achievement',
      isGoldCard: true,
      badge: '🏆 GOVT. OF INDIA RECOGNIZED'
    },
    {
      icon: FaTrophy,
      color: 'yellow',
      title: 'Student Lead – PALS, IIT Madras',
      description: 'Currently leading student initiatives at PALS (Programming and Algorithm Learning Society), IIT Madras',
      date: 'Ongoing',
      type: 'leadership'
    },
    {
      icon: FaMedal,
      color: 'cyan',
      title: 'PALS INNOWAH 2026 – Finalist',
      description: 'Achieved Finalist position in PALS INNOWAH 2026 under IIT Madras for MilkAnalyzer project',
      date: '2026',
      type: 'achievement'
    },
    {
      icon: FaTrophy,
      color: 'purple',
      title: 'National Level Hackathon ITERX\'2026',
      description: 'Developed ML-based Phishing Email Detection System that secured recognition at national level',
      date: '2026',
      type: 'achievement'
    },
    {
      icon: FaStar,
      color: 'orange',
      title: 'VIT Bangalore GLOW Hackathon',
      description: 'Successfully participated and delivered full-stack solution under time constraints',
      date: '2024',
      type: 'participation'
    },
    {
      icon: FaCode,
      color: 'green',
      title: 'Competitive Programming',
      description: 'Active participant in competitive programming contests and cybersecurity challenges',
      date: 'Ongoing',
      type: 'skill'
    },
    {
      icon: FaBook,
      color: 'blue',
      title: 'Cybersecurity Research',
      description: 'Continuously researching and learning about latest cybersecurity trends and vulnerabilities',
      date: 'Ongoing',
      type: 'learning'
    },
    {
      icon: FaCertificate,
      color: 'red',
      title: 'Continuous Learner',
      description: 'Dedicated to continuous learning in backend development, data engineering, and cybersecurity',
      date: 'Ongoing',
      type: 'certification'
    }
  ]

  const getIconColor = (color) => {
    const colorMap = {
      gold: 'text-yellow-300 border-yellow-400',
      yellow: 'text-yellow-400 border-yellow-500',
      cyan: 'text-cyan-400 border-cyan-500',
      purple: 'text-purple-400 border-purple-500',
      orange: 'text-orange-400 border-orange-500',
      green: 'text-green-400 border-green-500',
      blue: 'text-blue-400 border-blue-500',
      red: 'text-red-400 border-red-500'
    }
    return colorMap[color] || colorMap.cyan
  }

  const getTimelineColor = (type) => {
    const colorMap = {
      leadership: 'border-yellow-500',
      achievement: 'border-cyan-500',
      participation: 'border-orange-500',
      skill: 'border-green-500',
      learning: 'border-blue-500',
      certification: 'border-red-500'
    }
    return colorMap[type] || colorMap.achievement
  }

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title */}
          <motion.h2 
            className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="gradient-text">Achievements & Certifications</span>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-4"></div>
          </motion.h2>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-500 to-purple-500"></div>

            {/* Achievement Cards */}
            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-cyan-500 z-10"></div>

                  {/* Achievement Card */}
                  <motion.div
                    className={`w-full md:w-5/12 glass-morphism rounded-xl p-6 border-2 ${getIconColor(achievement.color)} ${achievement.isGoldCard ? 'scale-105' : ''}`}
                    whileHover={{ 
                      scale: achievement.isGoldCard ? 1.08 : 1.02,
                      boxShadow: achievement.isGoldCard 
                        ? '0 0 30px #FFD700, 0 0 60px rgba(255,215,0,0.3)' 
                        : `0 0 30px var(--neon-${achievement.color})`
                    }}
                    style={achievement.isGoldCard ? {
                      borderColor: '#FFD700',
                      boxShadow: '0 0 30px #FFD700, 0 0 60px rgba(255,215,0,0.3)',
                      animation: 'goldPulse 2s ease-in-out infinite'
                    } : {}}
                  >
                    {/* Icon and Title */}
                    <div className="flex items-start space-x-4 mb-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center border-2 ${getIconColor(achievement.color)}`}>
                        {typeof achievement.icon === 'string' ? (
                          <span className="text-2xl">{achievement.icon}</span>
                        ) : (
                          <achievement.icon className={`w-6 h-6 ${getIconColor(achievement.color).split(' ')[0]}`} />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-xl font-orbitron font-bold mb-1 ${achievement.isGoldCard ? 'text-yellow-300' : 'text-white'}`}>
                          {achievement.title}
                        </h3>
                        {achievement.subtitle && (
                          <p className="text-sm text-yellow-400 mb-1">{achievement.subtitle}</p>
                        )}
                        <span className="text-sm text-cyan-400">{achievement.date}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {achievement.description}
                    </p>

                    {/* Achievement Badge */}
                    <div className="mt-4">
                      {achievement.badge ? (
                        <span className="inline-block px-3 py-1 text-xs rounded-full border border-yellow-400 text-yellow-300 bg-yellow-400/10">
                          {achievement.badge}
                        </span>
                      ) : (
                        <span className={`inline-block px-3 py-1 text-xs rounded-full border ${getTimelineColor(achievement.type)}`}>
                          {achievement.type.charAt(0).toUpperCase() + achievement.type.slice(1)}
                        </span>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional Stats */}
          <motion.div
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div
              className="text-center glass-morphism rounded-lg p-6 neon-border"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold text-cyan-400 mb-2">5+</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </motion.div>

            <motion.div
              className="text-center glass-morphism rounded-lg p-6 neon-border-purple"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold text-purple-400 mb-2">3</div>
              <div className="text-sm text-gray-400">Hackathons</div>
            </motion.div>

            <motion.div
              className="text-center glass-morphism rounded-lg p-6 neon-border"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold text-cyan-400 mb-2">2</div>
              <div className="text-sm text-gray-400">National Finals</div>
            </motion.div>

            <motion.div
              className="text-center glass-morphism rounded-lg p-6 neon-border-purple"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold text-purple-400 mb-2">∞</div>
              <div className="text-sm text-gray-400">Learning Journey</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* CSS Variables */}
      <style jsx>{`
        :root {
          --neon-gold: #FFD700;
          --neon-yellow: #FFFF00;
          --neon-cyan: #00FFFF;
          --neon-purple: #9B59B6;
          --neon-orange: #FFA500;
          --neon-green: #00FF00;
          --neon-blue: #0080FF;
          --neon-red: #FF0000;
        }

        @keyframes goldPulse {
          0%, 100% {
            box-shadow: 0 0 30px #FFD700, 0 0 60px rgba(255,215,0,0.3);
          }
          50% {
            box-shadow: 0 0 40px #FFD700, 0 0 80px rgba(255,215,0,0.5);
          }
        }
      `}</style>
    </section>
  )
}

export default Achievements
