let audioContext = null
let isMuted = false

// Initialize Audio Context
const initAudioContext = () => {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)()
  }
  return audioContext
}

// Play click sound - short soft click (like keyboard click)
export const playClickSound = () => {
  if (isMuted) return
  
  try {
    const ctx = initAudioContext()
    const oscillator = ctx.createOscillator()
    const gainNode = ctx.createGain()
    
    oscillator.connect(gainNode)
    gainNode.connect(ctx.destination)
    
    oscillator.frequency.value = 800
    oscillator.type = 'sine'
    
    gainNode.gain.setValueAtTime(0.05, ctx.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1)
    
    oscillator.start(ctx.currentTime)
    oscillator.stop(ctx.currentTime + 0.1)
  } catch (error) {
    console.log('Audio not supported')
  }
}

// Play hover sound - very subtle soft blip
export const playHoverSound = () => {
  if (isMuted) return
  
  try {
    const ctx = initAudioContext()
    const oscillator = ctx.createOscillator()
    const gainNode = ctx.createGain()
    
    oscillator.connect(gainNode)
    gainNode.connect(ctx.destination)
    
    oscillator.frequency.value = 600
    oscillator.type = 'sine'
    
    gainNode.gain.setValueAtTime(0.03, ctx.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05)
    
    oscillator.start(ctx.currentTime)
    oscillator.stop(ctx.currentTime + 0.05)
  } catch (error) {
    console.log('Audio not supported')
  }
}

// Play success sound - for form submit success
export const playSuccessSound = () => {
  if (isMuted) return
  
  try {
    const ctx = initAudioContext()
    const oscillator1 = ctx.createOscillator()
    const oscillator2 = ctx.createOscillator()
    const gainNode = ctx.createGain()
    
    oscillator1.connect(gainNode)
    oscillator2.connect(gainNode)
    gainNode.connect(ctx.destination)
    
    // First tone
    oscillator1.frequency.value = 600
    oscillator1.type = 'sine'
    
    // Second tone (ascending)
    oscillator2.frequency.value = 900
    oscillator2.type = 'sine'
    
    gainNode.gain.setValueAtTime(0.05, ctx.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2)
    
    oscillator1.start(ctx.currentTime)
    oscillator1.stop(ctx.currentTime + 0.1)
    
    oscillator2.start(ctx.currentTime + 0.1)
    oscillator2.stop(ctx.currentTime + 0.2)
  } catch (error) {
    console.log('Audio not supported')
  }
}

// Toggle mute/unmute
export const toggleMute = () => {
  isMuted = !isMuted
  return isMuted
}

// Get current mute state
export const getMuteState = () => {
  return isMuted
}

// Set mute state
export const setMuteState = (muted) => {
  isMuted = muted
}
