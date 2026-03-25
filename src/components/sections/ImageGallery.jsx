"use client";
import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Container, SectionHeader } from "..";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function ImageGallery({ isHomePage = true }) {
  const t = useTranslations('Gallery');
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [index, setIndex] = useState(-1);

  // Filters List
  const filters = ["All", "Team", "Training",];

  useEffect(() => {
    fetch("/api/gallery")
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        // Home page par limit lagane ke liye
        setFilteredImages(isHomePage ? data.slice(0, 6) : data);
      });
  }, [isHomePage]);

  // Filter Logic
  const handleFilter = (cat) => {
    setActiveFilter(cat);
    let filtered = cat === "All" ? images : images.filter(img => img.category === cat);
    console.log("filtered", filtered);
    // Agar home page par ho toh hamesha slice karke dikhao
    setFilteredImages(isHomePage ? filtered.slice(0, 6) : filtered);
  };

  return (
    <section className={`py-24 font-sans ${isHomePage ? 'bg-[#fafafa]' : 'bg-white'}`}>
      <Container>
        <SectionHeader
          badge={t('badge')}
          title={t('title')}
          italicPart={t('italicPart')}
        />

        {/* 🎛️ MODERN PILL FILTERS */}
        <div className="flex flex-wrap justify-center gap-3 mt-12 mb-10">
          {filters.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilter(cat)}
              className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
                activeFilter === cat 
                ? "bg-primary border-primary text-white shadow-lg shadow-primary/20" 
                : "bg-white border-slate-200 text-slate-500 hover:border-primary/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 🖼️ MASONRY GRID */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filteredImages.map((img, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className="relative break-inside-avoid overflow-hidden rounded-2xl group cursor-pointer bg-white border border-slate-100 hover:shadow-2xl transition-all duration-500"
            >
              <div className={`relative overflow-hidden ${i % 3 === 0 ? 'aspect-4/5' : 'aspect-square'}`}>
                <Image
                  src={img.src || img} // Handles both object and string
                  alt="Gallery"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-all duration-700 group-hover:scale-110 grayscale-20 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white text-[10px] font-bold uppercase tracking-[0.2em]">
                    {img.category || "Moment"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 📽️ LIGHTBOX */}
        <Lightbox
          index={index}
          open={index >= 0}
          close={() => setIndex(-1)}
          slides={filteredImages.map((img) => ({ src: img.src || img }))}
        />

        {/* 🔗 VIEW ALL BUTTON (Only for Home Page) */}
        {isHomePage && images.length > 6 && (
          <div className="mt-16 text-center">
            <Link 
              href="/gallery" 
              className="inline-flex items-center gap-4 px-10 py-4 bg-slate-900 text-white rounded-full text-[11px] font-black uppercase tracking-[0.3em] hover:bg-primary transition-all duration-500 group"
            >
              {t('viewAll')}
              <span className="w-8 h-px bg-white/30 group-hover:w-12 group-hover:bg-white transition-all"></span>
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}