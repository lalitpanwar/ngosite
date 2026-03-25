import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  const imagesDirectory = path.join(process.cwd(), 'public/images');
  
  try {
    
    const categories = fs.readdirSync(imagesDirectory);
    let allImages = [];

    categories.forEach(category => {
      const categoryPath = path.join(imagesDirectory, category);
      
      // Check karein ki ye folder hai ya file
      if (fs.statSync(categoryPath).isDirectory()) {
        const files = fs.readdirSync(categoryPath);
        
        const categoryImages = files
          .filter(file => /\.(jpe?g|png|webp|gif|avif)$/i.test(file))
          .map(file => ({
            src: `/images/${category}/${file}`,
            category: category.charAt(0).toUpperCase() + category.slice(1) // 'education' -> 'Education'
          }));
          
        allImages = [...allImages, ...categoryImages];
      }
    });

    return NextResponse.json(allImages);
  } catch (error) {
    console.error("Gallery API Error:", error);
    return NextResponse.json({ error: "Could not load images." }, { status: 500 });
  }
}