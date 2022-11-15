/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/admiral',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
