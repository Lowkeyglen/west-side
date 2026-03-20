'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface AnimatedTextProps {
  text: string;
  className?: string;
  animation?: 'reveal' | 'fade' | 'letters' | 'words' | 'typewriter';
  delay?: number;
  duration?: number;
  stagger?: number;
  threshold?: number;
  once?: boolean;
}

export default function AnimatedText({ 
  text, 
  className = '', 
  animation = 'reveal',
  delay = 0,
  duration = 1,
  stagger = 0.02,
  threshold = 0.5,
  once = true
}: AnimatedTextProps) {
  const containerRef = useRef<HTMLSpanElement>(null); // Changed from HTMLDivElement to HTMLSpanElement

  useEffect(() => {
    if (!containerRef.current) return;

    const element = containerRef.current;
    const words = text.split(' ');
    const letters = text.split('');

    // Clear existing content
    element.innerHTML = '';

    if (animation === 'letters') {
      // Split into letters with spans
      letters.forEach((char) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        span.style.transform = 'translateY(20px)';
        element.appendChild(span);
      });

      // Animate letters
      gsap.to(element.children, {
        opacity: 1,
        y: 0,
        duration: duration,
        stagger: stagger,
        delay: delay,
        ease: 'power3.out',
        scrollTrigger: threshold < 1 ? {
          trigger: element,
          start: `top ${threshold * 100}%`,
          toggleActions: once ? 'play none none reverse' : 'play none none none'
        } : undefined
      });

    } else if (animation === 'words') {
      // Split into words with spans
      words.forEach((word) => {
        const span = document.createElement('span');
        span.textContent = word + ' ';
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        span.style.transform = 'translateX(-20px)';
        element.appendChild(span);
      });

      // Animate words
      gsap.to(element.children, {
        opacity: 1,
        x: 0,
        duration: duration,
        stagger: stagger * 2,
        delay: delay,
        ease: 'back.out(1.2)',
        scrollTrigger: threshold < 1 ? {
          trigger: element,
          start: `top ${threshold * 100}%`,
          toggleActions: once ? 'play none none reverse' : 'play none none none'
        } : undefined
      });

    } else if (animation === 'typewriter') {
      // Typewriter effect
      let i = 0;
      const typeWriter = () => {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
          setTimeout(typeWriter, 50);
        }
      };
      setTimeout(typeWriter, delay * 1000);

    } else if (animation === 'reveal') {
      // Simple reveal animation
      element.innerHTML = text;
      gsap.from(element, {
        opacity: 0,
        y: 30,
        duration: duration,
        delay: delay,
        ease: 'power2.out',
        scrollTrigger: threshold < 1 ? {
          trigger: element,
          start: `top ${threshold * 100}%`,
          toggleActions: once ? 'play none none reverse' : 'play none none none'
        } : undefined
      });

    } else {
      // Fade in
      element.innerHTML = text;
      gsap.from(element, {
        opacity: 0,
        duration: duration,
        delay: delay,
        ease: 'power2.inOut',
        scrollTrigger: threshold < 1 ? {
          trigger: element,
          start: `top ${threshold * 100}%`,
          toggleActions: once ? 'play none none reverse' : 'play none none none'
        } : undefined
      });
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [text, animation, delay, duration, stagger, threshold, once]);

  return (
    <span  // Changed from div to span
      ref={containerRef} 
      className={className}
      style={{ display: 'inline-block' }}
    />
  );
}
