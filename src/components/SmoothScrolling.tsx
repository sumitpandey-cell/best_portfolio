import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import ScrollLoading from './ScrollLoading';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollingProps {
  children: React.ReactNode;
}

const SmoothScrolling: React.FC<SmoothScrollingProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    lenisRef.current = new Lenis({
      duration: 1.5,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
      syncTouch: false,
      syncTouchLerp: 0.1,
    });

    // Connect Lenis with GSAP ScrollTrigger
    lenisRef.current.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenisRef.current?.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Simulate initialization delay
    const timer = setTimeout(() => {
      setIsInitializing(false);
    }, 800);

    // Add custom CSS for better performance
    const style = document.createElement('style');
    style.textContent = `
      html {
        scroll-behavior: auto !important;
      }
      
      body {
        overflow-x: hidden;
        overscroll-behavior: none;
      }
      
      /* Smooth scrolling container */
      .lenis.lenis-smooth {
        scroll-behavior: auto !important;
      }
      
      .lenis.lenis-smooth [data-lenis-prevent] {
        overscroll-behavior: contain;
      }
      
      /* Performance optimizations */
      .smooth-scroll {
        transform: translateZ(0);
        backface-visibility: hidden;
        perspective: 1000px;
        will-change: transform;
      }

      /* Disable default smooth scroll */
      * {
        scroll-behavior: auto !important;
      }
    `;
    
    document.head.appendChild(style);
    document.body.classList.add('smooth-scroll');

    return () => {
      // Cleanup
      lenisRef.current?.destroy();
      gsap.ticker.remove((time) => {
        lenisRef.current?.raf(time * 1000);
      });
      ScrollTrigger.killAll();
      
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
      document.body.classList.remove('smooth-scroll');
      clearTimeout(timer);
    };
  }, []);

  // Expose Lenis instance for external control
  useEffect(() => {
    const handleLenisControl = (event: CustomEvent) => {
      const { action, target, duration, offset } = event.detail;
      
      if (lenisRef.current) {
        switch (action) {
          case 'scrollTo':
            lenisRef.current.scrollTo(target, { 
              duration: duration || 1.5,
              easing: (t: number) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
              lerp: 0.1,
              immediate: false,
              lock: false,
              force: false,
              offset: offset || 0
            });
            break;
          case 'stop':
            lenisRef.current.stop();
            break;
          case 'start':
            lenisRef.current.start();
            break;
        }
      }
    };

    window.addEventListener('lenisControl', handleLenisControl as EventListener);

    return () => {
      window.removeEventListener('lenisControl', handleLenisControl as EventListener);
    };
  }, []);

  return (
    <>
      <ScrollLoading isLoading={isInitializing} />
      <div 
        ref={scrollRef}
        className="w-full smooth-scroll"
        style={{
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          perspective: '1000px'
        }}
      >
        {children}
      </div>
    </>
  );
};

export default SmoothScrolling;