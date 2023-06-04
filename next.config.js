/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['*']
  },
}

module.exports = nextConfig