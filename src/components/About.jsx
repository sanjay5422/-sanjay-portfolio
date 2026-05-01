import { motion } from 'framer-motion'
import { FaGraduationCap, FaMapMarkerAlt, FaLanguage } from 'react-icons/fa'

const About = () => {
  return (
    <section id="about" className="py-20 relative">
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
            <span className="gradient-text">About Me</span>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-4"></div>
          </motion.h2>

          {/* Bio Card */}
          <motion.div 
            className="max-w-4xl mx-auto glass-morphism rounded-2xl p-8 md:p-12 neon-border"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ 
              boxShadow: '0 0 30px rgba(0, 255, 255, 0.3), 0 0 60px rgba(155, 89, 182, 0.2)' 
            }}
          >
            {/* Bio Text */}
            <motion.p 
              className="text-lg text-gray-300 leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Results-driven Computer Science student with strong passion for backend development, data engineering, and cybersecurity. I build scalable, secure systems and love working in fast-paced environments.
            </motion.p>

            {/* Info Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Education Status */}
              <motion.div
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center neon-border-cyan">
                    <FaGraduationCap className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Education</h3>
                  <p className="text-gray-400 text-sm">🎓 Currently Studying</p>
                  <p className="text-gray-400 text-sm">B.E. CSE, Expected 2028</p>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                className="flex items-start space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center neon-border-purple">
                    <FaMapMarkerAlt className="w-6 h-6 text-purple-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Location</h3>
                  <p className="text-gray-400 text-sm">Coimbatore, India</p>
                </div>
              </motion.div>

              {/* Languages */}
              <motion.div
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center neon-border">
                    <FaLanguage className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Languages</h3>
                  <p className="text-gray-400 text-sm">Tamil (Native)</p>
                  <p className="text-gray-400 text-sm">English (Fluent)</p>
                  <p className="text-gray-400 text-sm">Hindi (Basic)</p>
                </div>
              </motion.div>
            </div>

            {/* Additional Info */}
            <motion.div
              className="mt-8 pt-8 border-t border-gray-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
                  Backend Development
                </span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30">
                  Data Engineering
                </span>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
                  Cybersecurity
                </span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30">
                  Scalable Systems
                </span>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30">
                  Fast-paced Environments
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
