import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { playClickSound, toggleMute, getMuteState } from '../utils/sounds'

export default function MuteButton() {
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    setIsMuted(getMuteState())
  }, [])

  const handleToggle = () => {
    playClickSound()
    const newState = toggleMute()
    setIsMuted(newState)
  }

  return (
    <motion.button
      onClick={handleToggle}
      className="fixed bottom-24 right-8 w-12 h-12 bg-purple-500/20 border border-purple-500 rounded-full flex items-center justify-center text-purple-400 hover:bg-purple-500/30 transition-colors z-40"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title={isMuted ? "Unmute Sounds" : "Mute Sounds"}
    >
      <span className="text-xl">
        {isMuted ? '🔇' : '🔊'}
      </span>
    </motion.button>
  )
}
