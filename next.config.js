/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
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
    return config
  },
}

module.exports = nextConfig