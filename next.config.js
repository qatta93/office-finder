/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  concurrentFeatures: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
