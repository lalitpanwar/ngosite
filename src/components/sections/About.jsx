"use client";
import Image from "next/image";
import { Container } from "..";
import { FaBullseye, FaHeartCircleCheck, FaHandHoldingHeart } from "react-icons/fa6";
import { useTranslations, useLocale } from "next-intl";

export default function AboutSection() {
  const t = useTranslations('About');
  const locale = useLocale();
  const isHindi = locale === 'hi';

  // Stats mapped to translations
  const stats = [
    { label: t('stats.p1_label'), value: t('stats.p1_val'), icon: <FaHandHoldingHeart /> },
    { label: t('stats.p2_label'), value: t('stats.p2_val'), icon: <FaHeartCircleCheck /> },
    { label: t('stats.p3_label'), value: t('stats.p3_val'), icon: <FaBullseye /> },
  ];

  return (
    <section className="py-24 bg-white font-sans overflow-hidden" lang={locale}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Image Group */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500 w-full h-[400px] md:h-[500px]">
              <Image 
                src="/images/digital-duniyaa-children.jpg" 
                fill
                alt="Digital Duniyaa Foundation Varanasi" 
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-3 -z-10 scale-105"></div>
            
            {/* Impact Floating Card */}
            <div className="absolute -bottom-10 -right-4 md:right-10 bg-white p-5 md:p-6 rounded-2xl shadow-xl z-20 border border-slate-50 max-w-[180px] md:max-w-[200px]">
              <p className="text-3xl font-heading font-black text-primary">100%</p>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1 leading-tight">
                {t('impactCard')}
              </p>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="space-y-8 md:space-y-10">
            <div className="space-y-5 md:space-y-6">
              <span className="text-primary font-heading font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs flex items-center gap-3">
                 <span className="h-px w-6 md:w-8 bg-primary"></span>
                 {t('badge')}
              </span>
              
              {/* Dynamic H2: Hindi ke liye leading thodi loose rakhi hai */}
              <h2 className={`text-3xl md:text-5xl lg:text-6xl font-heading font-[900] text-slate-900 tracking-tighter uppercase
                ${isHindi ? 'leading-[1.3]' : 'leading-[1.1]'}`}>
                {t('titleLine1')} <br /> 
                <span className="text-primary italic font-serif lowercase">
                  {t('titleLine2')}
                </span>
              </h2>

              <div className="space-y-5 text-base md:text-lg text-slate-600 font-light leading-relaxed">
                <p>
                  <strong className="text-slate-900 font-bold">{t('descBold')}</strong> {t('desc1')}
                </p>
                <p>
                  {t('desc2')}
                </p>
              </div>
            </div>

            {/* Stats Grid - Mobile friendly */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 pt-4">
              {stats.map((stat, i) => (
                <div key={i} className="p-5 md:p-6 rounded-2xl bg-slate-50 border border-slate-100 group hover:bg-primary transition-all duration-300">
                  <div className="text-2xl text-primary group-hover:text-white mb-3 transition-colors">
                    {stat.icon}
                  </div>
                  <h4 className="text-xl md:text-2xl font-heading font-black text-slate-900 group-hover:text-white transition-colors tracking-tight">
                    {stat.value}
                  </h4>
                  <p className="text-[9px] md:text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-1 group-hover:text-white/80 transition-colors">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}