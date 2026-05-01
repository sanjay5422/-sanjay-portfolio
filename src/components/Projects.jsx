import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaRobot, FaFlask, FaUtensils, FaShieldAlt, FaCode, FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { playHoverSound } from '../utils/sounds'

const Projects = () => {
  const [flippedCard, setFlippedCard] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Tender Cartel Detection System',
      tag: '🥇 AI for All — Govt. of India | TOP 10 IN INDIA',
      icon: FaShieldAlt,
      iconColor: 'gold',
      description: 'Intelligent ML system to detect bid-rigging and cartel behavior in government procurement tenders. Uses anomaly detection and pattern recognition to identify suspicious collusion signals in tender data — supporting fair and transparent government procurement.',
      technologies: ['Python', 'Machine Learning', 'Anomaly Detection', 'Pattern Recognition', 'Data Analysis'],
      github: 'https://github.com/sanjay5422',
      demo: '#',
      isGoldCard: true,
      badge: '🥇 TOP 10 IN INDIA'
    },
    {
      id: 2,
      title: 'JARVIS – Personal AI Voice Agent',
      tag: 'Personal Project',
      icon: FaRobot,
      iconColor: 'cyan',
      description: 'AI voice agent built with Python and ML. Understands natural language, integrates speech recognition and NLP pipelines, modular architecture.',
      technologies: ['Python', 'NLP', 'Machine Learning', 'Speech Recognition'],
      github: 'https://github.com/sanjay5422',
      demo: '#'
    },
    {
      id: 3,
      title: 'MilkAnalyzer – PALS INNOWAH 2026',
      tag: '🏆 National Finalist',
      icon: FaFlask,
      iconColor: 'purple',
      description: 'ML model to analyze milk quality. Feature extraction from sensor and chemical data. Achieved Finalist in PALS INNOWAH 2026 under IIT Madras.',
      technologies: ['Python', 'Machine Learning', 'Data Engineering'],
      github: 'https://github.com/sanjay5422',
      demo: '#'
    },
    {
      id: 4,
      title: 'EYIC Food Saver – Zero Hunger Initiative',
      tag: 'Oct 2024 – Jan 2025',
      icon: FaUtensils,
      iconColor: 'green',
      description: 'Backend system for UN SDG Goal 2 (Zero Hunger). Real-time food inventory tracking, RESTful APIs, microservices, secure data pipelines.',
      technologies: ['Python', 'FastAPI', 'RESTful APIs', 'Microservices', 'PostgreSQL'],
      github: 'https://github.com/sanjay5422',
      demo: '#'
    },
    {
      id: 5,
      title: 'Phishing Email Detection System',
      tag: '🏆 National Level Hackathon – ITERX\'2026',
      icon: FaShieldAlt,
      iconColor: 'red',
      description: 'ML-based pipeline to detect phishing emails. NLP for email body analysis, feature extraction from headers and metadata, secure API endpoints.',
      technologies: ['Python', 'ML', 'NLP', 'API Security'],
      github: 'https://github.com/sanjay5422',
      demo: '#'
    },
    {
      id: 6,
      title: 'VIT Bangalore GLOW Hackathon',
      tag: 'Participant 2024',
      icon: FaCode,
      iconColor: 'orange',
      description: 'Full-stack solution built under time constraints. Rapid prototyping with team collaboration. Focus on scalability and code quality.',
      technologies: ['Full Stack', 'Team Collaboration'],
      github: 'https://github.com/sanjay5422',
      demo: '#'
    }
  ]

  const getIconColor = (color) => {
    const colorMap = {
      gold: 'text-yellow-300',
      cyan: 'text-cyan-400',
      purple: 'text-purple-400',
      green: 'text-green-400',
      red: 'text-red-400',
      orange: 'text-orange-400',
      blue: 'text-blue-400',
      yellow: 'text-yellow-400'
    }
    return colorMap[color] || colorMap.cyan
  }

  const getBorderColor = (color) => {
    const colorMap = {
      gold: 'border-yellow-400 shadow-yellow-400/50',
      cyan: 'border-cyan-500 shadow-cyan-500/50',
      purple: 'border-purple-500 shadow-purple-500/50',
      green: 'border-green-500 shadow-green-500/50',
      red: 'border-red-500 shadow-red-500/50',
      orange: 'border-orange-500 shadow-orange-500/50',
      blue: 'border-blue-500 shadow-blue-500/50',
      yellow: 'border-yellow-500 shadow-yellow-500/50'
    }
    return colorMap[color] || colorMap.cyan
  }

  return (
    <section id="projects" className="py-20 relative">
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
            <span className="gradient-text">My Projects</span>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-4"></div>
          </motion.h2>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="flip-card h-96"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                onMouseEnter={() => {
                  playHoverSound()
                  setFlippedCard(project.id)
                }}
                onMouseLeave={() => setFlippedCard(null)}
              >
                <div 
                  className={`flip-card-inner relative w-full h-full ${flippedCard === project.id ? 'rotate-y-180' : ''}`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Front of card */}
                  <div className="flip-card-front absolute inset-0 glass-morphism rounded-xl border-2 p-6 flex flex-col items-center justify-center"
                       style={{ 
                         borderColor: project.isGoldCard ? '#FFD700' : `var(--neon-${project.iconColor})`,
                         boxShadow: project.isGoldCard ? '0 0 20px #FFD700, 0 0 40px rgba(255,215,0,0.3)' : 'none'
                       }}>
                    
                    {/* Project Badge for Gold Card */}
                    {project.isGoldCard && (
                      <div className="absolute top-2 right-2 px-2 py-1 bg-yellow-400/20 border border-yellow-400 rounded-full text-xs text-yellow-300">
                        {project.badge}
                      </div>
                    )}
                    
                    {/* Project Icon */}
                    <motion.div
                      className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 border-2 ${getBorderColor(project.iconColor)}`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <project.icon className={`w-10 h-10 ${getIconColor(project.iconColor)}`} />
                    </motion.div>

                    {/* Project Title */}
                    <h3 className={`text-xl font-orbitron font-bold mb-2 text-center ${project.isGoldCard ? 'text-yellow-300' : 'text-white'}`}>
                      {project.title}
                    </h3>

                    {/* Project Tag */}
                    <span className={`text-sm mb-4 px-3 py-1 border rounded-full ${project.isGoldCard ? 'text-yellow-300 border-yellow-400/50' : 'text-cyan-400 border-cyan-500/30'}`}>
                      {project.tag}
                    </span>

                    {/* Hover Hint */}
                    <motion.p 
                      className="text-gray-400 text-sm text-center"
                      animate={{ opacity: flippedCard === project.id ? 0 : 1 }}
                    >
                      Hover to see details →
                    </motion.p>
                  </div>

                  {/* Back of card */}
                  <div className="flip-card-back absolute inset-0 glass-morphism rounded-xl border-2 p-6 flex flex-col justify-between"
                       style={{ 
                         borderColor: project.isGoldCard ? '#FFD700' : `var(--neon-${project.iconColor})`,
                         transform: 'rotateY(180deg)',
                         boxShadow: project.isGoldCard ? '0 0 20px #FFD700, 0 0 40px rgba(255,215,0,0.3)' : 'none'
                       }}>
                    
                    {/* Project Details */}
                    <div>
                      {/* Project Title */}
                      <h3 className={`text-lg font-orbitron font-bold mb-2 ${project.isGoldCard ? 'text-yellow-300' : 'text-white'}`}>
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-300 text-sm mb-4 line-clamp-4">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className={`text-xs px-2 py-1 rounded-full border ${project.isGoldCard ? 'bg-yellow-400/20 text-yellow-300 border-yellow-400/30' : 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30'}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 border rounded-lg transition-colors ${project.isGoldCard ? 'border-yellow-400 text-yellow-300 hover:bg-yellow-400/10' : 'border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub className="w-4 h-4" />
                        Code
                      </motion.a>
                      
                      <motion.a
                        href={project.demo}
                        className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 border rounded-lg transition-colors ${project.isGoldCard ? 'border-yellow-400 text-yellow-300 hover:bg-yellow-400/10' : 'border-purple-500 text-purple-400 hover:bg-purple-500/10'}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                        Demo
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* CSS for flip animation */}
      <style jsx>{`
        .flip-card {
          perspective: 1000px;
        }

        .flip-card-inner {
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }

        .rotate-y-180 {
          transform: rotateY(180deg);
        }

        :root {
          --neon-gold: #FFD700;
          --neon-cyan: #00FFFF;
          --neon-purple: #9B59B6;
          --neon-green: #00FF00;
          --neon-red: #FF0000;
          --neon-orange: #FFA500;
          --neon-blue: #0080FF;
          --neon-yellow: #FFFF00;
        }

        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}

export default Projects
