"use client";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

export default function Hero({
  badge = "Digital Duniyaa Foundation",
  title = "Small Acts,",
  italicPart = "Big Smiles.",
  description = "Ensuring every child in Varanasi receives an education and every family finds nourishment. Your smallest contribution can transform an entire future.",
  bgImage = "/hero.jpg",
  showPillars = true,
  buttonText = "BECOME A PART OF JOURNEY",
  buttonHref = "#join",
  height = "min-h-[100vh]",
}) {
  const pillars = [
    { label: "Daily Food", val: "Annapurna" },
    { label: "Free Books", val: "Vidya" },
    { label: "Skills", val: "Pathshala" },
    { label: "Support", val: "Muskan" },
  ];

  return (
    <section
      className={`relative ${height} w-full flex items-center justify-center overflow-hidden bg-white font-sans`}
    >
      {/* 1. Background Logic - Optimized for High Resolution */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={bgImage}
          alt="Hero Background"
          fill
          priority // Isse image turant load hoti hai bina blur hue
          quality={100}
          sizes="100vw"
          className="object-cover object-center transition-transform duration-1000"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-slate-950/80 z-10"></div>
        <div className="absolute inset-0 backdrop-blur-[2px] z-10"></div>
      </div>

      {/* 2. Content Section */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-20 pb-40 md:pb-52">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          {/* Glass Badge */}
          <div className="mb-8 inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
            <span className="text-white text-[10px] md:text-xs font-heading font-bold tracking-[0.25em] uppercase flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
              {badge}
            </span>
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white leading-[1.1] tracking-tighter">
            {title} <br />
            <span className="text-primary text-7xl md:text-9xl  italic">
              {italicPart}
            </span>
          </h1>

          {/* Subtext */}
          <p className="mb-14 text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-sans font-light leading-relaxed">
            {description}
          </p>

          {/* 4 Pillars Section (Conditional) */}
          {showPillars && (
            <div className="w-full max-w-4xl py-10 border-t border-white/10 mb-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {pillars.map((item, i) => (
                  <div key={i} className="space-y-1">
                    <p className="text-primary font-heading font-black text-xl md:text-2xl uppercase tracking-tighter">
                      {item.val}
                    </p>
                    <p className="text-white/40 text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Master Action Button */}
          <Button
            text={buttonText}
            href={buttonHref}
            type="accent"
            icon={
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            }
            classes="bg-accent px-12 py-5 text-lg shadow-[0_20px_50px_-10px_rgba(255,107,1,0.4)]"
          />
        </div>
      </div>

{/* 3. Bottom Curve SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-30">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[80px] fill-white"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V46.35C50.75,65.62,103.11,81.44,158.12,85.11,213.12,88.78,268.09,74.73,321.39,56.44Z" transform="rotate(180 600 60)"></path>
        </svg>
      </div>
    </section>
  );
}
