import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Header, Footer, SmoothScroll, ScrollToTop } from "@/components";



const roboto = Roboto({
  subsets: ["latin", "devanagari"], // Hindi support ke liye zaroori
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});
export const metadata = {
  title: "Digital Duniyaa Foundation",
  description: "Varanasi ke har bache ko mile shiksha aur har pariwar ko mile poshan.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  alternates: {
    canonical: "https://www.digitalduniyaa.org",
  },
};

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return (
<html lang={locale} className={`${roboto.variable}`}>
      <head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      {/* Ab 'isHindi' ka logic body par lagane ki zaroorat nahi, 
          CSS variables se handle karenge */}
      <body className="font-sans antialiased bg-white text-slate-900">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <SmoothScroll>
            <Header />
            <main>{children}</main>
            <Footer />
            <ScrollToTop />
          </SmoothScroll>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}