/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["qpzsjmjzjfmluroetwtm.supabase.co"],
  },
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
