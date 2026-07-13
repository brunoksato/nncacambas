/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  compiler: {
    styledComponents: true,
  },
  swcMinify: true,
  reactStrictMode: true,
};

module.exports = nextConfig;
