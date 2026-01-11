import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // basePath: '/iamglenn-experiment', // Uncomment if not using custom domain
};

export default nextConfig;
