"use client";
import { Container, SectionHeader } from "..";
import { FaHeartPulse, FaHandsHoldingChild, FaBullhorn } from "react-icons/fa6";

export default function HowYouCanHelp() {
  const ways = [
    {
      title: "Make a Donation",
      desc: "Your contribution directly funds nutritious meals and educational supplies for children across Varanasi.",
      icon: <FaHeartPulse />,
      bgColor: "bg-accent",
      iconColor: "text-white",
      btnText: "Donate Now",
      link: "/donate"
    },
    {
      title: "Become a Volunteer",
      desc: "Join our team of educators and mentors. Just 2 hours a week can help shape a child's entire future.",
      icon: <FaHandsHoldingChild />,
      bgColor: "bg-accent",
      iconColor: "text-white",
      btnText: "Join Movement",
      link: "/volunteer"
    },
    {
      title: "Spread the Word",
      desc: "Follow us on social media and share our stories. Amplifying our voice helps us reach more donors.",
      icon: <FaBullhorn />,
      bgColor: "bg-accent",
      iconColor: "text-white",
      btnText: "Follow Us",
      link: "#socials"
    }
  ];

  return (
    <section className="py-24 bg-white font-sans relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-slate-50 rounded-full blur-3xl -z-10" />
      
      <Container>
        <SectionHeader 
          badge="Join The Movement" 
          title="How You Can" 
          italicPart="Make a Difference" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          {ways.map((item, i) => (
            <div 
              key={i} 
              className="group relative p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 flex flex-col justify-between overflow-hidden h-[320px]"
            >
              {/* Professional Minimalist Icon */}
              <div className={`w-16 h-16 rounded-2xl ${item.bgColor} ${item.iconColor} flex items-center justify-center text-2xl shadow-xl transform group-hover:-translate-y-2 group-hover:rotate-6 transition-all duration-500`}>
                {item.icon}
              </div>

              {/* Content Area */}
              <div className="mt-8 space-y-3 relative z-10">
                <h3 className="text-2xl font-heading font-black text-slate-900 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-slate-500 font-light text-sm leading-relaxed pr-4">
                  {item.desc}
                </p>
              </div>

              {/* Action Bar */}
              <div className="mt-8 pt-5 border-t border-slate-50 flex items-center justify-between relative z-10">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 group-hover:text-primary transition-colors">
                  {item.btnText}
                </span>
                <div className="w-8 h-8 rounded-full bg-slate-50 text-slate-900 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                   <span className="text-sm">→</span>
                </div>
              </div>

{/* Watermark Number - Optimized */}
<span className="absolute bottom-4 right-4 text-9xl font-heading font-black text-slate-500/5 group-hover:text-accent/10 transition-all duration-700 pointer-events-none -z-0 select-none">
  0{i + 1}
</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}