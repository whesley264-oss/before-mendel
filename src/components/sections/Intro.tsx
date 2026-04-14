'use client';

import React from 'react';
import { useLanguageStore } from '@/lib/i18n/store';
import { translations } from '@/lib/i18n/translations';
import { motion } from 'framer-motion';

const students = ["Whesley", "Kaue", "Raul", "Adriano", "Eduardo"];

export const Intro = () => {
  const { language } = useLanguageStore();
  const t = translations[language].sections.intro;

  return (
    <div className="flex flex-col items-center text-center max-w-4xl section-content">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mb-8 p-4 border border-accent/20 rounded-lg bg-accent/5"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-accent block mb-2 opacity-60">Apresentado por</span>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm font-serif italic text-stone-400">
          {students.map((name, i) => (
            <span key={name}>
              {name}{i < students.length - 1 ? " •" : ""}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-accent uppercase tracking-[0.4em] text-xs md:text-sm mb-4 font-sans font-bold"
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

      {/* Summary / Table of Contents */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="grid grid-cols-2 md:grid-cols-5 gap-4 text-[10px] uppercase tracking-widest text-accent/40 mb-12"
      >
        <div className="flex flex-col gap-1 border-t border-accent/20 pt-2">
          <span className="text-accent/60">01</span>
          <span>Contexto</span>
        </div>
        <div className="flex flex-col gap-1 border-t border-accent/20 pt-2">
          <span className="text-accent/60">02</span>
          <span>Filosofia</span>
        </div>
        <div className="flex flex-col gap-1 border-t border-accent/20 pt-2">
          <span className="text-accent/60">03</span>
          <span>Teorias</span>
        </div>
        <div className="flex flex-col gap-1 border-t border-accent/20 pt-2">
          <span className="text-accent/60">04</span>
          <span>Mendel</span>
        </div>
        <div className="flex flex-col gap-1 border-t border-accent/20 pt-2">
          <span className="text-accent/60">05</span>
          <span>Conclusão</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 60 }}
        transition={{ duration: 1, delay: 2 }}
        className="w-[1px] bg-gradient-to-b from-accent to-transparent"
      />
    </div>
  );
};
