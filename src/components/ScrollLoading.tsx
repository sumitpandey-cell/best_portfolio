import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface ScrollLoadingProps {
  isLoading: boolean;
}

const ScrollLoading: React.FC<ScrollLoadingProps> = ({ isLoading }) => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loaderRef.current || !textRef.current) return;

    if (isLoading) {
      // Show loading animation
      gsap.set(loaderRef.current, { 
        opacity: 1, 
        pointerEvents: 'all',
        zIndex: 10000 
      });
      
      // Text animation
      gsap.fromTo(textRef.current, 
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6,
          ease: 'power2.out'
        }
      );

      // Pulse effect
      gsap.to(textRef.current, {
        scale: 1.05,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut'
      });
    } else {
      // Hide loading animation
      gsap.to(loaderRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
        onComplete: () => {
          gsap.set(loaderRef.current, { pointerEvents: 'none' });
        }
      });
    }
  }, [isLoading]);

  return (
    <div 
      ref={loaderRef}
      className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center transition-opacity duration-500"
      style={{ zIndex: 10000 }}
    >
      <div 
        ref={textRef}
        className="text-center space-y-4"
      >
        <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-white text-lg font-medium">
          Initializing Smooth Experience...
        </p>
      </div>
    </div>
  );
};

export default ScrollLoading;