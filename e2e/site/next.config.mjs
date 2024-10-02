/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["isomorphic-next"],
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;
