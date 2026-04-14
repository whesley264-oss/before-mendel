'use client';

import { ScrollSection } from "@/components/sections/ScrollSection";
import { Intro } from "@/components/sections/Intro";
import { NarrativeSection } from "@/components/sections/NarrativeSection";
import { DepthSection } from "@/components/sections/DepthSection";
import { useLanguageStore } from "@/lib/i18n/store";
import { translations } from "@/lib/i18n/translations";
import { DecorativeElement } from "@/components/ui/DecorativeElement";

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

  return (
    <main className="bg-black text-foreground relative overflow-hidden">
      <DecorativeElement type="line" />

      {/* Intro Section */}
      <ScrollSection id="intro" className="bg-stone-950">
        <DecorativeElement type="circle" />
        <Intro />
      </ScrollSection>

      {/* Narrative Sections */}
      {sections.map((key, index) => (
        <ScrollSection
          key={key}
          id={key}
          className={index % 2 === 0 ? "bg-black" : "bg-stone-950"}
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
      <ScrollSection id="conclusion" className="bg-stone-950">
        <NarrativeSection sectionKey="conclusion" index={9} />
      </ScrollSection>

      {/* Footer */}
      <footer className="py-20 text-center border-t border-stone-900 bg-stone-950">
        <p className="text-stone-600 font-sans text-sm tracking-widest uppercase">
          © {new Date().getFullYear()} Proto-Genetics — Interactive Experience
        </p>
      </footer>
    </main>
  );
}
