import { create } from 'zustand';

export type Language = 'pt' | 'en' | 'es' | 'it' | 'zh';

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  language: 'pt',
  setLanguage: (lang) => set({ language: lang }),
}));
