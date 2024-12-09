// next.config.mjs

import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['img.icons8.com'],
  },
  // Add other Next.js configurations here if any
};

export default withPWA({
  dest: 'public',
})(nextConfig);
