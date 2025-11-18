import { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Preloader from './components/Preloader'
import SmoothScrolling from './components/SmoothScrolling'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'
import './App.css'
import ScrollVelocity from './components/ui/scrollVelocity'

function App() {
  const [showPreloader, setShowPreloader] = useState(true)
  const [showContent, setShowContent] = useState(false)

  const handlePreloaderComplete = () => {
    // Faster transition timing
    setTimeout(() => {
      setShowPreloader(false)
      setShowContent(true)
    }, 200)
  }

  return (
    <div className="App min-h-screen relative">
      {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}

      {/* Scroll Progress Indicator */}
      {showContent && <ScrollProgress />}

      {/* Main content with smooth scrolling */}
      {showContent && (
        <SmoothScrolling>
          <div className={`transition-all duration-700 ease-out ${showContent ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
            }`}>
            <Hero />
            <ScrollVelocity
              texts={['SUMIT', 'PANDEY', ""]}
              velocity={30}
            />
            <About />
            {/* <SmoothCursor /> */}
            <Contact />
          </div>
        </SmoothScrolling>
      )}

      {/* Scroll to Top Button */}
      {showContent && <ScrollToTop />}
    </div>
  )
}

export default App
