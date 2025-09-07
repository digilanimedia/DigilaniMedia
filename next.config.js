/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "img.youtube.com", // for embedded YouTube thumbnails
      "youtube.com/@DigilaniMedia"   // replace with your domain if hosting images
    ]
  },
  experimental: {
    optimizeCss: true // Next.js CSS optimization
    eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig

