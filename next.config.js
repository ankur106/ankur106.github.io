/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
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
  experimental: {
    outputStandalone: true,
  },
  generateStaticParams: true,
}

module.exports = nextConfig
