"use client";
import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Container, SectionHeader } from "..";
import Image from "next/image";
import Link from "next/link";

export default function ImageGallery() {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    fetch("/api/gallery")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  return (
    <section className="py-24 bg-[#fafafa] font-sans">
      <Container>
        <SectionHeader
          badge="Our Moments"
          title="Image"
          italicPart="Gallery"
        />

        {/* MODERN MASONRY GRID 
            'h-80' ko remove karke images ko unki natural height lene dein (aspect-video/square/auto)
        */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3 mt-16">
          {images.slice(0, 12).map((src, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className="relative break-inside-avoid overflow-hidden rounded-xl group cursor-pointer bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Container with Dynamic Aspect Ratio */}
              <div className={`relative overflow-hidden ${i % 3 === 0 ? 'aspect-4/5' : 'aspect-square'} mb-0`}>
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
                    grayscale-50
                    group-hover:grayscale-0
                    group-hover:scale-110
                  "
                />
                
                {/* Modern Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                   
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Implementation */}
        <Lightbox
          index={index}
          open={index >= 0}
          close={() => setIndex(-1)}
          slides={images.map((src) => ({ src }))}
        />

        {/* MODERN "VIEW ALL" BUTTON */}
        {images.length > 10 && (
          <div className="mt-20 text-center">
            <Link 
              href="/gallery" 
              className="inline-flex items-center gap-4 px-8 py-4 bg-white border border-slate-200 rounded-full text-[11px] font-black uppercase tracking-[0.3em] text-slate-600 hover:bg-primary hover:text-white hover:border-primary hover:shadow-[0_20px_40px_-10px_rgba(var(--primary-rgb),0.3)] transition-all duration-500 group"
            >
              Explore Full Gallery
              <span className="w-8 h-px bg-slate-300 group-hover:bg-white group-hover:w-12 transition-all duration-500"></span>
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}