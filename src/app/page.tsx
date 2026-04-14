'use client';

import { ScrollSection } from "@/components/sections/ScrollSection";
import { Intro } from "@/components/sections/Intro";
import { NarrativeSection } from "@/components/sections/NarrativeSection";
import { DepthSection } from "@/components/sections/DepthSection";
import { useLanguageStore } from "@/lib/i18n/store";
import { translations } from "@/lib/i18n/translations";
import { DecorativeElement } from "@/components/ui/DecorativeElement";
import { motion } from "framer-motion";

export default function Home() {
  const { language } = useLanguageStore();
  const sections = [
    'ancient',
    'philosophers',
    'preScientific',
    'observations',
    'limitations',
    'confusions',
    'transition'
  ] as const;

  const thanksText = {
    pt: "Obrigado a todos pela atenção!",
    en: "Thank you all for your attention!",
    es: "¡Gracias a todos por su atención!",
    it: "Grazie a tutti por l'attenzione!",
    zh: "感谢大家的关注！"
  };

  return (
    <main className="bg-black text-foreground relative overflow-hidden">
      <DecorativeElement type="line" />

      {/* Intro Section */}
      <ScrollSection id="intro" className="bg-stone-950/20">
        <DecorativeElement type="circle" />
        <Intro />
      </ScrollSection>

      {/* Narrative Sections */}
      {sections.map((key, index) => (
        <ScrollSection
          key={key}
          id={key}
          className={index % 2 === 0 ? "bg-black/10" : "bg-stone-950/30"}
        >
          <NarrativeSection sectionKey={key} index={index + 1} />
        </ScrollSection>
      ))}

      {/* Depth Section for Mendel - The Turning Point */}
      <DepthSection id="mendel">
        <div className="depth-layer absolute inset-0 flex items-center justify-center opacity-10">
           <div className="w-[800px] h-[800px] border border-accent/20 rounded-full" />
        </div>
        <div className="depth-layer absolute inset-0 flex items-center justify-center opacity-20">
           <div className="w-[600px] h-[600px] border border-accent/40 rounded-full" />
        </div>
        <div className="depth-layer relative z-10">
          <NarrativeSection sectionKey="mendel" index={8} />
        </div>
      </DepthSection>

      {/* Conclusion */}
      <ScrollSection id="conclusion" className="bg-stone-950/40">
        <NarrativeSection sectionKey="conclusion" index={9} />
      </ScrollSection>

      {/* Final Message */}
      <ScrollSection id="thanks" className="bg-black">
        <motion.div
          className="text-center section-content"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h2 className="text-4xl md:text-7xl font-serif text-accent mb-4">
            {thanksText[language as keyof typeof thanksText]}
          </h2>
          <div className="w-24 h-[1px] bg-accent/40 mx-auto mt-8" />
        </motion.div>
      </ScrollSection>

      {/* Footer */}
      <footer className="py-20 text-center border-t border-stone-900 bg-stone-950/50">
        <p className="text-stone-600 font-sans text-[10px] tracking-[0.5em] uppercase">
          © {new Date().getFullYear()} Proto-Genetics — Interactive School Project
        </p>
      </footer>
    </main>
  );
}
