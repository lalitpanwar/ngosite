"use client";
import { Container, SectionHeader, Button } from ".."; 
import { useTranslations } from "next-intl";
import { 
  FaGraduationCap, 
  FaLaptopCode, 
  FaHandHoldingHeart, 
  FaPersonDress, 
  FaArrowRight 
} from "react-icons/fa6";

export default function Mission() {
  const t = useTranslations('Mission');

  const missionPoints = [

    { 
      key: "digital", 
      icon: <FaLaptopCode />,
      tag: "Digital",
      // Modern Teal
      color: "text-teal-500 group-hover:text-teal-600",
      bgColor: "group-hover:bg-teal-50"
    },
        { 
      key: "edu", 
      icon: <FaGraduationCap />,
      tag: "Education",
      // Sky Blue
      color: "text-blue-500 group-hover:text-blue-600",
      bgColor: "group-hover:bg-blue-50"
    },
    { 
      key: "women", 
      icon: <FaPersonDress />, 
      tag: "Empower",
      // Vibrant Pink
      color: "text-pink-500 group-hover:text-pink-600",
      bgColor: "group-hover:bg-pink-50"
    },
    { 
      key: "help", 
      icon: <FaHandHoldingHeart />,
      tag: "Support",
      // Nature Green
      color: "text-green-500 group-hover:text-green-600",
      bgColor: "group-hover:bg-green-50"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#fcfcfd] font-sans overflow-hidden">
      <Container>
        {/* Header Area */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <SectionHeader 
            badge={t('badge')} 
            title={t('title')} 
            italicPart={t('italicPart')} 
          />
         
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {missionPoints.map((item) => (
            <div 
              key={item.key} 
              className="group relative bg-white p-10 rounded-[2.5rem] border border-slate-100 text-center hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] transition-all duration-700 flex flex-col items-center"
            >
              {/* Icon Container with New Color Scheme */}
              <div className={`w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center text-4xl mb-8 transition-all duration-500 group-hover:shadow-lg group-hover:-translate-y-2 ${item.color} ${item.bgColor}`}>
                {item.icon}
              </div>
              
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
                {t(`points.${item.key}.title`)}
              </h3>
              
              <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light opacity-90">
                {t(`points.${item.key}.desc`)}
              </p>

              <div className="mt-8 pt-6 border-t border-slate-50 w-full">
                <span className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-500 ${item.color.split(' ')[0]} opacity-40 group-hover:opacity-100`}>
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}