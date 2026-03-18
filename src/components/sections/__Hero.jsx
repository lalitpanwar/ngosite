import Button from "@/components/ui/Button"; 
import { FaHeart, FaArrowRight } from "react-icons/fa6";

export default function Hero() {
  return (
    <div className="relative min-h-[95vh] w-full flex items-center justify-center overflow-hidden bg-white font-sans">
      
      {/* 1. Background Logic with Curve Compatibility and Added Glass Blur */}
      <div className="absolute inset-0 z-0">
        <div 
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070')", 
          }}
        >
          {/* Main Dark Overlay */}
          <div className="absolute inset-0 bg-slate-900/75"></div>
          
          {/* Glass Blur Overlay - Yahan hamne halka blur add kiya hai */}
          <div className="absolute inset-0 backdrop-blur-[2px]"></div>
        

          {/* Smooth Fade Transition */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
        </div>
      </div>

      {/* 2. Content Section */}
      <div className="relative z-10 container mx-auto px-6 text-center pb-20 md:pb-32">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          
          {/* Glass Badge */}
          <div className="mb-8 inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
            <span className="text-white text-xs font-medium tracking-[0.2em] uppercase flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              Digital Duniyaa Foundation
            </span>
          </div>
          
          {/* Heading - SORA Bold */}
          <h1 className="mb-6 text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white leading-[1.1] tracking-tighter">
            Chhoti si Madad, <br /> 
            <span className="text-primary italic">Badi Muskan.</span>
          </h1>
          
          {/* Subtext - ROBOTO Light */}
          <p className="mb-12 text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-sans font-light leading-relaxed">
            Nandgram ke har bache ko mile shiksha aur har pariwar ko mile poshan. 
            Aapki ek choti si bhet kisi ka poora bhavishya badal sakti hai.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <Button 
              text="DONATE NOW" 
              type="donate"
              href="#" 
              icon={<FaHeart />}
              classes="px-10 py-4 text-lg shadow-2xl"
            />
            <Button 
              text="OUR PROJECTS" 
              type="outline" 
              href="#" 
              icon={<FaArrowRight />}
              classes="px-10 py-4 border-white/40 text-white font-light"
            />
          </div>
        </div>
      </div>

      {/* 3. The DaisyUI Style Curve (SVG) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[120px] fill-white"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V46.35C50.75,65.62,103.11,81.44,158.12,85.11,213.12,88.78,268.09,74.73,321.39,56.44Z" transform="rotate(180 600 60)"></path>
        </svg>
      </div>

    </div>
  );
}