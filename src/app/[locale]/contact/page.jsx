"use client";
import { Button, Container, PageHeader } from "@/components";
import { 
  FaPhone, 
  FaEnvelope, 
  FaLocationDot, 
  FaInstagram, 
  FaFacebookF, 
  FaTwitter, 
  FaYoutube, 
  FaWhatsapp
} from "react-icons/fa6";

export default function ContactPage() {
  const socials = [
    { icon: <FaInstagram />, link: "#", color: "hover:bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]" },
    { icon: <FaFacebookF />, link: "#", color: "hover:bg-[#1877F2]" },
    { icon: <FaTwitter />, link: "#", color: "hover:bg-[#1DA1F2]" },
    { icon: <FaYoutube />, link: "#", color: "hover:bg-[#CD201F]" },
    { icon: <FaWhatsapp />, link: "https://wa.me/919876543210", color: "hover:bg-[#25D366]" }
  ];

  return (
    <main className="bg-white font-sans">
      <PageHeader 
        title="Contact" 
        italicPart="Us" 
        path="Contact Us" 
        bgImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2000" 
      />

      <section className="py-24 relative overflow-hidden">
        {/* Decorative Background Text */}
        <div className="absolute top-20 right-0 text-[15rem] font-black text-slate-50/80 select-none leading-none -z-0 translate-x-1/3">
          HELLO
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Contact Strategy & Details */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">
                  // Connect With Us
                </span>
                <h2 className="text-5xl md:text-7xl font-heading font-black text-slate-900 tracking-tighter leading-[0.9] mb-8">
                  Have a <br /> <span className="text-primary italic font-serif">Question?</span>
                </h2>
                <p className="text-slate-500 font-light text-xl leading-relaxed max-w-md">
                  Every conversation is a step towards a brighter future. Reach out to us—we’d love to hear from you.
                </p>
              </div>

              {/* Contact Information Cards */}
              <div className="space-y-6">
                {[
                  { icon: <FaLocationDot />, label: "Varanasi Headquarters", value: "Ghat Road, Kashi, Varanasi, UP - 221001" },
                  { icon: <FaPhone />, label: "Direct Line", value: "+91 98765 43210" },
                  { icon: <FaEnvelope />, label: "Official Inquiry", value: "hello@digitalduniyaa.org" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-center p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-500 group">
                    <div className="h-14 w-14 rounded-2xl bg-white text-primary text-xl flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-black text-slate-400 uppercase text-[10px] tracking-widest mb-1">{item.label}</h4>
                      <p className="text-slate-900 text-base font-bold tracking-tight">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Ecosystem */}
              <div className="pt-10 border-t border-slate-100">
                <h4 className="text-slate-900 font-black uppercase text-[10px] tracking-[0.3em] mb-8">Join the Community</h4>
                <div className="flex flex-wrap gap-4">
                  {socials.map((item, idx) => (
                    <a 
                      key={idx}
                      href={item.link}
                      className={`h-14 w-14 rounded-full bg-slate-900 text-white flex items-center justify-center transition-all duration-500 shadow-lg hover:shadow-2xl hover:-translate-y-2 ${item.color}`}
                    >
                      <span className="text-xl">{item.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: High-Performance Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-10 md:p-16 rounded-[3.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] border border-slate-50 relative">
                
                {/* Visual Badge */}
                <div className="absolute top-10 right-10 hidden md:block">
                   <div className="w-20 h-20 rounded-full border border-slate-100 flex items-center justify-center rotate-12">
                      <span className="text-[10px] font-black text-slate-300 uppercase tracking-tighter text-center leading-none">Response <br /> in 24h</span>
                   </div>
                </div>

                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Your Full Name</label>
                      <input type="text" placeholder="John Doe" className="w-full px-8 py-5 bg-slate-50 rounded-[1.5rem] border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium text-slate-900" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Email Address</label>
                      <input type="email" placeholder="john@example.com" className="w-full px-8 py-5 bg-slate-50 rounded-[1.5rem] border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium text-slate-900" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Inquiry Category</label>
                    <select className="w-full px-8 py-5 bg-slate-50 rounded-[1.5rem] border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium text-slate-900 appearance-none">
                      <option>General Support</option>
                      <option>Partnerships & CSR</option>
                      <option>Volunteer Applications</option>
                      <option>Donation Inquiries</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Your Message</label>
                    <textarea rows="5" placeholder="Tell us how we can collaborate..." className="w-full px-8 py-5 bg-slate-50 rounded-[1.5rem] border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium text-slate-900 resize-none"></textarea>
                  </div>

                  <div className="pt-6">
                    <Button 
                      text="Send Message"
                      type="accent"
                      classes="w-full py-6 shadow-[0_20px_40px_-10px_rgba(255,107,1,0.3)] hover:shadow-none transition-all uppercase tracking-widest text-xs font-black" 
                    />
                  </div>
                </form>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* Modern Map Integration Section */}
      <section className="w-full px-0">
        <div className="h-[500px] grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden relative shadow-2xl">
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115348.1697355702!2d82.908706!3d25.317645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db760f55555%3A0x63f542010266d21e!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1710750000000!5m2!1sen!2sin" 
             width="100%" 
             height="100%" 
             style={{ border: 0 }} 
             allowFullScreen="" 
             loading="lazy"
           ></iframe>
        </div>
      </section>
    </main>
  );
}