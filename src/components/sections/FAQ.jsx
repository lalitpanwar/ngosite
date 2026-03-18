"use client";
import { useState } from "react";
import { Container, SectionHeader } from "..";
import { FaPlus, FaMinus } from "react-icons/fa6";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is your primary area of operation in Varanasi?",
      answer:
        "Our focus is deeply rooted in the ghats, narrow lanes, and underprivileged rural outskirts of Kashi. We aim to ensure that every child in this ancient city has access to quality education and future-ready career opportunities.",
    },
    {
      question: "Can I contribute if I live outside of Varanasi?",
      answer:
        "Absolutely! Whether you are in another city or across the globe, you can join our 'Varanasi Education Movement' through online mentoring, remote volunteering, or financial contributions. Distance is never a barrier to making a difference.",
    },
    {
      question: "What kind of education do you provide to the children?",
      answer:
        "Beyond standard school curriculum, we provide specialized training in digital literacy, vocational skills (like basic coding and design), and Varanasi's cultural heritage. This holistic approach prepares them for the modern world while keeping them connected to their roots.",
    },
    {
      question: "How do you ensure transparency in donations?",
      answer:
        "We maintain a 100% transparent policy. Every month, we publish detailed impact reports showing the distribution of books, uniforms, and meals. Donors are always welcome to visit our centers in person to meet the children and see the impact firsthand.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50/50 font-sans overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Side: Header & Context */}
          <div className="lg:w-1/3">
            <SectionHeader
              badge="Common Inquiries"
              title="Frequently Asked"
              italicPart="QUESTIONS"
              className="text-left"
            />
            <p className="mt-6 text-slate-500 leading-relaxed max-w-sm">
              Transformation begins with curiosity. If you have any questions about our mission in Varanasi or how you can get involved, we are here to help.
            </p>
          </div>

          {/* Right Side: Modern Accordion */}
          <div className="lg:w-2/3 space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`group transition-all duration-500 rounded-2xl border ${
                  openIndex === i
                    ? "bg-white border-primary/20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)]"
                    : "bg-transparent border-slate-200 hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span
                    className={`text-base md:text-lg font-bold tracking-tight transition-colors duration-300 ${
                      openIndex === i ? "text-primary" : "text-slate-900"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`shrink-0 ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                      openIndex === i
                        ? "bg-primary text-white rotate-180 shadow-lg shadow-primary/30"
                        : "bg-white border border-slate-100 text-slate-400"
                    }`}
                  >
                    {openIndex === i ? (
                      <FaMinus size={12} />
                    ) : (
                      <FaPlus size={12} />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === i
                      ? "max-h-[300px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 text-slate-500 leading-relaxed text-sm md:text-base border-t border-slate-50 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}