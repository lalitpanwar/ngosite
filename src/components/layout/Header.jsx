"use client";
import { useState } from "react";
import { Button, Container, TopBar } from "..";
import { FaHeart, FaBarsStaggered, FaXmark, FaPhone, FaEnvelope } from "react-icons/fa6";
import Link from "next/link";
import { menu } from "@/lib/data/Menu";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
const navLinks = menu || [];


  return (
    <>
    <TopBar />
    <header className="w-full bg-white border-b border-slate-100 sticky top-0 z-50 shadow-sm font-sans">
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* 1. Logo & Toggle Section */}
{/* 1. Logo Section */}
<div className="flex items-center gap-3 md:gap-4">
  {/* Mobile Menu Toggle */}
  <button 
    className="lg:hidden text-2xl text-slate-700 p-1 cursor-pointer"
    onClick={() => setIsOpen(true)}
aria-label="Open Menu"
>
    <FaBarsStaggered />
  </button>
  
  {/* Logo + Text Container */}
  <Link href="/" className="flex items-center gap-2 group">
    {/* Logo Icon */}
    <div className="relative h-12 w-12 md:h-18 md:w-18 shrink-0
                filter drop-shadow-[0_4px_6px_rgba(0,93,80,0.2)] 
                hover:drop-shadow-[0_8px_12px_rgba(0,93,80,0.3)] 
                transition-all duration-3000">
      <Image 
        src="/ddfoundation.jpg" // Aapki nayi file
        alt="Digital Duniyaa Logo"
        fill
        priority
        className="object-contain rounded-full border border-slate-50" 
      />
    </div>

    {/* Brand Text */}
<div className="flex flex-col justify-center">
  <h2 className="text-xs md:text-xl font-heading font-black tracking-tighter text-slate-900 uppercase leading-none drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]">
    DIGITAL <span className="text-primary italic">DUNIYAA</span>
  </h2>
  
  {/* Foundation with Hyphens - Balanced Center */}
  <div className="flex items-center justify-center gap-1 mt-1">
    <span className="h-[1px] w-2 bg-slate-300"></span> {/* Left Hyphen */}
    <span className="text-[7px] md:text-[9px] font-bold text-slate-500 tracking-[0.3em] uppercase block pl-[0.3em]">
      Foundation
    </span>
    <span className="h-[1px] w-2 bg-slate-300"></span> {/* Right Hyphen */}
  </div>
</div>
  </Link>
</div>


          {/* 2. Desktop Navigation (Sora font weight adjust kiya) */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-xs uppercase tracking-[0.15em] font-heading font-bold text-slate-700 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* 3. Action Button */}
          <div className="flex items-center">
            <Button 
              href="https://rzp.io/l/your_link" 
              text="DONATE" 
              isExternal 
              icon={<FaHeart className="text-xs" />} 
              type="accent" 
              classes="text-[10px] md:text-sm py-2 px-5 md:px-7 font-bold rounded-full tracking-widest"
            />
          </div>
        </div>
      </Container>

      {/* --- MOBILE DRAWER START --- */}
      
      {/* A. Dark Overlay (Backdrop) */}
      <div 
        className={`fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60] lg:hidden transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsOpen(false)}
      />

      {/* B. Drawer Body (Left Side Slide) */}
      <div className={`fixed top-0 left-0 h-full w-[280px] bg-white z-[70] lg:hidden transform transition-transform duration-500 ease-in-out shadow-2xl ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        
        <div className="flex flex-col h-full p-6">
          {/* Drawer Header */}
          <div className="flex items-center justify-between mb-10 border-b border-slate-50 pb-4">
            <span className="font-heading font-black text-lg text-primary tracking-tighter uppercase">
              Menu
            </span>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 text-slate-400 hover:text-primary transition-colors"
            >
              <FaXmark size={24} />
            </button>
          </div>

          {/* Nav Links (Sora Bold for Menu) */}
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-heading font-bold text-slate-800 hover:bg-slate-50 hover:text-primary p-3 rounded-xl transition-all flex items-center justify-between group"
              >
                {link.name}
                <span className="h-1.5 w-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Link>
            ))}
          </nav>

          {/* Drawer Footer (Quick Info) */}
          <div className="mt-auto space-y-4 pt-6 border-t border-slate-100">
             <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-2">Get in touch</div>
             <a href="tel:+9198XXX" className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                <FaPhone className="text-primary text-xs" /> +91 98XXX XXXXX
             </a>
             <a href="mailto:info@ngo.org" className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                <FaEnvelope className="text-primary text-xs" /> info@ngo.org
             </a>
             
             <div className="mt-4 p-4 bg-primary/5 border border-primary/10 rounded-2xl">
                <p className="text-[10px] text-primary font-bold uppercase tracking-tighter leading-none mb-1">Impact Made</p>
                <p className="text-xs text-slate-600 font-medium">15,000+ Lives touched</p>
             </div>
          </div>
        </div>
      </div>

      {/* --- MOBILE DRAWER END --- */}
    </header>
    </>
  );
}