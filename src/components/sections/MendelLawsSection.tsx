'use client';

import React from 'react';
import { useLanguageStore } from '@/lib/i18n/store';
import { translations } from '@/lib/i18n/translations';
import { motion } from 'framer-motion';

export const MendelLawsSection: React.FC = () => {
  const { language } = useLanguageStore();
  const t = (translations[language as keyof typeof translations] as any).sections.laws;

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-8xl font-serif text-white mb-6 tracking-tighter">{t.title}</h2>
        <p className="text-accent uppercase tracking-[0.5em] text-sm">{t.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Law 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative"
        >
          <div className="absolute inset-0 bg-accent/5 rounded-3xl blur-3xl group-hover:bg-accent/10 transition-colors duration-700" />
          <div className="relative p-10 border border-white/5 rounded-2xl bg-stone-900/40 backdrop-blur-md overflow-hidden">
             <div className="flex justify-between items-start mb-8">
               <span className="text-accent font-serif text-4xl">01</span>
               <div className="w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
               </div>
             </div>
             <h3 className="text-3xl font-serif text-white mb-4">{t.law1.title}</h3>
             <p className="text-stone-400 font-light text-lg mb-8 leading-relaxed">{t.law1.desc}</p>
             <div className="rounded-xl overflow-hidden border border-white/10 aspect-video">
                <img
                  src="/assets/images/IMG_20260414_220526_743.jpg"
                  alt="Mendel 1st Law"
                  className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
                />
             </div>
          </div>
        </motion.div>

        {/* Law 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="group relative"
        >
          <div className="absolute inset-0 bg-accent/5 rounded-3xl blur-3xl group-hover:bg-accent/10 transition-colors duration-700" />
          <div className="relative p-10 border border-white/5 rounded-2xl bg-stone-900/40 backdrop-blur-md overflow-hidden">
             <div className="flex justify-between items-start mb-8">
               <span className="text-accent font-serif text-4xl">02</span>
               <div className="w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
               </div>
             </div>
             <h3 className="text-3xl font-serif text-white mb-4">{t.law2.title}</h3>
             <p className="text-stone-400 font-light text-lg mb-8 leading-relaxed">{t.law2.desc}</p>
             <div className="rounded-xl overflow-hidden border border-white/10 aspect-video">
                <img
                  src="/assets/images/IMG_20260414_220523_695.jpg"
                  alt="Mendel 2nd Law"
                  className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
                />
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
