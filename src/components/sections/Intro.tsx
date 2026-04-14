'use client';

import React from 'react';
import { useLanguageStore } from '@/lib/i18n/store';
import { translations } from '@/lib/i18n/translations';
import { motion } from 'framer-motion';

export const Intro = () => {
  const { language } = useLanguageStore();
  const t = translations[language].sections.intro;

  return (
    <div className="flex flex-col items-center text-center max-w-4xl section-content">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-accent uppercase tracking-[0.4em] text-sm mb-4 font-sans font-bold"
      >
        {t.subtitle}
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-6xl md:text-9xl font-serif mb-8 text-foreground"
      >
        {t.title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="text-xl md:text-2xl text-stone-400 font-light italic max-w-2xl mb-12"
      >
        "{t.tagline}"
      </motion.p>

      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 100 }}
        transition={{ duration: 1, delay: 2 }}
        className="w-[1px] bg-gradient-to-b from-accent to-transparent"
      />
    </div>
  );
};
