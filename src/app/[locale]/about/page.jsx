"use client";
import { Button, Container, PageHeader, SectionHeader } from "@/components";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function AboutPage() {
const t = useTranslations('AboutPage');
const tp = useTranslations('Programs');

  return (
    <main className="bg-white font-sans">
      <PageHeader 
        title={t('header.title')} 
        italicPart={t('header.italic')} 
        path={t('header.path')} 
      />

      <section className="pt-20 pb-12 relative overflow-hidden bg-white">


        <Container className="relative z-10">
          <div className="flex flex-col gap-16">
            <div className="relative group w-full">
              <div className="aspect-video md:aspect-[21/9] relative rounded-[3rem] overflow-hidden shadow-2xl z-10 border-8 border-white">
                <Image 
                  src="/images/digital-duniyaa-foundation-team.jpg" 
                  alt="Digital Duniyaa Team in Varanasi" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10 z-20 hidden md:block">
                  <p className="text-primary text-sm font-black uppercase tracking-[0.4em] mb-2">{t('hero.since')}</p>
                  <h4 className="text-white text-xl font-black tracking-tight leading-tight">
                    {t('hero.tagline')}
                  </h4>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5">
                <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">
                  // {t('intro.badge')}
                </span>
                <h2 className="text-4xl md:text-6xl text-slate-900 leading-[0.9] tracking-tighter uppercase" 
                    dangerouslySetInnerHTML={{ __html: t.raw('intro.heading') }} />
              </div>

              <div className="lg:col-span-7 space-y-8">
                <p className="text-slate-600 text-lg md:text-2xl font-light leading-relaxed italic border-l-4 border-primary/20 pl-8">
                  "{t('intro.story')}"
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                  <p className="text-slate-500 text-base leading-relaxed font-light">
                    {t('intro.description')}
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    {['t1', 't2', 't3'].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-slate-900 font-bold text-xs uppercase tracking-wider">
                        <span className="h-2 w-2 bg-primary rounded-full"></span> {t(`intro.usp.${item}`)}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-slate-50 rounded-[4rem] mx-4 mb-24 border border-slate-100 shadow-inner">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-12 bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 border-t-8 border-primary space-y-6">
              <h4 className="text-3xl font-heading font-black text-slate-900 tracking-tight">{t('mission.title')}</h4>
              <p className="text-slate-500 font-light text-lg leading-relaxed">{t('mission.desc')}</p>
            </div>
            <div className="p-12 bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 border-t-8 border-accent space-y-6">
              <h4 className="text-3xl font-heading font-black text-slate-900 tracking-tight">{t('vision.title')}</h4>
              <p className="text-slate-500 font-light text-lg leading-relaxed">{t('vision.desc')}</p>
            </div>
          </div>
        </Container>
      </section>

<section className="py-24 bg-white">
  <Container>
    {/* Section Header with Programs Namespace */}
    <SectionHeader 
      badge={tp('badge')}
      title={tp('title')}
      italicPart={tp('italicPart')}

    />

    {/* Portrait 4-Column Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
      {/* Dynamic Mapping from JSON Items */}
      {Object.keys(tp.raw('items')).map((key, i) => (
        <div 
          key={key} 
          className="group relative p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 flex flex-col h-full overflow-hidden"
        >
          {/* Top Accent Line */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-200 group-hover:bg-primary transition-colors" />
          
          {/* Badge: Active / Location */}
          <div className="flex justify-between items-start mb-8">
            <div className="h-12 w-12 rounded-full bg-white shadow-sm border border-slate-100 text-slate-900 flex items-center justify-center text-lg font-black group-hover:bg-primary group-hover:text-white transition-all duration-500">
              0{i + 1}
            </div>
            <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-tighter rounded-full">
              {tp('active')}
            </span>
          </div>

          {/* Content Area */}
          <div className="flex-grow">
            <h4 className="font-black text-slate-900 text-xl mb-4 leading-tight group-hover:text-primary transition-colors">
              {tp(`items.${key}.title`)}
            </h4>
            <p className="text-slate-500 text-sm leading-relaxed font-light line-clamp-6">
              {tp(`items.${key}.desc`)}
            </p>
          </div>

          {/* Footer Card Info */}
<div className="mt-8 pt-6 border-t border-slate-100 space-y-3">
  {/* Transparency Indicator */}
  <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
    <span className="h-1.5 w-1.5 bg-green-500 rounded-full animate-pulse"></span>
    {tp('transparency')}
  </div>

  {/* Dynamic Link */}
  <Link 
    href={`/programs/${key.replace('_', '-')}`} 
    className="flex items-center justify-between group/btn cursor-pointer outline-none"
  >
    <span className="text-slate-900 font-black text-xs uppercase tracking-widest group-hover/btn:text-primary transition-colors">
      {tp('viewProject')}
    </span>
    
    <div className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center text-primary group-hover/btn:border-primary group-hover/btn:bg-primary group-hover/btn:text-white transform group-hover/btn:translate-x-1 transition-all duration-300">
      <span className="text-lg">→</span>
    </div>
  </Link>
</div>
        </div>
      ))}
    </div>
  </Container>
</section>
      <section className="py-32 text-center bg-white">
        <Container>
          <div className="max-w-3xl mx-auto space-y-10">
            <h3 className="text-4xl md:text-5xl font-heading font-black  text-slate-900 leading-none" 
                dangerouslySetInnerHTML={{ __html: t.raw('cta.heading') }} />
            <p className="text-slate-500 text-lg md:text-xl font-light max-w-xl mx-auto">{t('cta.desc')}</p>
            <div className="pt-6">
              
              <Button 
                text={t('cta.btn')}
                type="accent"
                icon={<FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />}
                classes="px-16 py-6 shadow-[0_20px_50px_rgba(255,107,1,0.3)] hover:shadow-none transition-all uppercase tracking-widest text-xs font-black" 
                href="/volunteer"
              />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}