# SANJAY K - Portfolio Website

A stunning React portfolio website featuring 3D animations, neon aesthetics, and modern web technologies.

## 🚀 Features

- **3D Particle Background**: Animated Three.js particle galaxy with floating geometric shapes
- **Neon Dark Theme**: Black background with cyan (#00FFFF) and purple (#9B59B6) neon accents
- **Smooth Animations**: Framer Motion powered scroll-triggered animations
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop
- **Interactive Elements**: Custom cursor glow, hover effects, and 3D flip cards
- **Modern Components**: Glass morphism effects, gradient text, and neon borders

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **3D Graphics**: Three.js + @react-three/fiber + @react-three/drei
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Fonts**: Orbitron (headings) + Inter (body)

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Sticky navigation with blur effect
│   ├── Hero.jsx            # Hero section with typewriter animation
│   ├── About.jsx           # About section with neon card
│   ├── Skills.jsx          # Skills with animated progress bars
│   ├── Projects.jsx        # 3D flip cards for projects
│   ├── Achievements.jsx    # Timeline-style achievements
│   ├── Contact.jsx         # Contact form and info
│   └── Background3D.jsx    # Three.js particle galaxy
├── App.jsx                 # Main app component
├── main.jsx               # React entry point
└── index.css              # Global styles and Tailwind
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sanjay-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🎨 Design System

### Colors
- **Primary Neon**: Cyan (#00FFFF)
- **Secondary Neon**: Purple (#9B59B6)
- **Background**: Dark (#0A0A0A)
- **Text**: White (#FFFFFF)
- **Text Secondary**: Gray (#9CA3AF)

### Typography
- **Headings**: Orbitron (futuristic, bold)
- **Body**: Inter (clean, readable)

### Components
- **Glass Morphism**: `rgba(255, 255, 255, 0.05)` background with blur
- **Neon Borders**: 2px borders with glow effects
- **Hover Effects**: Scale transforms and enhanced glows
- **Animations**: Smooth transitions and scroll-triggered reveals

## 📱 Sections

1. **Hero**: Animated introduction with typewriter effect
2. **About**: Personal information and bio
3. **Skills**: Categorized skills with progress indicators
4. **Projects**: 3D flip cards showcasing work
5. **Achievements**: Timeline of accomplishments
6. **Contact**: Contact form and information

## 🎯 Key Features

### 3D Background
- Thousands of animated particles
- Floating geometric shapes (torus, icosahedron, octahedron)
- Mouse parallax effects
- Continuous rotation and movement

### Interactive Elements
- Custom neon cursor that follows mouse movement
- Hover states with glow effects
- Smooth scroll navigation
- Mobile-responsive hamburger menu

### Performance Optimizations
- Lazy loading for 3D components
- Optimized animations with GPU acceleration
- Efficient particle rendering
- Responsive image handling

## 🔧 Customization

### Adding New Projects
Edit `src/components/Projects.jsx` and add to the `projects` array:

```javascript
{
  id: 6,
  title: 'Project Name',
  tag: 'Project Tag',
  icon: FaIcon,
  iconColor: 'cyan',
  description: 'Project description...',
  technologies: ['Tech1', 'Tech2'],
  github: 'https://github.com/...',
  demo: 'https://demo.com'
}
```

### Modifying Colors
Update the color values in:
- `tailwind.config.js` (Tailwind configuration)
- `src/index.css` (CSS custom properties)
- Component files (inline styles)

### Adding New Skills
Edit `src/components/Skills.jsx` and modify the `skillsData` object.

## 🌟 Browser Support

- Chrome/Edge (Recommended)
- Firefox
- Safari (with fallbacks)
- Mobile browsers

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**Sanjay K**
- Computer Science Student @ KIT, Coimbatore
- Web Developer | App Developer | Cybersecurity Enthusiast
- GitHub: [@sanjay5422](https://github.com/sanjay5422)
- LinkedIn: [sanjay-k-707499321](https://linkedin.com/in/sanjay-k-707499321)

---

Built with ❤️ and lots of neon glow! ✨
