'use client';

import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { LanguageCode, translations } from '@/constants/translations';
import { Section } from '@/components/Section';

export default function Home() {
  const [lang, setLang] = useState<LanguageCode>('pt');
  const t = translations[lang];

  return (
    <main className="relative bg-coffee-950 text-coffee-100 overflow-x-hidden">
      <Navbar currentLang={lang} setLang={setLang} />

      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-coffee-800/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-coffee-900/40 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10">
        {t.sections.map((section, index) => (
          <Section
            key={index}
            index={index}
            {...section}
          />
        ))}
      </div>

      <footer className="relative z-10 py-12 text-center text-coffee-400 text-sm font-light tracking-widest uppercase">
        &copy; {new Date().getFullYear()} Proto-Genética — {t.nav.title}
      </footer>
    </main>
  );
}
