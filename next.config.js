/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true // TODO: Remove this when all errors are fixed
  },
  reactStrictMode: false
}

module.exports = nextConfig
