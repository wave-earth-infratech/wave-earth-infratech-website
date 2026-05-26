const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  async rewrites() {
    return [
      { source: '/admin', destination: '/admin/index.html' },
      { source: '/admin/', destination: '/admin/index.html' },
    ]
  },
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizeCss: false,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
      }
    }
    config.resolve.alias = {
      ...config.resolve.alias,
      '@data': path.resolve(__dirname, 'data'),
    }
    return config
  },
}

module.exports = nextConfig