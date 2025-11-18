import { useEffect, useState } from 'react';

const SimplePreloader = ({ onComplete }: { onComplete: () => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const greetings = [
    { text: "Hello", lang: "English" },
    { text: "नमस्ते", lang: "हिंदी" },
    { text: "नमस्कार", lang: "भोजपुरी" },
    { text: "வணக்கம்", lang: "தமிழ்" },
    { text: "Hallå", lang: "Svenska" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev < greetings.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setIsComplete(true);
          setTimeout(onComplete, 400); // Much faster exit
          return prev;
        }
      });
    }, 600); // Much faster transitions - 0.6s per greeting

    return () => clearInterval(interval);
  }, [greetings.length, onComplete]);

  return (
    <div className={`fixed inset-0 bg-black z-50 transition-all duration-700 ease-out ${
      isComplete ? 'transform -translate-y-full opacity-0' : 'transform translate-y-0 opacity-100'
    }`}>
      
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            animation: 'grid-flow 8s linear infinite'
          }}
        />
      </div>
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-black to-gray-900 opacity-90" />
      
      {/* Staircase Steps Container */}
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        {greetings.map((greeting, index) => (
          <div
            key={index}
            className={`stair-screen absolute w-full h-full flex items-center justify-center transition-all duration-500 ease-out ${
              index === currentIndex ? 'opacity-100 z-10 scale-100 blur-0' : 
              index < currentIndex ? 'opacity-0 z-0 scale-95 -translate-y-4 blur-sm' : 'opacity-0 z-0 scale-105 translate-y-4 blur-sm'
            }`}
            style={{
              transitionDelay: `${index * 50}ms`
            }}
          >
            {/* Glowing backdrop */}
            <div className={`absolute inset-0 transition-all duration-700 ${
              index === currentIndex ? 'bg-blue-500/5' : 'bg-transparent'
            }`} />
            
            {/* Simple centered text with glow effects */}
            <div className="text-center relative z-10">
              <h1 className={`text-7xl md:text-9xl font-light text-white transition-all duration-500 ease-out ${
                index === currentIndex ? 'scale-100 opacity-100 translate-y-0 drop-shadow-2xl' : 'scale-90 opacity-40 translate-y-6'
              }`}
              style={{
                textShadow: index === currentIndex ? '0 0 40px rgba(59, 130, 246, 0.5), 0 0 80px rgba(59, 130, 246, 0.3)' : 'none',
                background: index === currentIndex ? 'linear-gradient(135deg, #ffffff 0%, #3b82f6 50%, #8b5cf6 100%)' : '#ffffff',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                {greeting.text}
              </h1>
              <p className={`text-xl text-gray-400 mt-6 transition-all duration-400 delay-100 ${
                index === currentIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                {greeting.lang}
              </p>
            </div>
            
            {/* Floating particles for current greeting */}
            {index === currentIndex && (
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/40 rounded-full animate-pulse" 
                     style={{ animation: 'float 3s ease-in-out infinite' }} />
                <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-purple-400/40 rounded-full animate-pulse delay-75" 
                     style={{ animation: 'float 4s ease-in-out infinite reverse' }} />
                <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-cyan-400/20 rounded-full animate-pulse delay-150" 
                     style={{ animation: 'float 2.5s ease-in-out infinite' }} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Enhanced progress indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-4 mb-6">
          {greetings.map((_, index) => (
            <div
              key={index}
              className={`relative transition-all duration-400 ${
                index === currentIndex ? 'scale-150' : 
                index < currentIndex ? 'scale-110' : 'scale-75'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className={`w-3 h-3 rounded-full transition-all duration-400 ${
                index === currentIndex ? 'bg-blue-500 shadow-lg shadow-blue-500/50' : 
                index < currentIndex ? 'bg-gray-600' : 'bg-gray-800 border border-gray-700'
              }`} />
              {index === currentIndex && (
                <div className="absolute inset-0 w-3 h-3 bg-blue-500 rounded-full animate-ping opacity-30" />
              )}
            </div>
          ))}
        </div>
        
        {/* Loading progress bar */}
        <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-linear-to-r from-blue-500 via-purple-500 to-cyan-500 transition-all duration-400 ease-out"
            style={{ 
              width: `${((currentIndex + 1) / greetings.length) * 100}%`,
              boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)'
            }}
          />
        </div>
        
        {/* Loading text with typing effect */}
        <p className="text-center text-gray-300 text-sm mt-4 transition-all duration-300">
          {currentIndex < greetings.length - 1 ? (
            <span className="opacity-80">Initializing Portfolio...</span>
          ) : (
            <span className="text-blue-400 font-medium">Ready to Launch! 🚀</span>
          )}
        </p>
      </div>
      
      {/* Smooth exit transition with particles */}
      {isComplete && (
        <>
          <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black opacity-50 animate-pulse" />
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${2 + Math.random() * 3}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SimplePreloader;