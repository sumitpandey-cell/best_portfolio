import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';


const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const handleScrollToTop = () => {
    const event = new CustomEvent('lenisControl', {
      detail: {
        action: 'scrollTo',
        target: 0,
        duration: 1.5
      }
    });
    window.dispatchEvent(event);
  };

  return (
    <button
      onClick={handleScrollToTop}
      className={`
        fixed bottom-8 right-8 z-50
        w-12 h-12 
        bg-linear-to-r from-blue-600 to-purple-600 
        hover:from-blue-700 hover:to-purple-700
        rounded-full 
        shadow-lg hover:shadow-xl
        transition-all duration-300 ease-out
        flex items-center justify-center
        backdrop-blur-sm
        border border-white/20
        group
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
      `}
      aria-label="Scroll to top"
    >
      <ChevronUp
        size={24}
        className="text-white transition-transform duration-300 group-hover:scale-110"
      />
    </button>
  );
};

export default ScrollToTop;