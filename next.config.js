/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // images: {
  //   domain: [],
  // },
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
