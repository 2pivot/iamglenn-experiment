import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/iamglenn-experiment',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
