'use client';

import React, { useState } from 'react';
import { Languages, ChevronDown } from 'lucide-react';
import { useLanguageStore, Language } from '@/lib/i18n/store';
import { motion, AnimatePresence } from 'framer-motion';

const languages = [
  { id: 'pt', name: 'Português', flag: '🇧🇷' },
  { id: 'en', name: 'English', flag: '🇺🇸' },
  { id: 'es', name: 'Español', flag: '🇪🇸' },
  { id: 'it', name: 'Italiano', flag: '🇮🇹' },
  { id: 'zh', name: '简体中文', flag: '🇨🇳' },
] as const;

export const Navbar = () => {
  const { language, setLanguage } = useLanguageStore();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = languages.find((l) => l.id === language);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center mix-blend-difference">
      <div className="text-white font-serif text-xl tracking-tighter uppercase">
        Proto—Genetics
      </div>

      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 transition-all hover:bg-white/20"
        >
          <Languages size={18} />
          <span className="text-sm font-medium">{currentLang?.flag} {currentLang?.name}</span>
          <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute right-0 mt-2 w-48 bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden shadow-2xl"
            >
              {languages.map((lang) => (
                <button
                  key={lang.id}
                  onClick={() => {
                    setLanguage(lang.id as Language);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors hover:bg-stone-800 ${
                    language === lang.id ? 'text-amber-200' : 'text-stone-400'
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.name}</span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
