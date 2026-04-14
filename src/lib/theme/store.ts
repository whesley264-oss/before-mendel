import { create } from 'zustand';

export type Theme = 'parchment' | 'midnight' | 'copper' | 'forest';

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: 'parchment',
  setTheme: (theme) => set({ theme }),
}));
