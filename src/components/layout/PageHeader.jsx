import { Container } from "..";
import Link from "next/link";
import Image from "next/image";

export default function PageHeader({ title, italicPart, path }) {
  // path example: { name: "About Us", link: "/about" }
  return (
    <section className="relative h-[20vh] md:h-[30vh] min-h-[250px] flex items-center justify-center overflow-hidden bg-slate-900">
      
      {/* 1. Background Image */}
      <Image 
        src="https://images.unsplash.com/photo-1561359313-0639aad49ca6?q=80&w=2000" // Default Varanasi Image
        alt="Varanasi"
        fill
        className="object-cover"
        priority
      />

      {/* 2. Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* 3. Content Area */}
      <Container className="relative z-20 text-center">
        {/* Title */}
        <h1 className="text-xl md:text-4xl font-heading font-black text-white mb-4 ">
          {title} <span className="text-primary italic">{italicPart}</span>
        </h1>

        {/* Breadcrumb */}
        <nav className="flex items-center justify-center gap-2 text-white/70 text-sm font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-primary">{path}</span>
        </nav>
      </Container>
    </section>
  );
}