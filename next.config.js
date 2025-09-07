/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    domains: ['i.ytimg.com'] // add YouTube thumbnails if needed
  }
};

module.exports = nextConfig;

