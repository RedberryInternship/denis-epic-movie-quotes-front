/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**/**',
      },
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: '*.redberryinternship.ge',
        port: '',
        pathname: '**',
      },
    ],
  },
  i18n,
  reactStrictMode: true,
};

module.exports = nextConfig;
