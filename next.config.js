/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  swcMinify: true,
};

module.exports = nextConfig;
