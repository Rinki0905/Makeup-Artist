import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
      {
        // Add this line for the iStockphoto images
        protocol: 'https',
        hostname: 'media.istockphoto.com',
      },
      { protocol: 'https', hostname: 'i.pinimg.com' },
    ],
  },
};

export default nextConfig;