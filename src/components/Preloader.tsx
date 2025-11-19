import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const progressRef = useRef<HTMLDivElement>(null);

  const greetings = [
    { text: "Hello", lang: "English" },
    { text: "नमस्ते", lang: "Hindi" },
    { text: "வணக்கம்", lang: "Tamil" },
    { text: "నమస్కారం", lang: "Telugu" },
    { text: "ನಮಸ್ಕಾರ", lang: "Kannada" },
    { text: "નમસ્તે", lang: "Gujarati" },
  ];

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(onComplete, 200);
      }
    });

    // Animate each greeting
    greetings.forEach((_, index) => {
      if (textRefs.current[index]) {
        // Fade in and scale up
        tl.fromTo(
          textRefs.current[index],
          {
            opacity: 0,
            scale: 0.8,
            y: 50,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          index * 0.5
        );

        // Fade out
        tl.to(
          textRefs.current[index],
          {
            opacity: 0,
            scale: 1.1,
            y: -30,
            duration: 0.4,
            ease: "power2.in",
          },
          index * 0.5 + 0.4
        );
      }
    });

    // Animate progress bar
    tl.to(
      progressRef.current,
      {
        scaleX: 1,
        duration: greetings.length * 0.5,
        ease: "linear",
      },
      0
    );

    // Final exit animation
    tl.to(containerRef.current, {
      yPercent: -100,
      duration: 0.8,
      ease: "power3.inOut",
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Main greeting display */}
      <div className="relative w-full h-48 flex items-center justify-center">
        {greetings.map((greeting, index) => (
          <div
            key={index}
            ref={(el) => (textRefs.current[index] = el)}
            className="absolute flex flex-col items-center justify-center"
            style={{ opacity: 0 }}
          >
            <h1
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] font-black text-white leading-none tracking-tighter"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              {greeting.text}
            </h1>
            <p className="text-white/40 text-sm md:text-base mt-4 tracking-widest uppercase">
              {greeting.lang}
            </p>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-64 md:w-96">
        <div className="h-0.5 bg-white/10 rounded-full overflow-hidden">
          <div
            ref={progressRef}
            className="h-full bg-white origin-left"
            style={{ transform: 'scaleX(0)' }}
          />
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
      `}</style>
    </div>
  );
};

export default Preloader;