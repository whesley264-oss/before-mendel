'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const DepthSection: React.FC<{ children: React.ReactNode, id: string }> = ({ children, id }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const layers = element.querySelectorAll('.depth-layer');

    layers.forEach((layer, index) => {
      const speed = (index + 1) * 0.2;
      gsap.to(layer, {
        z: 100 * speed,
        opacity: index === 0 ? 0.2 : 1,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id={id}
      className="relative min-h-[150vh] w-full flex items-center justify-center overflow-hidden perspective-1000"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        {children}
      </div>
    </section>
  );
};
