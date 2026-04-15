'use client';

import { useThemeStore } from '@/lib/theme/store';
import { useEffect } from 'react';

export const ThemeManager = () => {
  const { theme } = useThemeStore();

  useEffect(() => {
    const root = document.documentElement;

    const themes = {
      parchment: { accent: '#c4a05b', bg: '#0a0a0a', fg: '#f9f6e9' },
      midnight: { accent: '#3b82f6', bg: '#020617', fg: '#e2e8f0' },
      copper: { accent: '#e24a20', bg: '#1a0f0a', fg: '#fcece4' },
      forest: { accent: '#22c55e', bg: '#052e16', fg: '#ecfdf5' },
      royal: { accent: '#fcd34d', bg: '#1e1b4b', fg: '#fef3c7' },
      ocean: { accent: '#0ea5e9', bg: '#082f49', fg: '#f0f9ff' },
      blood: { accent: '#dc2626', bg: '#450a0a', fg: '#fef2f2' },
      ethereal: { accent: '#a855f7', bg: '#2e1065', fg: '#faf5ff' },
      void: { accent: '#d1d5db', bg: '#000000', fg: '#ffffff' },
    };

    const current = themes[theme];
    root.style.setProperty('--accent', current.accent);
    root.style.setProperty('--background', current.bg);
    root.style.setProperty('--foreground', current.fg);
  }, [theme]);

  return null;
};
