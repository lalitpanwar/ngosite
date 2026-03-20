import { Roboto, Sora } from "next/font/google";
import "./globals.css";
import { Header, Footer, SmoothScroll, ScrollToTop } from "@/components";


const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["700", "800"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Digital Duniyaa Foundation",
  description: "Varanashi ke har bache ko mile shiksha aur har pariwar ko mile poshan.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5", // Accessibility for mobile
  alternates: {
    types: {
      'image/webp': '/hero.webp', // Hero image ko preload
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${roboto.variable}`}>
      <body className="font-sans antialiased">
        {/* SmoothScroll se wrap karein */}
        <SmoothScroll>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
          <ScrollToTop />
         </SmoothScroll>
      </body>
    </html>
  );
}