import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  scale?: boolean;
  rotate?: boolean;
  className?: string;
}

const Parallax: React.FC<ParallaxProps> = ({ 
  children, 
  speed = 0.5, 
  direction = 'up',
  scale = false,
  rotate = false,
  className = '' 
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let transform = '';
    let scaleTransform = '';
    let rotateTransform = '';

    // Set up parallax movement
    const movement = speed * 100;
    switch (direction) {
      case 'up':
        transform = `translateY(-${movement}px)`;
        break;
      case 'down':
        transform = `translateY(${movement}px)`;
        break;
      case 'left':
        transform = `translateX(-${movement}px)`;
        break;
      case 'right':
        transform = `translateX(${movement}px)`;
        break;
    }

    // Set up scale animation
    if (scale) {
      scaleTransform = 'scale(1.1)';
    }

    // Set up rotation animation
    if (rotate) {
      rotateTransform = 'rotate(5deg)';
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });

    tl.fromTo(element, 
      { 
        transform: `${transform} ${scaleTransform} ${rotateTransform}`,
      },
      { 
        transform: 'translateY(0px) translateX(0px) scale(1) rotate(0deg)',
        ease: 'none'
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [speed, direction, scale, rotate]);

  return (
    <div 
      ref={elementRef} 
      className={`parallax-element ${className}`}
    >
      {children}
    </div>
  );
};

export default Parallax;