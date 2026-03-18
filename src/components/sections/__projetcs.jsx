import { Container } from "..";

export default function Initiatives() {
  const projects = [
    { title: "Project Annapurna", desc: "Zarooratmand logon aur bacchon tak poshtik aahar pahunchana.", img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2000" },
    { title: "Project Vidya", desc: "Har bacche ke kandhe par school bag aur haath mein kitaab ho.", img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2000" },
    { title: "Project Pathshala", desc: "Bacchon ko basic education aur life skills sikhane ke liye classes.", img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000" },
    { title: "Project Shuddha", desc: "Parivaar ko saaf peene ka paani aur hygiene kits provide karna.", img: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2000" },
    { title: "Project Muskan", desc: "Purane aur naye kapde collect karke bacchon tak pahunchana.", img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2000" },
    { title: "Project Pankh", desc: "(Upcoming) Bacchon ko basic computer aur creative skills sikhana.", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000" },
  ];

  return (
    // 1. Light Gray Background added here
    <section className="py-24 bg-slate-50 font-sans">
      <Container>
        
        {/* 2. Professional Header with Small Text Badge */}
        <div className="text-center mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
             <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"></span>
             <span className="text-[10px] md:text-xs font-heading font-bold text-primary uppercase tracking-[0.25em]">
               Our Core Mission
             </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-heading font-black text-slate-900 tracking-tighter">
            Hamari <span className="text-primary italic">Mukhya Pehel</span>
          </h2>
          
          <div className="w-20 h-1.5 bg-primary/20 mx-auto rounded-full overflow-hidden">
            <div className="w-1/2 h-full bg-primary rounded-full"></div>
          </div>
        </div>

        {/* 3. The Wide Grid (3D Cards) */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 [perspective:1000px]">
          {projects.map((item, i) => (
            <div 
              key={i} 
              className="group relative h-[240px] md:h-[260px] w-full rounded-[2.5rem] overflow-hidden transition-all duration-700 [transform-style:preserve-3d] hover:[transform:rotateX(8deg)_rotateY(-4deg)] shadow-lg hover:shadow-2xl cursor-pointer bg-white"
            >
              {/* Background Image Layer */}
              <img 
                src={item.img} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                alt={item.title}
              />

              {/* Black Glassy Overlay */}
              <div className="absolute inset-0 bg-slate-950/70 z-10 group-hover:bg-slate-950/60 transition-colors duration-500" />

              {/* Subtle Backdrop Blur */}
              <div className="absolute inset-0 backdrop-blur-[1.5px] group-hover:backdrop-blur-none transition-all duration-700 z-20" />

              {/* Floating Content (3D Depth) */}
              <div className="absolute inset-0 z-30 p-8 md:p-10 flex flex-col justify-end [transform:translateZ(60px)]">
                <div className="max-w-[90%]">
                  <h3 className="text-2xl md:text-3xl font-heading font-black text-white uppercase tracking-tighter leading-none mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-sm md:text-base font-sans font-light leading-snug line-clamp-2 italic">
                    {item.desc}
                  </p>
                  
                  {/* Modern Action Bar */}
                  <div className="mt-4 flex items-center gap-4">
                     <div className="h-[2px] w-0 bg-primary group-hover:w-16 transition-all duration-500 rounded-full" />
                     <span className="text-[10px] text-primary font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                        Know More
                     </span>
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