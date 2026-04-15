'use client';

import React, { useEffect, useRef } from 'react';
import { useLanguageStore } from '@/lib/i18n/store';
import { translations } from '@/lib/i18n/translations';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const TimelineSection: React.FC = () => {
  const { language } = useLanguageStore();
  const t = translations[language].sections.timeline;
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Line drawing animation
      gsap.fromTo(lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true
          }
        }
      );

      // Event dots and text animations
      const events = gsap.utils.toArray('.timeline-event');
      events.forEach((event: any, i) => {
        gsap.fromTo(event,
          { opacity: 0, x: i % 2 === 0 ? -100 : 100 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            scrollTrigger: {
              trigger: event,
              start: "top 80%",
              end: "top 50%",
              toggleActions: "play none none reverse",
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [language]);

  return (
    <div ref={containerRef} className="relative max-w-5xl mx-auto py-32 px-4">
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-7xl font-serif mb-4 text-white">{t.title}</h2>
        <p className="text-accent uppercase tracking-[0.5em] text-sm">{t.subtitle}</p>
      </div>

      <div className="relative">
        {/* Central Vertical Line */}
        <div
          ref={lineRef}
          className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-accent/0 via-accent/50 to-accent/0 origin-top transform -translate-x-1/2"
        />

        <div className="space-y-32">
          {t.events.map((event: any, i: number) => (
            <div
              key={i}
              className={`timeline-event flex flex-col md:flex-row items-center justify-between w-full ${
                i % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className="w-full md:w-[45%] group">
                <div className={`p-8 rounded-lg bg-stone-900/30 border border-white/5 backdrop-blur-sm transition-all duration-500 group-hover:border-accent/30 group-hover:bg-stone-900/50 ${
                  i % 2 === 0 ? 'text-right' : 'text-left'
                }`}>
                  <span className="text-accent font-mono text-sm mb-2 block">{event.year}</span>
                  <h3 className="text-2xl font-serif text-white mb-3">{event.title}</h3>
                  <p className="text-stone-400 font-light leading-relaxed">{event.desc}</p>
                </div>
              </div>

              {/* Dot on line */}
              <div className="relative z-10 w-4 h-4 rounded-full bg-black border-2 border-accent my-8 md:my-0">
                 <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-20" />
              </div>

              {/* Spacer for layout */}
              <div className="hidden md:block w-[45%]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
