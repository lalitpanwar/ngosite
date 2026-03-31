"use client";
import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Container, ImageGallery, PageHeader} from "@/components";
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
<ImageGallery isHomePage= {false}/>

    </main>
  );
}