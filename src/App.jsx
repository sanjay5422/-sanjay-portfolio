import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Background3D from './components/Background3D'
import Loader from './components/Loader'
import MuteButton from './components/MuteButton'
import AskSanjay from './components/AskSanjay'

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <>
          <Background3D />
          <div className="relative min-h-screen overflow-x-hidden">
            {/* Main Content */}
            <div className="relative z-10">
              <Navbar />
              
              <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Achievements />
                <Contact />
              </main>

              {/* Footer */}
              <footer className="py-8 border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <p className="text-gray-400 mb-2">
                      Designed & Built with 💜 by{' '}
                      <span className="gradient-text font-orbitron font-bold">SANJAY K</span>
                    </p>
                    <p className="text-gray-500 text-sm">
                      © 2024 Sanjay K. All rights reserved.
                    </p>
                  </motion.div>
                </div>
              </footer>
            </div>

            {/* Scroll to Top Button */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="fixed bottom-8 right-8 w-12 h-12 bg-cyan-500/20 border border-cyan-500 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-500/30 transition-colors z-40"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </motion.button>

            {/* Mute Button */}
            <MuteButton />

            {/* Ask Sanjay Chatbot */}
            <AskSanjay />
          </div>
        </>
      )}
    </>
  )
}

export default App
