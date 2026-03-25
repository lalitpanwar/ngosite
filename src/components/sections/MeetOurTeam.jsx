"use client";
import Image from "next/image";
import { Container, SectionHeader, Button } from "..";
import { FaQuoteLeft } from "react-icons/fa6";
import { useTranslations } from "next-intl";

export default function MeetOurTeam() {
  const t = useTranslations('MeetOurTeam');

  // Director keys mapped to JSON for dynamic rendering
  const directorKeys = ['mahima', 'devendra'];
  const volunteerKeys = Object.keys(t.raw('volunteers.list'));
  return (
    <section className="py-24 bg-white font-sans overflow-hidden">
      <Container>
        <SectionHeader 
          badge={t('badge')} 
          title={t('title')} 
          italicPart={t('italicPart')} 
        />

        <div className="max-w-4xl mx-auto mt-20 space-y-20">
          
          {/* 1. MAIN TRUSTEE (Founding Visionary) */}
          <div className="flex flex-col items-center text-center space-y-10 p-12 bg-slate-50 rounded-[2.5rem] border border-slate-100 relative shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] group hover:bg-white transition-all duration-700">
            <FaQuoteLeft className="absolute top-12 left-12 text-7xl text-slate-200/50 group-hover:text-primary/10 transition-colors duration-500" />
            
            <div className="relative h-56 w-56 md:h-64 md:w-64 rounded-full overflow-hidden border-[12px] border-white shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:border-primary/5">
              <Image 
                src="/images/team/amrish-chandra.jpg" 
                alt={t('trustee.name')} 
                fill 
                className="object-cover" 
              />
            </div>

            <div className="space-y-6 relative z-10">
              <div className="space-y-2">
                <span className="inline-block px-5 py-2 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest">
                  {t('trustee.role')}
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900">
                  {t('trustee.name')}
                </h3>
              </div>
              <p className="text-slate-500 text-sm md:text-sm font-light italic leading-relaxed max-w-2xl mx-auto opacity-80">
                "{t('trustee.vision')}"
              </p>
            </div>
          </div>

          {/* 2. DIRECTORS (Leadership) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {directorKeys.map((key) => (
              <div key={key} className="flex flex-col items-center text-center p-10 bg-white border border-slate-100 rounded-[2rem] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
                <div className="relative h-36 w-36 rounded-full overflow-hidden mb-8 border-4 border-slate-50 shadow-lg group-hover:border-primary/20 group-hover:rotate-3 transition-all">
                  <Image 
                    src={`/images/team/${key}-maurya-director.jpg`} 
                    alt={t(`directors.${key}.name`)} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-2 block">
                      {t(`directors.${key}.role`)}
                    </span>
                    <h4 className="text-lg md:text-xl font-black text-slate-900">
                      {t(`directors.${key}.name`)}
                    </h4>
                </div>
              </div>
            ))}
          </div>

          {/* 3. VOLUNTEERS (The Backbone) */}
          <div className="pt-20 border-t border-slate-100 flex flex-col items-center space-y-10">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-heading font-black text-slate-900 tracking-tight">
                {t('volunteers.title')}
              </h3>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.4em]">
                {t('volunteers.subLine')}
              </p>
            </div>

            <div className="flex -space-x-4 md:-space-x-6"> 
{volunteerKeys.slice(0, 7).map((key) => (
  <div 
    key={key} 
    className="relative h-16 w-16 md:h-20 md:w-20 rounded-full border-4 border-white overflow-hidden shadow-lg hover:-translate-y-4 hover:z-50 transition-all duration-300"
  >
    <Image 
      src={`/images/team/volunteer/${key}.jpg`} 
      alt="Volunteer" 
      width={72}  
  height={72}
      className="object-cover grayscale hover:grayscale-0 transition-all" 
    />
  </div>
))}
              <div className="h-16 w-16 md:h-20 md:w-20 rounded-full border-4 border-white bg-slate-900 flex items-center justify-center text-white text-xs font-black shadow-lg">
                +15
              </div>
            </div>

            <Button 
              text={t('volunteers.cta')}
              type="accent"
              classes="px-12 py-5 shadow-xl hover:shadow-2xl transition-shadow uppercase tracking-widest text-xs font-black" 
              href="/volunteer"
            />
          </div>

        </div>
      </Container>
    </section>
  );
}