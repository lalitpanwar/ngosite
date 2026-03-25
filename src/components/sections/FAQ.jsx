"use client";
import { useState } from "react";
import { Container, SectionHeader } from "..";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useTranslations } from "next-intl";

export default function FAQ() {
  const t = useTranslations('FAQ');
  const [openIndex, setOpenIndex] = useState(0);

  // FAQ keys for dynamic rendering
  const faqKeys = ['area', 'outside', 'education', 'transparency'];

  return (
    <section className="py-24 bg-slate-50/50 font-sans overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Side: Header & Context */}
          <div className="lg:w-1/3">
            <SectionHeader
              badge={t('badge')}
              title={t('title')}
              italicPart={t('italicPart')}
              className="text-left"
            />
            <p className="mt-6 text-slate-500 leading-relaxed max-w-sm">
              {t('description')}
            </p>
          </div>

          {/* Right Side: Modern Accordion */}
          <div className="lg:w-2/3 space-y-4">
            {faqKeys.map((key, i) => (
              <div
                key={key}
                className={`group transition-all duration-500 rounded-2xl border ${
                  openIndex === i
                    ? "bg-white border-primary/20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)]"
                    : "bg-transparent border-slate-200 hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span
                    className={`text-base md:text-lg font-bold tracking-tight transition-colors duration-300 ${
                      openIndex === i ? "text-primary" : "text-slate-900"
                    }`}
                  >
                    {t(`questions.${key}.q`)}
                  </span>
                  <div
                    className={`shrink-0 ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                      openIndex === i
                        ? "bg-primary text-white rotate-180 shadow-lg shadow-primary/30"
                        : "bg-white border border-slate-100 text-slate-400"
                    }`}
                  >
                    {openIndex === i ? (
                      <FaMinus size={12} />
                    ) : (
                      <FaPlus size={12} />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === i
                      ? "max-h-[400px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 text-slate-500 leading-relaxed text-sm md:text-base border-t border-slate-50 pt-4">
                    {t(`questions.${key}.a`)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}