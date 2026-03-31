"use client";
import { Container } from "..";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaYoutube, 
  FaWhatsapp, 
  FaXTwitter,
  FaArrowRight, 
  FaLocationDot,
  FaEnvelope,
  FaPhone
} from "react-icons/fa6";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { SITE_CONFIG } from "@/constants";
import { menu } from "@/lib/data/Menu";

export default function Footer() {
  const t = useTranslations('Footer');
 const tn = useTranslations('Navigation');
  // Manual Links for better control
  const navLinks = menu || [];
const {contact, socials, reg} = SITE_CONFIG;
  return (
    <footer className="bg-slate-950 text-slate-400 py-24 font-sans border-t border-white/5 relative overflow-hidden">
      {/* Premium Decorative Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-[150px] rounded-full pointer-events-none opacity-50" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none opacity-30" />
      
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 relative z-10">
          
          {/* Section 1: Branding & Impact */}
          <aside className="space-y-8">
            <div className="space-y-6">
              <Link href="/" className="inline-block">
                <h2 className="text-2xl font-heading font-black tracking-tighter text-white uppercase">
                  DIGITAL <span className="text-primary italic">DUNIYAA</span>
                </h2>
                <span className="text-[9px] font-bold text-slate-600 tracking-[0.4em] uppercase block -mt-1">Foundation</span>
              </Link>
              <p className="text-sm font-light leading-relaxed text-slate-500 max-w-xs">
                {t('description')}
              </p>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
               <h6 className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{t('newsletter.title')}</h6>
               <div className="relative max-w-[280px] group">
                <input 
                  type="email" 
                  placeholder={t('newsletter.placeholder')} 
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-6 text-[11px] focus:outline-none focus:border-primary/50 focus:bg-white/[0.05] transition-all text-white placeholder:text-slate-700"
                />
                <button className="absolute right-2 top-2 h-10 w-10 bg-primary rounded-xl flex items-center justify-center text-white hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20">
                  <FaArrowRight size={14} />
                </button>
              </div>
            </div>
          </aside>

          {/* Section 2: Quick Navigation */}
          <nav className="space-y-8 lg:pl-10">
            <h6 className="font-heading font-bold text-white/30 uppercase tracking-[0.3em] text-[10px]">{t('quickLinks.title')}</h6>
            <ul className="flex flex-col gap-4 text-[13px] font-bold tracking-tight">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} title={tn(link.name)} className="hover:text-primary transition-all duration-300 flex items-center group uppercase tracking-widest text-[11px]">
                    <span className="h-1 w-1 bg-primary rounded-full mr-0 opacity-0 group-hover:mr-3 group-hover:opacity-100 transition-all duration-300"></span>
                    {tn(link.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Section 3: Contact Info */}
          <aside className="space-y-8">
            <h6 className="font-heading font-bold text-white/30 uppercase tracking-[0.3em] text-[10px]">{t('reachUs.title')}</h6>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm shrink-0">
                   <FaPhone size={14} /> 
                </div>
                <div className="border-l border-white/5 pl-4">
                  <a href={contact?.phone[0]?.link} className="text-[13px] text-slate-400 hover:text-primary transition-all block font-bold tracking-wider">{contact?.phone[0]?.no}</a>
                  <span className="text-[9px] text-slate-600 uppercase tracking-widest font-bold">{t('reachUs.hours')}</span>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm shrink-0">
                   <FaEnvelope size={14} /> 
                </div>
                <div className="border-l border-white/5 pl-4">
                  <a href="{contact?.email[0]?.link}" className="text-[13px] text-slate-400 hover:text-primary transition-all block font-bold">{contact?.email[0]?.emailid}</a>
                  <span className="text-[9px] text-slate-600 uppercase tracking-widest font-bold">{t('reachUs.inquiry')}</span>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm shrink-0">
                   <FaLocationDot size={16} /> 
                </div>
                <div className="border-l border-white/5 pl-4">
                  <p className="text-[12px] leading-relaxed text-slate-500 font-medium italic">
                   {contact?.address[0]?.full}
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* Section 4: Socials & NGO Cert */}
          <nav className="space-y-10 lg:pl-6">
            <div className="space-y-6">
              <h6 className="font-heading font-bold text-white/30 uppercase tracking-[0.3em] text-[10px]">{t('social.title')}</h6>
              <div className="flex flex-wrap gap-3">
                {socials.map((item, i) => (
                  <Link key={i} href={item.link} className={`h-11 w-11 flex items-center justify-center rounded-full bg-white/5 text-white transition-all duration-500 ${item.color} hover:shadow-[0_10px_20px_-5px_rgba(0,0,0,0.5)] hover:-translate-y-1.5`}>
                    <span className="text-lg">{item.icon}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-[2rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 backdrop-blur-md relative group overflow-hidden">
               <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 blur-2xl group-hover:bg-primary/20 transition-all" />
               <span className="text-[9px] font-black text-primary block uppercase tracking-[0.3em] mb-2">{t('certification.title')}</span>
               <span className="text-xs font-mono font-bold text-slate-200 tracking-wider">{reg}</span>
            </div>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em] text-center md:text-left">
            <p>{t('copyright', { year: new Date().getFullYear() })}</p>
            <span className="hidden md:block opacity-30">•</span>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-primary transition-colors">{t('privacy')}</Link>
              <Link href="/terms" className="hover:text-primary transition-colors">{t('terms')}</Link>
            </div>
          </div>
          
          <div className="flex items-center gap-3 py-2 px-6 bg-white/[0.02] border border-white/5 rounded-full">
            <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">{t('architect')}</span>
            <span className="text-[10px] font-black text-white hover:text-primary transition-all tracking-[0.2em] cursor-pointer">
                BETTER OKAY
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}