/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
  images: {
    domains: ["localhost", "dummyimage.com"],
    domains: ["localhost", "4000"],
    domains: ["localhost", "lh3.googleusercontent.com"],
    domains: ["localhost", "backend.faruksardar.com"],
  },
};

module.exports = nextConfig;
