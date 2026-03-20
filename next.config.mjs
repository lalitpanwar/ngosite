/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  transpilePackages: ["react-icons"],

  experimental: {
    allowedDevOrigins: ["192.168.1.37", "192.168.1.37:3000", "localhost:3000"],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920], 
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    //Minimum cache TTL (Isse images browser mein zyada der save rahgi)
    minimumCacheTTL: 60,
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

export default nextConfig;
