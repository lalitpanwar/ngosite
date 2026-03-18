"use client";
import { Button, Container, PageHeader, SectionHeader } from "@/components";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-white font-sans">
      {/* 1. Page Header */}
      <PageHeader 
        title="Who We" 
        italicPart="Are" 
        path="About Us" 
      />

      {/* 2. Hero Team Image Section */}
      <section className="pt-20 pb-12 relative overflow-hidden bg-white">
        {/* Background Large Text Decoration */}
        <div className="absolute top-0 right-0 text-[12rem] font-black text-slate-50/80 select-none leading-none -z-0 translate-x-1/4">
          STORY
        </div>

        <Container className="relative z-10">
          <div className="flex flex-col gap-16">
            
            {/* Main Team Photo - Horizontal Wide Aspect */}
            <div className="relative group w-full">
              <div className="aspect-video md:aspect-[21/9] relative rounded-[3rem] overflow-hidden shadow-2xl z-10 border-8 border-white">
                <Image 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000" // Replace with your Team Photo
                  alt="Digital Duniyaa Team in Varanasi" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  priority
                />
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-10 left-10 z-20 hidden md:block">
                  <p className="text-primary text-sm font-black uppercase tracking-[0.4em] mb-2">Since 2014</p>
                  <h4 className="text-white text-xl font-black tracking-tight leading-tight">
                    Empowering the next generation <br /> in the heart of Varanasi.
                  </h4>
                </div>
              </div>

 
            </div>

            {/* Content: Genesis & Introduction */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              <div className="lg:col-span-5">
                 <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">
                    // About Us
                  </span>
                  <h2 className="text-4xl md:text-6xl  text-slate-900 leading-[0.9] tracking-tighter">
                    DIGIAL DUNIYAA <br />
                    <span className="text-primary italic ">FOUNDATION</span>
                  </h2>
              </div>

              <div className="lg:col-span-7 space-y-8">
                 <p className="text-slate-600 text-lg md:text-2xl font-light leading-relaxed italic border-l-4 border-primary/20 pl-8">
                    "Digital Duniyaa Foundation started in the historic lanes of Varanasi, driven by a mission to bridge the gap between ancient heritage and modern digital literacy."
                 </p>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                    <p className="text-slate-500 text-base leading-relaxed font-light">
                      Building on our success in Nandgram, we have now focused our efforts on Varanasi. Through Project Vidya and Project Annapurna, we are committed to providing a brighter future for underprivileged children.
                    </p>
                    <div className="grid grid-cols-1 gap-4">
                       {["100% Transparency", "Youth-Led Initiatives", "Direct Grassroot Impact"].map((p, i) => (
                          <div key={i} className="flex items-center gap-3 text-slate-900 font-bold text-xs uppercase tracking-wider">
                             <span className="h-2 w-2 bg-primary rounded-full"></span> {p}
                          </div>
                       ))}
                    </div>
                 </div>
              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* 3. Mission & Vision Pillars */}
      <section className="py-24 bg-slate-50 rounded-[4rem] mx-4 mb-24 border border-slate-100 shadow-inner">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission Box */}
            <div className="p-12 bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 border-t-8 border-primary space-y-6">
              <h4 className="text-3xl font-heading font-black text-slate-900 tracking-tight">Our Mission</h4>
              <p className="text-slate-500 font-light text-lg leading-relaxed">
                To empower every underprivileged child in Varanasi with quality education, modern digital skills, and nutritional security, enabling them to lead a life of dignity and opportunity.
              </p>
            </div>

            {/* Vision Box */}
            <div className="p-12 bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 border-t-8 border-accent space-y-6">
              <h4 className="text-3xl font-heading font-black text-slate-900 tracking-tight">Our Vision</h4>
              <p className="text-slate-500 font-light text-lg leading-relaxed">
                To foster an inclusive society where poverty never limits potential. We envision a future where every child enters the digital age with confidence and equality.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Core Initiatives (Projects) */}
      <section className="py-10 bg-white">
        <Container>
          <SectionHeader 
            badge="What We Do"
            title="Our Strategic"
            italicPart="Initiatives"
            description="Focused projects designed to solve real-world challenges in Varanasi's most vulnerable communities."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
            {[
        { 
          title: "Project Vidya", 
          point: "Bridging the digital divide by providing computer literacy and foundational academic support to the youth of Kashi." 
        },
        { 
          title: "Project Annapurna", 
          point: "Fighting hunger by delivering essential nutritional kits and mid-day meals to families in extreme hardship." 
        },
        { 
          title: "Project Pathshala", 
          point: "Bringing education to the streets through mobile libraries and open-air classrooms at the Varanasi Ghats." 
        },
        { 
          title: "Project Shuddha", 
          point: "Promoting health and hygiene by providing access to clean drinking water and sanitation awareness in rural clusters." 
        },
        { 
          title: "Project Muskan", 
          point: "A dedicated initiative for child healthcare and mental well-being, ensuring every child grows up with a healthy smile." 
        },
        { 
          title: "Project Pankh", 
          point: "Empowering young adults with vocational skills and job-oriented technical training to give wings to their careers." 
        }
      ].map((item, i) => (
              <div key={i} className="group flex items-start gap-6 p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-primary/30 hover:shadow-2xl transition-all duration-500">
                <div className="h-12 w-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-black shrink-0 group-hover:bg-primary transition-colors">
                  0{i + 1}
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-xl mb-2">{item.title}</h4>
                  <p className="text-slate-500 text-base leading-relaxed font-light">{item.point}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Team Call to Action */}
      <section className="py-32 text-center bg-white">
        <Container>
          <div className="max-w-3xl mx-auto space-y-10">
            <h3 className="text-4xl md:text-7xl font-heading font-black text-slate-900 tracking-tighter leading-none">
              Let’s Write <br /> <span className="text-primary italic font-serif">History Together</span>
            </h3>
            <p className="text-slate-500 text-lg md:text-xl font-light max-w-xl mx-auto">
              We are always on the lookout for dedicated volunteers and partners who share our passion for Varanasi.
            </p>
            <div className="pt-6">
              <Button 
                text="Join Our Movement"
                type="accent"
                classes="px-16 py-6 shadow-[0_20px_50px_rgba(255,107,1,0.3)] hover:shadow-none transition-all uppercase tracking-widest text-xs font-black" 
                href="/volunteer"
              />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}