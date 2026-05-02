import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaExternalLinkAlt, FaLinkedin, FaTwitter } from 'react-icons/fa'
import blogPosts from '../data/blogPosts'
import { useTheme } from '../context/ThemeContext'
import { playClickSound, playHoverSound } from '../utils/sounds'

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null)
  const [filter, setFilter] = useState('All')
  const { currentTheme } = useTheme()

  const categories = ['All', 'Cybersecurity', 'AI / ML', 'Personal', 'AI / Government Tech']

  const filteredPosts = filter === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === filter)

  const getColorClasses = (color) => {
    const colorMap = {
      cyan: 'text-cyan-400 border-cyan-500',
      purple: 'text-purple-400 border-purple-500',
      gold: 'text-yellow-400 border-yellow-500',
      green: 'text-green-400 border-green-500'
    }
    return colorMap[color] || colorMap.cyan
  }

  const openModal = (post) => {
    playClickSound()
    setSelectedPost(post)
  }

  const closeModal = () => {
    playClickSound()
    setSelectedPost(null)
  }

  const shareOnLinkedIn = (post) => {
    playClickSound()
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}`
    window.open(url, '_blank')
  }

  const shareOnTwitter = (post) => {
    playClickSound()
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`
    window.open(url, '_blank')
  }

  return (
    <section id="blog" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title */}
          <motion.h2 
            className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="gradient-text">Blog & Articles</span>
          </motion.h2>
          
          {/* Section Subtitle */}
          <motion.p 
            className="text-xl text-gray-400 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Thoughts on AI, Cybersecurity & Development
          </motion.p>

          {/* Section Underline */}
          <motion.div 
            className="w-24 h-1 mx-auto rounded-full"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '6rem' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ background: `linear-gradient(90deg, var(--primary), var(--secondary))` }}
          />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => {
                playClickSound()
                setFilter(category)
              }}
              onMouseEnter={playHoverSound}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                filter === category
                  ? 'border-2 text-white'
                  : 'border border-gray-600 text-gray-400 hover:border-gray-400'
              }`}
              style={{
                borderColor: filter === category ? 'var(--primary)' : undefined,
                boxShadow: filter === category ? `0 0 20px var(--primary)` : undefined
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="glass-morphism rounded-2xl p-6 border transition-all duration-300 hover:transform hover:-translate-y-2"
              style={{
                borderColor: post.color === 'gold' ? '#FFD700' : 'rgba(255, 255, 255, 0.1)',
                boxShadow: post.color === 'gold' ? '0 0 20px #FFD700, 0 0 40px rgba(255,215,0,0.3)' : undefined
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onMouseEnter={playHoverSound}
              whileHover={{
                boxShadow: post.color === 'gold' 
                  ? '0 0 30px #FFD700, 0 0 60px rgba(255,215,0,0.4)' 
                  : `0 0 30px var(--primary)`
              }}
            >
              {/* Gold Badge for Featured Post */}
              {post.id === 3 && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-400/20 border border-yellow-400 rounded-full text-xs text-yellow-300">
                  🏆 Featured — Govt. of India Recognition
                </div>
              )}

              {/* Emoji */}
              <div className="text-4xl mb-4">{post.emoji}</div>

              {/* Category Badge */}
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${getColorClasses(post.color)} border`}>
                {post.category}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 2).map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-gray-800/50 border border-gray-600 rounded-full text-xs text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Date and Read Time */}
              <div className="flex justify-between text-xs text-gray-500 mb-4">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>

              {/* Read More Button */}
              <motion.button
                onClick={() => openModal(post)}
                onMouseEnter={playHoverSound}
                className="w-full py-2 rounded-lg border transition-all duration-300 flex items-center justify-center gap-2"
                style={{
                  borderColor: post.color === 'gold' ? '#FFD700' : 'var(--primary)',
                  color: post.color === 'gold' ? '#FFD700' : 'var(--primary)'
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Read More <FaExternalLinkAlt className="text-xs" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Blog Post Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden border"
              style={{ borderColor: selectedPost.color === 'gold' ? '#FFD700' : 'var(--primary)' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-gray-800 flex justify-between items-start">
                <div className="flex-1">
                  {/* Category and Date */}
                  <div className="flex items-center gap-4 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getColorClasses(selectedPost.color)} border`}>
                      {selectedPost.category}
                    </span>
                    <span className="text-gray-400 text-sm">{selectedPost.date}</span>
                    <span className="text-gray-400 text-sm">•</span>
                    <span className="text-gray-400 text-sm">{selectedPost.readTime}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {selectedPost.title}
                  </h2>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {selectedPost.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-800/50 border border-gray-600 rounded-full text-sm text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="ml-4 text-gray-400 hover:text-white transition-colors"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto max-h-[50vh]">
                <div className="prose prose-invert max-w-none">
                  {selectedPost.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-300 mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-gray-800 flex justify-between items-center">
                <div className="text-gray-400 text-sm">
                  Written by Sanjay K
                </div>
                
                {/* Share Buttons */}
                <div className="flex gap-4">
                  <motion.button
                    onClick={() => shareOnLinkedIn(selectedPost)}
                    onMouseEnter={playHoverSound}
                    className="px-4 py-2 bg-blue-600/20 border border-blue-600 rounded-lg text-blue-400 hover:bg-blue-600/30 transition-colors flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaLinkedin /> Share on LinkedIn
                  </motion.button>
                  
                  <motion.button
                    onClick={() => shareOnTwitter(selectedPost)}
                    onMouseEnter={playHoverSound}
                    className="px-4 py-2 bg-sky-500/20 border border-sky-500 rounded-lg text-sky-400 hover:bg-sky-500/30 transition-colors flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaTwitter /> Share on Twitter
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
