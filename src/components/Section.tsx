'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

interface SectionProps {
  index: number;
  title: string;
  content: string;
  emotion: string;
  button?: string;
}

const sectionImages = [
  "https://images.unsplash.com/photo-1532187875605-2fe358a71424?q=80&w=2070&auto=format&fit=crop", // Intro - Science/Laboratory
  "https://images.unsplash.com/photo-1516663713099-073715c0034a?q=80&w=2070&auto=format&fit=crop", // Ancient - Mystical
  "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2070&auto=format&fit=crop", // Philosophy - Old Sculpture
  "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?q=80&w=2070&auto=format&fit=crop", // Pangenesis - Cells/Organic
  "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=2070&auto=format&fit=crop", // Observations - Plants
  "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2070&auto=format&fit=crop", // Limitations - Microscope/Dark
  "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2070&auto=format&fit=crop", // Errors - Abstract Science
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop", // Transition - Connection
  "https://images.unsplash.com/photo-1526218626217-dc65a29bb444?q=80&w=2070&auto=format&fit=crop", // Mendel - Peas/Nature
  "https://images.unsplash.com/photo-1490077476659-095159692ab5?q=80&w=2070&auto=format&fit=crop"  // Conclusion - Sunrise/Reflection
];

export const Section: React.FC<SectionProps> = ({ index, title, content, emotion, button }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
  const imgY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  const isEven = index % 2 === 0;

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center relative px-6 py-24 overflow-hidden border-b border-coffee-900/50"
    >
      {/* Background Parallax Image */}
      <motion.div
        style={{
          y: imgY,
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.15, 0])
        }}
        className="absolute inset-0 z-0"
      >
        <img
          src={sectionImages[index] || sectionImages[0]}
          alt=""
          className="w-full h-full object-cover filter sepia-[0.3] brightness-[0.4] grayscale-[0.2]"
        />
      </motion.div>

      <motion.div
        style={{ opacity, scale, y }}
        className="max-w-4xl w-full flex flex-col items-center text-center z-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          className="mb-8 p-3 rounded-full border border-coffee-500/30 bg-coffee-500/5 backdrop-blur-sm"
        >
          <span className="text-coffee-500 font-medium tracking-[0.4em] uppercase text-[10px] sm:text-xs px-2">
            {emotion} — {index + 1}
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-10 leading-[1.1] text-balance text-coffee-50"
        >
          {title}
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: "120px" } : {}}
          transition={{ delay: 0.6, duration: 1.2 }}
          className="h-1 bg-gradient-to-r from-transparent via-coffee-500 to-transparent mb-12"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 1 }}
          className="text-lg md:text-2xl text-coffee-200/90 leading-relaxed max-w-3xl font-light text-balance"
        >
          {content}
        </motion.p>

        {button && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ delay: 0.9 }}
            className="mt-16 px-10 py-5 bg-coffee-500 hover:bg-coffee-600 text-coffee-950 font-bold rounded-full transition-all shadow-2xl shadow-coffee-500/30 uppercase tracking-widest text-sm"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            {button}
          </motion.button>
        )}
      </motion.div>

      {/* Decorative Ornaments */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden opacity-30">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <motion.path
               d="M 0 50 Q 25 45 50 50 T 100 50"
               stroke="currentColor"
               strokeWidth="0.05"
               fill="none"
               className="text-coffee-700"
               style={{ pathLength: scrollYProgress }}
             />
          </svg>
      </div>
    </section>
  );
};
