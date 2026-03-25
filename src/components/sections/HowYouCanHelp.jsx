"use client";
import { Container, SectionHeader } from "..";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { FaHeartCircleCheck, FaHandsHoldingChild, FaBullhorn } from "react-icons/fa6";

export default function HowYouCanHelp() {
  const t = useTranslations('HowYouCanHelp');

  const configs = [
    { 
      key: "donate", 
      icon: <FaHeartCircleCheck />, 
      link: "/donate" 
    },
    { 
      key: "volunteer", 
      icon: <FaHandsHoldingChild />, 
      link: "/volunteer" 
    },
    { 
      key: "spread", 
      icon: <FaBullhorn />, 
      link: "#socials" 
    }
  ];

  return (
    <>
    <section className="py-16 md:py-24 bg-white font-sans relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-80 h-80 bg-slate-50 rounded-full blur-3xl -z-10" />
      
      <Container>
        <SectionHeader 
          badge={t('badge')} 
          title={t('title')} 
          italicPart={t('italicPart')} 
        />


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
          {configs.map((item, i) => (
            <Link 
              href={item.link}
              key={item.key} 
              className="group relative p-8 md:p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col justify-between overflow-hidden h-[320px] md:h-[350px]"
            >
              {/* Professional Unified Icon */}
              <div className="relative z-10 w-14 h-14 md:w-16 md:h-16 rounded-full bg-accent text-white flex items-center justify-center text-2xl md:text-3xl shadow-lg transform group-hover:-translate-y-1 group-hover:rotate-3 transition-all duration-500">
                {item.icon}
              </div>

              {/* Content Area */}
              <div className="mt-6 space-y-2 md:space-y-3 relative z-10">
                <h3 className="text-xl md:text-2xl font-heading font-black text-slate-900 tracking-tight">
                  {t(`ways.${item.key}.title`)}
                </h3>
                <p className="text-slate-500 font-light text-sm leading-relaxed pr-2">
                  {t(`ways.${item.key}.desc`)}
                </p>
              </div>

              {/* Action Bar */}
              <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between relative z-10">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 group-hover:text-primary transition-colors">
                  {t(`ways.${item.key}.btn`)}
                </span>
                <div className="w-8 h-8 rounded-full bg-slate-50 text-slate-900 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                   <span className="text-sm">→</span>
                </div>
              </div>

              {/* Watermark Number */}
              <span className="absolute bottom-2 right-2 text-8xl md:text-9xl font-heading font-black text-slate-900/[0.03] group-hover:text-accent/[0.06] transition-all duration-700 pointer-events-none -z-0 select-none">
                0{i + 1}
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
    </>
  );
}