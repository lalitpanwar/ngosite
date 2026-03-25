"use client";
import { Container, Button } from ".."; 
import { FaHeart } from "react-icons/fa6";
import { useTranslations } from "next-intl";

export default function DonateCTA() {
  const t = useTranslations('DonateCTA');

  return (
    <section className="w-full bg-slate-900 py-12">
      <Container className="w-full">
        <div className="relative overflow-hidden px-6 md:px-10">
          
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-80 h-full bg-primary/10 blur-[100px] -translate-y-1/2 pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            
            {/* Left Content */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex h-16 w-16 shrink-0 rounded-2xl bg-white/5 border border-white/10 items-center justify-center shadow-inner">
                <FaHeart className="text-primary text-2xl animate-pulse" />
              </div>
              
              <div className="text-center md:text-left space-y-2">
                <h2 className="text-2xl md:text-4xl font-heading font-black text-white tracking-tighter leading-tight">
                  {t('headingMain')} <span className="text-primary italic">{t('headingItalic')}</span>
                </h2>
                <p className="text-slate-400 text-sm md:text-base font-light tracking-wide max-w-md leading-relaxed">
                  {t('description')}
                </p>
                {/* Trust Line (Added as per your previous requirement) */}
                <p className="text-green-500/80 text-[10px] font-bold uppercase tracking-widest italic">
                   {t('trustLine')}
                </p>
              </div>
            </div>

            {/* Right Action Area */}
            <div className="flex flex-col items-center md:items-end gap-4 w-full md:w-auto">
              <Button 
                text={t('ctaButton')} 
                href="/donate"
                type="accent"
                icon={
                  <div className="flex items-center justify-center h-full ml-2">
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>
                } 
                classes="w-full md:w-auto px-10 py-4 text-sm font-black uppercase tracking-[0.15em] shadow-[0_15px_30px_-10px_rgba(255,107,1,0.3)]" 
              />
              <div className="flex items-center gap-2 opacity-50">
                <span className="h-1 w-1 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-[10px] text-slate-300 font-bold uppercase tracking-[0.2em]">
                  {t('smallLine')}
                </span>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}