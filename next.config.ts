import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'american-textiles.sfo3.cdn.digitaloceanspaces.com',
      },
    ],
  },
}