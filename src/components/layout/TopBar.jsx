"use client";
import { Container } from "@/components";
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing'; 
import { 
  FaPhone, 
  FaEnvelope, 
  FaInstagram, 
  FaFacebookF, 
  FaTwitter, 
  FaYoutube, 
  FaWhatsapp 
} from "react-icons/fa6";

export default function TopBar() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleSwitch = (nextLocale) => {
    router.replace(pathname, { locale: nextLocale });
  };

  const socials = [
    { icon: <FaInstagram />, link: "https://instagram.com/digitalduniyaa" },
    { icon: <FaFacebookF />, link: "https://facebook.com/digitalduniyaa" },
    { icon: <FaTwitter />, link: "#" },
    { icon: <FaYoutube />, link: "https://youtube.com/@richdadcoder" },
    { icon: <FaWhatsapp />, link: "https://wa.me/919876543210" },
  ];

  return (
    <div className="bg-slate-900 text-white/80 py-2 border-b border-white/5">
      <Container>
        <div className="flex justify-between items-center h-8">
          
          {/* Left Side: Contact Info (Icons only on mobile/tablet) */}
          <div className="flex items-center gap-4 md:gap-8">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-primary transition-colors text-[11px] font-medium tracking-wider">
              <FaPhone className="text-primary text-sm md:text-[10px]" />
              <span className="hidden md:inline">+91 98765 43210</span>
            </a>
            <a href="mailto:info@digitalduniyaa.org" className="flex items-center gap-2 hover:text-primary transition-colors text-[11px] font-medium tracking-wider border-l border-white/10 pl-4 md:pl-8">
              <FaEnvelope className="text-primary text-sm md:text-[10px]" />
              <span className="hidden md:inline">info@digitalduniyaa.org</span>
            </a>
          </div>

          {/* Right Side: Language Switcher & Social Media */}
          <div className="flex items-center gap-3 md:gap-6">
            
            {/* 🌐 Language Switcher */}
            <div className="flex items-center gap-1 bg-white/5 p-1 rounded-md border border-white/10">
              <button 
                onClick={() => handleSwitch('en')}
                className={`text-[9px] min-w-[28px] md:min-w-[30px] px-1.5 md:px-2 py-0.5 rounded font-black transition-all ${
                  locale === 'en' ? 'bg-primary text-slate-900 shadow-sm' : 'hover:text-white'
                }`}
              >
                EN
              </button>
              <button 
                onClick={() => handleSwitch('hi')}
                className={`text-[9px] min-w-[28px] md:min-w-[30px] px-1.5 md:px-2 py-0.5 rounded font-black transition-all ${
                  locale === 'hi' ? 'bg-primary text-slate-900 shadow-sm' : 'hover:text-white'
                }`}
              >
                हि
              </button>
            </div>

            {/* Socials - Labels hidden on smaller screens */}
            <div className="flex items-center gap-3 md:gap-5 border-l border-white/10 pl-3 md:pl-6">
              <span className="text-[10px] uppercase tracking-[0.2em] opacity-40 font-bold hidden lg:block">Follow</span>
              {socials.map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary transition-all duration-300 text-sm md:text-xs opacity-70 hover:opacity-100 hover:-translate-y-0.5"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
}