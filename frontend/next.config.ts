import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost', 'best-basket-9d1bb39b90.media.strapiapp.com'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001', // your backend port
        pathname: '/uploads/**', // adjust based on your actual path
      },
    ],
  },
}

export default nextConfig
