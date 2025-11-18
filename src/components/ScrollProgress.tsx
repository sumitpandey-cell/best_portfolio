import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrolled = window.scrollY;
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = Math.min((scrolled / maxHeight) * 100, 100);
      setProgress(scrollProgress);
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress, { passive: true });
    
    // Initial call
    updateProgress();

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-9999 bg-black/10">
      <div 
        className="h-full bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 ease-out"
        style={{ 
          width: `${progress}%`,
          boxShadow: progress > 0 ? '0 0 10px rgba(147, 51, 234, 0.5)' : 'none'
        }}
      />
    </div>
  );
};

export default ScrollProgress;