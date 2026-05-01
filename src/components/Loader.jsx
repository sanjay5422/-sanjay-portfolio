import { useState, useEffect } from 'react'

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [matrixChars, setMatrixChars] = useState([])

  useEffect(() => {
    // Generate matrix characters for background
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'
    const matrixArray = Array.from({ length: 50 }, () => 
      Array.from({ length: 20 }, () => chars[Math.floor(Math.random() * chars.length)])
    )
    setMatrixChars(matrixArray)

    // Progress animation
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(onComplete, 500) // Small delay before fade out
          return 100
        }
        return prev + 1
      })
    }, 30) // 3 seconds total (100 * 30ms)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center">
      {/* Matrix Background */}
      <div className="absolute inset-0 overflow-hidden">
        {matrixChars.map((row, rowIndex) => (
          <div key={rowIndex} className="flex">
            {row.map((char, charIndex) => (
              <span
                key={charIndex}
                className="text-green-500/20 text-xs font-mono animate-pulse"
                style={{
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              >
                {char}
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Main Name */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold mb-4">
          <span className="text-cyan-400 animate-pulse" style={{ textShadow: '0 0 20px #00FFFF, 0 0 40px #00FFFF' }}>
            SANJAY.DEV
          </span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-orbitron mb-8">
          <span className="text-purple-400 animate-pulse" style={{ textShadow: '0 0 15px #9B59B6, 0 0 30px #9B59B6' }}>
            DEVELOPER
          </span>
        </h2>

        {/* Progress Bar Container */}
        <div className="w-64 md:w-80 mx-auto mb-4">
          {/* Progress Bar */}
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden mb-2">
            <div 
              className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-300 ease-out"
              style={{ 
                width: `${progress}%`,
                boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)'
              }}
            />
          </div>

          {/* Percentage Counter */}
          <div className="text-cyan-400 font-mono text-lg">
            {progress}%
          </div>
        </div>

        {/* Loading Text */}
        <p className="text-gray-400 text-sm animate-pulse">
          Loading amazing portfolio...
        </p>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  )
}
