import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**", // Unsplash ki sabhi images allow karne ke liye
      },
    ],
  },
};

export default nextConfig;