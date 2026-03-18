import Image from "next/image";
import { Container } from "..";
import { FaBullseye, FaHeartCircleCheck, FaHandHoldingHeart } from "react-icons/fa6";

export default function AboutSection() {
  const stats = [
    { label: "Children Educated", value: "500+", icon: <FaHandHoldingHeart /> },
    { label: "Meals Served", value: "5k+", icon: <FaHeartCircleCheck /> },
    { label: "Active Volunteers", value: "20+", icon: <FaBullseye /> },
  ];

  return (
    <section className="py-24 bg-white font-sans overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Creative Image Group */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500 w-full h-[500px]">
              <Image 
                src="/images/digital-duniyaa-children.jpg" 
                fill
                priority
                alt="Digital Duniyaa Foundation Varanasi" 
                className="w-full h-125 object-cover"
              />

             
            </div>
            {/* Background Decorative Box */}
            <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-3 -z-10 scale-105"></div>
            
            {/* Impact Floating Card */}
            <div className="absolute -bottom-10 -right-6 md:right-10 bg-white p-6 rounded-2xl shadow-xl z-20 border border-slate-50 max-w-50">
              <p className="text-3xl font-heading font-black text-primary">100%</p>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Direct Impact & <br /> Contribution Transparency</p>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <span className="text-primary font-heading font-bold uppercase tracking-[0.3em] text-xs flex items-center gap-3">
                 <span className="h-px w-8 bg-primary"></span>
                Our Legacy
              </span>
              <h2 className="text-4xl md:text-6xl font-heading font-black text-slate-900 leading-[1.1] tracking-tighter">
                A Vision That <br /> Started in <span className="text-primary italic font-serif">Varanasi.</span>
              </h2>
 <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed">
                <p>
                  <strong className="text-slate-900 font-bold">Digital Duniyaa Foundation</strong> is more than just an organization; it is a movement of hope. Founded in the heart of Varanasi, we have spent the last decade bridging the gap between privilege and poverty.
                </p>
                <p>
                  Our mission is simple yet profound: to ensure that no child’s potential is limited by their circumstances. From providing digital literacy to ensuring basic nutrition, we are dedicated to transforming lives at the grassroots level.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              {stats.map((stat, i) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 group hover:bg-primary transition-all duration-300">
                  <div className="text-2xl text-primary group-hover:text-white mb-3 transition-colors">
                    {stat.icon}
                  </div>
                  <h4 className="text-2xl font-heading font-black text-slate-900 group-hover:text-white transition-colors">
                    {stat.value}
                  </h4>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1 group-hover:text-white/80 transition-colors">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}