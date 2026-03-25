"use client";
import { Container, SectionHeader } from "..";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing"; // next-intl ka Link component
import { FaArrowRight } from "react-icons/fa";

export default function Initiatives() {
  const t = useTranslations("Programs");
  const locale = useLocale();
  const isHindi = locale === "hi";
  const programKeys = [
    "digital_shiksha",
    "shiksha_sahayata",
    "mahila_sashaktikaran",
    "seva_sahyog",
  ];
  const programImages = {
    digital_shiksha: "/images/programs/digital-shiksha.jpg",
    shiksha_sahayata: "/images/programs/shiksha-sahayata.jpg",
    mahila_sashaktikaran: "/images/programs/mahila-sashaktikaran.jpg",
    seva_sahyog: "/images/programs/IMG-20241204-WA0025.jpg",
  };
  return (
    <section
      className="py-16 md:py-24 bg-[#fcfcfd] font-sans overflow-hidden"
      lang={locale}
    >
      <Container>
        <SectionHeader
          badge={t("badge")}
          title={t("title")}
          italicPart={t("italicPart")}
        />

        <div className="mt-16 md:mt-24 space-y-16 md:space-y-40">
          {programKeys.map((key, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={key}
                className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-24 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}
              >
                {/* 1. Image Block */}
                <div className="relative w-full lg:w-1/2 group px-2 md:px-0">
                  <div
                    className={`absolute -inset-4 md:-inset-6 bg-slate-100 rounded-[2rem] md:rounded-[3rem] -rotate-2 md:-rotate-3 transition-transform duration-700 group-hover:rotate-0`}
                  />
                  <div className="relative h-[300px] sm:h-[400px] md:h-[550px] w-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-xl">
                    <Image
                      src={
                        programImages[key] || "/images/IMG-20241204-WA0027.jpg"
                      }
                      alt={t(`items.${key}.title`)}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>

                  <div
                    className={`absolute -bottom-4 ${isEven ? "-right-4" : "-left-4"} bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-xl hidden sm:block border border-slate-50`}
                  >
                    <p className="text-primary font-heading font-black text-xl md:text-3xl leading-none">
                      2026
                    </p>
                    <p className="text-[8px] md:text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">
                      {t("active")}
                    </p>
                  </div>
                </div>

                {/* 2. Content Block */}
                <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 px-2 md:px-6 lg:px-0 text-center lg:text-left">
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-center justify-center lg:justify-start gap-3">
                      <span className="w-8 md:w-10 h-[2px] bg-primary/30" />
                      <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-primary">
                        {t("coreInitiative")}
                      </span>
                    </div>
                    <h3
                      className={`font-heading font-extrabold text-slate-900 tracking-tight capitalize ${isHindi ? "text-2xl md:text-4xl lg:text-5xl" : "text-3xl md:text-5xl lg:text-6xl"}`}
                    >
                      {t(`items.${key}.title`).toLowerCase()}
                    </h3>
                  </div>

                  <p className="text-slate-500 font-sans font-normal leading-relaxed mx-auto lg:mx-0 max-w-xl text-sm md:text-lg opacity-80">
                    {t(`items.${key}.desc`)}
                  </p>

                  <div className="grid grid-cols-2 gap-4 md:gap-8 pt-2 max-w-sm mx-auto lg:mx-0">
                    <div className="space-y-1 border-l-2 border-slate-100 pl-4 text-left">
                      <p className="text-xl md:text-2xl font-black text-slate-900 leading-none">
                        100%
                      </p>
                      <p className="text-[8px] md:text-[10px] uppercase font-bold text-slate-400 tracking-widest">
                        {t("transparency")}
                      </p>
                    </div>
                    <div className="space-y-1 border-l-2 border-slate-100 pl-4 text-left">
                      <p className="text-xl md:text-2xl font-black text-slate-900 leading-none">
                        {t("location")}
                      </p>
                      <p className="text-[8px] md:text-[10px] uppercase font-bold text-slate-400 tracking-widest">
                        {t("localImpact")}
                      </p>
                    </div>
                  </div>

                  {/* FIX: Button is now a Link component */}
                  <div className="pt-4 md:pt-6 flex justify-center lg:justify-start">
                    <Link
                      href={`/programs/${key}`}
                      className="group/btn relative flex items-center gap-3 md:gap-4 py-2"
                    >
                      <span className="relative z-10 text-xs md:text-sm font-black uppercase tracking-widest text-slate-900 group-hover/btn:text-primary transition-colors duration-300">
                        {t("viewProject")}
                      </span>
                      <div className="h-7 w-7 md:h-9 md:w-9 rounded-full bg-slate-100 flex items-center justify-center group-hover/btn:bg-primary/10 transition-all duration-300">
                        <FaArrowRight className="text-primary text-[10px] md:text-xs transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
