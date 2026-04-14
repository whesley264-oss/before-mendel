'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollSectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

export const ScrollSection: React.FC<ScrollSectionProps> = ({ children, id, className = "" }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    let ctx = gsap.context(() => {
      // Fade and slide animation for content
      const content = element.querySelector('.section-content');
      if (content) {
        gsap.fromTo(content,
          {
            opacity: 0,
            y: 50,
            filter: 'blur(10px)'
          },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 60%',
              end: 'top 20%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      }

      // Background parallax effect
      const bg = element.querySelector('.section-bg');
      if (bg) {
        gsap.to(bg, {
          yPercent: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          }
        });
      }
    }, element);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`relative min-h-screen w-full flex items-center justify-center overflow-hidden py-20 px-6 ${className}`}
    >
      {children}
    </section>
  );
};
