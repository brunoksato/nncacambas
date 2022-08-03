/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: [""],
    loader: "custom",
    disableStaticImages: true,
  },
  compiler: {
    styledComponents: true,
    swcMinify: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
