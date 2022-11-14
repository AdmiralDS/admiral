/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // basePath: '/admiral',
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
