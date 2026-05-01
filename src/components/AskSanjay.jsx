import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa'
import { playClickSound, playHoverSound } from '../utils/sounds'

export default function AskSanjay() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const SYSTEM_PROMPT = `You are Sanjay K's portfolio assistant. 
Answer questions about Sanjay concisely and professionally.
Only answer questions about Sanjay. Refuse other topics politely.

Here is everything about Sanjay:
NAME: Sanjay K
ROLE: Web Developer, App Developer, Cybersecurity Enthusiast
EDUCATION: B.E. CSE at KIT Coimbatore, Expected 2028
EMAIL: sanjaykandhan542216@gmail.com
PHONE: +91 9597403601
GITHUB: github.com/sanjay5422
LINKEDIN: linkedin.com/in/sanjay-k-707499321

PROJECTS:
1. JARVIS - Personal AI Voice Agent (Python, ML, NLP)
2. MilkAnalyzer - PALS INNOWAH 2026 National Finalist (ML)
3. EYIC Food Saver - Zero Hunger Initiative (FastAPI, PostgreSQL)
4. Phishing Email Detection - ITERX 2026 Hackathon (ML, NLP)
5. Tender Cartel Detection - TOP 10 in India, Govt of India AI for All

ACHIEVEMENTS:
- TOP 10 NATIONAL FINALIST in AI for All by Govt of India
- National Hackathon ITERX 2026
- PALS INNOWAH 2026 Finalist under IIT Madras
- Student Lead at PALS IIT Madras
- VIT Bangalore GLOW Hackathon Participant 2024

SKILLS: Python, JavaScript, React, FastAPI, Flask, 
        MySQL, PostgreSQL, MongoDB, AWS, Cybersecurity,
        OWASP, JWT, OAuth, NLP, Machine Learning

Keep answers short (2-3 sentences max).`

  const suggestedQuestions = [
    "What projects did Sanjay build?",
    "What are Sanjay's skills?",
    "How can I contact Sanjay?",
    "What is Sanjay's biggest achievement?"
  ]

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const getFallbackResponse = (message) => {
    const lowerMessage = message.toLowerCase()
    
    // Project-related responses
    if (lowerMessage.includes('project') || lowerMessage.includes('build') || lowerMessage.includes('created')) {
      return "Sanjay has built 5 amazing projects: JARVIS AI Voice Agent, MilkAnalyzer (National Finalist), EYIC Food Saver, Phishing Email Detection, and Tender Cartel Detection (TOP 10 in India)."
    }
    
    // Skills-related responses
    if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('know')) {
      return "Sanjay is skilled in Python, JavaScript, React, FastAPI, Flask, databases (MySQL, PostgreSQL, MongoDB), AWS, cybersecurity, and machine learning."
    }
    
    // Contact-related responses
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('reach')) {
      return "You can contact Sanjay at sanjaykandhan542216@gmail.com or +91 9597403601. Find him on GitHub (sanjay5422) and LinkedIn too!"
    }
    
    // Achievement-related responses
    if (lowerMessage.includes('achievement') || lowerMessage.includes('award') || lowerMessage.includes('accomplishment')) {
      return "Sanjay's biggest achievement is being TOP 10 NATIONAL FINALIST in AI for All by Government of India. He's also a PALS INNOWAH Finalist and Student Lead at PALS IIT Madras."
    }
    
    // Education-related responses
    if (lowerMessage.includes('education') || lowerMessage.includes('study') || lowerMessage.includes('college')) {
      return "Sanjay is pursuing B.E. Computer Science at KIT Coimbatore, expected to graduate in 2028."
    }
    
    // Default response
    return "I can tell you about Sanjay's projects, skills, education, achievements, or how to contact him. What would you like to know?"
  }

  const sendMessage = async (message) => {
    if (!message.trim()) return

    const userMessage = { role: 'user', content: message }
    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    // Simulate typing delay for better UX
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Use fallback response system (no API key required)
    const response = getFallbackResponse(message)
    const botMessage = { role: 'assistant', content: response }
    setMessages(prev => [...prev, botMessage])
    
    setIsTyping(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    sendMessage(inputMessage)
  }

  const handleSuggestedQuestion = (question) => {
    sendMessage(question)
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => {
          playClickSound()
          setIsOpen(!isOpen)
        }}
        onMouseEnter={playHoverSound}
        className="fixed bottom-40 right-8 w-14 h-14 bg-cyan-500/20 border border-cyan-500 rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-500/30 transition-colors z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Ask Sanjay"
      >
        <FaRobot className="text-xl" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-56 right-8 w-[350px] h-[450px] glass-morphism rounded-2xl border-2 border-cyan-500 flex flex-col z-50"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-cyan-500/30">
              <div className="flex items-center gap-2">
                <FaRobot className="text-cyan-400" />
                <h3 className="text-cyan-400 font-orbitron font-semibold">Ask Sanjay</h3>
              </div>
              <button
                onClick={() => {
                  playClickSound()
                  setIsOpen(false)
                }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTimes />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.length === 0 && (
                <div className="text-center text-gray-400 text-sm">
                  <p className="mb-4">Hi! I'm Sanjay's AI assistant.</p>
                  <p>Ask me anything about Sanjay's skills, projects, or experience!</p>
                  <div className="mt-4 space-y-2">
                    {suggestedQuestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestedQuestion(question)}
                        className="block w-full text-left p-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-300 hover:bg-cyan-500/20 transition-colors text-sm"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.role === 'user'
                        ? 'bg-cyan-500/20 border border-cyan-500/50 text-cyan-300'
                        : 'bg-gray-800/50 border border-gray-600/50 text-gray-300'
                    }`}
                  >
                    {message.content}
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-800/50 border border-gray-600/50 text-gray-300 p-3 rounded-lg">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-cyan-500/30">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 text-sm"
                />
                <button
                  type="submit"
                  disabled={!inputMessage.trim() || isTyping}
                  className="px-3 py-2 bg-cyan-500/20 border border-cyan-500 rounded-lg text-cyan-400 hover:bg-cyan-500/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FaPaperPlane />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
