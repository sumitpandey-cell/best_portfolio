import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Preloader from './components/Preloader'
import SmoothScrolling from './components/SmoothScrolling'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'
import './App.css'
import ScrollVelocity from './components/ui/scrollVelocity'
import Projects from './components/projects'
import ParticleOrbitEffect from "./components/lightswind/particle-orbit-effect"
import {
  VideoPlayer,
  VideoPlayerContent,
  VideoPlayerControlBar,
  VideoPlayerPlayButton,
  VideoPlayerTimeRange,
  VideoPlayerMuteButton,
} from "./components/ui/skiper-ui/skiper67"


function App() {
  const [showPreloader, setShowPreloader] = useState(true)
  const [showContent, setShowContent] = useState(false)
  const [showVideoPopup, setShowVideoPopup] = useState(false)

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
      <div className={`absolute inset-0 transition-transform duration-1000 ease-out ${showContent ? 'translate-y-0' : 'translate-y-full'
        }`}>
        <SmoothScrolling>
          <div className={`transition-opacity duration-700 ease-out delay-300 ${showContent ? 'opacity-100' : 'opacity-0'
            }`}>
            <Hero />
            <ScrollVelocity
              texts={['SUMIT', 'PANDEY', ""]}
              velocity={40}
            />
            <About onVideoClick={() => setShowVideoPopup(true)} />
            <Projects />
            <Contact />
          </div>
        </SmoothScrolling>
      </div>

      {/* Scroll to Top Button */}
      {showContent && <ScrollToTop />}
      {showContent && <ParticleOrbitEffect
        particleCount={40}
        radius={90}
        particleSpeed={0.04}
        radiusScale={2}
        intensity={1.5}
        colorRange={[0, 60]}
      />}

      {/* Video Popup - Outside SmoothScrolling to prevent background scroll */}
      <AnimatePresence>
        {showVideoPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
              onClick={() => setShowVideoPopup(false)}
            />

            {/* Video Player Box */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative z-10 w-full max-w-4xl mx-4 sm:mx-6"
            >
              <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/30 border border-white/10">
                <VideoPlayer style={{ width: "100%", height: "100%" }}>
                  <VideoPlayerContent
                    src="/showreel/skiper-ui-showreel.mp4"
                    autoPlay
                    slot="media"
                    className="w-full h-full object-cover"
                  />
                  <VideoPlayerControlBar className="absolute bottom-0 left-1/2 flex w-full -translate-x-1/2 items-center justify-center px-5 py-3 bg-gradient-to-t from-black/80 to-transparent">
                    <VideoPlayerPlayButton className="h-4 bg-transparent text-white" />
                    <VideoPlayerTimeRange className="bg-transparent [--media-range-track-background:rgba(255,255,255,0.2)]" />
                    <VideoPlayerMuteButton className="size-4 bg-transparent text-white" />
                  </VideoPlayerControlBar>
                </VideoPlayer>

                {/* Close button - larger for touch */}
                <button
                  onClick={() => setShowVideoPopup(false)}
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 p-3 sm:p-2 rounded-full bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 hover:text-purple-400 transition-all z-20 min-w-[44px] min-h-[44px] flex items-center justify-center"
                >
                  <X className="w-6 h-6 sm:w-5 sm:h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
