import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin('./src/i18n/request.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  transpilePackages: ["react-icons"],

  experimental: {
    allowedDevOrigins: ["192.168.1.37", "192.168.1.37:3000", "localhost:3000"],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "**.pravatar.cc",
      },
    ],
  },
};

export default withNextIntl(nextConfig);