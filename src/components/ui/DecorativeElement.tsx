'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const DecorativeElement = ({ type }: { type: 'circle' | 'line' | 'dots' }) => {
  if (type === 'circle') {
    return (
      <div className="absolute -z-10 opacity-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-[500px] h-[500px] border border-accent rounded-full flex items-center justify-center"
        >
          <div className="w-[450px] h-[450px] border border-dashed border-accent/50 rounded-full" />
        </motion.div>
      </div>
    );
  }

  if (type === 'line') {
    return (
      <div className="absolute left-1/2 -translate-x-1/2 h-full w-[1px] bg-gradient-to-b from-transparent via-accent/20 to-transparent -z-10" />
    );
  }

  return null;
};
