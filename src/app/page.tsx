'use client';

import { ScrollSection } from "@/components/sections/ScrollSection";
import { Intro } from "@/components/sections/Intro";
import { NarrativeSection } from "@/components/sections/NarrativeSection";
import { CarouselSection } from "@/components/sections/CarouselSection";
import { DepthSection } from "@/components/sections/DepthSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { MendelLawsSection } from "@/components/sections/MendelLawsSection";
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
  ] as const;

  const carouselImages = [
    "/assets/images/IMG_20260414_220526_743.jpg",
    "/assets/images/IMG_20260414_220523_695.jpg",
    "/assets/images/IMG_20260414_220521_354.jpg",
  ];

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

      {/* Cinematic Carousel for Transition & Confusions */}
      <CarouselSection
        sectionKey="transition"
        images={carouselImages}
      />

      <ScrollSection id="timeline" className="bg-stone-950/20">
        <TimelineSection />
      </ScrollSection>

      <ScrollSection id="confusions" className="bg-black/20">
        <NarrativeSection sectionKey="confusions" index={7} />
      </ScrollSection>

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

      <ScrollSection id="mendel-laws" className="bg-stone-950/30">
        <MendelLawsSection />
      </ScrollSection>

      {/* Conclusion */}
      <ScrollSection id="conclusion" className="bg-stone-950/40">
        <NarrativeSection sectionKey="conclusion" index={9} />
      </ScrollSection>

      {/* Final Message - Cinematic Credits Style */}
      <ScrollSection id="thanks" className="bg-black py-40">
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="mb-20"
          >
            <span className="text-accent uppercase tracking-[1em] text-[10px] mb-8 block opacity-50">Fim da Experiência</span>
            <h2 className="text-5xl md:text-8xl font-serif text-white mb-6 tracking-tighter">
               {(translations[language as keyof typeof translations] as any).thanks}
            </h2>
            <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl w-full border-t border-white/5 pt-20"
          >
            <div>
              <h4 className="text-accent text-[10px] uppercase tracking-[0.3em] mb-4">Direção e Design</h4>
              <p className="text-white/60 font-serif italic">Whesley, Raul, Adriano, Eduardo</p>
            </div>
            <div>
              <h4 className="text-accent text-[10px] uppercase tracking-[0.3em] mb-4">Instituição</h4>
              <p className="text-white/60 font-serif italic">Colégio Paulo Magalhães</p>
            </div>
            <div>
              <h4 className="text-accent text-[10px] uppercase tracking-[0.3em] mb-4">Orientação</h4>
              <p className="text-white/60 font-serif italic">Prof. Jaimilton</p>
            </div>
          </motion.div>
        </div>
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
