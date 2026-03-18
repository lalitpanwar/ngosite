import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  const imagesDirectory = path.join(process.cwd(), 'public/images');
  
  try {
    const fileNames = fs.readdirSync(imagesDirectory);
    
    // Sirf images filter karein (jpg, png, webp, etc.)
    const images = fileNames
      .filter(file => /\.(jpe?g|png|webp|gif|avif)$/i.test(file))
      .map(file => `/images/${file}`); // Path format set karein

    return NextResponse.json(images);
  } catch (error) {
    return NextResponse.json({ error: "Folder Not Found." }, { status: 500 });
  }
}