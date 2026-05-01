import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaGitAlt, FaGithub,
  FaDatabase, FaServer, FaCloud, FaShieldAlt, FaTools, FaCode,
  FaLock, FaChartLine, FaCogs
} from 'react-icons/fa'
import { playHoverSound } from '../utils/sounds'

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null)

  const skillsData = {
    'Frontend': [
      { name: 'HTML & CSS', icon: FaHtml5, level: 90, color: 'cyan' },
      { name: 'JavaScript', icon: FaJs, level: 85, color: 'yellow' },
      { name: 'React', icon: FaReact, level: 80, color: 'blue' }
    ],
    'Languages': [
      { name: 'Python', icon: FaPython, level: 85, color: 'green' },
      { name: 'C', icon: FaCode, level: 75, color: 'gray' },
      { name: 'C++', icon: FaCode, level: 70, color: 'blue' }
    ],
    'Backend & APIs': [
      { name: 'FastAPI', icon: FaServer, level: 80, color: 'green' },
      { name: 'Flask', icon: FaServer, level: 75, color: 'purple' },
      { name: 'RESTful APIs', icon: FaServer, level: 85, color: 'cyan' },
      { name: 'Microservices', icon: FaCogs, level: 70, color: 'orange' }
    ],
    'Databases': [
      { name: 'MySQL', icon: FaDatabase, level: 80, color: 'blue' },
      { name: 'PostgreSQL', icon: FaDatabase, level: 75, color: 'purple' },
      { name: 'MongoDB', icon: FaDatabase, level: 70, color: 'green' }
    ],
    'Data Engineering': [
      { name: 'ETL Pipelines', icon: FaChartLine, level: 75, color: 'cyan' },
      { name: 'Data Transformation', icon: FaChartLine, level: 70, color: 'purple' }
    ],
    'Cloud & DevOps': [
      { name: 'AWS Fundamentals', icon: FaCloud, level: 65, color: 'orange' },
      { name: 'Linux System Administration', icon: FaServer, level: 75, color: 'gray' }
    ],
    'Cybersecurity': [
      { name: 'Secure Coding', icon: FaShieldAlt, level: 80, color: 'cyan' },
      { name: 'API Security', icon: FaLock, level: 75, color: 'purple' },
      { name: 'OWASP', icon: FaShieldAlt, level: 70, color: 'red' },
      { name: 'Vulnerability Assessment', icon: FaShieldAlt, level: 65, color: 'orange' },
      { name: 'Data Protection', icon: FaLock, level: 75, color: 'blue' },
      { name: 'JWT', icon: FaLock, level: 80, color: 'green' },
      { name: 'OAuth', icon: FaLock, level: 70, color: 'purple' }
    ],
    'Tools': [
      { name: 'Git', icon: FaGitAlt, level: 85, color: 'orange' },
      { name: 'GitHub', icon: FaGithub, level: 85, color: 'gray' },
      { name: 'Agile', icon: FaTools, level: 80, color: 'cyan' },
      { name: 'Code Reviews', icon: FaCode, level: 75, color: 'purple' }
    ]
  }

  const getColorClasses = (color) => {
    const colorMap = {
      cyan: 'border-cyan-500 text-cyan-400 hover:shadow-cyan-500/50',
      purple: 'border-purple-500 text-purple-400 hover:shadow-purple-500/50',
      green: 'border-green-500 text-green-400 hover:shadow-green-500/50',
      blue: 'border-blue-500 text-blue-400 hover:shadow-blue-500/50',
      yellow: 'border-yellow-500 text-yellow-400 hover:shadow-yellow-500/50',
      orange: 'border-orange-500 text-orange-400 hover:shadow-orange-500/50',
      red: 'border-red-500 text-red-400 hover:shadow-red-500/50',
      gray: 'border-gray-500 text-gray-400 hover:shadow-gray-500/50'
    }
    return colorMap[color] || colorMap.cyan
  }

  return (
    <section id="skills" className="py-20 relative">
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
            <span className="gradient-text">Skills</span>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-4"></div>
          </motion.h2>

          {/* Skills Grid */}
          <div className="space-y-12">
            {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              >
                {/* Category Header */}
                <h3 className="text-2xl font-orbitron font-bold mb-6 neon-text-cyan">
                  {category}
                </h3>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="glass-morphism rounded-lg p-4 border transition-all duration-300"
                      style={{
                        borderColor: hoveredSkill === `${category}-${skill.name}` ? 
                          `var(--neon-${skill.color})` : 'rgba(255, 255, 255, 0.1)'
                      }}
                      onMouseEnter={() => {
                        playHoverSound()
                        setHoveredSkill(`${category}-${skill.name}`)
                      }}
                      onMouseLeave={() => setHoveredSkill(null)}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: hoveredSkill === `${category}-${skill.name}` ? 
                          `0 0 20px var(--neon-${skill.color})` : 'none'
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    >
                      {/* Skill Icon and Name */}
                      <div className="flex items-center space-x-3 mb-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${getColorClasses(skill.color)}`}>
                          <skill.icon className="w-5 h-5" />
                        </div>
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>

                      {/* Skill Level */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-gray-400">
                          <span>Proficiency</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{
                              background: `linear-gradient(90deg, var(--neon-${skill.color}), var(--neon-${skill.color})80)`
                            }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3 }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* CSS Variables for dynamic colors */}
      <style jsx>{`
        :root {
          --neon-cyan: #00FFFF;
          --neon-purple: #9B59B6;
          --neon-green: #00FF00;
          --neon-blue: #0080FF;
          --neon-yellow: #FFFF00;
          --neon-orange: #FFA500;
          --neon-red: #FF0000;
          --neon-gray: #808080;
        }
      `}</style>
    </section>
  )
}

export default Skills
