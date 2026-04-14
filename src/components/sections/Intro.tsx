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
    <div className="flex flex-col items-center text-center max-w-4xl section-content w-full">
      {/* Cinematic Student Credits */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="mb-12 p-8 border-y border-accent/30 bg-accent/5 w-full relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />

        <span className="text-[10px] uppercase tracking-[0.6em] text-accent block mb-6 opacity-80 font-bold">Apresentado por</span>
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
          {students.map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + (i * 0.1), duration: 0.8 }}
              className="text-lg md:text-xl font-serif italic text-white/90 relative group"
            >
              <span className="relative z-10">{name}</span>
              <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
            </motion.span>
          ))}
        </div>
      </motion.div>

      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="text-accent uppercase tracking-[0.4em] text-xs md:text-sm mb-4 font-sans font-bold"
      >
        {t.subtitle}
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 1.2 }}
        className="text-6xl md:text-9xl font-serif mb-8 text-foreground"
      >
        {t.title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="text-xl md:text-2xl text-stone-400 font-light italic max-w-2xl mb-16"
      >
        "{t.tagline}"
      </motion.p>

      {/* Summary / Table of Contents */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="grid grid-cols-2 md:grid-cols-5 gap-6 text-[10px] uppercase tracking-[0.3em] text-accent/50 w-full max-w-3xl border-t border-accent/20 pt-8"
      >
        <div className="flex flex-col gap-2 group cursor-default">
          <span className="text-accent/60 transition-colors group-hover:text-accent">01</span>
          <span className="transition-colors group-hover:text-white">Contexto</span>
        </div>
        <div className="flex flex-col gap-2 group cursor-default">
          <span className="text-accent/60 transition-colors group-hover:text-accent">02</span>
          <span className="transition-colors group-hover:text-white">Filosofia</span>
        </div>
        <div className="flex flex-col gap-2 group cursor-default">
          <span className="text-accent/60 transition-colors group-hover:text-accent">03</span>
          <span className="transition-colors group-hover:text-white">Teorias</span>
        </div>
        <div className="flex flex-col gap-2 group cursor-default">
          <span className="text-accent/60 transition-colors group-hover:text-accent">04</span>
          <span className="transition-colors group-hover:text-white">Mendel</span>
        </div>
        <div className="flex flex-col gap-2 group cursor-default">
          <span className="text-accent/60 transition-colors group-hover:text-accent">05</span>
          <span className="transition-colors group-hover:text-white">Conclusão</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 60, opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        className="w-[1px] bg-gradient-to-b from-accent to-transparent mt-12"
      />
    </div>
  );
};
