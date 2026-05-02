import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { playClickSound, playHoverSound } from '../utils/sounds'

export default function ThemeSwitcher() {
  const { currentTheme, themes, changeTheme } = useTheme()
  const [showTooltip, setShowTooltip] = useState('')

  const themeConfig = [
    { key: 'cyan', color: '#00FFFF', emoji: '🔵' },
    { key: 'purple', color: '#9B59B6', emoji: '🟣' },
    { key: 'matrix', color: '#00FF00', emoji: '🟢' },
    { key: 'ultraDark', color: '#00FF88', emoji: '🔴' }
  ]

  return (
    <motion.div
      className="fixed top-20 right-4 z-50 flex gap-2 p-2 glass-morphism rounded-full"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {themeConfig.map((theme) => (
        <motion.button
          key={theme.key}
          onClick={() => {
            playClickSound()
            changeTheme(theme.key)
          }}
          onMouseEnter={() => {
            playHoverSound()
            setShowTooltip(theme.key)
          }}
          onMouseLeave={() => setShowTooltip('')}
          className={`relative w-8 h-8 rounded-full transition-all duration-500 ease-in-out ${
            currentTheme === theme.key 
              ? 'ring-2 ring-offset-2 ring-offset-black' 
              : 'hover:scale-110'
          }`}
          style={{
            backgroundColor: theme.color,
            boxShadow: currentTheme === theme.key 
              ? `0 0 20px ${theme.color}, 0 0 40px ${theme.color}40`
              : `0 0 10px ${theme.color}40`,
            ringColor: currentTheme === theme.key ? theme.color : undefined
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {/* Tooltip */}
          {showTooltip === theme.key && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-full mb-2 right-0 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap"
              style={{ border: `1px solid ${theme.color}` }}
            >
              {themes[theme.key].name}
              <div 
                className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0"
                style={{
                  borderLeft: '4px solid transparent',
                  borderRight: '4px solid transparent',
                  borderTop: `4px solid ${theme.color}`
                }}
              />
            </motion.div>
          )}
        </motion.button>
      ))}
    </motion.div>
  )
}
