'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { languages, LanguageCode, translations } from '@/constants/translations';
import { ChevronDown, Globe } from 'lucide-react';

interface NavbarProps {
  currentLang: LanguageCode;
  setLang: (lang: LanguageCode) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentLang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = translations[currentLang];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-coffee-950/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-serif font-bold tracking-tighter text-coffee-100"
        >
          {t.nav.title}
        </motion.div>

        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center space-x-2 bg-coffee-800/50 hover:bg-coffee-700/50 px-4 py-2 rounded-full border border-coffee-600/30 transition-colors"
          >
            <span className="text-lg">{languages.find(l => l.code === currentLang)?.flag}</span>
            <span className="text-sm font-medium uppercase tracking-widest">{currentLang}</span>
            <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute right-0 mt-2 w-48 bg-coffee-900 border border-coffee-700 rounded-2xl overflow-hidden shadow-2xl z-50"
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLang(lang.code as LanguageCode);
                      setIsOpen(false);
                    }}
                    className="w-full flex items-center justify-between px-4 py-3 hover:bg-coffee-800 transition-colors text-coffee-100"
                  >
                    <span className="flex items-center space-x-3">
                      <span>{lang.flag}</span>
                      <span className="text-sm">{lang.name}</span>
                    </span>
                    {currentLang === lang.code && (
                      <div className="w-1.5 h-1.5 rounded-full bg-coffee-500" />
                    )}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};
