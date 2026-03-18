"use client";
import { Container, SectionHeader, Button } from "..";
import {
  FaGraduationCap,
  FaBowlFood,
  FaHandHoldingHeart,
  FaMicrochip,
} from "react-icons/fa6";

export default function OurMission() {
  const steps = [
    {
      title: "Education",
      subtitle: "The Light of Knowledge",
      desc: "Connecting every child in Varanasi with quality schooling and digital literacy.",
      icon: <FaGraduationCap />,
      color: "text-blue-600",
      border: "border-blue-100",
      shadow: "shadow-blue-500/5",
    },
    {
      title: "Nutrition",
      subtitle: "Nutritional Security",
      desc: "Ensuring daily healthy meals through Project Annapurna for those in need.",
      icon: <FaBowlFood />,
      color: "text-rose-600",
      border: "border-rose-100",
      shadow: "shadow-rose-500/5",
    },
    {
      title: "Skills",
      subtitle: "New Identity",
      desc: "Providing computer classes and vocational training for self-dependency.",
      icon: <FaMicrochip />,
      color: "text-amber-600",
      border: "border-amber-100",
      shadow: "shadow-amber-500/5",
    },
    {
      title: "Support",
      subtitle: "Empowered Society",
      desc: "Delivering hygiene kits and basic medical assistance to every family.",
      icon: <FaHandHoldingHeart />,
      color: "text-emerald-600",
      border: "border-emerald-100",
      shadow: "shadow-emerald-500/5",
    },
  ];

  return (
    <section className="py-24 bg-white font-sans overflow-hidden">
      <Container>
        <SectionHeader
          badge="Our Mission"
          title="In Search of a"
          italicPart="Better Tomorrow"
        />

        <div className="relative mt-20">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((item, i) => (
              <div
                key={i}
                className="group flex flex-col items-center text-center"
              >
                <div className="relative mb-8">
                  <div
                    className={`h-24 w-24 rounded-[2.5rem] bg-white border-2 ${item.border} ${item.color} flex items-center justify-center text-4xl shadow-2xl ${item.shadow} transition-all duration-500 group-hover:-translate-y-3 group-hover:rotate-[10deg] relative z-10`}
                  >
                    {item.icon}
                  </div>

                  <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-slate-900 text-white text-[10px] font-black flex items-center justify-center border-4 border-white z-20">
                    0{i + 1}
                  </div>
                </div>

                <div className="space-y-3 px-4">
                  <span
                    className={`text-[10px] font-black uppercase tracking-[0.2em] ${item.color}`}
                  >
                    {item.subtitle}
                  </span>
                  <h3 className="text-xl font-heading font-black text-slate-900 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 font-light text-sm leading-relaxed line-clamp-3 group-hover:text-slate-700 transition-colors">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 h-1 w-12 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className={`h-full w-0 group-hover:w-full transition-all duration-500 ${item.color.replace("text-", "bg-")}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <Button text="Become a Change Maker" classes="px-12 py-5" />
        </div>
      </Container>
    </section>
  );
}