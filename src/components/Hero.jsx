import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowDown } from 'react-icons/fa'
import { playClickSound, playHoverSound } from '../utils/sounds'

const Hero = () => {
  const [currentText, setCurrentText] = useState('')
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const words = [
    'Web Developer',
    'App Developer', 
    'Cybersecurity Enthusiast',
    'AI Builder'
  ]

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex]
      
      if (!isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length + 1))
        
        if (currentText === currentWord) {
          setTypingSpeed(2000) // Pause at end
          setTimeout(() => setIsDeleting(true), 2000)
        } else {
          setTypingSpeed(150)
        }
      } else {
        setCurrentText(currentWord.substring(0, currentText.length - 1))
        setTypingSpeed(100)
        
        if (currentText === '') {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [currentText, currentWordIndex, isDeleting, typingSpeed, words])

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/sanjay5422', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/sanjay-k-707499321', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:sanjaykandhan542216@gmail.com', label: 'Email' }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Greeting */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-white">Hi, I'm </span>
            <span className="gradient-text animate-glow-cyan">SANJAY K</span>
          </motion.h1>

          {/* Typewriter Animation */}
          <motion.div 
            className="text-2xl md:text-3xl lg:text-4xl mb-6 h-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="text-gray-300">I'm a </span>
            <span className="neon-text-cyan font-orbitron">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Computer Science Student @ KIT, Coimbatore
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.button
              onClick={() => {
                playClickSound()
                scrollToSection('projects')
              }}
              onMouseEnter={playHoverSound}
              className="px-8 py-3 neon-border rounded-lg text-cyan-400 font-semibold hover:bg-cyan-400/10 transition-all duration-300 hover-glow-cyan"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            
            <a 
              href="/Sanjay_Resume.pdf"
              download="Sanjay_K_Resume.pdf"
              target="_blank"
              onClick={playClickSound}
              onMouseEnter={playHoverSound}
              className="px-8 py-3 neon-border-purple rounded-lg text-purple-400 font-semibold hover:bg-purple-400/10 transition-all duration-300 hover-glow-purple inline-flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload />
              ⬇ Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center space-x-6 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <motion.button
              onClick={() => scrollToSection('about')}
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FaArrowDown className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
