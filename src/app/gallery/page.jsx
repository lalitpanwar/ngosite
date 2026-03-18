"use client";
import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Container, PageHeader, SectionHeader } from "@/components";
import Image from "next/image";

export default function FullGalleryPage() {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(-1);


  useEffect(() => {
    fetch("/api/gallery")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);



  return (
    <main className="bg-white font-sans min-h-screen">
      {/* Page Header - Professional & Simple */}
      <PageHeader 
        title="Image" 
        italicPart="Gallery" 
        path="Gallery" 
        bgImage="/images/vns-ghat-dark.jpg"  
      />

      <section className="py-24 bg-[#fafafa]">
        <Container>


          {/* 3. MASONRY GRID (Using your exact styles) */}
          <div className="columns-2 sm:columns-3 lg:columns-6 gap-2 space-y-2">
            {images.map((src, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className="relative break-inside-avoid overflow-hidden rounded-2xl group cursor-pointer bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                {/* Dynamic Aspect Ratio (Matching your Home logic) */}
                <div className={`relative overflow-hidden ${i % 3 === 0 ? 'aspect-[4/5]' : 'aspect-square'}`}>
                  <Image
                    src={src}
                    alt={`Gallery image ${i}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="
                      object-cover 
                      transition-all 
                      duration-1000 
                      ease-[cubic-bezier(0.23, 1, 0.32, 1)]
                      grayscale-[30%]
                      group-hover:grayscale-0
                      group-hover:scale-110
                    "
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                     <p className="text-white text-[10px] font-black uppercase tracking-widest italic">Varanasi Initiative</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 4. Lightbox Implementation */}
          <Lightbox
            index={index}
            open={index >= 0}
            close={() => setIndex(-1)}
            slides={images.map((src) => ({ src }))}
          />

          {images.length === 0 && (
            <div className="py-20 text-center text-slate-400 italic font-light">
              Loading Gallery...
            </div>
          )}
        </Container>
      </section>
    </main>
  );
}