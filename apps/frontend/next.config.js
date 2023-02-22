const removeImports = require('next-remove-imports');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    fontLoaders: [{ loader: '@next/font/google', options: { subsets: ['latin'] } }],
  },
  transpilePackages: ['@yumemi-exam/resas-api'],
};

module.exports = removeImports()(nextConfig);
