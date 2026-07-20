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
  async redirects() {
    return [
      {
        source: '/avaliar',
        destination: 'https://g.page/r/Caw77fgukVTOEBM/review',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
