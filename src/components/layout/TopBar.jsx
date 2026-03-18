"use client";
import { Container } from "@/components";
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
  const socials = [
    { icon: <FaInstagram />, link: "#" },
    { icon: <FaFacebookF />, link: "#" },
    { icon: <FaTwitter />, link: "#" },
    { icon: <FaYoutube />, link: "#" },
    { icon: <FaWhatsapp />, link: "https://wa.me/919876543210" },
  ];

  return (
    <div className="bg-slate-900 text-white/80 py-2 border-b border-white/5 hidden md:block">
      <Container>
        <div className="flex justify-between items-center h-6">
          
          {/* Left Side: Contact Info */}
          <div className="flex items-center gap-8">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-primary transition-colors text-[11px] font-medium tracking-wider">
              <FaPhone className="text-primary text-[10px]" />
              +91 98765 43210
            </a>
            <a href="mailto:info@digitalduniyaa.org" className="flex items-center gap-2 hover:text-primary transition-colors text-[11px] font-medium tracking-wider border-l border-white/10 pl-8">
              <FaEnvelope className="text-primary text-[10px]" />
              info@digitalduniyaa.org
            </a>
          </div>

          {/* Right Side: Social Media */}
          <div className="flex items-center gap-5">
            <span className="text-[10px] uppercase tracking-[0.2em] opacity-40 font-bold mr-2">Follow Us</span>
            {socials.map((item, idx) => (
              <a 
                key={idx} 
                href={item.link} 
                className="hover:text-primary transition-all duration-300 text-xs opacity-70 hover:opacity-100 hover:-translate-y-0.5"
              >
                {item.icon}
              </a>
            ))}
          </div>

        </div>
      </Container>
    </div>
  );
}