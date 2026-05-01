import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import { playSuccessSound } from '../utils/sounds'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'sanjaykandhan542216@gmail.com',
      href: 'mailto:sanjaykandhan542216@gmail.com',
      color: 'cyan'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 9597403601',
      href: 'tel:+919597403601',
      color: 'purple'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Coimbatore, India',
      href: '#',
      color: 'green'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'github.com/sanjay5422',
      href: 'https://github.com/sanjay5422',
      color: 'gray'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/sanjay-k-707499321',
      href: 'https://linkedin.com/in/sanjay-k-707499321',
      color: 'blue'
    }
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // 1. Go to https://emailjs.com and sign up free
      // 2. Create a service (Gmail) — copy SERVICE_ID
      // 3. Create a template with these variables:
      //    {{from_name}}, {{from_email}}, {{message}}
      // 4. Copy TEMPLATE_ID and PUBLIC_KEY
      // 5. Replace the placeholder values below
      
      await emailjs.send(
        'YOUR_SERVICE_ID',      // replace this
        'YOUR_TEMPLATE_ID',     // replace this
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY'       // replace this
      )
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      playSuccessSound()  // from Feature 3
      setTimeout(() => setSubmitStatus(''), 5000)
    } catch (error) {
      console.error('EmailJS error:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(''), 5000)
    }
    setIsSubmitting(false)
  }

  const getIconColor = (color) => {
    const colorMap = {
      cyan: 'text-cyan-400 border-cyan-500',
      purple: 'text-purple-400 border-purple-500',
      green: 'text-green-400 border-green-500',
      gray: 'text-gray-400 border-gray-500',
      blue: 'text-blue-400 border-blue-500'
    }
    return colorMap[color] || colorMap.cyan
  }

  return (
    <section id="contact" className="py-20 relative">
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
            <span className="gradient-text">Get In Touch</span>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-4"></div>
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="glass-morphism rounded-2xl p-8 neon-border">
                <h3 className="text-2xl font-orbitron font-bold text-white mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : '_self'}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/5 transition-colors duration-200 group"
                      whileHover={{ x: 10 }}
                    >
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center border-2 ${getIconColor(info.color)}`}>
                        <info.icon className={`w-5 h-5 ${getIconColor(info.color).split(' ')[0]}`} />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">{info.label}</div>
                        <div className="text-white group-hover:text-cyan-400 transition-colors">
                          {info.value}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Additional Info */}
                <div className="mt-8 p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
                  <p className="text-sm text-cyan-400">
                    📧 Feel free to reach out for collaborations, opportunities, or just to say hello!
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="glass-morphism rounded-2xl p-8 neon-border-purple">
                <h3 className="text-2xl font-orbitron font-bold text-white mb-6">
                  Send Me a Message
                </h3>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400"
                  >
                    ✅ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400"
                  >
                    ❌ Failed to send message. Please try again.
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                      placeholder="Your Name"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                      placeholder="Your message here..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
