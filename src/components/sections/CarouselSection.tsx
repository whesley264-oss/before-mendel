'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguageStore } from '@/lib/i18n/store';
import { translations } from '@/lib/i18n/translations';
import { motion, useScroll, useTransform } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

interface CarouselSectionProps {
  sectionKey: keyof typeof translations['en']['sections'];
  images: string[];
}

export const CarouselSection: React.FC<CarouselSectionProps> = ({ sectionKey, images }) => {
  const { language } = useLanguageStore();
  const t = translations[language].sections[sectionKey];
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const content = contentRef.current;
    if (!section || !container || !content) return;

    let ctx = gsap.context(() => {
      // Horizontal Scroll
      const totalWidth = container.scrollWidth - window.innerWidth;

      gsap.to(container, {
        x: -totalWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${totalWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        }
      });

      // Text Slide In
      gsap.fromTo(content,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: section,
            start: 'top 40%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    }, section);

    return () => ctx.revert();
  }, [images.length]);

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden bg-black">
      {/* Content Layer (Floating) */}
      <div className="absolute top-1/2 left-20 -translate-y-1/2 z-20 max-w-lg pointer-events-none">
        <div ref={contentRef} className="bg-black/40 backdrop-blur-xl p-10 border-l-4 border-accent">
          <h2 className="text-5xl font-serif mb-6 text-white leading-tight">
            {t.title}
          </h2>
          <p className="text-xl text-stone-300 font-light leading-relaxed">
            {t.content}
          </p>
        </div>
      </div>

      {/* Image Carousel Layer */}
      <div ref={containerRef} className="flex h-full w-fit items-center px-[20vw] gap-[10vw]">
        {images.map((src, i) => (
          <div key={i} className="relative h-[70vh] w-[50vw] flex-shrink-0 overflow-hidden rounded-lg border border-stone-800 shadow-2xl">
            <img
              src={src}
              alt={`slide-${i}`}
              className="h-full w-full object-cover scale-110 sepia-[.2]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        ))}
      </div>

      {/* Progress Line - Visual Only */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-64 h-[1px] bg-stone-800 z-30">
          <div className="h-full bg-accent/30 w-full" />
      </div>
    </section>
  );
};
