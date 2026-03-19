"use client";
import { Button, Container, PageHeader, SectionHeader } from "@/components";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa6";

export default function TeamPage() {
  const trustee = {
    name: "Shri Amrish Chandra Maurya",
    role: "मुख्य सलाहकार",
    img: "/images/team/amrish-chandra.jpg",
    bio: "मेरा सपना है कि काशी के हर बच्चे के हाथ में एक किताब हो। हमारा लक्ष्य केवल साक्षरता प्रदान करना नहीं, बल्कि उन्हें एक बेहतर इंसान और कल का सशक्त नेतृत्व बनाने के लिए तैयार करना है।"
  };

  const directors = [
        {
      name: "Mahima Maurya",
      role: "संस्थापक एवं मुख्य कार्यकारी अधिकारी",
      img: "/images/team/mahima-maurya-director.jpg",
      bio: "A visionary leader focused on bringing innovative educational initiatives to life."
    },
    {
      name: "Sir Devendra Maurya",
      role: "सह-संस्थापक एवं निदेशक",
      img: "/images/team/devendra-maurya-director.jpg",
      bio: "Expert in project management and driving sustainable social impact at the grassroots level."
    },

  ];

  const members = [
    "Rahul Sharma", "Priya Singh", "Amit Verma", "Sneha Gupta", 
    "Vikas Yadav", "Anjali Maurya", "Karan Singh"
  ];

  return (
    <main className="bg-white font-sans">
      <PageHeader 
        title="Our" 
        italicPart="Passionate Team" 
        path="Our Team" 
        bgImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000"
      />

      {/* 1. Founding Trustee Section */}
      <section className="py-24">
        <Container>
          <SectionHeader badge="The Visionary" title="The" italicPart="Chief Advisor" />
          
          <div className="max-w-4xl mx-auto mt-20 p-10 md:p-14 bg-slate-900 rounded-[3.5rem] text-white flex flex-col md:flex-row items-center gap-12 shadow-2xl relative overflow-hidden group">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 blur-[100px] pointer-events-none transition-opacity duration-700 group-hover:opacity-40" />
              
              {/* Circular Trustee Photo */}
              <div className="w-64 h-64 relative shrink-0 z-10 transition-all duration-700 group-hover:scale-105">
                <div className="absolute inset-0 border-2 border-primary/50 rounded-full translate-x-4 translate-y-4" />
                <div className="absolute inset-0 rounded-full border-[10px] border-white/5 bg-slate-800 p-2 shadow-inner">
                   <Image src={trustee.img} alt={trustee.name} fill className="object-cover rounded-full border-4 border-white" priority={true} />
                </div>
              </div>

              <div className="space-y-5 text-center md:text-left z-10 relative">
                 <span className="inline-block px-5 py-2 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.25em]">// Leadership</span>
                 <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight">{trustee.name}</h3>
                 <p className="text-slate-400 font-light italic text-lg leading-relaxed max-w-lg mx-auto md:mx-0 opacity-90">"{trustee.bio}"</p>
                 <div className="flex justify-center md:justify-start gap-4 pt-4">
                   <a href="#" className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-all shadow-lg"><FaLinkedinIn className="text-white" /></a>
                 </div>
              </div>
          </div>
        </Container>
      </section>

      {/* 2. Strategic Directors Section */}
      <section className="py-24 bg-slate-50 rounded-[4rem] mx-4 border border-slate-100">
        <Container>
          <SectionHeader badge="Leadership" title="Executive" italicPart="Directors" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
            {directors.map((dir, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-8 items-center p-10 bg-white rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500 group">
                {/* Circular Director Photo */}
                <div className="w-36 h-36 relative shrink-0 border-[8px] border-slate-100/50 bg-white p-1 rounded-full group-hover:border-primary/20 transition-all duration-500 shadow-md">
                  <Image src={dir.img} alt={dir.name} fill className="object-cover rounded-full border-4 border-white" />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="text-2xl font-black text-slate-900 leading-tight">{dir.name}</h4>
                  <p className="text-primary font-bold text-[10px] uppercase tracking-widest mb-3 mt-1 block">{dir.role}</p>
                  <p className="text-slate-500 text-sm font-light leading-relaxed">{dir.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Volunteer Members Section */}
      <section className="py-24">
        <Container>
          <SectionHeader badge="Support Force" title="Dedicated" italicPart="Members" />
          
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 mt-16">
            {members.map((name, i) => (
              <div key={i} className="p-4 text-center group">
                <div className="h-16 w-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500 font-black text-slate-400 group-hover:scale-110">
                  {name.charAt(0)}
                </div>
                <h5 className="font-bold text-slate-800 text-xs md:text-sm leading-tight">{name}</h5>
                <p className="text-slate-400 text-[9px] uppercase tracking-tighter mt-1 group-hover:text-primary transition-colors">Volunteer</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      {/* 4. Join Our Mission (Final CTA) */}
      <section className="pb-32 pt-10">
        <Container>
          <div className="relative overflow-hidden bg-primary rounded-[3rem] p-10 md:p-20 text-center shadow-[0_30px_60px_-15px_rgba(255,107,1,0.3)]">
            
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 blur-[80px] -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-slate-900/10 blur-[80px] translate-x-1/2 translate-y-1/2" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <span className="inline-block px-6 py-2 rounded-full bg-white/20 text-white text-[10px] font-black uppercase tracking-[0.3em]">
                Become a Volunteer
              </span>
              
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tighter">
                Ready to make a <span className="italic opacity-80">Real Difference?</span>
              </h2>
              
              <p className="text-white/80 font-light text-lg leading-relaxed">
                Join our community of change-makers in Varanasi. Whether you have 2 hours a week or 20, your skills can change a child's life.
              </p>

              <div className="pt-6">
                <Button 
                  text="Apply to Join Our Team" 
                  href="/volunteer"
                  classes="bg-slate-900 text-white border-none px-12 py-5 text-sm font-black uppercase tracking-[0.2em] hover:bg-white hover:text-slate-900 transition-all duration-500 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}