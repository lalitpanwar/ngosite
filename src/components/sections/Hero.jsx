"use client";
import Button from "@/components/ui/Button";
import Image from "next/image";
import {
  FaArrowRight,
  FaHeart,
  FaLaptopCode,
  FaGraduationCap,
  FaVenus,
  FaHandHoldingHeart,
} from "react-icons/fa6";
import { useTranslations } from "next-intl";

export default function Hero({ bgImage = "/hero.jpg", showPillars = true }) {
  const t = useTranslations("Hero");

  const pillars = [
    {
      label: t("pillars.p1_label"),
      val: t("pillars.p1_val"),
      icon: <FaLaptopCode />,
    },
    {
      label: t("pillars.p2_label"),
      val: t("pillars.p2_val"),
      icon: <FaGraduationCap />,
    },
    {
      label: t("pillars.p3_label"),
      val: t("pillars.p3_val"),
      icon: <FaVenus />,
    },
    {
      label: t("pillars.p4_label"),
      val: t("pillars.p4_val"),
      icon: <FaHandHoldingHeart />,
    },
  ];

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white font-sans">
      {/* 1. Background Logic - High Quality Image with Multi-layer Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={bgImage}
          alt="Digital Duniyaa Foundation Varanasi"
          fill
          priority
          fetchPriority="high"
          quality={90}
          className="object-cover object-center scale-105"
        />
        {/* Dark Overlay for Text Pop */}
        <div className="absolute inset-0 bg-slate-950/85 z-10"></div>
        {/* Subtle Gradient for Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40 z-10"></div>
      </div>

      {/* 2. Content Section */}
      <div className="relative z-20 container mx-auto px-6 text-center pt-24 pb-44">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          {/* Subtle Badge */}
          <div className="mb-10 inline-block px-6 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
            <span className="text-white text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase flex items-center gap-3">
              <span className="h-1 w-1 rounded-full bg-primary shadow-[0_0_8px_#009999]"></span>
              {t("badge")}
            </span>
          </div>

          {/* Main Headline - Both 900 Weight for Impact */}
          <div className="space-y-2">
            {/* Single H1 - Optimized for Hindi Matras */}
            <h1 className="font-heading font-[900] tracking-tighter uppercase flex flex-col items-center">
              {/* Upper Part: Hunar Se / हुनर से */}
              {/* leading-[1.1] Hindi ko 'saans' lene ki jagah dega */}
              <span className="block text-6xl md:text-8xl lg:text-9xl text-white leading-[1.1] md:leading-[1]">
                {t("title")}
              </span>

              {/* Lower Part: Shikhar Tak / शिखर तक */}
              {/* -mt-1 ya -mt-2 se halka sa gap kam kiya hai, -mt-6 mat karna varna chipkega */}
              <span className="block text-primary text-5xl md:text-8xl lg:text-9xl italic leading-[1.1] md:leading-[1] -mt-1 md:-mt-2">
                {t("italicPart")}
              </span>
            </h1>
          </div>

          {/* Subtext - Simplified for Contrast */}
          <p className="mb-16 text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
            {t("description")}
          </p>

          {/* 4 Pillars Section - Cleaned up and Balanced */}
          {showPillars && (
            <div className="w-full max-w-5xl py-12 border-y border-white/5 mb-16">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6">
                {pillars.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center group transition-all duration-300"
                  >
                    {/* Balanced Icon */}
                    <div className="text-primary/80 text-2xl mb-4 group-hover:text-primary transition-colors">
                      {item.icon}
                    </div>
                    <div className="space-y-1.5">
                      {/* Reduced from 900 to 700 for better hierarchy */}
                      <p className="text-white font-medium text-sm md:text-sm uppercase ">
                        {item.val}
                      </p>
                      {/* Subtle Label */}
                      <p className="text-white/30 text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-medium">
                        {item.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* CTA Buttons - Responsive & Clean Style */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            {/* Primary Action Button (Join) */}
            <Button
              text={t("buttonJoin")}
              href="#join"
              type="accent"
              icon={
                <FaArrowRight className="text-sm md:text-base group-hover:translate-x-1 transition-transform duration-300" />
              }
              /* Responsive Classes: Mobile pe text-base/py-3, Desktop pe text-lg/py-4 */
              classes="bg-primary hover:bg-white hover:text-primary text-white px-8 md:px-10 py-3.5 md:py-4 text-base md:text-sm font-normal rounded-none transition-all shadow-lg w-full sm:w-auto uppercase flex items-center justify-center gap-3"
            />

            {/* Secondary Action Button (Donate) */}
            <Button
              text={t("buttonDonate")}
              href="#donate"
              type="outline"
              icon={<FaHeart />}
              /* Responsive Classes: Padding aur font size ko balance kiya hai */
              classes="border-2 border-white/20 text-white hover:bg-white/10 px-8 md:px-10 py-3.5 md:py-4 text-base md:text-sm rounded-none transition-all w-full sm:w-auto font-normal uppercase flex items-center justify-center gap-3 backdrop-blur-sm"
            />
          </div>
        </div>
      </div>

      {/* 3. Bottom Curve SVG - Integrated Seamlessly */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-30">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[50px] md:h-[100px] fill-white"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V46.35C50.75,65.62,103.11,81.44,158.12,85.11,213.12,88.78,268.09,74.73,321.39,56.44Z"
            transform="rotate(180 600 60)"
          ></path>
        </svg>
      </div>
    </section>
  );
}
