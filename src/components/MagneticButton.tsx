import { useRef, useEffect } from 'react';
import type { ReactNode } from 'react';
import { gsap } from 'gsap';

interface MagneticButtonProps {
  children: ReactNode;
  strength?: number;
  className?: string;
  onClick?: () => void;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ 
  children, 
  strength = 0.3, 
  className = '',
  onClick 
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const text = textRef.current;
    if (!button || !text) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = button.getBoundingClientRect();
      const x = e.clientX - (left + width / 2);
      const y = e.clientY - (top + height / 2);

      gsap.to(button, {
        x: x * strength,
        y: y * strength,
        duration: 0.3,
        ease: 'power2.out'
      });

      gsap.to(text, {
        x: x * strength * 0.5,
        y: y * strength * 0.5,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const handleMouseLeave = () => {
      gsap.to([button, text], {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.5)'
      });
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className={`magnetic-button ${className}`}
    >
      <span ref={textRef} className="block">
        {children}
      </span>
    </button>
  );
};

export default MagneticButton;