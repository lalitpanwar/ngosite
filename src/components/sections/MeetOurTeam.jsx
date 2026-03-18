"use client";
import Image from "next/image";
import { Container, SectionHeader, Button } from "..";
import { FaUserGroup, FaQuoteLeft } from "react-icons/fa6";

export default function MeetOurTeam() {
  const trusteeData = {
    name: "Shri Amrish Chandra",
    role: "अध्यक्ष एवं मुख्य सलाहकार",
    // vision: "My dream is to see a book in the hands of every child in Varanasi. Our goal is not just to provide literacy, but to empower them to become better human beings and leaders of tomorrow.",
     vision: "मेरा सपना है कि काशी के हर बच्चे के हाथ में एक किताब हो। हमारा लक्ष्य केवल साक्षरता प्रदान करना नहीं, बल्कि उन्हें एक बेहतर इंसान और कल का सशक्त नेतृत्व बनाने के लिए तैयार करना है।",
    img: "/images/team/amrish-chandra.jpg"
  };

  const directorsData = [
    { name: "Sir. Devendra Maurya", role: "संस्थापक एवं मुख्य कार्यकारी अधिकारी", img: "/images/team/devendra-maurya-director.jpg" },
    { name: "Ms. Mahima Maurya", role: "सह-संस्थापक एवं निदेशक", img: "/images/team/mahima-maurya-director.jpg" },
  ];

  return (
    <section className="py-24 bg-white font-sans overflow-hidden">
      <Container>
        <SectionHeader 
          badge="Our Team" 
          title="The Faces of" 
          italicPart="Positive Change" 
        />

        <div className="max-w-4xl mx-auto mt-20 space-y-20">
          
          {/* 1. MAIN TRUSTEE (Founding Visionary) */}
          <div className="flex flex-col items-center text-center space-y-10 p-12 bg-slate-50 rounded-[2.5rem] border border-slate-100 relative shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] group hover:bg-white transition-all duration-700">
            <FaQuoteLeft className="absolute top-12 left-12 text-7xl text-slate-200/50 group-hover:text-primary/10 transition-colors duration-500" />
            
            {/* Trustee Photo */}
            <div className="relative h-56 w-56 md:h-64 md:w-64 rounded-full overflow-hidden border-[12px] border-white shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:border-primary/5">
              <Image 
                src={trusteeData.img} 
                alt={trusteeData.name} 
                fill 
                className="object-cover" 
              />
            </div>

            <div className="space-y-6 relative z-10">
              <div className="space-y-2">
                <span className="inline-block px-5 py-2 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest">
                  {trusteeData.role}
                </span>
                <h3 className="text-2xl md:text-3xl font-heading font-black text-slate-900 tracking-tighter">
                  {trusteeData.name}
                </h3>
              </div>
              <p className="text-slate-500 text-sm md:text-lg font-light italic leading-relaxed max-w-2xl mx-auto opacity-80">
                "{trusteeData.vision}"
              </p>
            </div>
          </div>

          {/* 2. DIRECTORS (Leadership) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {directorsData.map((member, i) => (
              <div key={i} className="flex flex-col items-center text-center p-10 bg-white border border-slate-100 rounded-[2rem] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
                
                <div className="relative h-36 w-36 rounded-full overflow-hidden mb-8 border-4 border-slate-50 shadow-lg group-hover:border-primary/20 group-hover:rotate-3 transition-all">
                  <Image 
                    src={member.img} 
                    alt={member.name} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-2 block">{member.role}</span>
                    <h4 className="text-lg md:text-xl font-black text-slate-900">{member.name}</h4>
                </div>
              </div>
            ))}
          </div>

          {/* 3. VOLUNTEERS (The Backbone) */}
          <div className="pt-20 border-t border-slate-100 flex flex-col items-center space-y-10">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-heading font-black text-slate-900 tracking-tight">
                 Meet Our Dedicated Volunteers
              </h3>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.4em]">
                The Backbone of Our Foundation
              </p>
            </div>

            <div className="flex -space-x-4 md:-space-x-6"> 
              {[1, 2, 3, 4, 5, 6, 7].map((v) => (
                <div key={v} className="relative h-16 w-16 md:h-20 md:w-20 rounded-full border-4 border-white overflow-hidden shadow-lg hover:-translate-y-4 hover:z-50 transition-all duration-300 ">
                  <Image 
                    src={`https://i.pravatar.cc/150?img=${v+20}`} 
                    alt="Volunteer" 
                    fill 
                    className="object-cover grayscale hover:grayscale-0 transition-all" 
                  />
                </div>
              ))}
              <div className="h-16 w-16 md:h-20 md:w-20 rounded-full border-4 border-white bg-slate-900 flex items-center justify-center text-white text-xs font-black shadow-lg">
                +15
              </div>
            </div>

            <Button 
              text="Join Our Mission"
              type="accent"
              classes="px-12 py-5 shadow-xl hover:shadow-2xl transition-shadow uppercase tracking-widest text-xs font-black" 
              href="/volunteer"
            />
          </div>

        </div>
      </Container>
    </section>
  );
}