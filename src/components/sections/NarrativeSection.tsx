'use client';

import React from 'react';
import { useLanguageStore } from '@/lib/i18n/store';
import { translations } from '@/lib/i18n/translations';

interface NarrativeSectionProps {
  sectionKey: keyof typeof translations['en']['sections'];
  index: number;
}

const sectionImages: Record<string, string> = {
  ancient: "/assets/images/IMG_20260414_235408_022.jpg",
  philosophers: "/assets/images/IMG_20260414_235244_508.jpg",
  preScientific: "/assets/images/photo-1576086213369-97a306d36557.jpeg",
  observations: "https://images.unsplash.com/photo-159742324403d-d19504ba2b3b?auto=format&fit=crop&q=80&w=800",
  limitations: "https://images.unsplash.com/photo-1516339901600-2e1a62dc0c45?auto=format&fit=crop&q=80&w=800",
  confusions: "https://images.unsplash.com/photo-1503387762-592dea58ef21?auto=format&fit=crop&q=80&w=800",
  transition: "/assets/images/IMG_20260414_220521_354.jpg",
  mendel: "/assets/images/IMG_20260414_220521_354.jpg",
  conclusion: "/assets/images/photo-1507413245164-6160d8298b31.jpeg",
};

export const NarrativeSection: React.FC<NarrativeSectionProps> = ({ sectionKey, index }) => {
  const { language } = useLanguageStore();
  const t = translations[language].sections[sectionKey];
  const imageUrl = sectionImages[sectionKey] || sectionImages.ancient;

  return (
    <div className="section-content grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl w-full">
      <div className={index % 2 === 0 ? "order-1" : "order-1 md:order-2"}>
        <span className="text-accent/60 font-serif italic text-2xl mb-2 block">
          {index + 1 < 10 ? `0${index + 1}` : index + 1}
        </span>
        <h2 className="text-4xl md:text-6xl font-serif mb-6 text-foreground leading-tight">
          {t.title}
        </h2>
        <h3 className="text-xl text-accent font-sans uppercase tracking-widest mb-6">
          {t.subtitle}
        </h3>
        <p className="text-lg md:text-xl text-stone-400 leading-relaxed font-light">
          {t.content}
        </p>
      </div>

      <div className={`relative h-[400px] md:h-[600px] bg-stone-900/50 rounded-lg overflow-hidden border border-stone-800 flex items-center justify-center ${index % 2 === 0 ? "order-2" : "order-2 md:order-1"}`}>
        <div className="absolute inset-0 opacity-70 section-bg group hover:opacity-100 transition-opacity duration-700">
          <img
            src={imageUrl}
            alt={t.title}
            className="w-full h-full object-cover sepia-[.2] contrast-[1.1] grayscale-[0.2]"
          />
        </div>
        <div className="relative z-10 p-12 text-center">
           <div className="w-32 h-32 border-2 border-accent/20 rounded-full flex items-center justify-center">
              <div className="w-24 h-24 border border-accent/40 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-accent rounded-full animate-pulse shadow-[0_0_20px_rgba(196,160,91,0.5)]" />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
