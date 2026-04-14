'use client';

import React from 'react';
import { useLanguageStore } from '@/lib/i18n/store';
import { translations } from '@/lib/i18n/translations';

interface NarrativeSectionProps {
  sectionKey: keyof typeof translations['en']['sections'];
  index: number;
}

const sectionImages: Record<string, string> = {
  ancient: "https://images.unsplash.com/photo-1599739291060-4578e77dac5d?auto=format&fit=crop&q=80&w=800", // Greek statues
  philosophers: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800", // Old books
  preScientific: "https://images.unsplash.com/photo-1532187863486-abf9d3c3236e?auto=format&fit=crop&q=80&w=800", // Scientific sketch
  observations: "https://images.unsplash.com/photo-159742324403d-d19504ba2b3b?auto=format&fit=crop&q=80&w=800", // Dried plants
  limitations: "https://images.unsplash.com/photo-1516339901600-2e1a62dc0c45?auto=format&fit=crop&q=80&w=800", // Dark room/candle
  confusions: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800", // Abstract patterns
  transition: "https://images.unsplash.com/photo-1503387762-592dea58ef21?auto=format&fit=crop&q=80&w=800", // Renaissance architecture
  mendel: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&q=80&w=800", // Peas/Garden
  conclusion: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800", // Modern lab
};

export const NarrativeSection: React.FC<NarrativeSectionProps> = ({ sectionKey, index }) => {
  const { language } = useLanguageStore();
  const t = translations[language].sections[sectionKey];
  const imageUrl = sectionImages[sectionKey] || sectionImages.ancient;

  return (
    <div className="section-content grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl w-full">
      <div className={index % 2 === 0 ? "order-1" : "order-1 md:order-2"}>
        <span className="text-accent/60 font-serif italic text-2xl mb-2 block">
          0{index + 1}
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
        <div className="absolute inset-0 opacity-40 section-bg">
          <img
            src={imageUrl}
            alt={t.title}
            className="w-full h-full object-cover sepia-[.3] contrast-[1.1]"
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
