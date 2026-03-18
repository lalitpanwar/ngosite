"use client";
import { Container, SectionHeader } from "..";

export default function Initiatives() {
  const projects = [
    { 
      title: "Project Annapurna", 
      desc: "Dedicated to providing nutritious meals to underprivileged children across Varanasi, ensuring no child goes to bed hungry.", 
      img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2000" 
    },
    { 
      title: "Project Vidya", 
      desc: "Our mission to put a school bag on every shoulder and a book in every hand, fostering a culture of literacy and learning.", 
      img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2000" 
    },
    { 
      title: "Project Pathshala", 
      desc: "Conducting regular community classes focused on basic education and essential life skills to empower the next generation.", 
      img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000" 
    },
    { 
      title: "Project Shuddha", 
      desc: "Ensuring health and hygiene by providing clean and safe drinking water to children and their families in local communities.", 
      img: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2000" 
    },
    { 
      title: "Project Muskan", 
      desc: "Spreading joy by collecting and distributing high-quality clothing to children, bringing smiles to every face we reach.", 
      img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2000" 
    },
    { 
      title: "Project Pankh", 
      desc: "Our upcoming initiative to teach digital literacy and creative skills, enabling youth to achieve true self-dependency.", 
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000" 
    },
  ];

  return (
    <section className="py-24 bg-slate-50 font-sans overflow-hidden">
      <Container>
        
        <SectionHeader 
          badge="Our Initiatives" 
          title="Our Primary" 
          italicPart="Focus" 
        />

        {/* 3x2 Portrait Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 perspective-[2000px] mt-16">
          {projects.map((item, i) => (
            <div 
              key={i} 
              className="group relative h-130 w-full rounded-2xl overflow-hidden transition-all duration-700 transform-3d hover:transform-[rotateY(15deg)_rotateX(5deg)] shadow-2xl bg-slate-900 cursor-pointer"
            >
              {/* 1. Background Portrait Image */}
              <img 
                src={item.img} 
                className="absolute inset-0 w-full h-full object-cover opacity-70 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-50"
                alt={item.title}
              />

              {/* 2. Glass Overlay Logic */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent z-10" />
              <div className="absolute inset-0 backdrop-blur-xs group-hover:backdrop-blur-none transition-all duration-700 z-20" />

              {/* 3. Floating Content Area */}
              <div className="absolute inset-0 z-30 p-10 flex flex-col justify-end transform-[translateZ(80px)]">
                <div className="space-y-5">
                  {/* Decorative Project Number */}
                  <span className="text-primary font-heading font-black text-4xl opacity-40 italic">0{i + 1}</span>
                  
                  <h3 className="text-3xl font-heading font-black text-white leading-none tracking-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-white/70 text-sm font-sans font-light leading-relaxed line-clamp-4 border-l-2 border-primary/40 pl-4">
                    {item.desc}
                  </p>
                  
                  {/* Interactive Footer */}
                  <div className="pt-6 flex items-center justify-between border-t border-white/10">
                     <span className="text-[10px] text-white/50 font-black uppercase tracking-[0.2em]">Digital Duniyaa</span>
                     <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20 group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                        <span className="text-white text-lg transition-transform group-hover:translate-x-1">→</span>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}