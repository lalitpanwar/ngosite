"use client";
import { Button, Container, PageHeader, SectionHeader } from "@/components";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaArrowRight, FaLinkedinIn } from "react-icons/fa6";

export default function TeamPage() {
  const t = useTranslations('MeetOurTeam');

  // Directors aur Members ke liye keys nikal rahe hain
  const directorKeys = Object.keys(t.raw('directors'));
  const volunteerKeys = Object.keys(t.raw('volunteers.list'));

  return (
    <div className="bg-white font-sans">
      <PageHeader 
        title={t('header.title')} 
        italicPart={t('header.italic')} 
        path={t('header.path')} 
        bgImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000"
      />

      {/* 1. Founding Trustee Section */}
      <section className="py-24">
        <Container>
          <SectionHeader 
            badge={t('trusteeBadge')} 
            title={t('title')} 
            italicPart={t('italicPart')} 
          />
          
          <div className="max-w-4xl mx-auto mt-20 p-10 md:p-14 bg-slate-900 rounded-[3.5rem] text-white flex flex-col md:flex-row items-center gap-12 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 blur-[100px] pointer-events-none transition-opacity duration-700 group-hover:opacity-40" />
              
              <div className="w-64 h-64 relative shrink-0 z-10 transition-all duration-700 group-hover:scale-105">
                <div className="absolute inset-0 border-2 border-primary/50 rounded-full translate-x-4 translate-y-4" />
                <div className="absolute inset-0 rounded-full border-[10px] border-white/5 bg-slate-800 p-2 shadow-inner">
                   <Image 
                     src="/images/team/amrish-chandra.jpg" 
                     alt={t('trustee.name')} 
                     fill 
                     className="object-cover rounded-full border-4 border-white" 
                     priority 
                   />
                </div>
              </div>

              <div className="space-y-5 text-center md:text-left z-10 relative">
                 <span className="inline-block px-5 py-2 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.25em]">
                   // {t('trustee.role')}
                 </span>
                 <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight">{t('trustee.name')}</h3>
                 <p className="text-slate-400 font-light italic text-base leading-relaxed max-w-lg mx-auto md:mx-0 opacity-90">
                   "{t('trustee.vision')}"
                 </p>
                 <div className="flex justify-center md:justify-start gap-4 pt-4">
                   <a href="#" className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-all shadow-lg">
                     <FaLinkedinIn className="text-white" />
                   </a>
                 </div>
              </div>
          </div>
        </Container>
      </section>

      {/* 2. Strategic Directors Section */}
      <section className="py-24 bg-slate-50 rounded-[4rem] mx-4 border border-slate-100 shadow-inner">
        <Container>
          <SectionHeader 
            badge={t('directorBadge')} 
            title="Executive" 
            italicPart="Directors" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
            {directorKeys.map((key) => (
              <div key={key} className="flex flex-col md:flex-row gap-8 items-center p-10 bg-white rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500 group">
                <div className="w-40 h-40 relative shrink-0 border-[8px] border-slate-100/50 bg-white p-1 rounded-full group-hover:border-primary/20 transition-all duration-500 shadow-md">
                  <Image 
                    src={`/images/team/${key}-maurya-director.jpg`} 
                    alt={t(`directors.${key}.name`)} 
                    fill 
                    className="object-cover rounded-full border-4 border-white" 
                  />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="text-2xl font-black text-slate-900 leading-tight">{t(`directors.${key}.name`)}</h4>
                  <p className="text-primary font-bold text-[10px] uppercase tracking-widest mb-3 mt-1 block">
                    {t(`directors.${key}.role`)}
                  </p>
                  <p className="text-slate-500 text-sm font-light leading-relaxed line-clamp-4">
                    {t(`directors.${key}.vision`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Volunteer Members Section (Now in Circles) */}
      <section className="py-24">
        <Container>
          <SectionHeader 
            badge={t('volunteerBadge')} 
            title={t('volunteers.ptitle')} 
            italicPart={t('volunteers.pitalicPart')} 
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mt-16">
            {volunteerKeys.map((key) => (
              <div key={key} className="group text-center">
                {/* CIRCLE Image Container */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-slate-100 group-hover:border-primary transition-all duration-500 shadow-lg">
                  <Image 
                    src={`/images/team/volunteer/${key}.jpg`} 
                    alt={t(`volunteers.list.${key}.name`)} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  {/* Initials Fallback */}
                  {/* <div className="absolute inset-0 flex items-center justify-center font-black text-white/40 text-3xl group-hover:opacity-0 transition-opacity">
                    {t(`volunteers.list.${key}.initial`)}
                  </div> */}
                </div>
                
                <h5 className="font-normal text-slate-800 text-base leading-tight group-hover:text-primary transition-colors">
                  {t(`volunteers.list.${key}.name`)}
                </h5>
                <p className="text-slate-400 text-[9px] uppercase tracking-[0.2em] mt-2">
                  Volunteer
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Join Our Mission (Final CTA) */}
      <section className="pb-32 pt-10">
        <Container>
          <div className="relative overflow-hidden bg-primary rounded-[3rem] p-10 md:p-20 text-center shadow-2xl">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 blur-[80px] -translate-x-1/2 -translate-y-1/2" />
            
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <span className="inline-block px-6 py-2 rounded-full bg-white/20 text-white text-[10px] font-black uppercase tracking-[0.3em]">
                {t('ctaBadge')}
              </span>
              
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tighter">
                {t.rich('ctaTitle', {
                  italic: (chunks) => <span className="italic opacity-80">{chunks}</span>
                })}
              </h2>
              
              <p className="text-white/80 font-light text-lg leading-relaxed">
                {t('ctaDesc')}
              </p>

              <div className="pt-6">
                <Button 
                  // Yahan t('ctaBtn') use kiya hai jo JSON se relevant text lega
                  text={t('ctaBtn') } 
                  href="/volunteer"
                  icon={<FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />}
                  classes="bg-slate-900 text-white border-none px-12 py-5 text-sm font-black uppercase tracking-[0.2em] hover:bg-white hover:text-slate-900 transition-all duration-500 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}