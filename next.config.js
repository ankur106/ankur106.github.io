/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  basePath: '',
  assetPrefix: '',
  images: {
    unoptimized: true,
    domains: ['localhost'],
  },
  webpack(config) {
    config.resolve.fallback = {
      fs: false,
    };
    return config;
  },
  trailingSlash: true,
}

module.exports = nextConfig
